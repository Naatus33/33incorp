'use client';

import { useEffect, useState } from 'react';
import { CONTACT_EMAIL } from '@/lib/constants/contact';

type Props = {
  className?: string;
};

/**
 * Renders the contact email as a mailto link only after client mount.
 * This avoids Cloudflare Email Obfuscation rewriting the link to /cdn-cgi/l/email-protection
 * which can return 404 when the script is not properly configured.
 */
export default function ClientEmailLink({ className }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className={className} aria-label="E-mail de contato">
        E-mail
      </span>
    );
  }

  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className={className}>
      {CONTACT_EMAIL}
    </a>
  );
}
