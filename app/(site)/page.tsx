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

// Cards: entrada lateral para dar ênfase — 1º da esquerda, 2º centro em destaque, 3º da direita
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

// Card do centro: sobe levemente + escala para destaque
const cardCenter: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Compatibilidade com uso antigo (mapear para as novas)
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

const EmBreveRibbon = () => (
  <div className="absolute left-0 top-6 z-20">
    <LuxuryTag variant="gold" verticalLeft>Em Breve</LuxuryTag>
  </div>
);

const SoldRibbon = () => (
  <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex justify-center">
    <LuxuryTag variant="bronze">100% Vendido</LuxuryTag>
  </div>
);

type HeroFadePhase = 'visible' | 'fadingOut' | 'fadingIn';

const HERO_FADE_OUT_START = 1.2; // segundos antes do fim para iniciar fade out
const HERO_FADE_IN_DURATION = 600; // ms

export default function HomePage() {
  const [heroVideoError, setHeroVideoError] = useState(false);
  const [shouldShowVideo, setShouldShowVideo] = useState(false);
  const [heroFadePhase, setHeroFadePhase] = useState<HeroFadePhase>('visible');
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const wasNearEndRef = useRef(false);
  const fadeInTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop) {
      setShouldShowVideo(false);
      return;
    }

    const connection = (navigator as any).connection;
    const isSlowConnection =
      connection &&
      (connection.effectiveType === '2g' ||
        connection.effectiveType === 'slow-2g');

    if (isSlowConnection) {
      setShouldShowVideo(false);
      return;
    }

    setShouldShowVideo(true);
  }, []);

  const onHeroTimeUpdate = () => {
    const video = heroVideoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    const { currentTime, duration } = video;
    if (currentTime >= duration - HERO_FADE_OUT_START) {
      wasNearEndRef.current = true;
      setHeroFadePhase('fadingOut');
    } else if (wasNearEndRef.current && currentTime < 0.4) {
      wasNearEndRef.current = false;
      setHeroFadePhase('fadingIn');
      if (fadeInTimeoutRef.current) clearTimeout(fadeInTimeoutRef.current);
      fadeInTimeoutRef.current = setTimeout(() => {
        setHeroFadePhase('visible');
        fadeInTimeoutRef.current = null;
      }, HERO_FADE_IN_DURATION);
    }
  };

  useEffect(() => {
    return () => {
      if (fadeInTimeoutRef.current) clearTimeout(fadeInTimeoutRef.current);
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#01011c] text-white font-sans selection:bg-white selection:text-[#01011c]">

      {/* 1. HERO SECTION - TRUE FULLSCREEN */}
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center px-5 sm:px-8 lg:px-16 py-20 sm:py-24 lg:py-32" aria-label="Hero">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {shouldShowVideo && !heroVideoError ? (
            <div
              className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
              style={{
                opacity: heroFadePhase === 'fadingOut' ? 0 : 1,
                transitionDuration:
                  heroFadePhase === 'fadingOut'
                    ? '1200ms'
                    : heroFadePhase === 'fadingIn'
                      ? `${HERO_FADE_IN_DURATION}ms`
                      : undefined,
                transitionTimingFunction:
                  heroFadePhase === 'fadingIn' ? 'ease-in' : 'ease-out',
              }}
            >
              <video
                ref={heroVideoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/fazenda-medeiros-hero-bg.png"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center 70%' }}
                onError={() => setHeroVideoError(true)}
                onTimeUpdate={onHeroTimeUpdate}
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
          {/* Heavy dark gradient overlay to ensure text readability a la Laguna */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,#01011c_0%,#01011c/40_40%,transparent_60%)]" />
        </div>

        {/* Content Aligned Center/Top */}
          <motion.div
          className="relative z-10 w-full max-w-7xl mr-auto flex flex-col gap-10 sm:gap-12"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="max-w-3xl overflow-hidden mt-20 sm:mt-24 md:mt-28">
            <motion.p variants={fadeIn} className="text-white/70 font-medium tracking-[0.3em] uppercase text-[11px] md:text-xs mb-5">
              Lançamento Oficial
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1 variants={titleReveal} className="text-[2.5rem] sm:text-4xl md:text-6xl lg:text-[5.5rem] font-medium text-white tracking-tight leading-[0.95] mb-5 sm:mb-6 md:mb-8">
                Fazenda<br />Medeiros
              </motion.h1>
            </div>
            <motion.p variants={fadeIn} className="text-white/80 font-light leading-relaxed text-base sm:text-lg md:text-xl max-w-2xl">
              Onde a imensidão do mar encontra a alma do campo – um novo jeito de viver.
            </motion.p>
          </div>

          <motion.div variants={fadeIn} className="flex-shrink-0 w-full sm:w-auto">
            <Link
              href="/condominios/fazenda-medeiros"
              className="group flex w-full sm:w-auto items-center justify-between border border-white px-8 sm:px-12 py-5 sm:py-7 min-w-0 sm:min-w-[280px] max-w-sm sm:max-w-max hover:bg-white hover:text-[#01011c] transition-colors duration-300"
            >
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.35em] sm:tracking-[0.4em] uppercase">Quero receber mais informações</span>
              <ArrowRight size={22} strokeWidth={1} className="transform group-hover:translate-x-3 transition-transform duration-500" />
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

      {/* DESTAQUE CONDOMÍNIOS - BRUTALIST GRID (fundo branco) */}
      <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-16 bg-white text-[#01011c] overflow-hidden">
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div className="flex flex-col mb-12 md:mb-16" variants={fadeIn}>
            <h2 className="text-[#01011c]/60 text-[11px] md:text-xs font-semibold tracking-[0.32em] uppercase mb-3">Coleção Exclusiva</h2>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#01011c]/10 pb-10 md:pb-14">
              <div className="overflow-hidden">
                <motion.h3 variants={titleReveal} className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#01011c] uppercase">
                  <span className="font-medium">CONDOMÍNIOS</span>
                </motion.h3>
              </div>
              <motion.div variants={slideRight}>
                <Link href="/condominios" className="group flex items-center gap-4 text-[10px] font-semibold tracking-[0.3em] uppercase text-[#01011c] hover:text-[#01011c]/60 transition-colors">
                  Ver todos os Condomínios <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 border-x border-t border-[#01011c]/10 overflow-visible"
            variants={staggerFast}
          >
            {/* CONDOMÍNIO 1 */}
            <Link href="/condominios/quinta-dos-lagos" className="block h-full">
              <motion.div
                className="group relative border-b lg:border-r border-[#01011c]/10 cursor-pointer h-full"
                variants={slideLeft}
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 24px 48px -12px rgba(1,1,28,0.22)',
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1] as const,
                  },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.15 },
                }}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/imagens/quinta-dos-lagos.png"
                    alt="Quinta dos Lagos — Condomínio Fechado de Alto Padrão"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/10 group-hover:bg-[#01011c]/20 transition-colors duration-300" />

                  {/* selo de lançamento removido */}

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col bg-gradient-to-t from-[#01011c]/85 via-[#01011c]/60 to-transparent">
                    <h4 className="text-3xl font-light text-white uppercase mb-4">
                      QUINTA DOS LAGOS
                    </h4>
                    <p className="text-white/90 font-light text-[11px] leading-relaxed uppercase tracking-widest mb-6 max-w-[80%]">
                      O Condomínio Quinta dos Lagos é uma oportunidade exclusiva para investir com
                      segurança. Um projeto inovador que une moradia e lazer em um só lugar.
                    </p>
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-white/40 text-white group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300">
                      <ArrowRight size={16} strokeWidth={1} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 2 - vale do ouro */}
            <Link href="/chales/vale-do-ouro" className="block h-full">
              <motion.div
                className="group relative border-b lg:border-r border-[#01011c]/10 cursor-pointer h-full"
                variants={scaleIn}
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 24px 48px -12px rgba(1,1,28,0.22)',
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1] as const,
                  },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.15 },
                }}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/imagens/vale-do-ouro.png"
                    alt="Vale do Ouro — Chalés de Alto Padrão com Cachoeiras Privativas"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/10 group-hover:bg-[#01011c]/20 transition-colors duration-300" />

                  {/* selo de lançamento removido */}

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col bg-gradient-to-t from-[#01011c]/85 via-[#01011c]/60 to-transparent">
                    <h4 className="text-3xl font-light text-white uppercase mb-4">
                      VALE DO OURO
                    </h4>
                    <p className="text-white/90 font-light text-[11px] leading-relaxed uppercase tracking-widest mb-6 max-w-[80%]">
                      Arquitetura brutalista com vista panorâmica 360°. Conforto alpino, aquecimento
                      radiante e varanda suspensa sobre o vale.
                    </p>
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-white/40 text-white group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300">
                      <ArrowRight size={16} strokeWidth={1} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Card 3 - Refúgio das Águas (em breve / apagado) */}
            <Link href="/condominios/refugio-das-aguas" className="block h-full">
              <motion.div
                className="group relative border-b border-[#01011c]/10 cursor-pointer h-full"
                variants={slideRight}
                whileHover={{
                  y: -8,
                  boxShadow:
                    '0 24px 48px -12px rgba(1,1,28,0.22)',
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1] as const,
                  },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.15 },
                }}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-800">
                  <Image
                    src="/imagens/refugio-da-agua.png"
                    alt="Refúgio das Águas"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-[3s] group-hover:scale-105 opacity-50 grayscale"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/75 transition-colors duration-300" />
                  <EmBreveRibbon />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col bg-gradient-to-t from-[#01011c]/90 via-[#01011c]/50 to-transparent">
                    <h4 className="text-3xl font-light text-white/50 uppercase mb-4">
                      REFÚGIO DAS ÁGUAS
                    </h4>
                    <p className="text-white/40 font-light text-[11px] leading-relaxed uppercase tracking-widest mb-6 max-w-[80%]">
                      À beira de lagos cristalinos, design contemporâneo com amâncias de resort.
                      Hospedagem gerenciada com retorno garantido.
                    </p>
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-white/15 text-white/35 group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300">
                      <ArrowRight size={16} strokeWidth={1} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* PARCEIROS - CARROSSEL INFINITO (Abaixo do primeiro destaque) */}
      <section className="py-20 md:py-28 bg-white overflow-hidden border-t border-[#01011c]/5" aria-label="Nossos Parceiros">
        <motion.div
          className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[#01011c]/60 text-[11px] md:text-xs font-semibold tracking-[0.32em] uppercase mb-3">Conexões Estratégicas</h2>
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-[#01011c] uppercase mb-6 md:mb-8">
              Clientes e <span className="font-medium">Parceiros</span>
            </h3>
            <div className="w-12 h-[1px] bg-[#01011c]/10" />
          </div>
        </motion.div>

        <div className="relative w-full overflow-hidden flex">
          {/* Infinite Scroll Container */}
          <motion.div
            className="flex whitespace-nowrap gap-1 md:gap-2 items-center"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-1 md:gap-2 items-center px-0">
                {[
                  {
                    name: "Cacau Show",
                    logo: "/parceiros/cacau.png",
                    url: "https://www.cacaushow.com.br/",
                  },
                  {
                    name: "Daxo",
                    logo: "/parceiros/daxo.png",
                    url: "https://www.daxo.com.br/",
                  },
                  {
                    name: "Milium",
                    logo: "/parceiros/milium.png",
                    url: "https://www.milium.com.br/",
                  },
                  {
                    name: "FG Empreendimentos",
                    logo: "/parceiros/fg.png",
                    url: "https://fgempreendimentos.com.br/",
                  },
                  {
                    name: "Halsten",
                    logo: "/parceiros/halsten.png",
                    url: "https://halsten.com.br/",
                  },
                  {
                    name: "Komprao",
                    logo: "/parceiros/komprao.png",
                    url: "https://www.komprao.com.br/",
                  },
                ].map((partner, index) => (
                  <a
                    key={`${setIndex}-${index}`}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-28 sm:w-40 md:w-60 h-16 sm:h-20 md:h-28 flex-shrink-0 hover:scale-110 transition-all duration-500 ease-out z-20"
                    aria-label={partner.name}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </a>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Side Fades for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* DESTAQUE EMPREENDIMENTOS - GRADE 3 COLUNAS (fundo azul escuro) */}
      <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-16 bg-[#01011c] overflow-hidden">
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div className="flex flex-col mb-12 md:mb-16" variants={fadeIn}>
            <h2 className="text-white/60 text-[11px] md:text-xs font-semibold tracking-[0.32em] uppercase mb-3">Conceito Vertical</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10 md:pb-14">
              <div className="overflow-hidden">
                <motion.h3 variants={titleReveal} className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight uppercase text-white">
                  <span className="font-medium">Empreendimentos</span>
                </motion.h3>
              </div>
              <motion.div variants={slideRight}>
                <Link href="/empreendimentos" className="group flex items-center gap-4 text-[10px] font-semibold tracking-[0.3em] uppercase text-white hover:text-white/70 transition-colors">
                  Ver todos os Empreendimentos <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 border-x border-t border-white/10 overflow-visible"
            variants={staggerFast}
          >
            {/* EMPREENDIMENTO 1 */}
            <Link href="/empreendimentos/tauari-residence" className="block h-full">
              <motion.div
                className="group relative border-b lg:border-r border-white/10 cursor-pointer h-full"
                variants={slideLeft}
                whileHover={{ y: -8, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#0A0A3A]">
                  <Image
                    src="/imagens/tauari.png"
                    alt="Tauari Residence"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/20 group-hover:bg-[#01011c]/40 transition-colors duration-300" />

                  {/* selo de lançamento removido */}

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col bg-gradient-to-t from-[#01011c]/85 via-[#01011c]/60 to-transparent">
                    <h4 className="text-3xl font-light text-white uppercase mb-4">Tauari<br />Residence</h4>
                    <p className="text-white/80 font-light text-[11px] leading-relaxed uppercase tracking-widest mb-6 max-w-[80%]">
                      Tauari Residence é o primeiro empreendimento autoral da Group 33: arquitetura contemporânea, plantas otimizadas e diferenciais exclusivos.
                    </p>
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-white/30 text-white group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300">
                      <ArrowRight size={16} strokeWidth={1} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* EMPREENDIMENTO 2 - 33 INCORP RESIDENCE (EM BREVE) */}
            <Link href="/empreendimentos/horizon" className="block h-full">
              <motion.div
                className="group relative border-b lg:border-r border-white/10 cursor-pointer h-full"
                variants={scaleIn}
                whileHover={{ y: -8, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#0A0A3A]">
                  <Image
                    src="/novoempre.jpeg"
                    alt="33 Incorp Residence"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/20 group-hover:bg-[#01011c]/40 transition-colors duration-300" />
                  <EmBreveRibbon />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col bg-gradient-to-t from-[#01011c]/85 via-[#01011c]/60 to-transparent">
                    <h4 className="text-3xl font-light text-white uppercase mb-4">33 Incorp Residence</h4>
                    <p className="text-white/80 font-light text-[11px] leading-relaxed uppercase tracking-widest mb-6 max-w-[80%]">
                      Torre residencial contemporânea com foco em design autoral, conforto e valorização patrimonial, em uma localização estratégica de Joinville.
                    </p>
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-white/30 text-white group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300">
                      <ArrowRight size={16} strokeWidth={1} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* EMPREENDIMENTO 3 - FICTÍCIO (AURORA) */}
            <Link href="/empreendimentos/empreendimento-01" className="block h-full">
              <motion.div
                className="group relative border-b border-white/10 cursor-pointer h-full"
                variants={slideRight}
                whileHover={{ y: -8, boxShadow: '0 24px 48px -12px rgba(0,0,0,0.35)', transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-[#0A0A3A]">
                  <Image
                    src="/imagens/aurora.png"
                    alt="Aurora Residences"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-[3s] group-hover:scale-105 opacity-50 grayscale"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/85 transition-colors duration-300" />
                  <EmBreveRibbon />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                    <h4 className="text-3xl font-light text-white/50 uppercase mb-4">Aurora<br />Residences</h4>
                    <p className="text-white/40 font-light text-[11px] leading-relaxed uppercase tracking-widest mb-6 max-w-[80%]">
                      Design orgânico inspirado nas curvas do litoral. Studios e apartamentos de 1 e 2 dormitórios com rooftop panorâmico e automação residencial completa.
                    </p>
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-white/15 text-white/35 group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300">
                      <ArrowRight size={16} strokeWidth={1} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* DESTAQUE CONDOMÍNIOS - GRADE 3 COLUNAS (fundo branco) */}
      <section className="py-20 md:py-28 px-5 sm:px-8 lg:px-16 bg-white text-[#01011c] overflow-hidden">
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
        >
          <motion.div className="flex flex-col mb-12 md:mb-16" variants={fadeIn}>
            <h2 className="text-[#01011c]/60 text-[11px] md:text-xs font-semibold tracking-[0.32em] uppercase mb-3">Vida em Comunidade</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#01011c]/10 pb-10 md:pb-14">
              <div className="overflow-hidden">
                <motion.h3 variants={titleReveal} className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-[#01011c] uppercase">
                  <span className="font-medium">Geminados</span>
                </motion.h3>
              </div>
              <motion.div variants={slideRight}>
                <Link href="/geminado" className="group flex items-center gap-4 text-[10px] font-semibold tracking-[0.3em] uppercase text-[#01011c] hover:text-[#01011c]/60 transition-colors">
                  Ver todos os Geminados <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 border-x border-t border-[#01011c]/10 overflow-visible"
            variants={staggerFast}
          >
            {/* CONDOMÍNIO 1 - BOM RETIRO */}
            <Link href="/geminado" className="block h-full">
              <motion.div
                className="group relative border-b lg:border-r border-[#01011c]/10 cursor-pointer h-full"
                variants={slideLeft}
                whileHover={{ y: -8, boxShadow: '0 24px 48px -12px rgba(1,1,28,0.22)', transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/imagens/bomretiro.png"
                    alt="Bom Retiro"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/10 group-hover:bg-[#01011c]/20 transition-colors duration-300" />

                  <SoldRibbon />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-[#01011c]/85 via-[#01011c]/40 to-transparent">
                    <h4 className="text-3xl font-light text-white uppercase mb-4">Bom<br />Retiro</h4>
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-white/40 text-white group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300">
                      <ArrowRight size={16} strokeWidth={1} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* CONDOMÍNIO 2 - SAGUAÇU */}
            <Link href="/geminado" className="block h-full">
              <motion.div
                className="group relative border-b lg:border-r border-[#01011c]/10 cursor-pointer h-full"
                variants={scaleIn}
                whileHover={{ y: -8, boxShadow: '0 24px 48px -12px rgba(1,1,28,0.22)', transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/imagens/saguacu.png"
                    alt="Saguaçu"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/10 group-hover:bg-[#01011c]/20 transition-colors duration-300" />

                  <SoldRibbon />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-[#01011c]/85 via-[#01011c]/40 to-transparent">
                    <h4 className="text-3xl font-light text-white uppercase mb-4">Saguaçu</h4>
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-white/40 text-white group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300">
                      <ArrowRight size={16} strokeWidth={1} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* CONDOMÍNIO 3 - GLÓRIA */}
            <Link href="/geminado" className="block h-full">
              <motion.div
                className="group relative border-b border-[#01011c]/10 cursor-pointer h-full"
                variants={slideRight}
                whileHover={{ y: -8, boxShadow: '0 24px 48px -12px rgba(1,1,28,0.22)', transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } }}
                whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
              >
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-gray-100">
                  <Image
                    src="/imagens/gloria%20-%20Copia.png"
                    alt="Glória"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[#01011c]/5 transition-colors duration-300" />

                  <SoldRibbon />

                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-[#01011c]/85 via-[#01011c]/40 to-transparent">
                    <h4 className="text-3xl font-light text-white uppercase mb-4">Glória</h4>
                    <span className="inline-flex items-center justify-center w-12 h-12 border border-white/20 text-white/40 group-hover:bg-white group-hover:text-[#01011c] transition-all duration-300">
                      <ArrowRight size={16} strokeWidth={1} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
