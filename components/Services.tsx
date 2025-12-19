'use client';

import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { Image, MessageCircle, PhoneCall, Send, Smile, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';

type AiCallMood = 'funny' | 'serious' | 'weird';

type RoastDelivery = 'telegram' | 'sms';

const API_AI_CALL = '/api/n8n/ai-call';
const API_ROAST = '/api/n8n/roast';

async function postToWebhook(url: string, payload: unknown) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Webhook error: ${res.status} ${text}`);
  }
}

async function handlePayment(opts: { product: 'ai_call' | 'roast'; amountUsd: number }) {
  await new Promise((r) => setTimeout(r, 450));
  return { ok: true, checkoutUrl: null as string | null, ...opts };
}

function FieldLabel({ children }: { children: string }) {
  return <div className="mb-1 text-xs font-semibold text-white/70">{children}</div>;
}

function InputShell({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/5 p-3 focus-within:border-neon-cyan/60">
      {children}
    </div>
  );
}

export default function Services() {
  const [busy, setBusy] = useState<null | 'ai_call' | 'roast'>(null);
  const [toast, setToast] = useState<null | { kind: 'ok' | 'err'; msg: string }>(null);

  const [phone, setPhone] = useState('');
  const [mood, setMood] = useState<AiCallMood>('funny');
  const [context, setContext] = useState('');

  const [username, setUsername] = useState('');
  const [delivery, setDelivery] = useState<RoastDelivery>('telegram');

  const moodLabel = useMemo(
    () => ({ funny: 'смішний', serious: 'серйозний', weird: 'дивний' } satisfies Record<AiCallMood, string>),
    []
  );

  const deliveryLabel = useMemo(
    () => ({ telegram: 'Telegram', sms: 'SMS' } satisfies Record<RoastDelivery, string>),
    []
  );

  async function orderAiCall() {
    if (!phone.trim()) {
      setToast({ kind: 'err', msg: 'Вбий номер телефону, не соромся.' });
      return;
    }

    setToast(null);
    setBusy('ai_call');

    try {
      await handlePayment({ product: 'ai_call', amountUsd: 1 });

      await postToWebhook(API_AI_CALL, {
        phone: phone.trim(),
        mood,
        context: context.trim(),
        source: 'krapsi.fun',
      });

      setToast({ kind: 'ok', msg: 'Є! Запит полетів. Чекай дзвіночок.' });
      setPhone('');
      setContext('');
      setMood('funny');
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Щось пішло не так.';
      setToast({ kind: 'err', msg });
    } finally {
      setBusy(null);
    }
  }

  async function orderRoast() {
    if (!username.trim()) {
      setToast({ kind: 'err', msg: 'Кинь @username — без цього прожарка не стартує.' });
      return;
    }

    setToast(null);
    setBusy('roast');

    try {
      await handlePayment({ product: 'roast', amountUsd: 1 });

      await postToWebhook(API_ROAST, {
        username: username.trim().replace(/^@/, ''),
        delivery,
        source: 'krapsi.fun',
      });

      setToast({ kind: 'ok', msg: `Готово. Зараз зберемо меми й надішлемо в ${deliveryLabel[delivery]}.` });
      setUsername('');
      setDelivery('telegram');
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'Щось пішло не так.';
      setToast({ kind: 'err', msg });
    } finally {
      setBusy(null);
    }
  }

  return (
    <section id="services" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-18">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold text-white/60">пакет послуг</div>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Обирай, що робимо зараз</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
              Дві кнопки — два види хаосу. Оплата $1 (Stripe буде), далі дані летять у n8n.
            </p>
          </div>
        </div>

        {toast && (
          <div
            className={`mb-8 rounded-2xl border-2 px-4 py-3 text-sm shadow-neon ${
              toast.kind === 'ok'
                ? 'border-neon-lime/40 bg-neon-lime/10 text-white'
                : 'border-neon-pink/40 bg-neon-pink/10 text-white'
            }`}
            role="status"
          >
            {toast.msg}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          <ServiceCard
            id="ai-call"
            icon={<PhoneCall className="size-5" />}
            title="AI Розіграш ($1)"
            price="$1"
            description="Дзвінок від AI-асистента на будь-яку тему. Може бути смішно, серйозно або дуже дивно."
          >
            <div className="space-y-3">
              <div>
                <FieldLabel>Номер телефону</FieldLabel>
                <InputShell>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    inputMode="tel"
                    placeholder="+380... або як у тебе там"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
                  />
                </InputShell>
              </div>

              <div>
                <FieldLabel>Настрій</FieldLabel>
                <div className="grid grid-cols-3 gap-2">
                  {(['funny', 'serious', 'weird'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMood(m)}
                      className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                        mood === m
                          ? 'border-neon-cyan/70 bg-neon-cyan/15'
                          : 'border-white/15 bg-white/5 hover:border-neon-pink/60'
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        {m === 'funny' && <Smile className="size-4 text-neon-lime" />}
                        {m === 'serious' && <Zap className="size-4 text-neon-cyan" />}
                        {m === 'weird' && <Image className="size-4 text-neon-pink" />}
                        {moodLabel[m]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <FieldLabel>Контекст (про що говорити)</FieldLabel>
                <InputShell>
                  <textarea
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    rows={4}
                    placeholder="Напр: зателефонуй другу й скажи, що його кіт став репером..."
                    className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-white/35"
                  />
                </InputShell>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={orderAiCall}
                disabled={busy !== null}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-neon-pink/60 bg-neon-pink/15 px-4 py-3 text-sm font-extrabold shadow-neon transition hover:bg-neon-pink/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="size-4" />
                {busy === 'ai_call' ? 'Замовляємо...' : 'Замовити дзвінок'}
              </motion.button>

              <div className="text-xs text-white/50">
                Після оплати дані підуть у n8n (webhook-заглушка), а потім AI зателефонує.
              </div>
            </div>
          </ServiceCard>

          <ServiceCard
            id="roast"
            icon={<MessageCircle className="size-5" />}
            title="Insta/Threads Roast ($1)"
            price="$1"
            description="Згенеруємо 3 смішні картинки + коротку історію на основі профілю."
          >
            <div className="space-y-3">
              <div>
                <FieldLabel>@username</FieldLabel>
                <InputShell>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="@yourname"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-white/35"
                  />
                </InputShell>
              </div>

              <div>
                <FieldLabel>Куди слати результат</FieldLabel>
                <div className="grid grid-cols-2 gap-2">
                  {(['telegram', 'sms'] as const).map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDelivery(d)}
                      className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                        delivery === d
                          ? 'border-neon-cyan/70 bg-neon-cyan/15'
                          : 'border-white/15 bg-white/5 hover:border-neon-pink/60'
                      }`}
                    >
                      {deliveryLabel[d]}
                    </button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={orderRoast}
                disabled={busy !== null}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-neon-cyan/60 bg-neon-cyan/15 px-4 py-3 text-sm font-extrabold shadow-neon transition hover:bg-neon-cyan/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Zap className="size-4" />
                {busy === 'roast' ? 'Палає...' : 'Прожарити профіль'}
              </motion.button>

              <div className="text-xs text-white/50">
                Результат генериться на бекенді. Тут ми лише забираємо @username і пушимо в n8n.
              </div>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
