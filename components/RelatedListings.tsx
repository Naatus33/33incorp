'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export type RelatedItem = {
  href: string;
  title: string;
};

type RelatedListingsProps = {
  title?: string;
  items: RelatedItem[];
};

export default function RelatedListings({
  title = 'Conheça também',
  items,
}: RelatedListingsProps) {
  if (items.length === 0) return null;

  return (
    <motion.section
      className="mb-16 sm:mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-6"
      >
        {title}
      </motion.h2>
      <motion.ul
        variants={fadeInUp}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center justify-between gap-3 py-3 px-4 rounded-xl border border-gray-200/80 bg-white/60 hover:border-primary/30 hover:bg-primary/5 transition-colors text-gray-800 font-light"
            >
              <span className="truncate">{item.title}</span>
              <ArrowRight
                size={16}
                className="flex-shrink-0 text-primary opacity-70 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
