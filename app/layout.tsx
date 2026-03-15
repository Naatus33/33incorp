import type {Metadata} from 'next';
import { Montserrat, Outfit } from 'next/font/google';
import './globals.css'; // Global styles
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['500', '600', '700'],
});

const SITE_URL = 'https://www.33incorp.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Imóveis de Alto Padrão em Joinville | Group 33 incorp.',
    template: '%s | Group 33 incorp.',
  },
  description: 'Empreendimentos, lotes e geminados de alto padrão em Joinville e região. Design, sofisticação e qualidade de vida.',
  keywords: ['imóveis alto padrão', 'condomínios Joinville', 'empreendimentos imobiliários', 'lotes', 'geminados', 'chalés', 'Group 33 incorp'],
  authors: [{ name: 'Group 33 incorp.' }],
  creator: 'Group 33 incorp.',
  publisher: 'Group 33 incorp.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    siteName: 'Group 33 incorp.',
    title: 'Imóveis de Alto Padrão em Joinville | Group 33 incorp.',
    description: 'Empreendimentos, lotes e geminados de alto padrão em Joinville e região. Design, sofisticação e qualidade de vida.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Group 33 incorp. — Imóveis de Alto Padrão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imóveis de Alto Padrão em Joinville | Group 33 incorp.',
    description: 'Empreendimentos, lotes e geminados de alto padrão em Joinville e região.',
    images: ['/og-default.jpg'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Group 33 incorp.',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: 'Empreendimentos, lotes e geminados de alto padrão em Joinville e região.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Joinville',
    addressRegion: 'SC',
    addressCountry: 'BR',
  },
  areaServed: {
    '@type': 'City',
    name: 'Joinville',
  },
  sameAs: [
    'https://www.instagram.com/group33incorp',
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-gray-900 bg-white" suppressHydrationWarning>
        <JsonLd data={organizationSchema} />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
