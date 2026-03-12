'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const VALORES = [
  {
    titulo: 'Excelência',
    texto: 'Buscar continuamente o mais alto nível de qualidade em cada detalhe, do conceito à entrega.',
  },
  {
    titulo: 'Transparência',
    texto: 'Atuar com ética, clareza e responsabilidade em todas as relações.',
  },
  {
    titulo: 'Valorização Patrimonial',
    texto: 'Desenvolver projetos que assegurem crescimento sólido e sustentável do investimento.',
  },
  {
    titulo: 'Compromisso com o Cliente',
    texto: 'Entregar mais do que o esperado, criando experiências que superem expectativas.',
  },
  {
    titulo: 'Inovação com Propósito',
    texto: 'Aplicar soluções modernas e inteligentes que agreguem valor real aos empreendimentos.',
  },
  {
    titulo: 'Segurança e Confiabilidade',
    texto: 'Garantir processos estruturados, previsíveis e sólidos em todas as etapas.',
  },
] as const;

export default function QuemSomosPage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-28 sm:pt-32 pb-24 px-5 sm:px-8 md:px-12">
      <motion.div
        className="max-w-[75rem] mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* HERO */}
        <section className="mb-20 sm:mb-24 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">
            <div>
              <motion.span
                variants={fadeInUp}
                className="inline-block py-1.5 px-5 border border-gray-200 text-[0.625rem] font-medium tracking-[0.24em] uppercase text-gray-500 mb-6 rounded-full"
              >
                33 Incorporadora
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-5xl md:text-6xl font-light text-gray-900 tracking-tight mb-5"
              >
                Quem Somos
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-gray-900 font-light text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-5"
              >
                A 33 Incorporadora é uma empresa dedicada ao desenvolvimento de empreendimentos
                imobiliários que aliam <span className="font-semibold">sofisticação</span>,{' '}
                <span className="font-semibold">planejamento estratégico</span> e{' '}
                <span className="font-semibold">valorização consistente</span>. Com atuação focada
                em loteamentos e condomínios fechados de alto padrão, destacamo-nos pela criteriosa
                seleção de localizações e pelo desenvolvimento de projetos que integram qualidade
                urbanística, arquitetura contemporânea e infraestrutura completa.
              </motion.p>

              <motion.ul
                variants={fadeInUp}
                className="space-y-2.5 text-sm sm:text-base text-gray-700 font-light"
              >
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  <span>Criar ativos imobiliários sólidos, pensados tanto para viver quanto para investir.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  <span>Ambientes que proporcionam exclusividade, bem-estar e valorização patrimonial ao longo do tempo.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                  <span>Transformar áreas estratégicas em empreendimentos de alto padrão, com investimentos seguros e duradouros.</span>
                </li>
              </motion.ul>
            </div>

            <motion.div
              variants={fadeInUp}
              className="relative h-56 sm:h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden border border-gray-200 bg-gray-100"
            >
              <Image
                src="/imagens/incorp.png"
                alt="33 Incorporadora - empreendimentos de alto padrão"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* NOSSO DNA */}
        <section className="mb-20 sm:mb-24 md:mb-28 bg-gray-50/50 rounded-3xl px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-14">
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-7">
              <h2 className="text-[0.6875rem] font-medium tracking-[0.28em] uppercase text-gray-400 mb-4">
                Nosso DNA
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Ativos imobiliários sólidos, para viver e para investir.
              </h3>
              <p className="text-gray-700 font-light leading-relaxed text-base sm:text-lg mb-4">
                Cada empreendimento é conduzido com gestão rigorosa e controle integral de todas as
                etapas, assegurando previsibilidade, segurança e excelência na entrega. Esse
                compromisso reflete a essência da 33: criar ativos imobiliários sólidos, pensados
                tanto para viver quanto para investir.
              </p>
              <p className="text-gray-700 font-light leading-relaxed text-base sm:text-lg">
                Nosso propósito é claro: transformar áreas estratégicas em empreendimentos de alto
                padrão, elevando a experiência de viver e consolidando investimentos seguros e
                duradouros.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="lg:col-span-5 space-y-4 lg:space-y-5 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-10"
            >
              <div className="bg-white rounded-2xl border border-gray-100 px-5 py-4">
                <h4 className="text-[0.625rem] font-medium tracking-[0.24em] uppercase text-gray-400 mb-2">
                  Missão
                </h4>
                <p className="text-gray-700 font-light text-sm leading-relaxed">
                  Desenvolver empreendimentos imobiliários de alto padrão que proporcionem qualidade
                  de vida, segurança e valorização consistente, por meio de planejamento estratégico,
                  excelência construtiva e gestão eficiente.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 px-5 py-4">
                <h4 className="text-[0.625rem] font-medium tracking-[0.24em] uppercase text-gray-400 mb-2">
                  Visão
                </h4>
                <p className="text-gray-700 font-light text-sm leading-relaxed">
                  Ser reconhecida como uma incorporadora de referência no segmento de loteamentos e
                  condomínios fechados de alto padrão, destacando-se pela solidez, inovação e pela
                  capacidade de gerar valor duradouro para clientes e investidores.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 px-5 py-4">
                <h4 className="text-[0.625rem] font-medium tracking-[0.24em] uppercase text-gray-400 mb-2">
                  Propósito
                </h4>
                <p className="text-gray-700 font-light text-sm leading-relaxed">
                  Transformar áreas estratégicas em empreendimentos de alto padrão, elevando a
                  experiência de viver e consolidando investimentos seguros e duradouros.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* VALORES */}
        <section className="mb-20 sm:mb-24 md:mb-28">
          <motion.div variants={fadeInUp} className="mb-10 sm:mb-12 text-center">
            <h2 className="text-[0.6875rem] font-medium tracking-[0.28em] uppercase text-gray-400 mb-3">
              Valores
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">
              O que nos move.
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {VALORES.map((item) => (
              <motion.div
                key={item.titulo}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-gray-100 px-5 py-5 shadow-sm"
              >
                <h4 className="text-[10px] font-medium tracking-[0.24em] uppercase text-gray-400 mb-2">
                  {item.titulo}
                </h4>
                <p className="text-gray-700 font-light text-sm leading-relaxed">{item.texto}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* LIDERANÇA */}
        <section className="mb-20 sm:mb-24 md:mb-28">
          <motion.div variants={fadeInUp} className="mb-10 sm:mb-12 text-center">
            <h2 className="text-[11px] font-medium tracking-[0.28em] uppercase text-gray-400 mb-3">
              Liderança
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">
              As pessoas por trás da 33 Incorporadora.
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="max-w-5xl mx-auto space-y-14"
          >
            <motion.article
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start bg-white rounded-3xl border border-gray-100 px-5 sm:px-6 md:px-7 py-6 sm:py-7 shadow-sm"
            >
              <div className="relative w-32 h-40 sm:w-40 sm:h-52 rounded-3xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                <Image
                  src="/imagens/talles.png"
                  alt="Talles Reis, CEO da 33 Incorporadora"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 160px, 128px"
                />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-light text-gray-900 mb-1">Talles Reis</h4>
                <p className="text-[0.625rem] font-medium tracking-[0.24em] uppercase text-gray-400 mb-4">
                  CEO &amp; Fundador
                </p>
                <p className="text-gray-700 font-light text-base leading-relaxed">
                  Lidera a 33 Incorporadora com gestão rigorosa e planejamento estratégico em todas
                  as etapas dos empreendimentos. Conecta visão de negócio e excelência na entrega,
                  assegurando previsibilidade, segurança e valorização consistente para clientes e
                  investidores.
                </p>
              </div>
            </motion.article>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-4 sm:mt-6"
            >
              <article className="bg-white rounded-3xl border border-gray-100 px-4 py-6 flex flex-col items-center text-center shadow-sm">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 mb-4">
                  <Image
                    src="/regina.jpeg"
                    alt="Regina Silva"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-light text-gray-900 mb-1">
                  Regina Silva
                </h4>
                <p className="text-[0.625rem] font-medium tracking-[0.24em] uppercase text-gray-400">
                  Analista Financeira
                </p>
              </article>

              <article className="bg-white rounded-3xl border border-gray-100 px-4 py-6 flex flex-col items-center text-center shadow-sm">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 mb-4">
                  <Image
                    src="/gabriel.jpeg"
                    alt="Gabriel Yarokamoto"
                    fill
                    className="object-cover object-top"
                    sizes="128px"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-light text-gray-900 mb-1">
                  Gabriel Yarokamoto
                </h4>
                <p className="text-[0.625rem] font-medium tracking-[0.24em] uppercase text-gray-400">
                  Analista de Compras
                </p>
              </article>

              <article className="bg-white rounded-3xl border border-gray-100 px-4 py-6 flex flex-col items-center text-center shadow-sm">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 mb-4">
                  <Image
                    src="/paulo.jpeg"
                    alt="Paulo J. Freitas"
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-light text-gray-900 mb-1">
                  Paulo J. Freitas
                </h4>
                <p className="text-[0.625rem] font-medium tracking-[0.24em] uppercase text-gray-400">
                  Projetista
                </p>
              </article>
            </motion.div>
          </motion.div>
        </section>

        {/* NOSSO COMPROMISSO */}
        <section className="mb-16 md:mb-20">
          <motion.div
            variants={staggerContainer}
            className="bg-gray-50 border border-gray-100 rounded-3xl px-6 sm:px-10 md:px-14 py-10 sm:py-12 md:py-14"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-[0.6875rem] font-medium tracking-[0.28em] uppercase text-gray-400 mb-4 text-center"
            >
              Nosso compromisso
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-center text-gray-700 font-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
            >
              Transformar áreas estratégicas em empreendimentos de alto padrão, elevando a
              experiência de viver e consolidando investimentos seguros e duradouros.
            </motion.p>
          </motion.div>
        </section>

        {/* CTA FINAL */}
        <motion.section
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
        >
          <div>
            <p className="text-[0.625rem] font-medium tracking-[0.24em] uppercase text-gray-400 mb-2">
              Próximos passos
            </p>
            <h2 className="text-xl sm:text-2xl font-light text-gray-900">
              Conheça nossos condomínios e empreendimentos.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/condominios"
              className="px-6 py-3 border border-gray-900 text-[0.625rem] text-gray-900 font-semibold tracking-[0.3em] uppercase hover:bg-gray-900 hover:text-white transition-colors rounded-none"
            >
              Condomínios
            </Link>
            <Link
              href="/empreendimentos"
              className="px-6 py-3 border border-gray-300 text-[0.625rem] text-gray-700 font-semibold tracking-[0.3em] uppercase hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors rounded-none"
            >
              Empreendimentos
            </Link>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
