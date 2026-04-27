import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LuxuryTag } from './LuxuryTag';

export type ListingCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  badgeLabel?: string;
  badgeTone?: 'light' | 'dark';
  comingSoon?: boolean;
  overlayStrength?: 'normal' | 'strong';
  title: string;
  subtitle: string;
  description: string;
  ctaLabel?: string;
  unoptimized?: boolean;
  objectFit?: 'cover' | 'contain';
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
      className="group block bg-gray-50 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 min-w-0 w-full h-full flex flex-col"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden flex-shrink-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`${objectFit === 'contain' ? 'object-contain' : 'object-cover'} ${
            imagePosition === 'top' ? 'object-top' : 'object-center'
          } transition-transform duration-[3s] group-hover:scale-105`}
          unoptimized={unoptimized}
        />
        {/* Overlay para cards "Em breve" */}
        {comingSoon && (
          <>
            <div
              className={`absolute inset-0 transition-colors duration-300 ${
                overlayStrength === 'strong'
                  ? 'bg-[#01011c]/80 group-hover:bg-[#01011c]/95'
                  : 'bg-[#01011c]/20 group-hover:bg-[#01011c]/40'
              }`}
            />
            <div className="absolute left-0 top-3 sm:top-4 z-20">
              <LuxuryTag variant="gold" verticalLeft>Em Breve</LuxuryTag>
            </div>
          </>
        )}
        {badgeLabel ? (
          <div className="absolute left-0 top-3 sm:top-4 z-20">
            <LuxuryTag variant={badgeTone === 'dark' ? 'default' : 'muted'} verticalLeft>
              {badgeLabel}
            </LuxuryTag>
          </div>
        ) : null}
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4 sm:p-5 md:p-6 flex flex-col justify-between">
        <div className="min-w-0">
          <h2
            className={`text-lg sm:text-xl md:text-2xl font-light mb-2 leading-tight break-words ${
              comingSoon ? 'text-gray-800' : 'text-primary'
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-xs sm:text-xs md:text-sm tracking-[0.1em] uppercase mb-3 sm:mb-4 break-words ${
              comingSoon ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            {subtitle}
          </p>
          <p
            className={`font-light text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 break-words ${
              comingSoon ? 'text-gray-600' : 'text-gray-500'
            }`}
          >
            {description}
          </p>
        </div>

        <span
          className={`inline-flex items-center gap-2 text-[0.625rem] sm:text-xs font-medium tracking-[0.2em] uppercase pb-1 whitespace-nowrap ${
            comingSoon ? 'text-gray-800' : 'text-primary'
          }`}
        >
          {ctaLabel} <ArrowRight size={14} className="flex-shrink-0" />
        </span>
      </div>
    </Link>
  );
}
