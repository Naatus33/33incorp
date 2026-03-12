import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LuxuryTag } from './LuxuryTag';

type ListingCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  badgeLabel?: string;
  badgeTone?: 'light' | 'dark';
  /** Quando true, aplica estilo de destaque "Em breve" com gradiente mais escuro, similar à home */
  comingSoon?: boolean;
  /** Intensidade do overlay para cards "Em breve" */
  overlayStrength?: 'normal' | 'strong';
  title: string;
  subtitle: string;
  description: string;
  ctaLabel?: string;
  /** Evita otimização server-side; use para URLs externas ou quando a imagem pode não existir */
  unoptimized?: boolean;
  /** 'contain' encaixa a imagem inteira no card sem cortar; 'cover' preenche o card (pode cortar) */
  objectFit?: 'cover' | 'contain';
  /** Ajusta o posicionamento da imagem dentro do recorte */
  imagePosition?: 'center' | 'top' | string;
};

export default function ListingCard({
  href,
  imageSrc,
  imageAlt,
  badgeLabel,
  badgeTone = 'dark',
  comingSoon = false,
  overlayStrength = 'normal',
  title,
  subtitle,
  description,
  ctaLabel = 'Quero receber mais informações',
  unoptimized = false,
  objectFit = 'cover',
  imagePosition = 'center',
}: ListingCardProps) {
  const badgeBase = badgeTone === 'dark' ? 'text-primary' : 'text-white';

  return (
    <Link
      href={href}
      className="group block bg-gray-50 rounded-3xl overflow-hidden transition-all duration-500 min-w-0 w-full"
    >
      <div className="relative h-[16.25rem] md:h-[21.25rem] lg:h-[25rem] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className={`${objectFit === 'contain' ? 'object-contain' : 'object-cover'} ${imagePosition === 'top' ? 'object-top' : 'object-center'} transition-transform duration-[3s] group-hover:scale-105`}
          unoptimized={unoptimized}
        />
        {/* Overlay escuro para cards "Em breve" + tag luxuosa */}
        {comingSoon && (
          <>
            <div
              className={`absolute inset-0 transition-colors duration-300 ${
                overlayStrength === 'strong'
                  ? 'bg-[#01011c]/80 group-hover:bg-[#01011c]/95'
                  : 'bg-[#01011c]/20 group-hover:bg-[#01011c]/40'
              }`}
            />
            <div className="absolute left-0 top-4 z-20">
              <LuxuryTag variant="gold" verticalLeft>Em Breve</LuxuryTag>
            </div>
          </>
        )}
        {badgeLabel ? (
          <div className="absolute left-0 top-4 z-20">
            <LuxuryTag variant={badgeTone === 'dark' ? 'default' : 'muted'} verticalLeft>
              {badgeLabel}
            </LuxuryTag>
          </div>
        ) : null}
      </div>
      <div className="p-8">
        <h2
          className={`text-3xl font-light mb-2 ${
            comingSoon ? 'text-gray-800' : 'text-primary'
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-xs tracking-[0.1em] uppercase mb-4 ${
            comingSoon ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          {subtitle}
        </p>
        <p
          className={`font-light text-sm leading-relaxed mb-6 ${
            comingSoon ? 'text-gray-600' : 'text-gray-500'
          }`}
        >
          {description}
        </p>
        <span
          className={`inline-flex items-center gap-2 text-[0.625rem] font-medium tracking-[0.2em] uppercase pb-1 ${
            comingSoon ? 'text-gray-800' : 'text-primary'
          }`}
        >
          {ctaLabel} <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

