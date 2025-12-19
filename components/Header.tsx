'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl border-2 border-white/20 bg-ink-800 shadow-neon">
            <Sparkles className="size-5 text-neon-cyan" />
          </span>
          <div className="leading-none">
            <div className="text-base font-black tracking-tight">Krapsi Fun</div>
            <div className="text-xs text-white/60">AI-хаос, але зі смаком</div>
          </div>
        </a>

        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="#services"
          className="rounded-xl border-2 border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold shadow-neon transition hover:border-neon-pink/60 hover:bg-white/10"
        >
          До послуг
        </motion.a>
      </div>
    </header>
  );
}
