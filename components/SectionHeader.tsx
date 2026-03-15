import { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  /** When true, uses h1 for the title (for SEO on listing pages). Default false (h2). */
  asH1?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  align = 'left',
  theme = 'light',
  asH1 = false,
}: SectionHeaderProps) {
  const baseEyebrow =
    theme === 'light'
      ? 'text-[#01011c]/60'
      : 'text-white/60';

  const baseTitle =
    theme === 'light'
      ? 'text-[#01011c]'
      : 'text-white';

  const alignClasses =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignClasses}`}>
      <p
        className={`${baseEyebrow} text-[0.6875rem] md:text-xs font-semibold tracking-[0.32em] uppercase mb-3`}
      >
        {eyebrow}
      </p>
      {asH1 ? (
        <h1
          className={`${baseTitle} text-3xl md:text-5xl lg:text-6xl font-light tracking-tight uppercase`}
        >
          {title}
        </h1>
      ) : (
        <h2
          className={`${baseTitle} text-3xl md:text-5xl lg:text-6xl font-light tracking-tight uppercase`}
        >
          {title}
        </h2>
      )}
    </div>
  );
}

