function Pill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
      {children}
    </span>
  )
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
  const inner = (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.6)] transition hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-900/90">
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
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <header className="mx-auto max-w-5xl px-4 py-6">
        <nav className="flex items-center justify-between">
          <a href="https://krapsi.fun" className="font-semibold tracking-tight">
            <span className="text-slate-100">icemanic.</span>
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
            <div className="flex flex-wrap gap-2">
              <Pill>Telegram bot</Pill>
              <Pill>n8n</Pill>
              <Pill>Postgres</Pill>
              <Pill>n8n</Pill>
              <Pill>AI model</Pill>
            </div>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
              icemanic
              <span className="text-slate-300"> — AI Automation Expert & System Administrator.</span>
            </h1>
            <p className="mt-5 text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Розробка Telegram-ботів, інтегрованих з n8n, Postgres та AI-моделями. Створення складних систем
              автоматизації: від ідеї до production.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Переглянути проєкти
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-500/50 hover:bg-slate-900/80"
              >
                Контакти
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Про мене</div>
              <div className="mt-3 text-lg font-semibold tracking-tight text-slate-100">icemanic</div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Проєктую та будую AI-автоматизації з упором на архітектуру workflow, якість даних та стабільність у
                production.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Фокус</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>n8n</Pill>
                <Pill>Postgres</Pill>
                <Pill>Docker</Pill>
                <Pill>Cloudflare</Pill>
                <Pill>AI-workflows architecture</Pill>
                <Pill>DB management</Pill>
                <Pill>OpenAI</Pill>
                <Pill>Gemini</Pill>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Архітектура AI-workflows, інтеграції, та керування базами даних для надійних систем.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="py-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">Проєкти</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">Головні роботи</h2>
              <p className="mt-2 text-sm text-slate-300">Те, що варто відкрити.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card
              title="Krapsi"
              desc="Платформа для AI content generation та автоматизації. Швидкі інтеграції, workflow та запуск у production."
              meta="krapsi.fun · n8n · Postgres · AI model"
              href="https://krapsi.fun"
            />
            <Card
              title="AI-автоматизації"
              desc="Складні AI-workflows, інтеграції сервісів та оркестрація процесів під бізнес-логіку."
              meta="n8n · Cloudflare · production"
            />
            <Card
              title="Postgres & Дані"
              desc="Проєктування схем, оптимізація запитів, міграції та контроль якості даних."
              meta="Postgres · DB management · monitoring"
            />
            <Card
              title="Інтеграції AI"
              desc="Підключення OpenAI/Gemini та інших AI-моделей до продуктів через API та automation."
              meta="OpenAI · Gemini · integrations"
            />
          </div>
        </section>

        <section id="contact" className="py-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
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
