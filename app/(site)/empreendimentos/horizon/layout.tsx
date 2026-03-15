import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Residencial Horizon',
  description:
    'Apartamentos de alto padrão no Centro de Joinville - SC. Vista panorâmica, design autoral e infraestrutura completa de lazer. O novo padrão de viver bem no coração da cidade.',
  keywords: [
    'Residencial Horizon',
    'apartamentos alto padrão Joinville',
    'apartamentos centro Joinville',
    'empreendimento imobiliário Joinville',
    'imóveis luxo SC',
  ],
  openGraph: {
    title: 'Residencial Horizon | Apartamentos Alto Padrão | Group 33 incorp.',
    description:
      'Apartamentos de alto padrão no Centro de Joinville - SC. Vista panorâmica, design autoral e infraestrutura completa de lazer.',
    url: 'https://www.33incorp.com.br/empreendimentos/horizon',
    images: [
      {
        url: '/og-horizon.jpg',
        width: 1200,
        height: 630,
        alt: 'Residencial Horizon — Apartamentos de Alto Padrão em Joinville',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Residencial Horizon | Group 33 incorp.',
    description: 'Apartamentos de alto padrão no Centro de Joinville - SC.',
    images: ['/og-horizon.jpg'],
  },
  alternates: {
    canonical: 'https://www.33incorp.com.br/empreendimentos/horizon',
  },
};

const listingSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: 'Residencial Horizon',
  description:
    'Apartamentos de alto padrão no Centro de Joinville - SC. Vista panorâmica, design autoral e infraestrutura completa de lazer.',
  url: 'https://www.33incorp.com.br/empreendimentos/horizon',
  image: 'https://www.33incorp.com.br/og-horizon.jpg',
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
    { '@type': 'ListItem', position: 3, name: 'Residencial Horizon', item: 'https://www.33incorp.com.br/empreendimentos/horizon' },
  ],
};

export default function HorizonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={listingSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
