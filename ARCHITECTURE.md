# Arquitetura do Projeto 33incorp

## Visão Geral

Este documento descreve a arquitetura profissional do projeto `33incorp`, implementada seguindo princípios de desenvolvimento sênior, escalabilidade e manutenibilidade.

## Estrutura de Pastas

```
33incorp/
├── app/                          # App Router do Next.js
│   ├── (site)/                   # Grupo de rotas do site público
│   │   ├── page.tsx              # Página inicial
│   │   ├── condominios/          # Rotas de condomínios
│   │   ├── empreendimentos/      # Rotas de empreendimentos
│   │   └── ...
│   ├── api/                      # API Routes
│   │   ├── contact/              # Endpoint de contato
│   │   └── ...
│   ├── layout.tsx                # Layout raiz
│   └── globals.css               # Estilos globais
├── components/                   # Componentes React reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── ...
├── hooks/                        # Hooks customizados
│   ├── use-mobile.ts
│   ├── useProperties.ts          # Hook para acessar propriedades
│   └── ...
├── lib/                          # Utilitários e lógica compartilhada
│   ├── data/                     # Dados centralizados
│   │   └── properties.ts         # Dados de condomínios e empreendimentos
│   ├── services/                 # Serviços (email, auth, etc.)
│   │   └── email.service.ts      # Serviço de e-mail
│   ├── types/                    # Tipos TypeScript compartilhados
│   ├── constants/                # Constantes globais
│   ├── utils/                    # Funções utilitárias
│   └── animations.ts             # Configurações de animação
├── public/                       # Arquivos estáticos
│   ├── imagens/                  # Imagens de propriedades
│   ├── og-*.jpg                  # Imagens Open Graph
│   └── ...
├── types/                        # Tipos TypeScript globais
│   └── index.ts                  # Tipos centralizados
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── ARCHITECTURE.md               # Este arquivo
```

## Camadas da Aplicação

### 1. Apresentação (Components)

Componentes React reutilizáveis que formam a interface do usuário. Cada componente deve:
- Ser responsável por uma única responsabilidade (Single Responsibility Principle)
- Aceitar props bem tipadas
- Ser agnóstico quanto à origem dos dados
- Utilizar tokens de design do Tailwind

**Exemplo:**
```tsx
interface CardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export function Card({ title, description, image, onClick }: CardProps) {
  // Renderização
}
```

### 2. Lógica de Negócio (Hooks e Services)

Hooks customizados e serviços encapsulam a lógica de negócio, separando-a da apresentação.

**Hooks:** Reutilizam estado e efeitos (e.g., `useProperties`, `use-mobile`)
**Services:** Lógica de negócio pura (e.g., `email.service.ts`)

### 3. Dados (lib/data)

Fonte única de verdade para dados da aplicação. Atualmente utiliza arquivos JSON/TS, mas pode ser facilmente migrada para um CMS ou banco de dados.

**Exemplo:**
```ts
// lib/data/properties.ts
export const condominios: Property[] = [...]
export function getPropertyBySlug(slug: string): Property | undefined { ... }
```

### 4. Tipos (types/)

Definições centralizadas de tipos TypeScript para garantir consistência e type-safety em toda a aplicação.

**Exemplo:**
```ts
// types/index.ts
export interface Property {
  id: string;
  title: string;
  // ...
}
```

### 5. API (app/api)

Rotas de API do Next.js que servem como backend para operações específicas (envio de formulários, autenticação, etc.).

**Exemplo:**
```ts
// app/api/contact/route.ts
export async function POST(request: NextRequest) {
  // Processar contato
}
```

## Fluxo de Dados

```
User Interaction
    ↓
Component (UI)
    ↓
Hook (useProperties, useForm, etc.)
    ↓
Service (email.service.ts) / Data (lib/data)
    ↓
API Route (app/api/*)
    ↓
Backend / External Service
```

## Padrões e Convenções

### 1. Nomenclatura de Arquivos

- **Componentes:** PascalCase (e.g., `ContactForm.tsx`)
- **Hooks:** camelCase com prefixo `use` (e.g., `useProperties.ts`)
- **Services:** camelCase com sufixo `.service.ts` (e.g., `email.service.ts`)
- **Tipos:** PascalCase em `types/` (e.g., `Property`, `ContactFormData`)
- **Constantes:** UPPER_SNAKE_CASE (e.g., `MAX_FILE_SIZE`)

### 2. Imports

Sempre utilizar imports absolutos com alias `@/`:

```tsx
import { Property } from '@/types';
import { getPropertyBySlug } from '@/lib/data/properties';
import { useProperties } from '@/hooks/useProperties';
import { ContactForm } from '@/components/ContactForm';
```

### 3. Validação

Validar dados em múltiplas camadas:
- **Frontend:** Validação de formulário com `react-hook-form` e `zod`
- **Backend:** Validação em API Routes antes de processar

### 4. Tratamento de Erros

Sempre tratar erros gracefully:

```tsx
try {
  // Operação
} catch (error) {
  const message = error instanceof Error ? error.message : 'Erro desconhecido';
  // Notificar usuário
}
```

## Design System

### Cores

- **Primary:** `#01011c` (azul escuro)
- **Secondary:** `#ffffff` (branco)
- **Accent:** `#ffffff`
- **Accent Light:** `#f3f4f6`

### Tipografia

- **Font Sans:** Montserrat (padrão)
- **Font Tag:** Outfit
- **Pesos:** 300, 400, 500, 600, 700

### Espaçamento

Utilizar escala de espaçamento definida em `globals.css`:
- `--spacing-xs`: 0.25rem
- `--spacing-sm`: 0.5rem
- `--spacing-md`: 1rem
- `--spacing-lg`: 1.5rem
- `--spacing-xl`: 2rem
- `--spacing-2xl`: 3rem
- `--spacing-3xl`: 4rem

## Performance

### Otimizações Implementadas

1. **Next.js Image:** Utilizar `next/image` para otimização automática
2. **Code Splitting:** Componentes são automaticamente divididos pelo Next.js
3. **Lazy Loading:** Imagens carregam sob demanda com `loading="lazy"`
4. **SEO:** JSON-LD estruturado para melhor indexação

### Recomendações Futuras

1. Implementar ISR (Incremental Static Regeneration) para páginas de propriedades
2. Adicionar caching de API com SWR ou React Query
3. Implementar Progressive Web App (PWA)

## SEO

### Implementado

- Metadata global em `app/layout.tsx`
- JSON-LD para Organization e RealEstateListing
- Open Graph e Twitter Cards
- Sitemap dinâmico
- Robots.txt

### Recomendações

1. Expandir JSON-LD para outras páginas
2. Implementar breadcrumb schema
3. Adicionar structured data para reviews
4. Otimizar Core Web Vitals

## Segurança

### Implementado

- Validação de entrada em API Routes
- CORS configurado adequadamente
- Variáveis de ambiente para dados sensíveis

### Recomendações

1. Implementar rate limiting em API Routes
2. Adicionar autenticação para admin
3. Implementar CSRF protection
4. Auditar dependências regularmente com `npm audit`

## Próximos Passos

1. **Testes:** Implementar testes unitários com Jest e React Testing Library
2. **CI/CD:** Configurar GitHub Actions para testes e deploy automático
3. **Monitoramento:** Adicionar Sentry para error tracking
4. **Analytics:** Integrar Google Analytics ou Plausible
5. **CMS:** Considerar migração para Headless CMS (Strapi, Contentful, Sanity)

## Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [React Best Practices](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
