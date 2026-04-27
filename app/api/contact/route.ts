/**
 * API Route: POST /api/contact
 * Responsável por processar submissões do formulário de contato
 */

import { NextRequest, NextResponse } from 'next/server';
import type { ContactFormData, ContactResponse } from '@/types';
import { sendContactConfirmation, sendContactNotification } from '@/lib/services/email.service';

/**
 * Validação básica dos dados do formulário
 */
function validateContactData(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 3) {
    errors.push('Nome deve ter pelo menos 3 caracteres');
  }

  if (!data.email || typeof data.email !== 'string' || !isValidEmail(data.email)) {
    errors.push('E-mail inválido');
  }

  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length < 10) {
    errors.push('Telefone inválido');
  }

  if (data.message && typeof data.message !== 'string') {
    errors.push('Mensagem deve ser texto');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Validação de e-mail
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Handler POST para submissão de formulário de contato
 */
export async function POST(request: NextRequest): Promise<NextResponse<ContactResponse>> {
  try {
    const body = await request.json();

    // Validação
    const validation = validateContactData(body);
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Dados inválidos: ' + validation.errors.join(', '),
        },
        { status: 400 }
      );
    }

    const contactData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      message: body.message?.trim() || undefined,
      propertyId: body.propertyId || undefined,
    };

    // Enviar e-mail de confirmação para o usuário
    const confirmationSent = await sendContactConfirmation(contactData);

    // Enviar notificação para a empresa
    const companyEmail = process.env.NEXT_PUBLIC_EMAIL || 'contato@33incorp.com.br';
    const notificationSent = await sendContactNotification(contactData, companyEmail);

    if (!confirmationSent || !notificationSent) {
      console.warn('⚠️ Falha ao enviar um dos e-mails');
    }

    // Aqui você poderia também:
    // - Salvar em um banco de dados
    // - Integrar com um CRM
    // - Enviar para um webhook

    return NextResponse.json(
      {
        success: true,
        message: 'Contato recebido com sucesso. Entraremos em contato em breve!',
        data: {
          id: `contact_${Date.now()}`,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Erro ao processar contato:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Erro ao processar sua solicitação. Tente novamente mais tarde.',
      },
      { status: 500 }
    );
  }
}

/**
 * Handler OPTIONS para CORS
 */
export async function OPTIONS(): Promise<NextResponse> {
  return NextResponse.json({}, { status: 200 });
}
