import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import ListingCard from '@/components/ListingCard';

export const metadata: Metadata = {
  title: 'Chalés',
  description:
    'Chalés de alto padrão para investimento e locação por temporada. Vale do Ouro com rentabilidade líquida de 11,65% ao ano e gestão completa inclusa.',
  keywords: [
    'chalés investimento SC',
    'locação temporada chalé',
    'Vale do Ouro chalés',
    'rentabilidade chalé Santa Catarina',
    'chalé alto padrão Joinville',
  ],
  openGraph: {
    title: 'Chalés | Group 33 incorp.',
    description:
      'Chalés de alto padrão para investimento com rentabilidade líquida de 11,65% ao ano e gestão completa. Conheça o Vale do Ouro.',
    url: 'https://www.33incorp.com.br/chales',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Chalés de Alto Padrão — Group 33 incorp.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chalés | Group 33 incorp.',
    description: 'Chalés de alto padrão. Rentabilidade líquida 11,65% a.a. com gestão completa.',
    images: ['/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://www.33incorp.com.br/chales',
  },
};

export default function ChalesPage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-28 md:pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <SectionHeader
          eyebrow="Coleção Exclusiva"
          title="Chalés"
          asH1
        />
        <p className="text-gray-500 font-light text-base md:text-lg mt-4 mb-12 md:mb-16 max-w-2xl">
          Invista em chalés de alto padrão com gestão completa para locação por temporada e alta rentabilidade.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ListingCard
            href="/chales/vale-do-ouro"
            imageSrc="/imagens/vale-do-ouro.png"
            imageAlt="Vale do Ouro — Chalés com rentabilidade e gestão completa para locação por temporada"
            title="Vale do Ouro"
            subtitle="Natureza & Rentabilidade"
            description="Rentabilidade líquida de 11,65% ao ano. Cabanas modernas integradas à natureza com cachoeiras privativas."
          />

          <ListingCard
            href="/chales/chale-01"
            imageSrc="https://picsum.photos/seed/chale01/800/600"
            imageAlt="Chalé 01 — Empreendimento em breve pela Group 33 incorp."
            comingSoon
            title="Chalé 01"
            subtitle="Região / Cidade"
            description="Texto de exemplo para o primeiro chalé. Use este espaço para descrever o conceito, metragem e perfil de investimento do produto."
          />

          <ListingCard
            href="/chales/chale-02"
            imageSrc="https://picsum.photos/seed/chale02/800/600"
            imageAlt="Chalé 02 — Empreendimento em breve pela Group 33 incorp."
            comingSoon
            title="Chalé 02"
            subtitle="Região / Cidade"
            description="Texto de exemplo para o segundo chalé. Substitua pelo descritivo real do projeto do seu cliente."
          />
        </div>
      </div>
    </main>
  );
}
