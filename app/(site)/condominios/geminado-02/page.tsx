'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Geminado02Page() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-24 pb-14 px-6 md:px-12">
      <motion.div
        className="max-w-[75rem] mx-auto flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block py-1.5 px-5 border border-gray-200 text-[0.625rem] font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 rounded-full"
        >
          Geminados
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-light text-primary tracking-tight mb-3"
        >
          Página em manutenção
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-gray-500 font-light text-lg max-w-xl"
        >
          Estamos atualizando as informações deste empreendimento. Em breve,
          você poderá conferir todos os detalhes por aqui.
        </motion.p>
      </motion.div>
    </main>
  );
}

