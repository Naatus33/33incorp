'use client';

import { ComingSoonPage } from '@/components/ComingSoonPage';

export default function HorizonPage() {
  return (
    <ComingSoonPage
      eyebrow="Conceito Vertical"
      title="Residencial Horizon"
      description="O Residencial Horizon será um empreendimento de apartamentos de alto padrão no coração de Joinville — SC. Com vista panorâmica, design autoral e infraestrutura completa de lazer, o projeto representa o novo padrão de viver bem no centro da cidade. Estamos finalizando plantas, diferenciais e condições comerciais; em breve você poderá conferir todas as informações, localização exata e galeria de imagens."
      secondaryText="Enquanto preparamos a página completa, conheça o Tauari Residence e os outros empreendimentos da Group 33 incorp. ou entre em contato para ser avisado em primeira mão sobre o lançamento do Residencial Horizon."
      primaryCtaHref="/empreendimentos"
      primaryCtaLabel="Ver todos os Empreendimentos"
      secondaryCtaHref="/#contato"
      secondaryCtaLabel="Fale conosco"
      layoutVariant="centered"
    />
  );
}
