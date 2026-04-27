/**
 * Serviço de E-mail
 * Responsável por enviar e-mails transacionais
 */

import type { ContactFormData } from '@/types';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Envia um e-mail usando um serviço transacional (ex: SendGrid, Nodemailer)
 * Para este exemplo, vamos usar uma integração simples com Nodemailer
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    // Aqui você integraria com um serviço real como SendGrid, Nodemailer, etc.
    // Por enquanto, vamos simular o envio
    console.log('📧 E-mail enviado:', {
      to: options.to,
      subject: options.subject,
      timestamp: new Date().toISOString(),
    });

    return true;
  } catch (error) {
    console.error('❌ Erro ao enviar e-mail:', error);
    return false;
  }
}

/**
 * Envia um e-mail de confirmação para o usuário
 */
export async function sendContactConfirmation(data: ContactFormData): Promise<boolean> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Obrigado pelo seu contato!</h2>
      <p>Olá <strong>${data.name}</strong>,</p>
      <p>Recebemos sua mensagem e em breve um de nossos consultores especializados entrará em contato com você.</p>
      <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
      <h3>Dados da sua solicitação:</h3>
      <ul>
        <li><strong>Nome:</strong> ${data.name}</li>
        <li><strong>Telefone:</strong> ${data.phone}</li>
        <li><strong>E-mail:</strong> ${data.email}</li>
        ${data.message ? `<li><strong>Mensagem:</strong> ${data.message}</li>` : ''}
      </ul>
      <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        Este é um e-mail automático. Não responda diretamente. Para dúvidas, entre em contato conosco através do nosso site.
      </p>
    </div>
  `;

  return sendEmail({
    to: data.email,
    subject: 'Confirmação de Contato - Group 33 incorp.',
    html,
  });
}

/**
 * Envia um e-mail de notificação para a empresa
 */
export async function sendContactNotification(
  data: ContactFormData,
  recipientEmail: string
): Promise<boolean> {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Novo Contato Recebido</h2>
      <p>Uma nova solicitação de contato foi recebida no site.</p>
      <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
      <h3>Informações do Contato:</h3>
      <ul>
        <li><strong>Nome:</strong> ${data.name}</li>
        <li><strong>Telefone:</strong> ${data.phone}</li>
        <li><strong>E-mail:</strong> ${data.email}</li>
        ${data.message ? `<li><strong>Mensagem:</strong> ${data.message}</li>` : ''}
        ${data.propertyId ? `<li><strong>Propriedade:</strong> ${data.propertyId}</li>` : ''}
      </ul>
      <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        Recebido em: ${new Date().toLocaleString('pt-BR')}
      </p>
    </div>
  `;

  return sendEmail({
    to: recipientEmail,
    subject: `Novo Contato: ${data.name}`,
    html,
    replyTo: data.email,
  });
}
