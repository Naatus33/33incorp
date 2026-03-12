import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Group 33 incorp.',
    default: 'Group 33 incorp. | Imóveis de Alto Padrão',
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
