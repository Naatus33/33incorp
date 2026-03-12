import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Fazenda Medeiros',
  description:
    'Condomínio de lotes residenciais na Estrada Geral de Medeiros, SC. 321 lotes de 400 a 700 m², a 8 minutos da praia e mais de 32 mil m² de área de lazer. Onde o mar encontra o campo.',
  keywords: [
    'Fazenda Medeiros',
    'condomínio lotes Joinville',
    'lotes residenciais litoral SC',
    'condomínio fechado praia',
    'lotes alto padrão Santa Catarina',
  ],
  openGraph: {
    title: 'Fazenda Medeiros | Condomínio de Lotes | Group 33 incorp.',
    description:
      '321 lotes de 400 a 700 m², a 8 minutos da praia. Mais de 32 mil m² de área de lazer exclusiva.',
    url: 'https://www.group33incorp.com.br/condominios/fazenda-medeiros',
    images: [
      {
        url: '/og-fazenda-medeiros.jpg',
        width: 1200,
        height: 630,
        alt: 'Fazenda Medeiros — Condomínio de Lotes de Alto Padrão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fazenda Medeiros | Group 33 incorp.',
    description: '321 lotes de 400 a 700 m², a 8 minutos da praia.',
    images: ['/og-fazenda-medeiros.jpg'],
  },
  alternates: {
    canonical: 'https://www.group33incorp.com.br/condominios/fazenda-medeiros',
  },
};

const listingSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: 'Fazenda Medeiros',
  description:
    'Condomínio de lotes residenciais na Estrada Geral de Medeiros. 321 lotes de 400 a 700 m², a 8 minutos da praia, com mais de 32 mil m² de área de lazer.',
  url: 'https://www.group33incorp.com.br/condominios/fazenda-medeiros',
  image: 'https://www.group33incorp.com.br/og-fazenda-medeiros.jpg',
  numberOfRooms: 321,
  floorSize: {
    '@type': 'QuantitativeValue',
    minValue: 400,
    maxValue: 700,
    unitCode: 'MTK',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Estrada Geral de Medeiros',
    addressLocality: 'Joinville',
    addressRegion: 'SC',
    addressCountry: 'BR',
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'RealEstateAgent',
      name: 'Group 33 incorp.',
      url: 'https://www.group33incorp.com.br',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.group33incorp.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Condomínios', item: 'https://www.group33incorp.com.br/condominios' },
    { '@type': 'ListItem', position: 3, name: 'Fazenda Medeiros', item: 'https://www.group33incorp.com.br/condominios/fazenda-medeiros' },
  ],
};

export default function FazendaMedeirosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={listingSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
