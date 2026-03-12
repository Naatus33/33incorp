'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Home,
  Sparkles,
  SunMedium,
  Dumbbell,
  Building2,
  Ruler,
  Car,
  Info,
  Images,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import ContactCTA from '@/components/ContactCTA';

type GalleryImage = {
  src: string;
  alt: string;
};

interface TauariResidenceClientProps {
  galleryImages: GalleryImage[];
}

export default function TauariResidenceClient({
  galleryImages,
}: TauariResidenceClientProps) {
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
      if (e.key === 'ArrowLeft')
        setLightboxIndex((i) => (i === 0 ? totalImages - 1 : (i ?? 0) - 1));
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i === totalImages - 1 ? 0 : (i ?? 0) + 1));
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
          Empreendimento Residencial
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-light text-primary tracking-tight mb-4"
        >
          Tauari Residence
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-gray-700 font-light text-base sm:text-lg md:text-lg mb-8 max-w-2xl"
        >
          Design, conforto e sofisticação na medida exata.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary/80 bg-primary/5 py-2.5 px-4 rounded-full border border-primary/10">
            <MapPin size={16} className="text-primary" />
            Bairro Atiradores
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary/80 bg-primary/5 py-2.5 px-4 rounded-full border border-primary/10">
            <Home size={16} className="text-primary" />
            1 suíte + 2 dorms
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-primary/80 bg-primary/5 py-2.5 px-4 rounded-full border border-primary/10">
            <Building2 size={16} className="text-primary" />
            15 apartamentos · 3 por andar
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mb-16">
          <div className="relative w-full h-[13.75rem] sm:h-[18.75rem] md:h-[22.5rem] lg:h-[27.5rem] xl:h-[32.5rem] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-slate-100">
            <Image
              src="/imagens/tauari-residence/1.jpg"
              alt="Perspectiva principal do Tauari Residence"
              fill
              className="object-cover object-[center_35%]"
              priority
              sizes="100vw"
            />
          </div>
          <p className="mt-6 text-center text-gray-700 font-light text-sm md:text-base tracking-wide italic max-w-2xl mx-auto">
            Fachada em concreto aparente, detalhes em madeira Tauari e um projeto pensado para unir
            conforto, estética e valorização.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-14 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4">
              <Sparkles className="text-primary" size={14} />
              Sobre o Empreendimento
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-primary mb-6">
              Design, conforto e sofisticação na medida exata.
            </h3>
            <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-4">
              Buscando um design mais criativo, o Tauari Residence destaca elementos da arquitetura
              modernista com uma fachada em concreto aparente, recurso muitas vezes utilizado por
              arquitetos renomados como Oscar Niemeyer e Vila Nova Artigas.
            </p>
            <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-4">
              O uso do concreto agrega imponência e valorização ao edifício, que, combinado com
              detalhes em madeira Tauari, realça ainda mais a beleza do empreendimento.
            </p>
            <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed">
              O Tauari é uma madeira nobre brasileira, com ampla resistência e um lindo acabamento,
              o que destaca a estética diferenciada dos detalhes do imóvel.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-slate-50 border border-primary/10 rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-lg ring-1 ring-black/5"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary">
                <Info size={20} />
              </div>
              <div>
                <span className="block text-[0.625rem] font-medium tracking-[0.25em] uppercase text-gray-500 mb-2">
                  Ficha Técnica
                </span>
                <h3 className="text-xl font-light text-primary">Dados gerais do empreendimento</h3>
              </div>
            </div>
            <dl className="space-y-4 text-sm text-gray-700">
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <Home size={14} className="text-primary/60" /> Tipologia
                </dt>
                <dd className="font-medium text-right">1 suíte + 2 dormitórios</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <Building2 size={14} className="text-primary/60" /> Total de apartamentos
                </dt>
                <dd className="font-medium text-right">15 apartamentos · 3 por andar</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <Ruler size={14} className="text-primary/60" /> Metragens
                </dt>
                <dd className="font-medium text-right">84,75 m² e 101,30 m²</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <Car size={14} className="text-primary/60" /> Vagas de garagem
                </dt>
                <dd className="font-medium text-right">2 ou 3 vagas por unidade</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <Sparkles size={14} className="text-primary/60" /> Áreas comuns
                </dt>
                <dd className="font-medium text-right">
                  Hall de entrada, salão de festas com terraço, espaço fitness.
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="flex items-center gap-2 text-gray-500 text-[0.6875rem] uppercase tracking-[0.18em]">
                  <SunMedium size={14} className="text-primary/60" /> Sustentabilidade
                </dt>
                <dd className="font-medium text-right">
                  Painel fotovoltaico para uso do condomínio.
                </dd>
              </div>
            </dl>

            <div className="mt-4 flex items-start gap-3 text-xs text-gray-600 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
              <Info size={16} className="text-primary shrink-0 mt-0.5" />
              <p>
                Os dados acima podem ser atualizados a qualquer momento conforme o andamento do
                projeto. Use esta seção para manter as informações técnicas sempre alinhadas com o
                material comercial.
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
            className="flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Sparkles size={16} className="text-primary" />
            Diferenciais do Empreendimento
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {[
              {
                label: 'Acabamento de primeira em todos os ambientes.',
                icon: Sparkles,
              },
              {
                label: 'Hall de entrada decorado.',
                icon: Building2,
              },
              {
                label: 'Salão de festas com terraço e ambientes entregues decorados.',
                icon: Home,
              },
              {
                label: 'Espaço fitness completo.',
                icon: Dumbbell,
              },
              {
                label: 'Painel fotovoltaico para geração de energia para uso do condomínio.',
                icon: SunMedium,
              },
            ].map(({ label, icon: Icon }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 shadow-md hover:shadow-lg hover:border-primary/30 transition-all ring-1 ring-black/5"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Icon size={18} />
                </div>
                <p className="text-sm text-gray-700">{label}</p>
              </motion.div>
            ))}
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
            className="flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-4"
          >
            <Home size={16} className="text-primary" />
            Diferenciais dos Apartamentos
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-700 font-light text-sm sm:text-base mb-6 max-w-3xl"
          >
            Apartamentos com plantas inteligentes, varanda generosa e integração total entre os
            ambientes sociais, proporcionando bem-estar no dia a dia e valorização no longo prazo.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              '1 suíte + 2 dormitórios.',
              'Apartamentos de 84,75 m² e 101,30 m².',
              'Plantas flexíveis para diferentes perfis de morador.',
              'Sacada espaçosa com churrasqueira.',
              'Cozinha e sala integradas.',
              'Possibilidade de 2 ou 3 vagas de garagem.',
              'Lavanderia independente.',
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ x: 4, transition: { duration: 0.15 } }}
                className="flex items-start gap-3 bg-white border border-emerald-200/70 rounded-xl px-4 py-3 shadow-md hover:shadow-lg hover:border-emerald-300/60 transition-all ring-1 ring-black/5"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <p className="text-sm text-gray-700">{item}</p>
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
            className="flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500 mb-6"
          >
            <MapPin size={16} className="text-primary" />
            Localização
          </motion.h2>
          <motion.div variants={fadeInUp} className="space-y-5">
            <div className="flex gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary h-fit">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Coração do bairro Atiradores</h3>
                <p className="text-gray-700">
                  Estamos plantando nossa semente no coração do bairro Atiradores, uma região
                  consolidada de Joinville, com infraestrutura completa, serviços, gastronomia e fácil
                  acesso às principais vias da cidade.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary h-fit">
                <Home size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-2">Endereço de referência</h3>
                <p className="text-gray-700">
                  Bairro Atiradores, Joinville - SC. Use esta seção para detalhar o endereço ou
                  pontos de acesso quando as informações forem definidas.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

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
                  <ZoomIn
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"
                    strokeWidth={1.5}
                  />
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
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
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
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
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

        <motion.section
          className="mb-16 py-10 px-6 sm:px-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm"
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
                  <Info size={18} />
                </div>
                <h2 className="text-[0.625rem] font-medium tracking-[0.3em] uppercase text-gray-500">
                  Investimento &amp; Condições
                </h2>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-primary mb-4">
                Um endereço para morar, investir e valorizar patrimônio.
              </h3>
              <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed mb-4">
                Estruture aqui o posicionamento comercial do Tauari Residence: condições de entrada,
                modalidades de pagamento, diferenciais para investidores e famílias que buscam um
                empreendimento vertical exclusivo.
              </p>
              <p className="text-gray-700 font-light text-sm sm:text-base leading-relaxed">
                Use esta seção para destacar o ticket médio, possibilidades de financiamento e
                eventuais garantias ou serviços agregados, conforme a estratégia comercial
                definida.
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
                  <li>• Ideal para moradia, segunda residência ou investimento.</li>
                </ul>
                <div className="mt-2 text-[0.6875rem] text-gray-500 flex items-start gap-2">
                  <Info size={14} className="mt-0.5 text-primary" />
                  <span>
                    Substitua os valores e bullets acima pelas condições comerciais reais do
                    produto.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <ContactCTA
          headline="Quer receber mais informações sobre o Tauari Residence?"
          whatsappMessage="Olá, 33incorp! Tenho interesse em saber mais sobre o Tauari Residence."
        />
      </motion.div>
    </main>
  );
}

