'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Chale01Page() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-32 pb-20 px-6 md:px-12">
      <motion.div
        className="max-w-[75rem] mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block py-1.5 px-5 border border-gray-200 text-[0.625rem] font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 rounded-full"
        >
          Chalé
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-light text-primary tracking-tight mb-6"
        >
          Chalé 01
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-gray-500 font-light text-xl mb-12"
        >
          Modelo de página para um chalé específico. Substitua este texto pela
          descrição comercial do produto (conceito, público, diferenciais,
          operação de locação, etc.).
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative w-full h-[16.25rem] sm:h-[21.25rem] md:h-[26.25rem] lg:h-[32.5rem] xl:h-[37.5rem] rounded-3xl overflow-hidden mb-24"
        >
          <Image
            src="https://picsum.photos/seed/chale01/1600/900"
            alt="Chalé 01"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-400 mb-12 text-center"
          >
            Localização e Estrutura
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
            >
              <MapPin
                className="text-primary mb-6"
                size={32}
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-medium text-primary mb-4">
                Localização
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Informe cidade, região turística, pontos de interesse próximos e
                acesso principal.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
            >
              <h3 className="text-xl font-medium text-primary mb-4">
                Estrutura
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Descreva quantidade de cabanas, áreas comuns, trilhas, decks,
                spa e demais facilidades deste chalé.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

