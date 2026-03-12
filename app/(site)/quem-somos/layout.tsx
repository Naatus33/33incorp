import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quem Somos',
  description:
    'Conheça a Group 33 incorp. — incorporadora dedicada ao desenvolvimento de empreendimentos imobiliários de alto padrão em Joinville e região. Missão, visão, valores e time de liderança.',
  keywords: [
    'Group 33 incorp',
    'incorporadora Joinville',
    'sobre a empresa imobiliária',
    '33 Incorporadora',
    'empresa imóveis alto padrão SC',
  ],
  openGraph: {
    title: 'Quem Somos | Group 33 incorp.',
    description:
      'Incorporadora dedicada ao desenvolvimento de empreendimentos de alto padrão em Joinville e região. Conheça nossa história, missão e valores.',
    url: 'https://www.group33incorp.com.br/quem-somos',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Group 33 incorp. — Quem Somos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quem Somos | Group 33 incorp.',
    description: 'Incorporadora de alto padrão em Joinville e região. Conheça nossa história.',
    images: ['/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://www.group33incorp.com.br/quem-somos',
  },
};

export default function QuemSomosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
