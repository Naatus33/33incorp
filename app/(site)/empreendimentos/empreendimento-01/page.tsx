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
};

export default function Empreendimento01Page() {
  return (
    <ComingSoonPage
      eyebrow="Conceito Vertical"
      title="Aurora"
      highlight="Residences"
      description="Design orgânico inspirado nas curvas do litoral. Studios e apartamentos de 1 e 2 dormitórios com rooftop panorâmico e automação residencial completa."
      secondaryText="Este empreendimento está em fase de concepção. Enquanto isso, você pode conhecer nossos outros projetos e falar com a equipe para ser avisado em primeira mão."
      primaryCtaHref="/empreendimentos"
      primaryCtaLabel="Ver todos os Empreendimentos"
      secondaryCtaHref="/#contato"
      secondaryCtaLabel="Fale conosco"
      layoutVariant="centered"
    />
  );
}
