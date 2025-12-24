 import { type FormEvent, useEffect, useMemo, useRef, useState } from 'react'
 import { Cpu } from 'lucide-react'
 import SnowBackground from './components/SnowBackground'

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  )
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  const className = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-4'

  return { ref, className }
}

function Card({
  title,
  desc,
  meta,
  href,
}: {
  title: string
  desc: string
  meta: string
  href?: string
}) {
  const { ref, className } = useReveal<HTMLDivElement>()
  const inner = (
    <div
      ref={ref}
      className={`rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.6)] transition-all duration-300 ${className} hover:scale-105 hover:border-cyan-500/40 hover:bg-slate-900/95 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_20px_60px_-30px_rgba(34,211,238,0.35)]`}
    >
      <div className="text-base font-semibold tracking-tight text-slate-100">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</div>
      <div className="mt-4 text-xs text-slate-400">{meta}</div>
    </div>
  )

  if (!href) return inner

  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {inner}
    </a>
  )
}

export default function App() {
  const webhookUrl = useMemo(() => import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined, [])
  const [sendState, setSendState] = useState<'idle' | 'sending' | 'done'>('idle')
  const [feedback, setFeedback] = useState({ name: '', message: '' })
  const heroReveal = useReveal<HTMLDivElement>()
  const projectsReveal = useReveal<HTMLDivElement>()
  const contactReveal = useReveal<HTMLDivElement>()

  async function postToWebhook(payload: unknown) {
    if (!webhookUrl) return
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
  }

  async function handleBotLaunch() {
    setSendState('sending')
    try {
      await postToWebhook({ source: 'website', type: 'open_bot', bot: 'StackattackBot', at: new Date().toISOString() })
      setSendState('done')
      window.open('https://t.me/StackattackBot', '_blank', 'noreferrer')
    } finally {
      window.setTimeout(() => setSendState('idle'), 1400)
    }
  }

  async function handleFeedbackSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSendState('sending')
    try {
      await postToWebhook({
        source: 'website',
        type: 'feedback',
        name: feedback.name,
        message: feedback.message,
        at: new Date().toISOString(),
      })
      setSendState('done')
      setFeedback({ name: '', message: '' })
    } finally {
      window.setTimeout(() => setSendState('idle'), 1400)
    }
  }

  return (
    <div className="relative min-h-dvh bg-slate-950 text-slate-100">
      <SnowBackground />
      <header className="mx-auto max-w-5xl px-4 py-6">
        <nav className="flex items-center justify-between">
          <a href="https://krapsi.fun" className="flex items-center gap-2 font-semibold tracking-tight">
            <Cpu className="h-5 w-5 text-cyan-300" aria-hidden="true" />
            <span className="text-slate-100">krapsi.fun</span>
          </a>

          <div className="hidden items-center gap-5 text-sm text-slate-300 sm:flex">
            <a className="hover:text-cyan-300" href="#about">
              Про мене
            </a>
            <a className="hover:text-cyan-300" href="#projects">
              Проєкти
            </a>
            <a className="hover:text-cyan-300" href="#contact">
              Контакти
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-cyan-500/50 hover:bg-slate-900/80"
          >
            Звʼязатися
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 pb-14">
        <section className="py-10 sm:py-14">
          <div className="max-w-2xl">
            <div ref={heroReveal.ref} className={`transition-all duration-700 ${heroReveal.className}`}>
              <div className="flex flex-wrap gap-2">
                <Pill>Telegram bot</Pill>
                <Pill>n8n</Pill>
                <Pill>Postgres</Pill>
                <Pill>AI model</Pill>
                <Pill>Cloudflare</Pill>
              </div>

              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                icemanic
                <span className="text-slate-300"> — AI Automation Expert & System Administrator.</span>
              </h1>
              <details className="group mt-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-slate-300 transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/60">
                <summary className="cursor-pointer list-none text-sm font-semibold text-slate-100">
                  <span className="mr-2 inline-flex select-none items-center text-slate-400 transition-all duration-300 group-open:rotate-90">
                    ▸
                  </span>
                  Розробник із фокусом…
                </summary>
                <p className="mt-3 text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
                  Розробник із фокусом на створенні інтелектуальних систем автоматизації та сучасних вебдодатків.
                  Спеціалізуюся на поєднанні швидкого прототипування інтерфейсів (Lovable, Windsurf) з потужною
                  бекенд-логікою на базі n8n та Telegram Bot API. Маю досвід інтеграції AI-моделей у робочі процеси та
                  архітектури баз даних (PostgreSQL). Ефективно використовую Cloudflare для розгортання масштабованої
                  інфраструктури. Мій підхід — це максимальна автоматизація рутинних завдань та створення продуктів,
                  що базуються на даних.
                </p>
              </details>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
                >
                  Переглянути проєкти
                </a>
                <button
                  type="button"
                  onClick={handleBotLaunch}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:bg-slate-900/80"
                >
                  {sendState === 'sending' ? 'Sending...' : sendState === 'done' ? 'Done!' : 'Запустити StackattackBot'}
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-500/50 hover:bg-slate-900/80"
                >
                  Контакти
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card
              title="Розробка вебдодатків"
              desc="Швидка ітерація за допомогою AI-інструментів (Lovable, Windsurf), React, Vite."
              meta="UI prototyping · React · Vite"
            />
            <Card
              title="Автоматизація та AI"
              desc="Побудова workflow в n8n, підключення AI-моделей (OpenAI, Gemini тощо) для обробки даних."
              meta="n8n · LLM · data processing"
            />
            <Card
              title="Месенджери"
              desc={'Створення складних Telegram-ботів "під ключ" (від логіки до бази даних).'}
              meta="Telegram Bot API · backend logic · DB"
            />
            <Card
              title="Інфраструктура"
              desc="Робота з базами даних (PostgreSQL), хостинг та безпека через Cloudflare (Pages, Workers, DNS)."
              meta="PostgreSQL · Cloudflare · security"
            />
          </div>
        </section>

        <section id="projects" className="py-10">
          <div ref={projectsReveal.ref} className={`flex items-end justify-between gap-6 transition-all duration-700 ${projectsReveal.className}`}>
            <div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                Будую AI-рішення від ідеї до деплою.
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card
              title="Frontend"
              desc="Створення сучасних UI через Lovable та кастомізація коду в Windsurf."
              meta="Lovable · Windsurf · UI"
            />
            <Card
              title="Automation"
              desc="Складні сценарії в n8n, інтеграція LLM (AI моделей) у бізнес-процеси."
              meta="n8n · LLM · integrations"
            />
            <Card
              title="Backend"
              desc="Розробка функціональних Telegram-ботів, проектування баз даних та робота з API."
              meta="Telegram Bot API · PostgreSQL · APIs"
            />
            <Card
              title="DevOps"
              desc="Розміщення та оптимізація проєктів на Cloudflare. Допомагаю бізнесу впроваджувати AI та автоматизувати комунікації."
              meta="Cloudflare · deployment · performance"
            />
          </div>
        </section>

        <section id="contact" className="py-10">
          <div
            ref={contactReveal.ref}
            className={`rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-700 ${contactReveal.className}`}
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Контакти</div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-100">Звʼяжись зі мною</h2>
            <p className="mt-2 text-sm text-slate-300">
              Найшвидше — Telegram. Також є Threads та телефони.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
                href="https://t.me/stinches"
                target="_blank"
                rel="noreferrer"
              >
                Telegram @stinches
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-500/50 hover:bg-slate-950/70"
                href="https://threads.net/@neo.nnode"
                target="_blank"
                rel="noreferrer"
              >
                Threads @neo.nnode
              </a>
            </div>

            <form onSubmit={handleFeedbackSubmit} className="mt-6 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  value={feedback.name}
                  onChange={(e) => setFeedback((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Ваше ім’я"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-500/50"
                />
              </div>
              <textarea
                value={feedback.message}
                onChange={(e) => setFeedback((s) => ({ ...s, message: e.target.value }))}
                placeholder="Повідомлення"
                rows={4}
                className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-500/50"
              />
              <button
                type="submit"
                disabled={sendState === 'sending'}
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-semibold text-slate-100 transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 disabled:opacity-60"
              >
                {sendState === 'sending' ? 'Sending...' : sendState === 'done' ? 'Done!' : 'Надіслати у Telegram'}
              </button>
            </form>

            <div className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
              <a className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 hover:border-cyan-500/50" href="tel:+19713941799">
                +1 971 394 1799
              </a>
              <a className="rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 hover:border-cyan-500/50" href="tel:+380734046770">
                +380 73 404 6770
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-slate-400">
          {new Date().getFullYear()} icemanic. Зроблено на Vite + React.
        </div>
      </footer>
    </div>
  )
}
