import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Termos de Uso | Group 33 incorp.',
  },
  description: 'Termos de uso do site e dos serviços da Group 33 incorp. Condições gerais de acesso, utilização do conteúdo e políticas aplicáveis aos visitantes e clientes.',
};

export default function TermosPage() {
  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-light text-primary tracking-tight mb-8">Termos de Uso</h1>
        <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-400 mb-12">Condições gerais</p>
        <div className="prose prose-gray font-light leading-relaxed space-y-6 text-gray-600">
          <p>
            Ao acessar e utilizar o site da Group 33 incorp., você concorda com os presentes Termos de Uso. O conteúdo deste site é destinado exclusivamente a fins informativos sobre nossos empreendimentos e serviços.
          </p>
          <p>
            As informações, imagens e descrições publicadas são de caráter ilustrativo e podem ser alteradas sem aviso prévio. Recomendamos que você confira as condições comerciais e documentação específica de cada empreendimento diretamente com nossa equipe.
          </p>
          <p>
            É vedado o uso não autorizado do conteúdo deste site, incluindo textos, imagens e marcas, para fins comerciais ou que possam prejudicar a imagem da Group 33 incorp. ou de terceiros.
          </p>
        </div>
      </div>
    </main>
  );
}
