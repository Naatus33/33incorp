import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geminados',
  description:
    'Casas geminadas de alto padrão em Joinville - SC. Bom Retiro, Saguaçu e Glória. Acabamento sofisticado, localização estratégica e qualidade construtiva superior.',
  keywords: [
    'casas geminadas Joinville',
    'geminados alto padrão SC',
    'imóveis geminado Joinville',
    'Bom Retiro Joinville',
    'Saguaçu Joinville',
  ],
  openGraph: {
    title: 'Geminados | Group 33 incorp.',
    description:
      'Casas geminadas de alto padrão em Joinville - SC. Acabamento sofisticado e localização estratégica.',
    url: 'https://www.group33incorp.com.br/geminado',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Casas Geminadas de Alto Padrão — Group 33 incorp.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geminados | Group 33 incorp.',
    description: 'Casas geminadas de alto padrão em Joinville - SC.',
    images: ['/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://www.group33incorp.com.br/geminado',
  },
};

export default function GeminadoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
