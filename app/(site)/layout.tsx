import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Group 33 incorp.',
  } as Metadata['title'],
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
