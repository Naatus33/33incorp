/**
 * Tipos centralizados para o projeto 33incorp
 * Mantém a consistência de tipos entre componentes e serviços
 */

export interface Property {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  shortDescription: string;
  image: string;
  gallery?: string[];
  badge?: {
    label: string;
    tone: 'gold' | 'bronze' | 'silver';
  };
  status: 'available' | 'comingSoon' | 'sold';
  location?: {
    city: string;
    state: string;
    address?: string;
  };
  features?: Feature[];
  amenities?: string[];
  investmentInfo?: {
    price?: string;
    pricePerM2?: string;
    area?: string;
    bedrooms?: number;
    bathrooms?: number;
  };
  whatsappMessage?: string;
  metadata?: {
    createdAt: string;
    updatedAt: string;
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string[];
  };
}

export interface Feature {
  icon?: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message?: string;
  propertyId?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'whatsapp' | 'email';
  url: string;
  label?: string;
}
