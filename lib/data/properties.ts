/**
 * Dados centralizados de condomínios e empreendimentos
 * Fonte única de verdade para informações de propriedades
 */

import type { Property } from '@/types';

export const condominios: Property[] = [
  {
    id: 'fazenda-medeiros',
    slug: 'fazenda-medeiros',
    title: 'Fazenda Medeiros',
    subtitle: 'Condomínio Residencial de Alto Padrão',
    description: 'Onde a imensidão do mar encontra a alma do campo – um novo jeito de viver.',
    shortDescription: 'O Condomínio Fazenda Medeiros é uma oportunidade exclusiva para investir com segurança. Um projeto inovador que une moradia e lazer em um só lugar.',
    image: '/imagens/fazenda-medeiros.png',
    gallery: [
      '/public/imagens/fazenda/1.jpg',
      '/public/imagens/fazenda/2.jpg',
      '/public/imagens/fazenda/3.jpg',
    ],
    badge: {
      label: 'Lançamento Oficial',
      tone: 'gold',
    },
    status: 'available',
    location: {
      city: 'Joinville',
      state: 'SC',
      address: 'Fazenda Medeiros, Joinville - SC',
    },
    features: [
      {
        title: 'Segurança 24h',
        description: 'Portaria com monitoramento constante',
      },
      {
        title: 'Áreas de Lazer',
        description: 'Piscina, quadra e churrasqueira',
      },
      {
        title: 'Natureza Preservada',
        description: 'Áreas verdes e trilhas ecológicas',
      },
    ],
    amenities: [
      'Piscina aquecida',
      'Quadra de tênis',
      'Churrasqueira',
      'Salão de festas',
      'Academia',
      'Playground',
    ],
    investmentInfo: {
      area: '500 m²',
      bedrooms: 3,
      bathrooms: 2,
    },
    whatsappMessage: 'Gostaria de mais informações sobre o Fazenda Medeiros',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-04-27',
      seoTitle: 'Fazenda Medeiros - Condomínio de Alto Padrão em Joinville',
      seoDescription: 'Condomínio residencial fechado com segurança 24h, áreas de lazer e natureza preservada em Joinville.',
      seoKeywords: ['condomínio', 'Joinville', 'alto padrão', 'Fazenda Medeiros'],
    },
  },
  {
    id: 'quinta-dos-lagos',
    slug: 'quinta-dos-lagos',
    title: 'Quinta dos Lagos',
    subtitle: 'Condomínio Fechado de Alto Padrão',
    description: 'Um projeto inovador que une moradia e lazer em um só lugar.',
    shortDescription: 'O Condomínio Quinta dos Lagos é uma oportunidade exclusiva para investir com segurança.',
    image: '/imagens/quinta-dos-lagos.png',
    gallery: [
      '/public/imagens/quinta dos lagos/1.jpg',
      '/public/imagens/quinta dos lagos/2.jpg',
    ],
    status: 'available',
    location: {
      city: 'Joinville',
      state: 'SC',
    },
    features: [
      {
        title: 'Localização Privilegiada',
        description: 'Próximo a principais acessos',
      },
      {
        title: 'Infraestrutura Completa',
        description: 'Serviços e comércios próximos',
      },
    ],
    amenities: [
      'Piscina',
      'Quadra',
      'Salão de festas',
      'Parque infantil',
    ],
    investmentInfo: {
      area: '450 m²',
      bedrooms: 3,
      bathrooms: 2,
    },
    whatsappMessage: 'Gostaria de mais informações sobre a Quinta dos Lagos',
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-04-27',
      seoTitle: 'Quinta dos Lagos - Condomínio Fechado em Joinville',
      seoDescription: 'Condomínio de alto padrão com infraestrutura completa e localização privilegiada.',
      seoKeywords: ['condomínio', 'Quinta dos Lagos', 'Joinville'],
    },
  },
  {
    id: 'vale-do-ouro',
    slug: 'vale-do-ouro',
    title: 'Vale do Ouro',
    subtitle: 'Chalés de Alto Padrão',
    description: 'Chalés exclusivos em ambiente natural.',
    shortDescription: 'Chalés de alto padrão em Vale do Ouro.',
    image: '/imagens/vale-do-ouro.png',
    status: 'available',
    location: {
      city: 'Joinville',
      state: 'SC',
    },
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-04-27',
      seoTitle: 'Vale do Ouro - Chalés de Alto Padrão',
      seoDescription: 'Chalés exclusivos em ambiente natural em Joinville.',
      seoKeywords: ['chalés', 'Vale do Ouro', 'Joinville'],
    },
  },
];

export const empreendimentos: Property[] = [
  {
    id: 'tauari-residence',
    slug: 'tauari-residence',
    title: 'Tauari Residence',
    subtitle: 'Empreendimento Residencial',
    description: 'Empreendimento residencial de alto padrão.',
    shortDescription: 'Residência de luxo em Joinville.',
    image: '/imagens/tauari.png',
    status: 'available',
    location: {
      city: 'Joinville',
      state: 'SC',
    },
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-04-27',
      seoTitle: 'Tauari Residence - Empreendimento Residencial',
      seoDescription: 'Empreendimento residencial de alto padrão em Joinville.',
      seoKeywords: ['empreendimento', 'Tauari', 'Joinville'],
    },
  },
  {
    id: 'vila-das-flores',
    slug: 'vila-das-flores',
    title: 'Vila das Flores',
    subtitle: 'Condomínio Residencial',
    description: 'Condomínio residencial com infraestrutura completa.',
    shortDescription: 'Vila das Flores - Condomínio de qualidade.',
    image: '/imagens/vila-das-flores.png',
    status: 'available',
    location: {
      city: 'Joinville',
      state: 'SC',
    },
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-04-27',
      seoTitle: 'Vila das Flores - Condomínio Residencial',
      seoDescription: 'Condomínio residencial com infraestrutura completa em Joinville.',
      seoKeywords: ['condomínio', 'Vila das Flores', 'Joinville'],
    },
  },
  {
    id: 'horizon',
    slug: 'horizon',
    title: 'Residencial Horizon',
    subtitle: 'Empreendimento Moderno',
    description: 'Empreendimento residencial moderno e inovador.',
    shortDescription: 'Residencial Horizon - Modernidade e conforto.',
    image: '/imagens/residencial-horizon.png',
    status: 'available',
    location: {
      city: 'Joinville',
      state: 'SC',
    },
    metadata: {
      createdAt: '2024-01-01',
      updatedAt: '2024-04-27',
      seoTitle: 'Residencial Horizon - Empreendimento Moderno',
      seoDescription: 'Empreendimento residencial moderno em Joinville.',
      seoKeywords: ['residencial', 'Horizon', 'Joinville'],
    },
  },
];

/**
 * Função auxiliar para buscar uma propriedade por slug
 */
export function getPropertyBySlug(slug: string): Property | undefined {
  return [...condominios, ...empreendimentos].find(p => p.slug === slug);
}

/**
 * Função auxiliar para buscar propriedades por tipo
 */
export function getPropertiesByType(type: 'condominio' | 'empreendimento'): Property[] {
  return type === 'condominio' ? condominios : empreendimentos;
}
