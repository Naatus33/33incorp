'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LuxuryTag } from '@/components/LuxuryTag';
import type { ReactNode } from 'react';

type ComingSoonLayoutVariant = 'centered' | 'split';

type ComingSoonPageProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  secondaryText?: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  layoutVariant?: ComingSoonLayoutVariant;
  rightPanel?: ReactNode;
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const titleReveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export function ComingSoonPage({
  eyebrow,
  title,
  highlight,
  description,
  secondaryText,
  primaryCtaHref,
  primaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaLabel,
  layoutVariant = 'centered',
  rightPanel,
}: ComingSoonPageProps) {
  const isSplit = layoutVariant === 'split';

  return (
    <main className="w-full min-h-screen bg-[#01011c] text-white font-sans pt-24 md:pt-28 pb-16 md:pb-20 px-6 md:px-12 flex items-start md:items-center">
      <section
        className={`w-full mx-auto ${
          isSplit ? 'max-w-5xl' : 'max-w-4xl'
        } flex flex-col ${isSplit ? 'md:flex-row gap-10 md:gap-16 items-start' : 'items-center justify-center'}`}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className={`flex-1 flex flex-col gap-6 ${isSplit ? '' : 'items-center text-center'}`}
        >
          <motion.div
            variants={fadeIn}
            className={`flex flex-wrap items-center gap-4 ${
              isSplit ? '' : 'justify-center'
            }`}
          >
            <p className="text-white/60 text-[0.6875rem] md:text-xs tracking-[0.32em] uppercase">
              {eyebrow}
            </p>
            <LuxuryTag variant="gold">Em Breve</LuxuryTag>
          </motion.div>

          <motion.h1
            variants={titleReveal}
            className={`text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight ${
              isSplit ? '' : 'max-w-3xl'
            }`}
          >
            {highlight ? (
              <>
                {title}{' '}
                <span className="font-medium">
                  {highlight}
                </span>
              </>
            ) : (
              title
            )}
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className={`text-white/80 font-light text-base md:text-lg leading-relaxed ${
              isSplit ? 'max-w-xl' : 'max-w-2xl'
            } ${isSplit ? '' : 'mx-auto'}`}
          >
            {description}
          </motion.p>

          {secondaryText && (
            <motion.p
              variants={fadeIn}
              className={`text-white/60 text-sm md:text-base leading-relaxed ${
                isSplit ? 'max-w-xl' : 'max-w-2xl'
              } ${isSplit ? '' : 'mx-auto'}`}
            >
              {secondaryText}
            </motion.p>
          )}

          <motion.div
            variants={fadeIn}
            className={`flex flex-wrap gap-4 pt-4 ${
              isSplit ? '' : 'justify-center'
            }`}
          >
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-[0.8rem] font-semibold tracking-[0.3em] uppercase hover:bg-white hover:text-[#01011c] transition-colors duration-300"
            >
              {primaryCtaLabel}
            </Link>
            {secondaryCtaHref && secondaryCtaLabel && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-[0.8rem] font-semibold tracking-[0.3em] uppercase hover:border-white hover:bg-white hover:text-[#01011c] transition-colors duration-300"
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </motion.div>
        </motion.div>

        {isSplit && rightPanel ? (
          <div className="hidden md:block flex-1">
            {rightPanel}
          </div>
        ) : null}
      </section>
    </main>
  );
}

