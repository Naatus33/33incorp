import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Vale do Ouro',
  description:
    'Chalés de alto padrão com cachoeiras privativas e integração à natureza. Rentabilidade líquida de 11,65% ao ano com gestão completa. Invista com segurança e viva a experiência.',
  keywords: [
    'Vale do Ouro',
    'chalés investimento SC',
    'chalés cachoeira privativa',
    'aluguel por temporada Serra Gaúcha SC',
    'investimento imobiliário chalé',
    'rentabilidade chalé',
  ],
  openGraph: {
    title: 'Vale do Ouro | Chalés com Rentabilidade 11,65% a.a. | Group 33 incorp.',
    description:
      'Chalés com cachoeiras privativas, integração à natureza e rentabilidade líquida de 11,65% ao ano. Gestão completa inclusa.',
    url: 'https://www.33incorp.com.br/chales/vale-do-ouro',
    images: [
      {
        url: '/og-vale-do-ouro.jpg',
        width: 1200,
        height: 630,
        alt: 'Vale do Ouro — Chalés de Alto Padrão com Rentabilidade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vale do Ouro | Chalés | Group 33 incorp.',
    description: 'Chalés com cachoeiras privativas. Rentabilidade líquida 11,65% a.a.',
    images: ['/og-vale-do-ouro.jpg'],
  },
  alternates: {
    canonical: 'https://www.33incorp.com.br/chales/vale-do-ouro',
  },
};

const listingSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: 'Vale do Ouro — Chalés',
  description:
    'Chalés de alto padrão com cachoeiras privativas e integração à natureza. Rentabilidade líquida de 11,65% ao ano com gestão completa inclusa.',
  url: 'https://www.33incorp.com.br/chales/vale-do-ouro',
  image: 'https://www.33incorp.com.br/og-vale-do-ouro.jpg',
  address: {
    '@type': 'PostalAddress',
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
      url: 'https://www.33incorp.com.br',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.33incorp.com.br' },
    { '@type': 'ListItem', position: 2, name: 'Chalés', item: 'https://www.33incorp.com.br/chales' },
    { '@type': 'ListItem', position: 3, name: 'Vale do Ouro', item: 'https://www.33incorp.com.br/chales/vale-do-ouro' },
  ],
};

export default function ValeDoOuroLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={listingSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
