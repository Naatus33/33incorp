/**
 * Hook customizado para acessar dados de propriedades
 * Centraliza a lógica de busca e filtragem de propriedades
 */

import { useMemo } from 'react';
import { condominios, empreendimentos, getPropertyBySlug, getPropertiesByType } from '@/lib/data/properties';
import type { Property } from '@/types';

export function useProperties() {
  const allProperties = useMemo(() => [...condominios, ...empreendimentos], []);

  return {
    condominios,
    empreendimentos,
    allProperties,
    getPropertyBySlug,
    getPropertiesByType,
  };
}

export function usePropertyBySlug(slug: string): Property | undefined {
  return useMemo(() => getPropertyBySlug(slug), [slug]);
}

export function usePropertiesByType(type: 'condominio' | 'empreendimento'): Property[] {
  return useMemo(() => getPropertiesByType(type), [type]);
}
