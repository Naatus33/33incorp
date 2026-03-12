'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Chale02Page() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-32 pb-20 px-6 md:px-12">
      <motion.div
        className="max-w-[1200px] mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block py-1.5 px-5 border border-gray-200 text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 rounded-full"
        >
          Chalé
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-light text-primary tracking-tight mb-6"
        >
          Chalé 02
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-gray-500 font-light text-xl mb-12"
        >
          Página modelo para outro produto de chalé. Troque o nome, descrições
          e imagens conforme o empreendimento do seu cliente.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[600px] rounded-3xl overflow-hidden mb-24"
        >
          <Image
            src="https://picsum.photos/seed/chale02/1600/900"
            alt="Chalé 02"
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
            className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-12 text-center"
          >
            Detalhes para Edição
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100"
            >
              <h3 className="text-xl font-medium text-primary mb-4">
                Perfil do Investimento
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Descreva aqui ticket médio, projeção de rentabilidade, modelo
                de gestão e ocupação esperada.
              </p>
            </motion.div>
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
                Região
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Complete com informações da região (clima, atrativos naturais,
                perfil de turismo, acesso rodoviário).
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

