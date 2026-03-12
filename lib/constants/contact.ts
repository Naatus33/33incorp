const PHONE_RAW = process.env.NEXT_PUBLIC_PHONE ?? '554797086867';
const DISPLAY_PHONE = process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? '47 9708-6867';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL ?? '33incorp@contato.com.br';
const ADDRESS = process.env.NEXT_PUBLIC_ADDRESS ?? 'R. Al. Rolf Colin, 138 - América, Joinville - SC, 89204-070';

export const WHATSAPP_NUMBER = PHONE_RAW.replace(/\D/g, '');
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function getWhatsAppUrl(message?: string): string {
  if (message && message.trim()) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message.trim())}`;
  }
  return WHATSAPP_URL;
}

export const PHONE_DISPLAY = DISPLAY_PHONE;
export const CONTACT_EMAIL = EMAIL;
export const CONTACT_ADDRESS = ADDRESS;

export const SOCIAL_INSTAGRAM = process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? '#';
export const SOCIAL_FACEBOOK = process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? '#';
