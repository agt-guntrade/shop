import {config} from './config.js'

const API = 'https://api.github.com'

const headers = {
  accept: 'application/vnd.github+json',
  authorization: `Bearer ${config.github.token}`,
  'content-type': 'application/json',
  'user-agent': 'agt-deploy-webhook',
  'x-github-api-version': '2022-11-28'
}

const repoPath = `${config.github.owner}/${config.github.repo}`

/**
 * Triggers the workflow via workflow_dispatch. The workflow needs a
 * `workflow_dispatch:` trigger and the token needs `actions: write`.
 */
export const dispatchWorkflow = async (): Promise<void> => {
  const url = `${API}/repos/${repoPath}/actions/workflows/${config.github.workflow}/dispatches`

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ref: config.github.ref})
  })

  if (!response.ok) {
    const body = await response.text()

    throw new Error(
      `GitHub workflow dispatch failed (${response.status}): ${body.slice(0, 500)}`
    )
  }
}

/**
 * True while a queued or in-progress run of the workflow exists, so we can
 * hold back instead of stacking builds.
 */
export const isWorkflowRunning = async (): Promise<boolean> => {
  const url = `${API}/repos/${repoPath}/actions/workflows/${config.github.workflow}/runs?per_page=1&status=in_progress`
  const queuedUrl = `${API}/repos/${repoPath}/actions/workflows/${config.github.workflow}/runs?per_page=1&status=queued`

  const responses = await Promise.all([
    fetch(url, {headers}),
    fetch(queuedUrl, {headers})
  ])

  for (const response of responses) {
    if (!response.ok) {
      const body = await response.text()

      throw new Error(
        `GitHub run lookup failed (${response.status}): ${body.slice(0, 500)}`
      )
    }

    const data = (await response.json()) as {total_count?: number}

    if ((data.total_count ?? 0) > 0) {
      return true
    }
  }

  return false
}
