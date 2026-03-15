'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Info,
  MapPin,
  Trees,
  ShieldCheck,
  Car,
  Plane,
  Route,
  ClipboardList,
  Square,
  Palette,
  LayoutGrid,
  Wrench,
  Camera,
  MapPinned,
  Sparkles,
  Droplets,
  Waves,
  Home,
  Activity,
  TreePine,
  Images,
  Banknote,
  Shield,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Landmark,
  Baby,
  Footprints,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import ContactCTA from '@/components/ContactCTA';
import RelatedListings from '@/components/RelatedListings';

type GalleryImage = {
  src: string;
  alt: string;
};

interface FazendaMedeirosClientProps {
  galleryImages: GalleryImage[];
}

export default function FazendaMedeirosClient({
  galleryImages,
}: FazendaMedeirosClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;
  const totalImages = galleryImages.length;
  const heroImage = galleryImages[0];

  const goToPrev = () => {
    setLightboxIndex((i) => (i === null ? 0 : i === 0 ? totalImages - 1 : i - 1));
  };

  const goToNext = () => {
    setLightboxIndex((i) => (i === null ? 0 : i === totalImages - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i === 0 ? totalImages - 1 : (i ?? 0) - 1));
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i === totalImages - 1 ? 0 : (i ?? 0) + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, totalImages]);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-slate-100/60 via-slate-50 to-emerald-50/50 text-gray-900 font-sans pt-20 sm:pt-24 pb-14 px-5 sm:px-8 md:px-12">
      <motion.div
        className="max-w-[75rem] mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.span
          variants={fadeInUp}
          className="inline-flex items-center gap-2 py-1.5 px-5 bg-primary/5 border border-primary/10 text-[0.625rem] font-medium tracking-[0.2em] uppercase text-primary/80 mb-4 rounded-full"
        >
          <Home size={12} />
          Condomínio de Lotes Residenciais
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-primary tracking-tight mb-4"
        >
          Fazenda Medeiros
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-gray-700 font-light text-base sm:text-lg md:text-lg mb-8 max-w-2xl"
        >
          Onde a imensidão do mar encontra a alma do campo — um novo jeito de viver.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary/80 bg-primary/5 py-2.5 px-4 rounded-full border border-primary/10">
            <Waves size={16} className="text-primary" />
            Proximidade com o mar
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary/80 bg-primary/5 py-2.5 px-4 rounded-full border border-primary/10">
            <Trees size={16} className="text-primary" />
            Ambiente de campo
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary/80 bg-primary/5 py-2.5 px-4 rounded-full border border-primary/10">
            <Droplets size={16} className="text-primary" />
            Área de preservação beira-rio e lagoa
          </div>
        </motion.div>

        {heroImage && (
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="relative w-full h-[13.75rem] sm:h-[18.75rem] md:h-[22.5rem] lg:h-[27.5rem] xl:h-[32.5rem] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-slate-800">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                className="object-cover object-top"
                priority
                sizes="100vw"
              />
            </div>
            <p className="mt-6 text-center text-gray-700 font-light text-sm md:text-base tracking-wide italic max-w-2xl mx-auto">
              A Fazenda Medeiros integra natureza, infraestrutura completa e localização estratégica — mar, campo e Rio Medeiros em um só lugar.
            </p>
          </motion.div>
        )}

        <motion.section
          className="mb-24 py-10 px-6 sm:px-8 rounded-3xl bg-slate-50/80 border border-slate-200/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-10 sm:mb-12"
          >
            <Images size={16} className="text-primary" />
            Galeria
          </motion.h2>
          {galleryImages.length > 0 ? (
            <>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {galleryImages.map((image, index) => (
                  <motion.button
                    key={image.src}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group bg-gray-100 ring-1 ring-black/5 shadow-md hover:shadow-xl transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                  </motion.button>
                ))}
              </motion.div>

              <AnimatePresence>
                {lightboxImage && lightboxIndex !== null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 cursor-zoom-out"
                    onClick={() => setLightboxIndex(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Galeria em tela cheia"
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
                      aria-label="Fechar"
                    >
                      <X size={24} />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft size={28} />
                    </button>

                    <motion.div
                      key={lightboxIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        src={lightboxImage.src}
                        alt={lightboxImage.alt}
                        width={1920}
                        height={1080}
                        className="object-contain max-w-full max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl"
                        sizes="90vw"
                      />
                    </motion.div>

                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); goToNext(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
                      aria-label="Próxima foto"
                    >
                      <ChevronRight size={28} />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-medium z-10">
                      {lightboxIndex + 1} / {totalImages}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : null}
          <p className="mt-6 text-center text-xs text-gray-500">
            As imagens são ilustrativas e podem ser atualizadas conforme o avanço do projeto.
          </p>
        </motion.section>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-12 lg:gap-16 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4">
              <MapPin className="text-primary" size={14} />
              Sobre o Empreendimento
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-primary mb-6">
              Onde a imensidão do mar encontra a alma do campo.
            </h3>
            <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-4">
              A Fazenda Medeiros é um empreendimento que integra natureza, infraestrutura completa e localização estratégica. Proximidade com o mar, ambiente de campo, área de preservação beira-rio e lagoa integrada ao projeto compõem um novo jeito de viver.
            </p>
            <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-4">
              Com mais de 32.000 m² de área comum, o condomínio oferece estrutura de lazer completa — Clubhouse, SportClub e RiverPark — além de segurança inteligente e acesso controlado. Lotes de 400 m² a 700 m² para quem busca qualidade de vida e integração com o meio ambiente.
            </p>
            <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed">
              A apenas 8 minutos da praia e 2.500 metros da BR-101, o Fazenda Medeiros une a tranquilidade do campo à praticidade de deslocamento para as principais cidades e atrações da região.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-slate-50 border border-primary/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-lg ring-1 ring-black/5"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <ClipboardList size={20} />
              </div>
              <div>
                <span className="block text-[0.625rem] font-medium tracking-[0.25em] uppercase text-gray-500 mb-2">
                  Ficha Técnica
                </span>
                <h3 className="text-xl font-light text-primary">
                  Dados gerais do empreendimento
                </h3>
              </div>
            </div>
            <dl className="space-y-4 text-sm text-gray-700">
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <Square size={14} className="text-primary/60" /> Área comum
                </dt>
                <dd className="font-medium text-right">32.000 m²</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <LayoutGrid size={14} className="text-primary/60" /> Lotes
                </dt>
                <dd className="font-medium text-right">321 lotes de 400 a 700 m²</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <Trees size={14} className="text-primary/60" /> Área arborizada
                </dt>
                <dd className="font-medium text-right">23.635,98 m²</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <Palette size={14} className="text-primary/60" /> SportClub
                </dt>
                <dd className="font-medium text-right">2.642 m²</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <Home size={14} className="text-primary/60" /> Clubhouse
                </dt>
                <dd className="font-medium text-right">1.732 m²</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <MapPin size={14} className="text-primary/60" /> Localização
                </dt>
                <dd className="font-medium text-right">Estrada Geral de Medeiros</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <Camera size={14} className="text-primary/60" /> Segurança
                </dt>
                <dd className="font-medium text-right">Guarita inteligente, acesso controlado</dd>
              </div>
            </dl>

            <div className="mt-4 flex items-start gap-3 text-xs text-gray-600 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
              <Info size={16} className="text-primary shrink-0 mt-0.5" />
              <p>
                Os dados acima podem ser atualizados a qualquer momento conforme o
                andamento do projeto. Use esta seção para manter as informações
                técnicas sempre alinhadas com o material comercial.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.section
          className="mb-24 py-10 px-6 sm:px-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-6"
          >
            <Route size={16} className="text-primary" />
            Como Chegar
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-slate-50 border border-amber-200/70 rounded-2xl p-6 shadow-md shadow-amber-900/5 hover:shadow-lg hover:shadow-amber-900/10 transition-shadow ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700">
                  <Car size={22} />
                </div>
                <h3 className="text-lg font-medium text-primary">Carro</h3>
              </div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>8 min da praia</li>
                <li>2.500 m da BR-101</li>
                <li>21 km do Beto Carrero World</li>
                <li>28 km do Aeroporto de Navegantes</li>
                <li>43 km de Balneário Camboriú</li>
                <li>59 km de Joinville</li>
                <li>127 km de Florianópolis</li>
                <li>184 km de Curitiba</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-slate-50 border border-blue-200/70 rounded-2xl p-6 shadow-md shadow-blue-900/5 hover:shadow-lg hover:shadow-blue-900/10 transition-shadow ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700">
                  <Plane size={22} />
                </div>
                <h3 className="text-lg font-medium text-primary">Avião</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Aeroporto Internacional de Navegantes a 28 km — acesso fácil para quem vem de outras regiões do país.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-24 py-10 px-6 sm:px-8 rounded-3xl bg-emerald-50/40 border border-emerald-100/80 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-6"
          >
            <MapPinned size={16} className="text-primary" />
            Localização
          </motion.h2>
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary h-fit">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Endereço de referência</h3>
                <p className="text-gray-700">
                  Estrada Geral de Medeiros
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary h-fit">
                <Route size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Proximidades</h3>
                <p className="text-gray-700 text-sm">
                  8 minutos da praia • 2.500 m da BR-101
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-24 py-10 px-6 sm:px-8 rounded-3xl bg-emerald-50/50 border border-emerald-100/80 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <LayoutGrid size={16} className="text-primary" />
            Estrutura do Projeto
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-700 font-light text-sm sm:text-base mb-8 max-w-3xl"
          >
            O empreendimento está dividido em quatro grandes núcleos: Entrada, Clubhouse, SportClub e RiverPark.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: '1) Entrada',
                icon: ShieldCheck,
                color: 'bg-primary/10 text-primary',
                items: ['Guarita de segurança inteligente', 'Acesso controlado', 'Estacionamento para visitantes'],
              },
              {
                title: '2) Clubhouse',
                icon: Home,
                color: 'bg-amber-100 text-amber-700',
                items: ['Academia', 'Lagoa integrada', 'Área de festas', 'Espaço kids', 'Piscina aquecida', 'Piscina semi-olímpica', 'Fireplace', 'Lounges beira-lagoa', 'Sauna', 'Playground', 'Decks sobre a lagoa', 'Vestiários'],
              },
              {
                title: '3) SportClub',
                icon: Activity,
                color: 'bg-teal-100 text-teal-700',
                items: ['Quadra poliesportiva', 'Quadra de tênis', 'Quiosque gourmet', 'Churrasqueiras com rooftop', 'Mini-golf', 'Academia ao ar livre', 'Fireplace', 'Integração de espaços'],
              },
              {
                title: '4) RiverPark',
                icon: TreePine,
                color: 'bg-emerald-100 text-emerald-700',
                items: ['Área de preservação ambiental beira-rio', 'Trilhas ecológicas', 'Conexão com o Rio Medeiros', 'Espaços de contemplação'],
              },
            ].map(({ title, icon: Icon, color, items }) => (
              <motion.div
                key={title}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="bg-white border border-emerald-200/70 rounded-2xl p-6 shadow-md hover:shadow-lg border-emerald-300/60 transition-all ring-1 ring-black/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-medium text-primary">{title}</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-primary/60">•</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-24 py-10 px-6 sm:px-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-6"
          >
            <TreePine size={16} className="text-primary" />
            Elementos Naturais do Projeto
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-3"
          >
            {[
              { label: 'Lagoa interna', icon: Droplets, color: 'text-sky-600 bg-sky-100' },
              { label: 'Área arborizada extensa', icon: Trees, color: 'text-emerald-600 bg-emerald-100' },
              { label: 'Área de preservação ambiental', icon: TreePine, color: 'text-green-600 bg-green-100' },
              { label: 'Beira-rio', icon: Waves, color: 'text-cyan-600 bg-cyan-100' },
              { label: 'Trilhas', icon: Footprints, color: 'text-amber-600 bg-amber-100' },
              { label: 'Integração mar + campo + rio', icon: Landmark, color: 'text-primary bg-primary/10' },
            ].map(({ label, icon: Icon, color }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-2.5 text-sm text-gray-700"
              >
                <span className={`p-1.5 rounded-lg ${color}`}>
                  <Icon size={16} />
                </span>
                {label}
              </span>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-24 py-10 px-6 sm:px-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-10 sm:mb-12"
          >
            <Wrench size={16} className="text-primary shrink-0" />
            Infraestrutura &amp; Amenidades
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {[
              {
                title: 'Segurança inteligente',
                description:
                  'Guarita de segurança e acesso controlado para tranquilidade dos moradores e visitantes.',
              },
              {
                title: 'Lagoa integrada',
                description:
                  'Lagoa interna ao projeto que valoriza a paisagem e cria espaços de convivência à beira d’água.',
              },
              {
                title: 'Área verde e trilhas',
                description:
                  'Mais de 23 mil m² de área arborizada e trilhas ecológicas em conexão com o Rio Medeiros.',
              },
              {
                title: 'Lazer para toda a família',
                description:
                  'Clubhouse e SportClub com espaços para todas as idades: esporte, festas, kids e contemplação.',
              },
              {
                title: 'Infraestrutura completa',
                description:
                  'Mais de 32 mil m² de área comum com estrutura de lazer completa e alto padrão.',
              },
              {
                title: 'Qualidade de vida e integração ambiental',
                description:
                  'Projeto que une mar, campo e rio com foco em bem-estar e preservação do meio ambiente.',
              },
            ].map((item, i) => {
              const icons = [Shield, Droplets, Trees, Baby, Wrench, Landmark];
              const colors = ['bg-primary/10 text-primary', 'bg-sky-100 text-sky-600', 'bg-emerald-100 text-emerald-600', 'bg-pink-100 text-pink-600', 'bg-amber-100 text-amber-600', 'bg-primary/10 text-primary'];
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="bg-white border border-primary/15 rounded-2xl p-6 flex flex-col gap-3 shadow-md hover:shadow-lg hover:border-primary/25 transition-all ring-1 ring-black/5"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${colors[i]}`}>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-semibold tracking-[0.16em] uppercase text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-primary/5 to-emerald-50/50 border border-primary/10 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-8 md:items-center shadow-lg shadow-primary/5"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Banknote size={18} />
                </div>
                <h2 className="text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500">
                  Investimento &amp; Condições
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-primary mb-4">
                Um endereço para qualidade de vida, lazer e integração com a natureza.
              </h3>
              <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-4">
                O Fazenda Medeiros oferece infraestrutura completa de lazer, segurança inteligente e localização estratégica — próximo ao mar, à BR-101 e às principais cidades da região. Condições comerciais personalizadas conforme o perfil do cliente.
              </p>
              <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed">
                Ideal para segunda moradia, lazer ou construção futura, com potencial de valorização associado ao desenvolvimento da região.
              </p>
            </div>

            <div className="w-full md:w-[20rem] flex-shrink-0">
              <div className="bg-white border border-primary/10 rounded-2xl p-5 flex flex-col gap-4 shadow-lg ring-1 ring-black/5">
                <div>
                  <span className="block text-[0.625rem] font-medium tracking-[0.25em] uppercase text-gray-500 mb-1">
                    Valores
                  </span>
                  <p className="text-2xl font-light text-primary">
                    Consulte-nos
                  </p>
                </div>
                <ul className="text-xs text-gray-700 space-y-2">
                  <li>• Condições comerciais personalizadas conforme o perfil do cliente.</li>
                  <li>• Potencial de valorização associado ao desenvolvimento da região.</li>
                  <li>• Ideal para segunda moradia, lazer ou construção futura.</li>
                </ul>
                <div className="mt-2 text-[0.6875rem] text-gray-500 flex items-start gap-2">
                  <Info size={14} className="mt-0.5 text-primary" />
                  <span>
                    Entre em contato para conhecer as condições e disponibilidade de lotes.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <RelatedListings
          title="Conheça também"
          items={[
            { href: '/condominios/quinta-dos-lagos', title: 'Quinta dos Lagos' },
            { href: '/chales/vale-do-ouro', title: 'Vale do Ouro' },
            { href: '/condominios/refugio-das-aguas', title: 'Refúgio das Águas' },
            { href: '/empreendimentos/tauari-residence', title: 'Tauari Residence' },
            { href: '/empreendimentos/horizon', title: 'Residencial Horizon' },
            { href: '/condominios', title: 'Todos os Condomínios' },
            { href: '/empreendimentos', title: 'Empreendimentos' },
          ]}
        />
        <ContactCTA
          headline="Quer receber mais informações sobre o Fazenda Medeiros?"
          whatsappMessage="Olá, 33incorp! Tenho interesse em saber mais sobre o Fazenda Medeiros."
        />
      </motion.div>
    </main>
  );
}
