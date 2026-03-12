'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-md p-10 border border-white/20 text-center flex flex-col items-center gap-6"
            >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <CheckCircle2 size={40} />
                </div>
                <div>
                    <h3 className="text-2xl font-medium text-white mb-2 uppercase tracking-tight">Recebemos seu contato</h3>
                    <p className="text-white/60 font-light text-sm max-w-xs">
                        Um de nossos consultores especializados entrará em contato com você em breve.
                    </p>
                </div>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[0.625rem] font-semibold tracking-[0.3em] uppercase text-white/40 hover:text-white transition-colors"
                >
                    Enviar outra mensagem
                </button>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[0.625rem] uppercase tracking-[0.3em] text-white/50 font-medium ml-1">
                            Nome Completo
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            placeholder="Ex: João Silva"
                            className="bg-white/5 border border-white/10 px-6 py-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-[0.625rem] uppercase tracking-[0.3em] text-white/50 font-medium ml-1">
                            Telefone
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            required
                            placeholder="(00) 00000-0000"
                            className="bg-white/5 border border-white/10 px-6 py-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[0.625rem] uppercase tracking-[0.3em] text-white/50 font-medium ml-1">
                        E-mail
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        placeholder="email@exemplo.com"
                        className="bg-white/5 border border-white/10 px-6 py-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[0.625rem] uppercase tracking-[0.3em] text-white/50 font-medium ml-1">
                        Mensagem (Opcional)
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        placeholder="Como podemos ajudar?"
                        className="bg-white/5 border border-white/10 px-6 py-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20 resize-none"
                    />
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-between border border-white px-10 py-5 bg-white text-[#01011c] hover:bg-transparent hover:text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="text-xs font-semibold tracking-[0.4em] uppercase">
                        {isSubmitting ? 'Enviando...' : 'Solicitar Consultoria'}
                    </span>
                    {!isSubmitting && <Send size={18} strokeWidth={1.5} className="transform group-hover:translate-x-2 transition-transform duration-500" />}
                </motion.button>

                <p className="text-[0.5625rem] text-white/30 text-center uppercase tracking-widest mt-4">
                    Ao enviar, você concorda com nossos termos e política de privacidade.
                </p>
            </form>
        </div>
    );
}
