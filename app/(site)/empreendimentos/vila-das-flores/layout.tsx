import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Vila das Flores',
  description:
    'Casas geminadas de alto padrão em Santo Antônio, Joinville - SC. 130 m², 3 quartos (1 suíte), acabamento premium e quintal privativo. Qualidade e conforto para sua família.',
  keywords: [
    'Vila das Flores',
    'casas geminadas Joinville',
    'geminados Santo Antônio Joinville',
    'casas alto padrão SC',
    'imóvel geminado Joinville',
  ],
  openGraph: {
    title: 'Vila das Flores | Casas Geminadas | Group 33 incorp.',
    description:
      'Casas geminadas 130 m², 3 quartos, 1 suíte e quintal privativo em Santo Antônio, Joinville - SC.',
    url: 'https://www.33incorp.com.br/empreendimentos/vila-das-flores',
    images: [
      {
        url: '/og-vila-das-flores.jpg',
        width: 1200,
        height: 630,
        alt: 'Vila das Flores — Casas Geminadas de Alto Padrão em Joinville',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vila das Flores | Group 33 incorp.',
    description: 'Casas geminadas alto padrão em Santo Antônio, Joinville - SC.',
    images: ['/og-vila-das-flores.jpg'],
  },
  alternates: {
    canonical: 'https://www.33incorp.com.br/empreendimentos/vila-das-flores',
  },
};

const listingSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: 'Vila das Flores',
  description:
    'Casas geminadas de alto padrão em Santo Antônio, Joinville - SC. 130 m², 3 quartos (1 suíte), acabamento premium e quintal privativo.',
  url: 'https://www.33incorp.com.br/empreendimentos/vila-das-flores',
  image: 'https://www.33incorp.com.br/og-vila-das-flores.jpg',
  floorSize: {
    '@type': 'QuantitativeValue',
    value: 130,
    unitCode: 'MTK',
  },
  numberOfRooms: 3,
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
    { '@type': 'ListItem', position: 2, name: 'Empreendimentos', item: 'https://www.33incorp.com.br/empreendimentos' },
    { '@type': 'ListItem', position: 3, name: 'Vila das Flores', item: 'https://www.33incorp.com.br/empreendimentos/vila-das-flores' },
  ],
};

export default function VilaDasFloresLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={listingSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
