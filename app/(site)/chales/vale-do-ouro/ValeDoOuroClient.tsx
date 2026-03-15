'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Info,
  MapPin,
  Trees,
  ClipboardList,
  Square,
  LayoutGrid,
  Globe,
  Landmark,
  Sparkles,
  Droplets,
  Footprints,
  PartyPopper,
  TreePine,
  Images,
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
  caption?: string;
};

type SectionImages = {
  sobre?: GalleryImage[];
  lazer?: GalleryImage[];
};

interface ValeDoOuroClientProps {
  galleryImages: GalleryImage[];
  heroImage: { src: string; alt: string };
  sectionImages?: SectionImages;
}

const HERO_IMAGE_FALLBACK = '/imagens/valedoouro/1.jpg';

export default function ValeDoOuroClient({
  galleryImages,
  heroImage,
  sectionImages = {},
}: ValeDoOuroClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const heroSrc = heroImage?.src ?? (galleryImages.length > 0 ? galleryImages[0].src : HERO_IMAGE_FALLBACK);
  const heroAlt = heroImage?.alt ?? 'Vale do Ouro - Vista principal';
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
    <main className="w-full min-h-screen bg-gradient-to-b from-slate-100/60 via-slate-50 to-emerald-50/50 text-gray-900 font-sans pt-28 sm:pt-32 pb-20 px-5 sm:px-8 md:px-12">
      <motion.div
        className="max-w-[1200px] mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.span
          variants={fadeInUp}
          className="inline-flex items-center gap-2 py-1.5 px-5 bg-primary/5 border border-primary/10 text-[10px] font-medium tracking-[0.2em] uppercase text-primary/80 mb-6 rounded-full"
        >
          <Trees size={12} />
          Chalés
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-7xl font-light text-primary tracking-tight mb-6"
        >
          Vale do Ouro
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-gray-700 font-light text-base sm:text-lg md:text-xl mb-10 max-w-2xl"
        >
          Um local cercado pelas belezas naturais do Vale do Ouro, com cachoeiras privativas e integração total à natureza.
        </motion.p>

        <motion.div variants={fadeInUp} className="mb-24">
          <div className="relative w-full aspect-[16/9] max-h-[32.5rem] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-slate-200/40">
            <Image
              src={heroSrc}
              alt={heroAlt}
              fill
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </div>
          <p className="mt-6 text-center text-gray-700 font-light text-sm md:text-base tracking-wide italic max-w-2xl mx-auto">
            Onde o verde se encontra com a exclusividade.
          </p>
          <p className="mt-3 text-center text-gray-600 font-light text-sm md:text-base max-w-2xl mx-auto">
            Um refúgio com vista privilegiada, trilhas ecológicas e experiência única em meio à biodiversidade da região.
          </p>
        </motion.div>

        <motion.section
          className="mb-24 py-10 px-6 sm:px-8 rounded-3xl bg-slate-50/80 border border-slate-200/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center justify-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-10 sm:mb-12"
          >
            <Images size={16} className="text-primary" />
            Galeria
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div key={image.src} variants={fadeInUp} className="flex flex-col gap-2">
                <motion.button
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
                {image.caption && (
                  <p className="text-center text-xs text-gray-600 font-light">{image.caption}</p>
                )}
              </motion.div>
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

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10">
                  <span className="px-4 py-2 rounded-full bg-black/50 text-white text-sm font-medium">
                    {lightboxIndex + 1} / {totalImages}
                  </span>
                  {lightboxImage?.caption && (
                    <span className="px-4 py-1.5 rounded-full bg-black/50 text-white text-xs font-light max-w-[90vw] text-center">
                      {lightboxImage.caption}
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-6 text-center text-xs text-gray-500">
            As imagens são ilustrativas e podem ser atualizadas conforme o avanço do projeto.
          </p>
        </motion.section>

        <motion.section
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Info className="text-primary" size={14} />
            Sobre o Empreendimento
          </motion.h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-primary mb-6">
            O Vale do Ouro é um empreendimento exclusivo composto por cabanas integradas à natureza.
          </h3>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-4">
            Projetadas para proporcionar conforto, privacidade e conexão total com o ambiente natural. O projeto une arquitetura funcional, moderna e aconchegante a uma implantação que valoriza a paisagem e a preservação ambiental.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-6">
            As unidades foram desenvolvidas para oferecer:
          </motion.p>
          <motion.ul
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 font-light text-sm sm:text-base mb-8"
          >
            {['Experiência privativa', 'Integração com a natureza', 'Vista como diferencial exclusivo', 'Infraestrutura planejada para conforto', 'Ambientes instagramáveis e acolhedores'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-primary">•</span> {item}
              </li>
            ))}
          </motion.ul>
          {sectionImages.sobre && sectionImages.sobre.length > 0 && (
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectionImages.sobre.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md ring-1 ring-black/5">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  {img.caption && (
                    <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs font-medium py-2 px-3 text-center">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          )}
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
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Trees size={16} className="text-primary" />
            Experiência e Natureza
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base mb-6">
            Um local cercado pelas belezas naturais do Vale do Ouro. O empreendimento está inserido em uma região com:
          </motion.p>
          <motion.ul variants={fadeInUp} className="space-y-2 text-gray-700 text-sm sm:text-base mb-6">
            <li>• Cachoeira do Escorregador – 320 metros</li>
            <li>• Cachoeira do Pulo – 460 metros</li>
            <li>• Cachoeira do Poço – 520 metros</li>
            <li>• Cachoeira do Véu – 620 metros</li>
            <li>• Trilhas ecológicas</li>
            <li>• Birdwatching (observação de pássaros selvagens)</li>
          </motion.ul>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base mb-2">
            Cachoeiras privativas com acesso por trilha a poucos minutos a pé do empreendimento.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base">
            Espaço totalmente integrado à natureza, proporcionando momentos de contemplação, descanso e conexão com a biodiversidade da região.
          </motion.p>
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
            <MapPin size={16} className="text-primary" />
            Localização
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base mb-6">
            Localização estratégica com fácil acesso:
          </motion.p>
          <motion.ul variants={fadeInUp} className="space-y-2 text-gray-700 text-sm sm:text-base mb-4">
            <li>• 33 minutos da Rodoviária de Joinville</li>
            <li>• 40 minutos do centro de Joinville</li>
            <li>• 1h32 do Aeroporto Internacional de Navegantes</li>
            <li>• 3h30 de Florianópolis</li>
          </motion.ul>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base">
            Acesso pela Estrada Salto I.
          </motion.p>
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
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <LayoutGrid size={16} className="text-primary" />
            Implantação
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base mb-2">
            Implantação pensada para preservar a privacidade e valorizar a vista natural.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base mb-2">
            Distribuição estratégica das cabanas respeitando o relevo e a paisagem da região.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base">
            Projeto inserido em área com ampla presença de verde e biodiversidade.
          </motion.p>
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
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Square size={16} className="text-primary" />
            Unidades
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base mb-4">
            Dimensões ideais para um descanso confortável.
          </motion.p>
          <motion.ul variants={fadeInUp} className="space-y-2 text-gray-700 text-sm sm:text-base mb-2">
            <li>• <strong>Cabana A</strong> – 53m²</li>
            <li>• <strong>Cabana B</strong> – 105m²</li>
          </motion.ul>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base">
            Ambientes projetados para oferecer funcionalidade, conforto e aproveitamento inteligente dos espaços.
          </motion.p>
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
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Sparkles size={16} className="text-primary" />
            Diferenciais internos – Cabana 53m²
          </motion.h2>
          <motion.ul variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm sm:text-base mb-2">
            {['Integrado à natureza', 'Arquitetura moderna e aconchegante', 'Jacuzzi', 'Conforto acústico', 'Estrutura para ar-condicionado', 'Churrasqueira', 'Possibilidade de decoração personalizada'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-primary">•</span> {item}
              </li>
            ))}
          </motion.ul>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm text-gray-600 mt-4">
            Projeto com foco no melhor aproveitamento dos espaços físicos.
          </motion.p>
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
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Sparkles size={16} className="text-primary" />
            Diferenciais internos – Cabana 105m²
          </motion.h2>
          <motion.ul variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 text-sm sm:text-base mb-2">
            {['Integrado à natureza', 'Arquitetura moderna e aconchegante', 'Conforto acústico', 'Estrutura para ar-condicionado', 'Churrasqueira', 'Possibilidade de decoração personalizada'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-primary">•</span> {item}
              </li>
            ))}
          </motion.ul>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm text-gray-600 mt-4">
            Ambientes amplos e planejados para proporcionar conforto e experiência diferenciada.
          </motion.p>
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
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <PartyPopper size={16} className="text-primary" />
            Lazer Privativo
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-700 font-light text-sm sm:text-base mb-6 max-w-3xl"
          >
            O Vale do Ouro oferece lazer integrado ao ambiente natural:
          </motion.p>
          {sectionImages.lazer && sectionImages.lazer.length > 0 && (
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {sectionImages.lazer.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md ring-1 ring-black/5">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                  {img.caption && (
                    <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs font-medium py-1.5 px-2 text-center">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          )}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              { label: 'Cachoeiras privativas', icon: Droplets, color: 'text-sky-600 bg-sky-100' },
              { label: 'Trilhas ecológicas', icon: Footprints, color: 'text-emerald-600 bg-emerald-100' },
              { label: 'Áreas verdes preservadas', icon: Trees, color: 'text-emerald-600 bg-emerald-100' },
              { label: 'Espaços de contemplação', icon: TreePine, color: 'text-emerald-600 bg-emerald-100' },
              { label: 'Conexão direta com a biodiversidade da região', icon: Globe, color: 'text-primary bg-primary/10' },
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
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base mt-6">
            O projeto valoriza a experiência ao ar livre e o contato real com a natureza.
          </motion.p>
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
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Landmark size={16} className="text-primary" />
            Modelo do Empreendimento
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base mb-4">
            Estruturado no formato de clube com título patrimonial. Diferenciais do modelo:
          </motion.p>
          <motion.ul variants={fadeInUp} className="space-y-2 text-gray-700 text-sm sm:text-base mb-4">
            <li>• Título registrado em cartório</li>
            <li>• Terreno em nome do clube</li>
            <li>• Facilidade de transação</li>
            <li>• Estrutura organizada e transparente</li>
            <li>• Participação ativa dos sócios nas decisões</li>
            <li>• Conselho fiscal com acesso às informações administrativas</li>
          </motion.ul>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base">
            Modelo pensado para oferecer organização jurídica e segurança estrutural.
          </motion.p>
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
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <ClipboardList size={16} className="text-primary" />
            Gestão Profissional
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base mb-4">
            Gestão completa e profissional. O empreendimento conta com:
          </motion.p>
          <motion.ul variants={fadeInUp} className="space-y-2 text-gray-700 text-sm sm:text-base mb-4">
            <li>• Gestão especializada em aluguel por temporada</li>
            <li>• Sistema próprio de precificação inteligente</li>
            <li>• Plataforma digital para acompanhamento da gestão</li>
            <li>• Anfitrião presencial</li>
            <li>• Manutenção, limpeza e lavanderia inclusos</li>
            <li>• Liberdade de uso pelo proprietário</li>
          </motion.ul>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base">
            Operação estruturada para garantir padronização, qualidade e organização da experiência do hóspede.
          </motion.p>
        </motion.section>

        <motion.section
          className="mb-24 py-10 px-6 sm:px-8 rounded-3xl bg-gradient-to-br from-primary/5 to-emerald-50/50 border border-primary/10 shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="flex items-center gap-2 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Sparkles size={16} className="text-primary" />
            Posicionamento Final
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base mb-4">
            Vale do Ouro é um projeto que une:
          </motion.p>
          <motion.ul variants={fadeInUp} className="space-y-2 text-gray-700 text-sm sm:text-base mb-4">
            <li>• Natureza preservada</li>
            <li>• Experiência privativa</li>
            <li>• Arquitetura moderna</li>
            <li>• Gestão profissional</li>
            <li>• Modelo jurídico estruturado</li>
          </motion.ul>
          <motion.p variants={fadeInUp} className="text-gray-700 font-light text-sm sm:text-base">
            Um empreendimento pensado para quem valoriza exclusividade, organização e conexão verdadeira com a natureza.
          </motion.p>
        </motion.section>

        <RelatedListings
          title="Conheça também"
          items={[
            { href: '/condominios/fazenda-medeiros', title: 'Fazenda Medeiros' },
            { href: '/condominios/quinta-dos-lagos', title: 'Quinta dos Lagos' },
            { href: '/condominios/refugio-das-aguas', title: 'Refúgio das Águas' },
            { href: '/empreendimentos/tauari-residence', title: 'Tauari Residence' },
            { href: '/empreendimentos/horizon', title: 'Residencial Horizon' },
            { href: '/chales', title: 'Todos os Chalés' },
            { href: '/condominios', title: 'Condomínios' },
          ]}
        />
        <ContactCTA
          headline="Quer receber mais informações sobre o Vale do Ouro?"
          whatsappMessage="Olá, 33incorp! Tenho interesse em saber mais sobre o Vale do Ouro (chalés)."
        />
      </motion.div>
    </main>
  );
}
