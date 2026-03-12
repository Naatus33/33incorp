type LuxuryTagVariant = 'default' | 'muted' | 'gold' | 'sold' | 'bronze' | 'emBreve';

type LuxuryTagProps = {
  children: React.ReactNode;
  variant?: LuxuryTagVariant;
  className?: string;
  /** Tag no canto esquerdo, texto na vertical (não usar na página geminado) */
  verticalLeft?: boolean;
};

export function LuxuryTag({ children, variant = 'default', className, verticalLeft = false }: LuxuryTagProps) {
  const fontClass = '[font-family:var(--font-outfit),var(--font-montserrat),sans-serif]';
  const sizeClass = 'text-[11px] font-semibold tracking-[0.28em] uppercase';
  const base = verticalLeft
    ? `inline-flex items-center justify-center py-4 px-2 ${sizeClass} whitespace-nowrap ${fontClass} antialiased`
    : `inline-flex items-center justify-center px-4 py-1 ${sizeClass} ${fontClass}`;
  const verticalStyle = verticalLeft
    ? { writingMode: 'vertical-rl' as const, textOrientation: 'upright' as const }
    : undefined;

  const paletteByVariant: Record<LuxuryTagVariant, string> = {
    default: 'bg-[#01011c] text-white/95',
    muted: 'bg-white/80 text-[#01011c] backdrop-blur-sm',
    gold:
      'bg-gradient-to-b from-[#F5D77A] via-[#E5B84A] to-[#C9A227] text-[#1a1a1a] font-semibold shadow-[0_0_12px_rgba(229,184,74,0.4),inset_0_1px_0_rgba(255,255,255,0.35)]',
    sold: 'bg-[#CE8946] text-white',
    bronze:
      'bg-gradient-to-b from-[#E8C99B] via-[#CE8946] to-[#A66B2A] text-white font-semibold shadow-[0_0_16px_rgba(206,137,70,0.45),0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.3)]',
    emBreve:
      'bg-gradient-to-b from-[#E8E6E3] via-[#B8B5B0] to-[#7A7672] text-[#1a1a1a] font-semibold shadow-[0_0_14px_rgba(184,181,176,0.5),0_2px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.4)]',
  };

  const classes = [base, paletteByVariant[variant], className]
    .filter(Boolean)
    .join(' ');

  if (variant === 'gold') {
    return (
      <span className={`relative inline-flex overflow-hidden ${classes}`} style={verticalStyle}>
        <span
          className="absolute inset-0 z-0 opacity-40"
          style={{
            background:
              'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
            animation: 'tag-shine 3s ease-in-out infinite',
          }}
          aria-hidden
        />
        <span className="relative z-10">{children}</span>
      </span>
    );
  }

  if (variant === 'bronze') {
    return (
      <span className={`relative inline-flex overflow-hidden rounded-sm ${classes}`} style={verticalStyle}>
        <span
          className="absolute inset-0 z-0 opacity-50"
          style={{
            background:
              'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.5) 45%, transparent 100%)',
            animation: 'tag-shine 3.5s ease-in-out infinite',
          }}
          aria-hidden
        />
        <span className="relative z-10 drop-shadow-sm">{children}</span>
      </span>
    );
  }

  if (variant === 'emBreve') {
    return (
      <span className={`relative inline-flex overflow-hidden rounded-sm ${classes}`} style={verticalStyle}>
        <span
          className="absolute inset-0 z-0 opacity-45"
          style={{
            background:
              'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.55) 45%, transparent 100%)',
            animation: 'tag-shine 3.2s ease-in-out infinite',
          }}
          aria-hidden
        />
        <span className="relative z-10 drop-shadow-sm">{children}</span>
      </span>
    );
  }

  return <span className={classes} style={verticalStyle}>{children}</span>;
}

