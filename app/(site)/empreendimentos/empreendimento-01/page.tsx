'use client';

import Image from 'next/image';
import { MapPin, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Empreendimento01Page() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-24 pb-14 px-6 md:px-12">
      <motion.div
        className="max-w-[1200px] mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.span
          variants={fadeInUp}
          className="inline-block py-1.5 px-5 border border-gray-200 text-[10px] font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 rounded-full"
        >
          Empreendimento
        </motion.span>
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-light text-primary tracking-tight mb-4"
        >
          Empreendimento 01
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-gray-500 font-light text-lg mb-8"
        >
          Página modelo para um novo empreendimento do portfólio Group 33. Use
          este espaço para apresentar o conceito geral, público-alvo e a
          proposta de valor.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[440px] xl:h-[520px] rounded-3xl overflow-hidden mb-16"
        >
          <Image
            src="https://picsum.photos/seed/empreendimento01/1600/900"
            alt="Empreendimento 01"
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
            className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 mb-8 text-center"
          >
            Características Principais
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-3xl border border-gray-100"
            >
              <Building2
                className="text-primary mb-6"
                size={32}
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-medium text-primary mb-4">
                Tipo de Empreendimento
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Descreva se é vertical, geminado, loteamento ou outro formato,
                além do padrão de acabamento.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-3xl border border-gray-100"
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
                Cidade, bairro e contexto urbano. Destaque acessos, serviços e
                infraestrutura ao redor.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 p-6 rounded-3xl border border-gray-100"
            >
              <h3 className="text-xl font-medium text-primary mb-4">
                Diferenciais
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Liste diferenciais como áreas de lazer, tecnologia, sustentabilidade,
                segurança e demais atributos importantes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}

