'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function ServiceCard({
  id,
  icon,
  title,
  price,
  description,
  children,
}: {
  id: string;
  icon: ReactNode;
  title: string;
  price: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="group relative rounded-[1.5rem] border-2 border-white/15 bg-ink-800/60 p-5 shadow-brutal"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 0 2px rgba(255,46,209,0.35), 0 0 48px rgba(0,245,255,0.12)' }} />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="grid size-11 shrink-0 place-items-center rounded-xl border-2 border-white/15 bg-white/5">
            <div className="text-neon-cyan">{icon}</div>
          </div>
          <div>
            <div className="text-lg font-black tracking-tight">{title}</div>
            <div className="mt-1 text-sm text-white/70">{description}</div>
          </div>
        </div>

        <div className="shrink-0 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-extrabold">
          {price}
        </div>
      </div>

      <div className="relative mt-5">{children}</div>
    </motion.section>
  );
}
