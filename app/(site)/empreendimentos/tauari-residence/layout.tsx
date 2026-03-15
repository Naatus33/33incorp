import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Tauari Residence',
  description:
    'Residencial de alto padrão com unidades espaçosas, acabamento sofisticado e área de lazer completa em Joinville - SC. Viver bem é um detalhe.',
  keywords: [
    'Tauari Residence',
    'residencial alto padrão Joinville',
    'apartamentos Joinville SC',
    'empreendimento imobiliário Tauari',
    'imóveis luxo Joinville',
  ],
  openGraph: {
    title: 'Tauari Residence | Alto Padrão | Group 33 incorp.',
    description:
      'Residencial de alto padrão com unidades espaçosas, acabamento sofisticado e área de lazer completa em Joinville - SC.',
    url: 'https://www.33incorp.com.br/empreendimentos/tauari-residence',
    images: [
      {
        url: '/og-tauari-residence.jpg',
        width: 1200,
        height: 630,
        alt: 'Tauari Residence — Residencial de Alto Padrão em Joinville',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tauari Residence | Group 33 incorp.',
    description: 'Residencial de alto padrão com acabamento sofisticado em Joinville - SC.',
    images: ['/og-tauari-residence.jpg'],
  },
  alternates: {
    canonical: 'https://www.33incorp.com.br/empreendimentos/tauari-residence',
  },
};

const listingSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateListing',
  name: 'Tauari Residence',
  description:
    'Residencial de alto padrão com unidades espaçosas, acabamento sofisticado e área de lazer completa em Joinville - SC.',
  url: 'https://www.33incorp.com.br/empreendimentos/tauari-residence',
  image: 'https://www.33incorp.com.br/og-tauari-residence.jpg',
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
    { '@type': 'ListItem', position: 3, name: 'Tauari Residence', item: 'https://www.33incorp.com.br/empreendimentos/tauari-residence' },
  ],
};

export default function TauariResidenceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={listingSchema} />
      <JsonLd data={breadcrumbSchema} />
      {children}
    </>
  );
}
