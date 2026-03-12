'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LuxuryTag } from '@/components/LuxuryTag';

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

export default function GeminadoMaintenancePage() {
  return (
    <main className="min-h-screen w-full bg-[#01011c] text-white flex items-center justify-center px-6 md:px-16">
      <section className="w-full max-w-4xl mx-auto py-20 md:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
          className="flex flex-col gap-8"
        >
          <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4">
            <p className="text-white/60 text-[0.6875rem] md:text-xs tracking-[0.32em] uppercase">
              Coleção Geminados
            </p>
            <LuxuryTag variant="emBreve">Em Breve</LuxuryTag>
          </motion.div>

          <motion.h1
            variants={titleReveal}
            className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-tight"
          >
            Em breve, uma nova forma de viver em{' '}
            <span className="font-medium">Geminados</span>.
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-white/80 font-light text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Estamos finalizando os detalhes da coleção Geminados: projetos
            autorais, acabamento criterioso e localização estratégica, pensados
            para quem busca um novo capítulo de moradia com assinatura Group 33.
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="text-white/60 text-sm md:text-base max-w-2xl leading-relaxed"
          >
            Enquanto preparamos essa experiência, você pode explorar nossos
            condomínios horizontais e empreendimentos verticais já disponíveis
            no portfólio.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-wrap gap-4 mt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase hover:bg-white hover:text-[#01011c] transition-colors duration-300"
            >
              Voltar para a página inicial
            </Link>
            <Link
              href="/condominios"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white/80 hover:border-white hover:text-white transition-colors duration-300"
            >
              Ver Condomínios
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

