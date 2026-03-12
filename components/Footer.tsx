import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_ADDRESS, PHONE_DISPLAY, WHATSAPP_NUMBER, SOCIAL_INSTAGRAM, SOCIAL_FACEBOOK } from '@/lib/constants/contact';

export default function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[#01011c] text-white py-10 px-6 md:px-12 border-t border-white/10"
    >
      <div className="w-full space-y-8">
        {/* Faixa superior: marca + contato + navegação */}
        <div className="w-full flex flex-col md:grid md:grid-cols-3 md:items-center gap-6 md:gap-8">
          {/* Bloco 1 - Logo à esquerda, texto e redes à direita */}
          <div className="md:col-span-1 flex flex-row gap-3 md:gap-5 items-center w-full">
            <div className="relative w-[140px] h-[200px] min-w-[100px] min-h-[150px] shrink-0 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="33 Incorp Construtora & Incorporadora"
                fill
                className="object-contain object-left"
                sizes="140px"
              />
            </div>
            <div className="flex flex-col flex-1 min-w-[100px] gap-4">
              <p className="text-white/85 font-light leading-relaxed text-sm md:text-base max-w-md pt-0.5">
                Curadoria especializada em imóveis que inspiram. Conectando pessoas a lares e
                investimentos extraordinários.
              </p>
              <div className="flex flex-col gap-2">
                <span className="uppercase tracking-[0.28em] text-[0.7rem] md:text-[0.75rem] text-white/80">
                  Redes sociais
                </span>
                <div className="flex gap-3">
                  <a
                    href={SOCIAL_INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da 33 Incorp"
                    className="text-white/70 hover:text-white transition-colors p-1 rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={SOCIAL_FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook da 33 Incorp"
                    className="text-white/70 hover:text-white transition-colors p-1 rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/50"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bloco 2 - Contato (centro) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 text-xs md:text-sm text-white/70 md:col-span-1">
            <span className="uppercase tracking-[0.28em] text-[0.7rem] md:text-[0.75rem] mb-2 text-white/80">
              Contato
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-white transition-colors normal-case tracking-normal"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${WHATSAPP_NUMBER}`}
              className="hover:text-white transition-colors normal-case tracking-normal"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="https://maps.google.com/?q=R.+Al.+Rolf+Colin,+138+-+Am%C3%A9rica,+Joinville+-+SC,+89204-070"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors normal-case tracking-normal max-w-[240px] leading-relaxed"
            >
              {CONTACT_ADDRESS}
            </a>
          </div>

          {/* Bloco 3 - Navegação */}
          <div className="w-full md:w-auto flex justify-start md:col-span-1">
            <div className="flex flex-col items-start gap-3 text-left">
              <span className="uppercase text-[0.7rem] tracking-[0.28em] text-white/60">
                Navegação
              </span>
              <nav className="flex flex-col md:flex-row flex-wrap gap-x-5 gap-y-1 font-light text-sm md:text-base text-white/80">
                <Link href="/quem-somos" className="hover:text-white transition-colors">
                  Quem Somos
                </Link>
                <Link href="/condominios" className="hover:text-white transition-colors">
                  Condomínios
                </Link>
                <Link href="/empreendimentos" className="hover:text-white transition-colors">
                  Empreendimentos
                </Link>
                <Link href="/geminado" className="hover:text-white transition-colors">
                  Geminados
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Faixa inferior: legal */}
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-2 text-[0.625rem] md:text-[0.6875rem] tracking-[0.2em] uppercase text-white/40 border-t border-white/10 pt-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Group 33 incorp. Todos os direitos reservados.
          </p>

          <div className="flex gap-4 md:gap-6">
            <Link href="/privacidade" className="hover:text-white transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/50 rounded">
              Privacidade
            </Link>
            <Link href="/termos" className="hover:text-white transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/50 rounded">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
