'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '@/lib/constants/contact';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-2xl hover:bg-[#1EBE57] transition-colors flex items-center justify-center focus-visible:outline focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
      <MessageCircle size={32} strokeWidth={2} />
    </motion.a>
  );
}
