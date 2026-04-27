'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { LuxuryTag } from '@/components/LuxuryTag';
import { motion, type Variants } from 'framer-motion';

// --- Animation Variants ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cardFromLeft: Variants = {
  hidden: { opacity: 0, x: -72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardFromRight: Variants = {
  hidden: { opacity: 0, x: 72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardCenter: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const slideLeft = cardFromLeft;
const slideRight = cardFromRight;
const scaleIn = cardCenter;

const titleReveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function HomePage() {
  const [heroVideoError, setHeroVideoError] = useState(false);
  const [shouldShowVideo, setShouldShowVideo] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setShouldShowVideo(true);
  }, []);

  return (
    <main className="w-full bg-[#01011c] text-white font-sans selection:bg-white selection:text-[#01011c]">
      {/* 1. HERO SECTION - TRUE FULLSCREEN */}
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-32" aria-label="Hero">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {shouldShowVideo && !heroVideoError ? (
            <div className="absolute inset-0">
              <video
                ref={heroVideoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/fazenda-medeiros-hero-bg.png"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 70%' }}
                onError={() => setHeroVideoError(true)}
              >
                <source src="/fazenda-medeiros-hero.mp4" type="video/mp4" />
              </video>
            </div>
          ) : (
            <Image
              src="/fazenda-medeiros-hero-bg.png"
              alt="Fazenda Medeiros"
              fill
              className="object-cover object-[center_70%]"
              priority
              sizes="100vw"
            />
          )}
          {/* Heavy dark gradient overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,#01011c_0%,#01011c/40_40%,transparent_60%)]" />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 w-full max-w-4xl flex flex-col gap-8 sm:gap-10 md:gap-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="w-full overflow-hidden">
            <motion.p 
              variants={fadeIn} 
              className="text-white/70 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm md:text-base mb-4 sm:mb-5"
            >
              Lançamento Oficial
            </motion.p>
            
            <div className="overflow-hidden">
              <motion.h1 
                variants={titleReveal} 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-4 sm:mb-5 md:mb-6 break-words"
              >
                Fazenda<br className="hidden sm:block" />Medeiros
              </motion.h1>
            </div>
            
            <motion.p 
              variants={fadeIn} 
              className="text-white/80 font-light leading-relaxed text-sm sm:text-base md:text-lg max-w-2xl break-words"
            >
              Onde a imensidão do mar encontra a alma do campo – um novo jeito de viver.
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/condominios/fazenda-medeiros"
              className="group flex w-full sm:w-auto items-center justify-between gap-3 border border-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 hover:bg-white hover:text-[#01011c] transition-colors duration-300"
            >
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.35em] uppercase whitespace-nowrap">
                Quero receber mais informações
              </span>
              <ArrowRight size={18} strokeWidth={1} className="transform group-hover:translate-x-2 transition-transform duration-500 flex-shrink-0" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[8px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown size={16} strokeWidth={1} className="animate-bounce" />
        </motion.div>
      </section>

      {/* DESTAQUE CONDOMÍNIOS - BRUTALIST GRID */}
      <section className="w-full py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-white text-[#01011c] overflow-hidden">
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          {/* Header */}
          <motion.div className="flex flex-col mb-10 sm:mb-12 md:mb-16" variants={fadeIn}>
            <h2 className="text-[#01011c]/60 text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.32em] uppercase mb-3 sm:mb-4">
              Coleção Exclusiva
            </h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 border-b border-[#01011c]/10 pb-8 md:pb-12">
              <div className="overflow-hidden flex-1">
                <motion.h3 
                  variants={titleReveal} 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#01011c] uppercase leading-[1.1] break-words"
                >
                  <span className="font-medium">CONDOMÍNIOS</span>
                </motion.h3>
              </div>
              <motion.div variants={slideRight} className="flex-shrink-0">
                <Link 
                  href="/condominios" 
                  className="group inline-flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-semibold tracking-[0.3em] uppercase text-[#01011c] hover:text-[#01011c]/60 transition-colors whitespace-nowrap"
                >
                  Ver todos <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Grid de Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-x border-t border-[#01011c]/10 overflow-visible"
            variants={staggerFast}
          >
            {/* CONDOMÍNIO 1 */}
            <Link href="/condominios/quinta-dos-lagos" className="block h-full">
              <motion.div
                className="group relative border-b lg:border-r border-[#01011c]/10 cursor-pointer h-full flex flex-col"
                variants={slideLeft}
                whileHover={{
                  y: -4,
                  boxShadow: '0 12px 24px -6px rgba(1,1,28,0.15)',
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.15 },
                }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src="/imagens/quinta-dos-lagos.png"
                    alt="Quinta dos Lagos — Condomínio Fechado de Alto Padrão"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/10 group-hover:bg-[#01011c]/20 transition-colors duration-300" />
                </div>

                <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-between bg-gradient-to-t from-[#01011c]/95 via-[#01011c]/70 to-transparent">
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-light text-white uppercase mb-2 sm:mb-3 leading-tight break-words">
                      QUINTA DOS LAGOS
                    </h4>
                    <p className="text-white/90 font-light text-[10px] sm:text-xs leading-relaxed uppercase tracking-widest mb-4 line-clamp-3 break-words">
                      O Condomínio Quinta dos Lagos é uma oportunidade exclusiva para investir com segurança. Um projeto inovador que une moradia e lazer.
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-white/40 text-white group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300 flex-shrink-0">
                    <ArrowRight size={14} strokeWidth={1} />
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* CONDOMÍNIO 2 - VALE DO OURO */}
            <Link href="/chales/vale-do-ouro" className="block h-full">
              <motion.div
                className="group relative border-b lg:border-r border-[#01011c]/10 cursor-pointer h-full flex flex-col"
                variants={scaleIn}
                whileHover={{
                  y: -4,
                  boxShadow: '0 12px 24px -6px rgba(1,1,28,0.15)',
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.15 },
                }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src="/imagens/vale-do-ouro.png"
                    alt="Vale do Ouro — Chalés de Alto Padrão"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/10 group-hover:bg-[#01011c]/20 transition-colors duration-300" />
                </div>

                <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-between bg-gradient-to-t from-[#01011c]/95 via-[#01011c]/70 to-transparent">
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-light text-white uppercase mb-2 sm:mb-3 leading-tight break-words">
                      VALE DO OURO
                    </h4>
                    <p className="text-white/90 font-light text-[10px] sm:text-xs leading-relaxed uppercase tracking-widest mb-4 line-clamp-3 break-words">
                      Arquitetura brutalista com vista panorâmica 360°. Conforto alpino, aquecimento radiante e varanda suspensa.
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-white/40 text-white group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300 flex-shrink-0">
                    <ArrowRight size={14} strokeWidth={1} />
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* CONDOMÍNIO 3 - FAZENDA MEDEIROS */}
            <Link href="/condominios/fazenda-medeiros" className="block h-full">
              <motion.div
                className="group relative border-b lg:border-r border-[#01011c]/10 cursor-pointer h-full flex flex-col"
                variants={slideRight}
                whileHover={{
                  y: -4,
                  boxShadow: '0 12px 24px -6px rgba(1,1,28,0.15)',
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.15 },
                }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image
                    src="/imagens/fazenda-medeiros.png"
                    alt="Fazenda Medeiros — Condomínio Residencial"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/10 group-hover:bg-[#01011c]/20 transition-colors duration-300" />
                </div>

                <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-between bg-gradient-to-t from-[#01011c]/95 via-[#01011c]/70 to-transparent">
                  <div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-light text-white uppercase mb-2 sm:mb-3 leading-tight break-words">
                      FAZENDA MEDEIROS
                    </h4>
                    <p className="text-white/90 font-light text-[10px] sm:text-xs leading-relaxed uppercase tracking-widest mb-4 line-clamp-3 break-words">
                      Condomínio residencial fechado com segurança 24h, áreas de lazer e natureza preservada em Joinville.
                    </p>
                  </div>
                  <span className="inline-flex items-center justify-center w-10 h-10 border border-white/40 text-white group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300 flex-shrink-0">
                    <ArrowRight size={14} strokeWidth={1} />
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
