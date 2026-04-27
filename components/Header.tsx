'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/quem-somos', label: 'Quem Somos' },
  { href: '/condominios', label: 'Condomínios' },
  { href: '/empreendimentos', label: 'Empreendimentos' },
  { href: '/geminado', label: 'Geminados' },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isQuemSomos = pathname === '/quem-somos';

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > window.innerHeight * 0.8);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const showTransparentHeroStyle = isHome && !scrolled;
  const isDarkHeader = showTransparentHeroStyle || isQuemSomos;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        showTransparentHeroStyle
          ? 'bg-transparent py-4 sm:py-5 md:py-6'
          : isQuemSomos
            ? 'bg-[#01011c] border-b border-white/10 py-3 sm:py-4'
            : 'bg-white shadow-sm border-b border-[#01011c]/10 py-3 sm:py-4'
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-base sm:text-lg md:text-xl font-normal tracking-[0.2em] uppercase transition-colors duration-500 flex-shrink-0 ${
            isDarkHeader ? 'text-white' : 'text-[#01011c]'
          }`}
        >
          Group 33{' '}
          <span
            className={`font-light transition-colors duration-500 ${
              isDarkHeader ? 'text-white/70' : 'text-[#01011c]/50'
            }`}
          >
            incorp.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 md:gap-8 lg:gap-10" aria-label="Navegação principal">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            const baseColor = isDarkHeader ? 'text-white' : 'text-[#01011c]';
            const hoverColor = isDarkHeader ? 'hover:text-white/70' : 'hover:text-[#01011c]/60';

            return (
              <Link
                key={href}
                href={href}
                className={`relative text-xs sm:text-sm font-medium tracking-[0.22em] uppercase transition-colors duration-500 rounded-none px-2 py-2 ${baseColor} ${hoverColor}`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-current" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA button */}
        <div className="hidden lg:flex items-center gap-6 md:gap-8 flex-shrink-0">
          <Link
            href="#contato"
            className={`px-6 md:px-8 py-3 border text-xs sm:text-sm font-semibold tracking-[0.32em] uppercase transition-colors duration-500 rounded-none ${
              isDarkHeader
                ? 'border-white text-white hover:bg-white hover:text-[#01011c]'
                : 'border-[#01011c] text-[#01011c] hover:bg-[#01011c] hover:text-white'
            }`}
          >
            Fale Conosco
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`lg:hidden p-2 transition-colors flex-shrink-0 ${
            isDarkHeader ? 'text-white' : 'text-[#01011c]'
          }`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            <motion.nav
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl z-50 pt-20 px-6 pb-10 flex flex-col gap-6 lg:hidden overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              aria-label="Menu mobile"
            >
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm sm:text-base font-medium tracking-[0.22em] uppercase transition-colors rounded-none px-2 py-2 ${
                      isActive
                        ? 'text-[#01011c] border-b border-[#01011c]'
                        : 'text-[#01011c] hover:text-[#01011c]/60'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {label}
                  </Link>
                );
              })}
              <Link
                href="#contato"
                className="mt-4 px-6 py-3 border border-[#01011c] text-[#01011c] text-sm font-semibold tracking-[0.28em] uppercase hover:bg-[#01011c] hover:text-white transition-colors rounded-none w-full text-center"
                onClick={closeMobileMenu}
              >
                Fale Conosco
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
