import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Refúgio das Águas | Condomínio - Em breve',
  description:
    'Refúgio das Águas: condomínio de alto padrão em desenvolvimento pela Group 33 incorp. Cadastre-se para receber informações em primeira mão.',
  openGraph: {
    title: 'Refúgio das Águas | Em breve',
    description:
      'Condomínio Refúgio das Águas em desenvolvimento. Conheça outros empreendimentos e cadastre-se para novidades.',
    images: [
      {
        url: '/imagens/refugio-da-agua.png',
        width: 1200,
        height: 630,
        alt: 'Refúgio das Águas - Em breve',
      },
    ],
  },
};

export default function RefugioDasAguasPage() {
  return (
    <ComingSoonPage
      eyebrow="Coleção Exclusiva"
      title="Refúgio das Águas"
      description="Um novo conceito de condomínio horizontal está sendo preparado pela Group 33 incorp. Paisagismo envolvido por água, áreas de convivência e lazer pensadas para quem busca tranquilidade, conforto e valorização patrimonial em longo prazo."
      secondaryText="Este empreendimento encontra-se em fase de estudos e concepção. Enquanto isso, você pode conhecer os outros condomínios em lançamento e falar com a nossa equipe para ser avisado em primeira mão sobre as próximas etapas."
      primaryCtaHref="/condominios"
      primaryCtaLabel="Ver outros condomínios"
      secondaryCtaHref="#contato"
      secondaryCtaLabel="Fale com a equipe"
      layoutVariant="split"
      rightPanel={(
        <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden border border-white/10 bg-[#050525]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff1a,transparent_55%),linear-gradient(to_bottom,#0b1028,#050518)]" />
          <div className="absolute inset-0 flex flex-col justify-between p-8">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/60 mb-3">
                Coleção Exclusiva
              </p>
              <p className="text-sm text-white/70 max-w-xs">
                Visual conceitual do Refúgio das Águas. Imagens meramente ilustrativas sujeitas a
                alteração no desenvolvimento do projeto.
              </p>
            </div>
            <div className="space-y-2 text-xs text-white/50 uppercase tracking-[0.25em]">
              <p>Loteamento horizontal planejado</p>
              <p>Áreas de lazer integradas à natureza</p>
              <p>Infraestrutura pensada para morar e investir</p>
            </div>
          </div>
        </div>
      )}
    />
  );
}

