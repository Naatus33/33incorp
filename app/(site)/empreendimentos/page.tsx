import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import ListingCard, { type ListingCardProps } from '@/components/ListingCard';

export const metadata: Metadata = {
  title: 'Empreendimentos',
  description:
    'Projetos verticais e casas geminadas de alto padrão com design autoral. Tauari Residence, Residencial Horizon, Vila das Flores e Aurora Residences em Joinville - SC.',
  keywords: [
    'empreendimentos imobiliários Joinville',
    'apartamentos alto padrão SC',
    'Tauari Residence',
    'Residencial Horizon',
    'projetos verticais Joinville',
  ],
  openGraph: {
    title: 'Empreendimentos | Group 33 incorp.',
    description:
      'Tauari Residence, Residencial Horizon, Vila das Flores e Aurora Residences. Projetos verticais e geminados de alto padrão em Joinville - SC.',
    url: 'https://www.group33incorp.com.br/empreendimentos',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Empreendimentos de Alto Padrão — Group 33 incorp.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empreendimentos | Group 33 incorp.',
    description: 'Projetos verticais e casas geminadas de alto padrão em Joinville - SC.',
    images: ['/og-default.jpg'],
  },
  alternates: {
    canonical: 'https://www.group33incorp.com.br/empreendimentos',
  },
};

const listings: ListingCardProps[] = [
  {
    href: '/empreendimentos/tauari-residence',
    imageSrc: '/imagens/tauari.png',
    imageAlt: 'Tauari Residence',
    title: 'Tauari Residence',
    subtitle: 'Joinville - SC',
    description:
      'Tauari Residence é o primeiro empreendimento autoral da Group 33: arquitetura contemporânea, plantas otimizadas e diferenciais exclusivos.',
  },
  {
    href: '/empreendimentos/horizon',
    imageSrc: '/novoempre.jpeg',
    imageAlt: '33 Incorp Residence',
    title: '33 Incorp Residence',
    subtitle: 'Centro, Joinville - SC',
    description:
      'Empreendimento vertical contemporâneo, com lazer completo e plantas inteligentes pensadas para morar e investir no coração de Joinville.',
    comingSoon: true,
    imagePosition: 'top',
  },
  {
    href: '/empreendimentos/empreendimento-01',
    imageSrc: '/imagens/aurora.png',
    imageAlt: 'Aurora Residences',
    title: 'Aurora Residences',
    subtitle: 'Joinville - SC',
    description:
      'Design orgânico inspirado nas curvas do litoral. Studios e apartamentos de 1 e 2 dormitórios com rooftop panorâmico e automação residencial completa.',
    comingSoon: true,
    overlayStrength: 'strong',
  },
];

export default function EmpreendimentosPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-slate-100/60 via-slate-50 to-emerald-50/50 text-gray-900 font-sans pt-20 md:pt-24 pb-16 md:pb-20 px-6 md:px-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader
          eyebrow="Conceito Vertical"
          title="Empreendimentos"
        />
        <p className="text-gray-700 font-light text-base md:text-lg mt-4 mb-10 md:mb-14 max-w-2xl">
          Projetos verticais e casas geminadas com design autoral, localizações privilegiadas e acabamento premium.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full min-w-0">
          {listings.map((listing) => (
            <ListingCard key={listing.title} {...listing} />
          ))}
        </div>
      </div>
    </main>
  );
}
