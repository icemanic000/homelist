import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const payload = await req.json().catch(() => null);

  const webhookUrl = process.env.N8N_WEBHOOK_ROAST ?? 'https://YOUR-N8N-DOMAIN/webhook/roast';

  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return NextResponse.json(
      { ok: false, error: `Webhook error: ${res.status} ${text}` },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
