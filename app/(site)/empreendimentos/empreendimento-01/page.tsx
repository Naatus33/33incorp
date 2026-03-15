import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Aurora Residences | Empreendimento - Em breve',
  description:
    'Aurora Residences: empreendimento de alto padrão em desenvolvimento pela Group 33 incorp. Design orgânico, studios e apartamentos com rooftop. Cadastre-se para novidades.',
  openGraph: {
    title: 'Aurora Residences | Em breve',
    description:
      'Empreendimento Aurora Residences em desenvolvimento. Conheça outros projetos e cadastre-se para receber informações em primeira mão.',
  },
  alternates: {
    canonical: 'https://www.33incorp.com.br/empreendimentos/empreendimento-01',
  },
};

export default function Empreendimento01Page() {
  return (
    <ComingSoonPage
      eyebrow="Conceito Vertical"
      title="Aurora"
      highlight="Residences"
      description="O Aurora Residences será um empreendimento de alto padrão com design orgânico inspirado nas curvas do litoral catarinense. O projeto prevê studios e apartamentos de 1 e 2 dormitórios, rooftop panorâmico e automação residencial completa, pensados para quem busca praticidade, conforto e valorização. A Group 33 incorp. está desenvolvendo cada detalhe para entregar um produto com a mesma qualidade dos nossos lançamentos em Joinville."
      secondaryText="Este empreendimento está em fase de concepção e estudos. Enquanto isso, você pode conhecer o Tauari Residence, o Residencial Horizon e os demais projetos da nossa carteira, além de falar com a equipe para ser avisado em primeira mão sobre o lançamento do Aurora Residences."
      primaryCtaHref="/empreendimentos"
      primaryCtaLabel="Ver todos os Empreendimentos"
      secondaryCtaHref="/#contato"
      secondaryCtaLabel="Fale conosco"
      layoutVariant="centered"
    />
  );
}
