'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Info,
  MapPin,
  Trees,
  ShieldCheck,
  Car,
  Helicopter,
  Plane,
  Route,
  ClipboardList,
  Square,
  Palette,
  LayoutGrid,
  Wrench,
  Camera,
  CircleDot,
  MapPinned,
  Globe,
  Landmark,
  Sparkles,
  Droplets,
  Footprints,
  Rabbit,
  Waves,
  PartyPopper,
  Flame,
  Target,
  UtensilsCrossed,
  Activity,
  Circle,
  Mountain,
  TreePine,
  Baby,
  Images,
  Banknote,
  Shield,
  Home,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import ContactCTA from '@/components/ContactCTA';
import RelatedListings from '@/components/RelatedListings';

type GalleryImage = {
  src: string;
  alt: string;
};

interface QuintaDosLagosClientProps {
  galleryImages: GalleryImage[];
}

export default function QuintaDosLagosClient({
  galleryImages,
}: QuintaDosLagosClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const lightboxImage = lightboxIndex !== null ? galleryImages[lightboxIndex] : null;
  const totalImages = galleryImages.length;

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
          Condomínio Fechado
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-primary tracking-tight mb-4"
        >
          Quinta dos Lagos
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-gray-700 font-light text-base sm:text-lg md:text-lg mb-8 max-w-2xl"
        >
          Um lugar com muito espaço e segurança para viver e se divertir.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary/80 bg-primary/5 py-2.5 px-4 rounded-full border border-primary/10">
            <MapPin size={16} className="text-primary" />
            Localização privilegiada
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary/80 bg-primary/5 py-2.5 px-4 rounded-full border border-primary/10">
            <Trees size={16} className="text-primary" />
            Natureza e lagos
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary/80 bg-primary/5 py-2.5 px-4 rounded-full border border-primary/10">
            <ShieldCheck size={16} className="text-primary" />
            Segurança e exclusividade
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <div className="relative w-full aspect-[16/9] max-h-[32.5rem] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-slate-200/40">
            <Image
              src="/imagens/quinta%20dos%20lagos/10490D_BMAX_Quinta%20dos%20Lagos_Pasta%20do%20Corretor-1_page-0001.jpg"
              alt="Perspectiva principal do Condomínio Quinta dos Lagos"
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </div>
          <p className="mt-6 text-center text-gray-700 font-light text-sm md:text-base tracking-wide italic max-w-2xl mx-auto">
            Entre lagos, verde e arquitetura contemporânea, o Quinta dos Lagos
            nasce como um refúgio para morar, descansar e investir no longo prazo.
          </p>
        </motion.div>

        <motion.section
          className="mb-16 py-8 px-6 sm:px-8 rounded-3xl bg-slate-50/80 border border-slate-200/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-8"
          >
            <Images size={16} className="text-primary" />
            Galeria
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
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

          <p className="mt-6 text-center text-xs text-gray-500">
            As imagens são ilustrativas e podem ser atualizadas conforme o avanço do projeto.
          </p>
        </motion.section>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-14 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4">
              <MapPin className="text-primary" size={14} />
              Sobre o Condomínio
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-primary mb-6">
              O clima do campo, com o mar a 15 minutos de distância.
            </h3>
            <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-4">
              Localizado na praia de Balneário Piçarras e distante cerca de 7 km da cidade,
              o Quinta dos Lagos é o primeiro Condomínio-Fazenda do litoral norte de Santa Catarina.
            </p>
            <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-4">
              Próxima a pontos turísticos como o Beto Carrero World, a cidade é conhecida por sua
              beleza natural e pelas águas cristalinas de seus mais de 7 km de extensão. Além disso,
              oferece ótima infraestrutura urbana, com diversas opções de gastronomia, marinas e um
              renovado calçadão, próprio para caminhadas.
            </p>
            <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed">
              Possui também uma característica rara: é uma praia com parte de seu território acima
              do nível do mar, em colinas e montanhas, como as da região do empreendimento Quinta dos Lagos.
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
                <dt className="flex items-center gap-2 text-gray-500 text-[11px] uppercase tracking-[0.18em]">
                  <Square size={14} className="text-primary/60" /> Área total
                </dt>
                <dd className="font-medium text-right">553.820 m²</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[11px] uppercase tracking-[0.18em]">
                  <Palette size={14} className="text-primary/60" /> Área de lazer
                </dt>
                <dd className="font-medium text-right">A confirmar</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[11px] uppercase tracking-[0.18em]">
                  <Trees size={14} className="text-primary/60" /> Área verde
                </dt>
                <dd className="font-medium text-right">A confirmar</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[11px] uppercase tracking-[0.18em]">
                  <LayoutGrid size={14} className="text-primary/60" /> Lotes
                </dt>
                <dd className="font-medium text-right">159 lotes de 1.450 a 2.600 m²</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[11px] uppercase tracking-[0.18em]">
                  <MapPin size={14} className="text-primary/60" /> Localização
                </dt>
                <dd className="font-medium text-right">Balneário Piçarras, SC</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[11px] uppercase tracking-[0.18em]">
                  <Wrench size={14} className="text-primary/60" /> Infraestrutura
                </dt>
                <dd className="font-medium text-right">Rede de esgoto, pavimentação, água, drenagem pluvial</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[11px] uppercase tracking-[0.18em]">
                  <Camera size={14} className="text-primary/60" /> Segurança
                </dt>
                <dd className="font-medium text-right">Portaria 24h, câmeras 24h</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-gray-500 text-[11px] uppercase tracking-[0.18em]">
                  <CircleDot size={14} className="text-primary/60" /> Diferencial
                </dt>
                <dd className="font-medium text-right">Heliponto</dd>
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
          className="mb-16 py-8 px-6 sm:px-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Route size={16} className="text-primary" />
            Como Chegar
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
                <li>Navegantes: 16 km</li>
                <li>Florianópolis: 120 km</li>
                <li>Curitiba: 180 km</li>
                <li>São Paulo: 583 km</li>
                <li>Joinville: 66 km</li>
                <li>Blumenau: 64 km</li>
                <li>Balneário Camboriú: 40 km</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-slate-50 border border-teal-200/70 rounded-2xl p-6 shadow-md shadow-teal-900/5 hover:shadow-lg hover:shadow-teal-900/10 transition-shadow ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-teal-100 text-teal-700">
                  <Helicopter size={22} />
                </div>
                <h3 className="text-lg font-medium text-primary">Helicóptero</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                1 Heliponto com capacidade para 3 helicópteros.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Balneário Camboriú: 28 km | 8 min</li>
                <li>Itajaí: 18 km | 5 min</li>
                <li>Florianópolis: 103 km | 28 min</li>
                <li>Joinville: 52 km | 14 min</li>
                <li>Curitiba: 142 km | 38 min</li>
                <li>Blumenau: 37 km | 10 min</li>
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
                Tempos de voo até o Aeroporto Internacional de Navegantes:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>Porto Alegre: 1h</li>
                <li>Curitiba: 2h</li>
                <li>São Paulo: 1h</li>
                <li>Rio de Janeiro: 1h 20min</li>
                <li>Campo Grande: 2h 40min</li>
                <li>Cuiabá: 3h 10min</li>
                <li>Brasília: 3h 40min</li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16 py-8 px-6 sm:px-8 rounded-3xl bg-emerald-50/40 border border-emerald-100/80 shadow-sm"
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
                <h3 className="text-lg font-medium text-primary mb-2">Endereço</h3>
                <p className="text-gray-700">
                  Estrada Geral Morro Alto, Morretes<br />
                  Balneário Piçarras, SC
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary h-fit">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Coordenadas geográficas</h3>
                <p className="text-gray-700 text-sm font-mono">
                  Latitude 26° 45&apos; 28&quot; | Longitude 48° 44&apos; 34&quot;
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary h-fit">
                <Landmark size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-primary mb-3">Pontos de interesse próximos</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                <li>1. Challenge Rock Café</li>
                <li>2. Restaurante General Küster</li>
                <li>3. Trattoria Cordazzo&apos;s</li>
                <li>4. Marina Park</li>
                <li>5. Madero Gourmet Burger</li>
                <li>6. Havan</li>
                <li>7. Iate Clube Piçarras</li>
                <li>8. Ilha Feia</li>
                <li>9. Ilha do Itacolomi</li>
                <li>10. Parque Beto Carrero World</li>
                <li>11. Aeroporto de Navegantes</li>
                <li>12. Aeroporto de Joinville</li>
                <li>13. Hospital Marieta Konder - Itajaí</li>
                <li>14. Rede Top Supermercados</li>
              </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16 py-8 px-6 sm:px-8 rounded-3xl bg-emerald-50/50 border border-emerald-100/80 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Sparkles size={16} className="text-primary" />
            Estrutura de Lazer
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-700 font-light text-sm sm:text-base mb-6 max-w-3xl"
          >
            Pensado para trazer bem-estar, lazer e conforto a seus moradores, o Condomínio-Fazenda
            Quinta dos Lagos oferece uma completa infraestrutura de recreação e lazer com muito luxo
            e alto padrão. Conheça tudo o que o Quinta dos Lagos oferece:
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              { label: '5 lagos (2 para pesca e 3 para lazer)', icon: Droplets, color: 'text-sky-600 bg-sky-100' },
              { label: 'Pontes e áreas de lazer', icon: Landmark, color: 'text-amber-600 bg-amber-100' },
              { label: 'Pista para caminhadas', icon: Footprints, color: 'text-emerald-600 bg-emerald-100' },
              { label: 'Centro equestre', icon: Rabbit, color: 'text-amber-700 bg-amber-100' },
              { label: 'Piscina', icon: Waves, color: 'text-cyan-600 bg-cyan-100' },
              { label: '3 salões de festas', icon: PartyPopper, color: 'text-rose-600 bg-rose-100' },
              { label: '2 canchas de bocha (coberta e ao ar livre)', icon: Circle, color: 'text-teal-600 bg-teal-100' },
              { label: 'Quiosques com churrasqueiras', icon: Flame, color: 'text-orange-600 bg-orange-100' },
              { label: 'Mini golf', icon: Target, color: 'text-green-600 bg-green-100' },
              { label: 'Espaço gourmet', icon: UtensilsCrossed, color: 'text-amber-600 bg-amber-100' },
              { label: 'Quadra poliesportiva', icon: Activity, color: 'text-primary bg-primary/10' },
              { label: 'Quadra de tênis', icon: Circle, color: 'text-lime-600 bg-lime-100' },
              { label: 'Campo de futebol', icon: Mountain, color: 'text-emerald-700 bg-emerald-100' },
              { label: 'Gazebos', icon: TreePine, color: 'text-emerald-600 bg-emerald-100' },
              { label: 'Boulevard', icon: Route, color: 'text-slate-600 bg-slate-100' },
              { label: 'Praça com playground', icon: Baby, color: 'text-pink-600 bg-pink-100' },
              { label: 'Mini fazenda', icon: Trees, color: 'text-amber-600 bg-amber-100' },
            ].map(({ label, icon: Icon, color }) => (
              <motion.div
                key={label}
                whileHover={{ x: 4, transition: { duration: 0.15 } }}
                className="flex items-center gap-3 bg-white border border-emerald-200/70 rounded-xl px-4 py-3 shadow-md hover:shadow-lg hover:border-emerald-300/60 transition-all ring-1 ring-black/5"
              >
                <div className={`p-2 rounded-lg shrink-0 ${color}`}>
                  <Icon size={18} />
                </div>
                <span className="text-sm text-gray-700">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16 py-8 px-6 sm:px-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-10 sm:mb-12"
          >
            <Wrench size={16} className="text-primary shrink-0" />
            Infraestrutura &amp; Amenidades
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
          >
            {[
              {
                title: 'Portaria e segurança',
                description:
                  'Controle de acesso planejado para garantir tranquilidade aos moradores e visitantes.',
              },
              {
                title: 'Lagos e áreas de água',
                description:
                  'Espelhos d’água que valorizam a paisagem, ajudam no microclima e criam espaços contemplativos.',
              },
              {
                title: 'Áreas verdes e trilhas',
                description:
                  'Conexão direta com a natureza em caminhos que integram lazer e bem-estar diário.',
              },
              {
                title: 'Lazer para toda a família',
                description:
                  'Espaços pensados para diferentes idades: convivência, contemplação, esporte e descanso.',
              },
              {
                title: 'Infraestrutura completa',
                description:
                  'Projeto preparado para atender às demandas de um condomínio contemporâneo, com foco em conforto.',
              },
              {
                title: 'Potencial de valorização',
                description:
                  'Concepção e implantação voltadas para longo prazo, com grande potencial de retorno ao investidor.',
              },
            ].map((item, i) => {
              const icons = [Shield, Droplets, Trees, Baby, Wrench, Banknote];
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
          className="mb-12"
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
                <h2 className="text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500">
                  Investimento &amp; Condições
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-primary mb-4">
                Um endereço para morar, descansar e valorizar patrimônio.
              </h3>
              <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-4">
                Estruture aqui o posicionamento comercial do Quinta dos Lagos: condições
                de entrada, modalidades de pagamento, diferenciais para investidores e
                famílias que buscam um condomínio exclusivo.
              </p>
              <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed">
                Use esta seção para destacar o ticket médio, possibilidades de
                financiamento e eventuais garantias ou serviços agregados.
              </p>
            </div>

            <div className="w-full md:w-[20rem] flex-shrink-0">
              <div className="bg-white border border-primary/10 rounded-2xl p-5 flex flex-col gap-4 shadow-lg ring-1 ring-black/5">
                <div>
                  <span className="block text-[10px] font-medium tracking-[0.25em] uppercase text-gray-500 mb-1">
                    A Partir de
                  </span>
                  <p className="text-2xl font-light text-primary">
                    [Definir valor de referência]
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
                    Substitua os valores e bullets acima pelas condições comerciais reais
                    do produto.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <RelatedListings
          title="Conheça também"
          items={[
            { href: '/condominios/fazenda-medeiros', title: 'Fazenda Medeiros' },
            { href: '/chales/vale-do-ouro', title: 'Vale do Ouro' },
            { href: '/condominios/refugio-das-aguas', title: 'Refúgio das Águas' },
            { href: '/empreendimentos/tauari-residence', title: 'Tauari Residence' },
            { href: '/empreendimentos/horizon', title: 'Residencial Horizon' },
            { href: '/condominios', title: 'Todos os Condomínios' },
            { href: '/empreendimentos', title: 'Empreendimentos' },
          ]}
        />
        <ContactCTA
          headline="Quer receber mais informações sobre o Quinta dos Lagos?"
          whatsappMessage="Olá, 33incorp! Tenho interesse em saber mais sobre o Quinta dos Lagos."
        />
      </motion.div>
    </main>
  );
}

