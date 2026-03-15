import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chalé 02 | Em breve | Group 33 incorp.',
  description:
    'Chalé de alto padrão em desenvolvimento pela Group 33 incorp. Conheça nossos chalés para investimento e locação por temporada.',
  alternates: {
    canonical: 'https://www.33incorp.com.br/chales/chale-02',
  },
};

export default function Chale02Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
