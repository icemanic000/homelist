export const onRequestPost: PagesFunction = async (context) => {
  const token = context.env.TELEGRAM_BOT_TOKEN as string | undefined
  const defaultWebhookUrl = context.env.TELEGRAM_WEBHOOK_URL as string | undefined

  if (!token) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing TELEGRAM_BOT_TOKEN' }), {
      status: 500,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    })
  }

  const body = await context.request.json().catch(() => ({} as any))
  const webhookUrl = (body?.webhookUrl as string | undefined) ?? defaultWebhookUrl

  if (!webhookUrl) {
    return new Response(JSON.stringify({ ok: false, error: 'Missing webhookUrl (body.webhookUrl or TELEGRAM_WEBHOOK_URL)' }), {
      status: 400,
      headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
    })
  }

  const res = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ url: webhookUrl }),
  })

  const data = await res.json().catch(() => null)

  return new Response(JSON.stringify({ ok: res.ok, telegram: data }), {
    status: res.ok ? 200 : 502,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  })
}
