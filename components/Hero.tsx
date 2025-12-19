'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
              <Sparkles className="size-4 text-neon-pink" />
              Магія AI у твоєму телефоні
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-balance text-4xl font-black tracking-tight sm:text-6xl"
            >
              Krapsi Fun
              <span className="block text-white/70">робить хайп з твоїх ідей</span>
            </motion.h1>

            <p className="max-w-xl text-pretty text-base text-white/70 sm:text-lg">
              Хочеш треш-дзвінок від AI або прожарку інсти/threads? Кидай дані — ми зробимо
              красиво, голосно і трохи токсично (але по-доброму).
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-neon-cyan/60 bg-neon-cyan/15 px-5 py-3 text-sm font-extrabold shadow-neon transition hover:bg-neon-cyan/20"
              >
                Давай, показуй послуги
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#ai-call"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-neon-pink/60 hover:bg-white/10"
              >
                <PhoneCall className="size-4 text-neon-pink" />
                Хочу AI-дзвінок
              </motion.a>
            </div>

            <div className="flex items-center gap-3 text-xs text-white/50">
              <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">$1</span>
              <span>швидко</span>
              <span className="opacity-40">•</span>
              <span>мобільно</span>
              <span className="opacity-40">•</span>
              <span>на хайпі</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[1.5rem] border-2 border-white/15 bg-ink-800/60 p-6 shadow-brutal">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-extrabold">Що це за движ?</div>
                <div className="text-xs text-white/50">просто демо лендинг</div>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/50">AI Розіграш</div>
                  <div className="mt-1 text-sm font-semibold">Дзвінок, який виносить мозок</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/50">Insta/Threads Roast</div>
                  <div className="mt-1 text-sm font-semibold">Меми + історія про твій профіль</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/50">Оплата</div>
                  <div className="mt-1 text-sm font-semibold">Stripe Checkout (поки що заглушка)</div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-6 -top-6 size-20 rounded-3xl bg-neon-pink/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-6 -right-8 size-24 rounded-3xl bg-neon-cyan/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
