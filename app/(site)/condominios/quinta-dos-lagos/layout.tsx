import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Quinta dos Lagos',
  description:
    'Condomínio fechado de alto padrão com lagos privativos e área de preservação permanente. Lotes residenciais exclusivos na região de Joinville - SC.',
  keywords: [
    'Quinta dos Lagos',
    'condomínio lagos Joinville',
    'lotes condomínio fechado SC',
    'condomínio alto padrão Joinville',
    'imóveis lago Santa Catarina',
  ],
  openGraph: {
    title: 'Quinta dos Lagos | Condomínio Fechado | Group 33 incorp.',
    description:
      'Condomínio fechado com lagos privativos e área de preservação permanente. Lotes exclusivos de alto padrão.',
    url: 'https://www.group33incorp.com.br/condominios/quinta-dos-lagos',
    images: [
      {
        url: '/og-quinta-dos-lagos.jpg',
        width: 1200,
        height: 630,
        alt: 'Quinta dos Lagos — Condomínio Fechado com Lagos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quinta dos Lagos | Group 33 incorp.',
    description: 'Condomínio fechado com lagos privativos. Lotes exclusivos de alto padrão.',
    images: ['/og-quinta-dos-lagos.jpg'],
  },
  alternates: {
    canonical: 'https://www.group33incorp.com.br/condominios/quinta-dos-lagos',
  },
};

const listingSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: 'Quinta dos Lagos',
  description:
    'Condomínio fechado de alto padrão com lagos privativos e área de preservação permanente. Lotes residenciais exclusivos na região de Joinville - SC.',
  url: 'https://www.group33incorp.com.br/condominios/quinta-dos-lagos',
  image: 'https://www.group33incorp.com.br/og-quinta-dos-lagos.jpg',
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
    { '@type': 'ListItem', position: 3, name: 'Quinta dos Lagos', item: 'https://www.group33incorp.com.br/condominios/quinta-dos-lagos' },
  ],
};

export default function QuintaDosLagosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={listingSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
