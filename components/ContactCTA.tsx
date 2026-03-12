'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { getWhatsAppUrl } from '@/lib/constants/contact';

const DEFAULT_DESCRIPTION =
  'Entre em contato pelo WhatsApp, formulário ou diretamente com nossa equipe. Estamos à disposição para ajudar você com mais informações sobre este empreendimento.';

type ContactCTAProps = {
  headline: string;
  whatsappMessage: string;
  description?: string;
};

export default function ContactCTA({ headline, whatsappMessage, description }: ContactCTAProps) {
  return (
    <motion.section
      className="rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-primary to-primary/90 text-white shadow-xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp} className="max-w-xl">
        <h2 className="text-sm font-semibold tracking-[0.22em] uppercase text-white/80 mb-2">
          Fale com a 33incorp
        </h2>
        <p className="text-2xl sm:text-3xl font-light text-white mb-3">{headline}</p>
        <p className="text-sm sm:text-base text-white/90 font-light">
          {description ?? DEFAULT_DESCRIPTION}
        </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="w-full md:w-auto">
        <a
          href={getWhatsAppUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white text-primary rounded-full text-[0.6875rem] font-semibold tracking-[0.3em] uppercase hover:bg-white/95 hover:scale-105 transition-all shadow-lg"
        >
          Quero receber mais informações
          <ArrowRight
            size={16}
            strokeWidth={1}
            className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300"
          />
        </a>
      </motion.div>
    </motion.section>
  );
}
