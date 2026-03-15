import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Política de Privacidade | Group 33 incorp.',
  },
  description: 'Política de privacidade e proteção de dados da Group 33 incorp. Saiba como coletamos, usamos, armazenamos e protegemos suas informações pessoais.',
  alternates: {
    canonical: 'https://www.33incorp.com.br/privacidade',
  },
};

export default function PrivacidadePage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-primary tracking-tight mb-8">Política de Privacidade</h1>
        <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-12">Última atualização</p>
        <div className="prose prose-gray font-light leading-relaxed space-y-6 text-gray-600">
          <p>
            A Group 33 incorp. respeita sua privacidade e está comprometida com a proteção dos seus dados pessoais. Esta política descreve como coletamos, usamos e protegemos as informações que você nos fornece ao utilizar nosso site e serviços.
          </p>
          <p>
            Coletamos apenas as informações necessárias para responder a suas solicitações de contato, enviar informações sobre empreendimentos de seu interesse e melhorar sua experiência em nosso site. Não compartilhamos seus dados com terceiros para fins de marketing sem seu consentimento.
          </p>
          <p>
            Você pode entrar em contato conosco a qualquer momento para solicitar acesso, correção ou exclusão dos seus dados pessoais, através do e-mail ou telefone indicados no site.
          </p>
        </div>
      </div>
    </main>
  );
}
