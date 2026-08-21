import {config} from './config.js'
import {dispatchWorkflow, isWorkflowRunning} from './github.js'

export interface QueueState {
  pendingReasons: string[]
  scheduledAt: number | null
  firstRequestAt: number | null
  lastDispatchAt: number | null
  lastError: string | null
  dispatching: boolean
}

let timer: NodeJS.Timeout | null = null
let scheduledAt: number | null = null
let firstRequestAt: number | null = null
let lastDispatchAt: number | null = null
let lastError: string | null = null
let dispatching = false

const pendingReasons = new Set<string>()

const log = (message: string, extra: Record<string, unknown> = {}): void => {
  console.log(JSON.stringify({at: new Date().toISOString(), message, ...extra}))
}

const schedule = (delayMs: number): void => {
  if (timer) {
    clearTimeout(timer)
  }

  scheduledAt = Date.now() + delayMs
  timer = setTimeout(() => {
    void flush()
  }, delayMs)
  timer.unref()
}

const flush = async (): Promise<void> => {
  timer = null
  scheduledAt = null

  if (dispatching || pendingReasons.size === 0) {
    return
  }

  dispatching = true

  try {
    if (config.deploy.skipWhileRunning && (await isWorkflowRunning())) {
      log('deploy postponed, workflow still running', {
        recheckInMs: config.deploy.recheckMs
      })
      schedule(config.deploy.recheckMs)

      return
    }

    const reasons = [...pendingReasons]

    await dispatchWorkflow()

    pendingReasons.clear()
    firstRequestAt = null
    lastDispatchAt = Date.now()
    lastError = null

    log('deploy dispatched', {
      workflow: config.github.workflow,
      ref: config.github.ref,
      reasons
    })
  } catch (error) {
    lastError = error instanceof Error ? error.message : String(error)

    log('deploy dispatch failed, retrying', {
      error: lastError,
      retryInMs: config.deploy.recheckMs
    })
    schedule(config.deploy.recheckMs)
  } finally {
    dispatching = false
  }
}

/**
 * Registers a deploy request. Requests coalesce: the timer restarts on every
 * new request until `debounceMs` of silence, capped by `maxWaitMs` measured
 * from the first request of the batch.
 */
export const requestDeploy = (reason: string): QueueState => {
  pendingReasons.add(reason)

  if (firstRequestAt === null) {
    firstRequestAt = Date.now()
  }

  const waited = Date.now() - firstRequestAt
  const delay = Math.max(
    0,
    Math.min(config.deploy.debounceMs, config.deploy.maxWaitMs - waited)
  )

  schedule(delay)

  log('deploy requested', {reason, dispatchInMs: delay})

  return getState()
}

/** Bypasses the debounce - used by the manual trigger endpoint. */
export const requestDeployNow = (reason: string): QueueState => {
  pendingReasons.add(reason)
  firstRequestAt = firstRequestAt ?? Date.now()
  schedule(0)

  return getState()
}

export const getState = (): QueueState => ({
  pendingReasons: [...pendingReasons],
  scheduledAt,
  firstRequestAt,
  lastDispatchAt,
  lastError,
  dispatching
})
