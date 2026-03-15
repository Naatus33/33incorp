import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import ListingCard from '@/components/ListingCard';

export const metadata: Metadata = {
  title: 'Condomínios',
  description:
    'Condomínios fechados de alto padrão em Joinville e região: Fazenda Medeiros, Quinta dos Lagos e Vale do Ouro. Lotes exclusivos, segurança total e infraestrutura completa de lazer.',
  keywords: [
    'condomínios fechados Joinville',
    'lotes residenciais SC',
    'Fazenda Medeiros',
    'Quinta dos Lagos',
    'condomínio alto padrão Santa Catarina',
  ],
  openGraph: {
    title: 'Condomínios | Group 33 incorp.',
    description:
      'Condomínios fechados de alto padrão: Fazenda Medeiros, Quinta dos Lagos e Vale do Ouro. Lotes exclusivos em Joinville e região.',
    url: 'https://www.33incorp.com.br/condominios',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Condomínios de Alto Padrão — Group 33 incorp.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Condomínios | Group 33 incorp.',
    description: 'Condomínios fechados de alto padrão em Joinville e região.',
    images: ['/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://www.33incorp.com.br/condominios',
  },
};

const condos = [
  {
    href: '/condominios/fazenda-medeiros',
    imageSrc: '/imagens/fazenda/1.jpg',
    imageAlt: 'Fazenda Medeiros — Condomínio de lotes na Estrada Geral de Medeiros, Joinville',
    title: 'Fazenda Medeiros',
    subtitle: 'Estrada Geral de Medeiros',
    description:
      'Onde a imensidão do mar encontra a alma do campo. Condomínio de lotes com 32.000 m² de área comum, Clubhouse, SportClub e RiverPark.',
    imagePosition: 'top' as const,
  },
  {
    href: '/condominios/quinta-dos-lagos',
    imageSrc: '/imagens/quinta-dos-lagos.png',
    imageAlt: 'Quinta dos Lagos — Condomínio fechado com lagos privativos em Joinville',
    title: 'Condomínio Quinta dos Lagos',
    subtitle: '[Cidade / Estado]',
    description:
      'Condomínio horizontal com lagos, áreas verdes e infraestrutura completa para moradia, descanso e investimento em longo prazo.',
  },
  {
    href: '/chales/vale-do-ouro',
    imageSrc: '/imagens/vale-do-ouro.png',
    imageAlt: 'Vale do Ouro — Chalés de alto padrão com cachoeiras privativas e rentabilidade',
    title: 'Vale do Ouro',
    subtitle: 'Natureza e cachoeiras',
    description:
      'Chalés em meio à natureza, com cachoeiras privativas e infraestrutura completa para lazer e investimento.',
  },
];

export default function CondominiosPage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-20 md:pt-24 pb-16 md:pb-20 px-6 md:px-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          eyebrow="Coleção Exclusiva"
          title="Condomínios & Geminados"
          asH1
        />
        <p className="text-gray-500 font-light text-base md:text-lg mt-4 mb-10 md:mb-14 max-w-2xl">
          Conheça os produtos horizontais do portfólio Group 33: condomínios fechados e geminados planejados para oferecer segurança, conforto e uma experiência de viver com padrão diferenciado.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full min-w-0">
          {condos.map((condo) => (
            <ListingCard key={condo.title} {...condo} />
          ))}
        </div>
      </div>
    </main>
  );
}
