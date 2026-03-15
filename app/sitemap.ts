import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.33incorp.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/quem-somos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Condomínios — listagem
    {
      url: `${BASE_URL}/condominios`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Condomínios — produtos
    {
      url: `${BASE_URL}/condominios/fazenda-medeiros`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/condominios/quinta-dos-lagos`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/condominios/geminado-01`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/condominios/geminado-02`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Empreendimentos — listagem
    {
      url: `${BASE_URL}/empreendimentos`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Empreendimentos — produtos
    {
      url: `${BASE_URL}/empreendimentos/horizon`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/empreendimentos/vila-das-flores`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/empreendimentos/tauari-residence`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/empreendimentos/empreendimento-01`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Chalés — listagem
    {
      url: `${BASE_URL}/chales`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Chalés — produtos
    {
      url: `${BASE_URL}/chales/vale-do-ouro`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/chales/chale-01`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/chales/chale-02`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Geminados
    {
      url: `${BASE_URL}/geminado`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Legais
    {
      url: `${BASE_URL}/privacidade`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/termos`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
