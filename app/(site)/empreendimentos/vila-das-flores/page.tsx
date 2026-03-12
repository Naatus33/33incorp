'use client';

import Image from 'next/image';
import { MapPin, Home, Leaf, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function VilaDasFloresPage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-24 pb-14 px-6 md:px-12">
      <motion.div
        className="max-w-[75rem] mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.span variants={fadeInUp} className="inline-block py-1.5 px-5 border border-gray-200 text-[0.625rem] font-medium tracking-[0.2em] uppercase text-gray-500 mb-4 rounded-full">
          Casas Geminadas
        </motion.span>
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-light text-primary tracking-tight mb-4">Vila das Flores</motion.h1>
        <motion.p variants={fadeInUp} className="text-gray-500 font-light text-lg mb-8">Casas geminadas com 130m², 3 quartos (1 suíte), acabamento premium e quintal privativo. O equilíbrio entre praticidade e aconchego.</motion.p>

        <motion.div variants={fadeInUp} className="relative w-full h-[13.75rem] sm:h-[18.75rem] md:h-[22.5rem] lg:h-[27.5rem] xl:h-[32.5rem] rounded-3xl overflow-hidden mb-16">
          <Image src="https://picsum.photos/seed/germinado1/1600/900" alt="Vila das Flores" fill className="object-cover" />
        </motion.div>

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-400 mb-6 text-center">Galeria de Imagens</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div key={item} variants={fadeInUp} className="relative h-[12.5rem] md:h-[14.375rem] lg:h-[16.25rem] rounded-2xl overflow-hidden group">
                <Image src={`https://picsum.photos/seed/vilagaleria${item}/600/400`} alt={`Galeria Vila das Flores ${item}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" aria-hidden="true" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-400 mb-6 text-center">Diferenciais</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <Home className="text-primary mb-6" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-primary mb-4">Plantas de 130m²</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">3 quartos sendo 1 suíte, sala ampla, cozinha planejada e área de serviço. Acabamento premium em todos os ambientes.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <Leaf className="text-primary mb-6" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-primary mb-4">Quintal Privativo</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">Área externa exclusiva para cada unidade, ideal para churrasqueira, jardim e convívio em família.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
              <Car className="text-primary mb-6" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-primary mb-4">Vaga Coberta</h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed">Garagem para 1 ou 2 veículos por unidade, com opção de cobertura e fácil acesso.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-400 mb-8 text-center">Localização</motion.h2>
          <motion.div variants={fadeInUp} className="relative w-full h-[13.75rem] md:h-[18.75rem] lg:h-[22.5rem] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <MapPin className="text-gray-400 mx-auto mb-4" size={48} strokeWidth={1} />
              <p className="text-gray-500 font-light">Santo Antônio, Joinville - SC</p>
              <p className="text-gray-400 text-sm mt-2">Bairro residencial com ótima infraestrutura</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
