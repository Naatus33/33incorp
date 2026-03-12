'use client';

import { motion } from 'framer-motion';

export default function HorizonPage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-24 pb-14 px-6 md:px-12">
      <div className="max-w-4xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center gap-6">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block py-1.5 px-5 border border-gray-200 text-[0.625rem] font-medium tracking-[0.2em] uppercase text-gray-500 rounded-full"
        >
          Página em manutenção
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl md:text-5xl font-light text-primary tracking-tight"
        >
          33 Incorp Residence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 font-light text-base md:text-lg max-w-2xl"
        >
          Estamos atualizando esta página com novos detalhes do empreendimento.
          Em breve você poderá conferir todas as informações sobre o 33 Incorp Residence.
        </motion.p>
      </div>
    </main>
  );
}
