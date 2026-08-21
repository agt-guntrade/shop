# Deploy Webhook

Small [Hono](https://hono.dev) service that sits between Shopify and the GitHub
API: Shopify posts a webhook, this service verifies it and triggers the
`Deploy` workflow (`.github/workflows/deploy.yaml`) of `agt-guntrade/shop`
via `workflow_dispatch`.

Shopify cannot call the GitHub API directly, because a `workflow_dispatch`
needs an `Authorization` header with a GitHub token — this proxy holds that
token instead of putting it in Shopify.

## Endpoints

| Method | Path                | Description                                                   |
| ------ | ------------------- | ------------------------------------------------------------- |
| `GET`  | `/health`           | Health check for Coolify.                                      |
| `GET`  | `/status`           | Current queue state (pending reasons, next dispatch, errors).  |
| `POST` | `/webhooks/shopify` | Shopify webhook target. HMAC verified, answers `202`.          |
| `POST` | `/deploy`           | Manual trigger, only enabled when `TRIGGER_TOKEN` is set.      |
| `POST` | `/contact`          | Contact form of the shop frontend, sends mail via SMTP.        |

## Debouncing

A bulk product import fires one webhook per product. Instead of queueing one
build per webhook, requests are coalesced:

- a deploy is dispatched after `DEPLOY_DEBOUNCE_MS` of silence (default 5 min),
- but never later than `DEPLOY_MAX_WAIT_MS` after the first webhook of the
  batch (default 30 min),
- and while a run of the workflow is queued or in progress, the dispatch is
  postponed by `DEPLOY_RECHECK_MS` (unless `DEPLOY_SKIP_WHILE_RUNNING=false`).

State is in memory — a restart drops a pending deploy, which at worst means one
skipped build until the next product change.

## Local development

```bash
cp .env.example .env   # fill in the secrets
npm install
npm run dev
```

Send a signed test webhook:

```bash
BODY='{"id":1}'; SECRET=testsecret
curl -X POST localhost:3000/webhooks/shopify \
  -H "x-shopify-topic: products/update" \
  -H "x-shopify-hmac-sha256: $(printf '%s' "$BODY" | openssl dgst -sha256 -hmac "$SECRET" -binary | base64)" \
  -H 'content-type: application/json' -d "$BODY"
```

## Contact form

`POST /contact` takes the contact modal of the Gatsby frontend
(`src/services/contact.tsx`) and mails it via nodemailer. It replaces the
former `sendTemplateMail` call against mailpress.

```json
{
  "firstName": "Max",
  "lastName": "Mustermann",
  "email": "max@example.com",
  "phone": "+43 ...",
  "message": "...",
  "agreeToTerms": true,
  "invokedOnUrl": "https://www.agt-guntrade.at/"
}
```

Answers `202 {"status":"sent"}`, `400` on validation errors, `429` when the
per-IP rate limit is hit and `502` when the SMTP server rejects the mail. The
customer's address goes into `Reply-To`, so answering from the mailbox works
as expected.

The endpoint stays disabled (`404`) until `SMTP_HOST` is set, and only the
origins in `CONTACT_ALLOWED_ORIGINS` may call it from a browser. A `company`
field in the payload is treated as a honeypot: the request is accepted and
silently dropped.

The frontend picks the URL from `GATSBY_CONTACT_ENDPOINT`, falling back to the
constant at the top of `src/services/contact.tsx` - adjust it to the domain
you give the service in Coolify.

## GitHub token

Fine-grained personal access token, scoped to `agt-guntrade/shop`, with
repository permission **Actions: Read and write**. Nothing else is needed.

## Coolify

1. **New Resource → Application → Dockerfile** (or "Docker Compose"-less
   Dockerfile build) pointing at `github.com/agt-guntrade/shop`.
2. **Base Directory**: `/deploy-webhook`, **Dockerfile**: `Dockerfile`.
3. **Port**: `3000`.
4. Add the environment variables from `.env.example` (at minimum
   `GITHUB_TOKEN` and `SHOPIFY_WEBHOOK_SECRET`, plus the `SMTP_*` block if the
   contact form should be handled here).
5. Set a domain, e.g. `https://deploy.guntrade.at`, and deploy.
6. Verify: `curl https://deploy.guntrade.at/health` → `{"status":"ok"}`.

Turn off Coolify's auto-deploy on push if you do not want this service to
rebuild on every shop commit.

## Shopify

**Settings → Notifications → Webhooks → Create webhook** for each topic you
want to react to (product create/update/delete, collection create/update/delete):

- Format: `JSON`
- URL: `https://deploy.guntrade.at/webhooks/shopify`
- API version: latest stable

Shopify shows **one** signing secret for all webhooks of the store — put it
into `SHOPIFY_WEBHOOK_SECRET`. Requests with a wrong or missing
`X-Shopify-Hmac-Sha256` header are rejected with `401`.

If the webhooks are created through a custom app instead, use that app's
API secret key as the signing secret.
