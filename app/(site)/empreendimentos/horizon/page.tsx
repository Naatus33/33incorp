'use client';

import { ComingSoonPage } from '@/components/ComingSoonPage';

export default function HorizonPage() {
  return (
    <ComingSoonPage
      eyebrow="Conceito Vertical"
      title="33 Incorp Residence"
      description="Estamos atualizando esta página com novos detalhes do empreendimento. Em breve você poderá conferir todas as informações sobre o 33 Incorp Residence."
      primaryCtaHref="/empreendimentos"
      primaryCtaLabel="Voltar para Empreendimentos"
      secondaryCtaHref="/"
      secondaryCtaLabel="Voltar para a página inicial"
      layoutVariant="centered"
    />
  );
}
