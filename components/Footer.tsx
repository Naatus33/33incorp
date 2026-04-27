import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import ClientEmailLink from '@/components/ClientEmailLink';
import { CONTACT_EMAIL, CONTACT_ADDRESS, SOCIAL_INSTAGRAM, SOCIAL_FACEBOOK, PHONE_DISPLAY } from '@/lib/constants/contact';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#01011c] text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-7xl mx-auto">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
            {/* Brand Section */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Group 33 incorp."
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="text-base sm:text-lg font-medium tracking-[0.2em] uppercase">
                    Group 33
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 tracking-[0.15em]">incorp.</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xs break-words">
                Empreendimentos imobiliários de alto padrão em Joinville e região. Design, sofisticação e qualidade de vida.
              </p>
              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                <a
                  href={SOCIAL_INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={SOCIAL_FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h4 className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase">
                Contato
              </h4>
              <div className="flex flex-col gap-4 sm:gap-5">
                <a
                  href={`tel:${PHONE_DISPLAY}`}
                  className="flex items-start gap-3 text-sm sm:text-base text-white/80 hover:text-white transition-colors break-words"
                >
                  <Phone size={18} className="flex-shrink-0 mt-0.5" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <ClientEmailLink
                  email={CONTACT_EMAIL}
                  className="flex items-start gap-3 text-sm sm:text-base text-white/80 hover:text-white transition-colors break-words"
                >
                  <Mail size={18} className="flex-shrink-0 mt-0.5" />
                  <span>{CONTACT_EMAIL}</span>
                </ClientEmailLink>
                <div className="flex items-start gap-3 text-sm sm:text-base text-white/80 break-words">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <a
                    href="https://maps.google.com/?q=Joinville,SC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_ADDRESS}
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h4 className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase">
                Navegação
              </h4>
              <nav className="flex flex-col gap-3 sm:gap-4">
                <Link
                  href="/quem-somos"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Quem Somos
                </Link>
                <Link
                  href="/condominios"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Condomínios
                </Link>
                <Link
                  href="/empreendimentos"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Empreendimentos
                </Link>
                <Link
                  href="/geminado"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Geminados
                </Link>
              </nav>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8 sm:pt-10 md:pt-12" />

          {/* Legal Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs sm:text-sm text-white/50">
              <Link
                href="/privacidade"
                className="hover:text-white/70 transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="hover:text-white/70 transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-white/50">
              © {currentYear} Group 33 incorp. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
