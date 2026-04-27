# Guia de Contribuição

## Bem-vindo ao Projeto 33incorp

Este guia descreve como contribuir para o projeto de forma profissional e eficiente.

## Padrões de Código

### 1. TypeScript

- Sempre use tipos explícitos
- Evite `any` - use tipos genéricos quando necessário
- Utilize interfaces para estruturas de dados

```tsx
// ✅ Bom
interface UserProps {
  name: string;
  age: number;
}

function User({ name, age }: UserProps) {
  return <div>{name} - {age}</div>;
}

// ❌ Ruim
function User(props: any) {
  return <div>{props.name}</div>;
}
```

### 2. Componentes React

- Use componentes funcionais
- Separe componentes grandes em componentes menores
- Documente props com JSDoc

```tsx
/**
 * Componente de Card
 * @param title - Título do card
 * @param description - Descrição do card
 * @param onClick - Callback ao clicar
 */
export function Card({ title, description, onClick }: CardProps) {
  return (
    <div onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

### 3. Nomes de Variáveis

- Use nomes descritivos e em inglês
- Evite abreviações desnecessárias
- Use camelCase para variáveis e funções

```tsx
// ✅ Bom
const isLoading = true;
const handleSubmit = () => {};

// ❌ Ruim
const isLd = true;
const hndlSbmt = () => {};
```

### 4. Imports

- Use imports absolutos com alias `@/`
- Agrupe imports por tipo (React, bibliotecas, projeto)

```tsx
// ✅ Bom
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Property } from '@/types';
import { useProperties } from '@/hooks/useProperties';
import { ContactForm } from '@/components/ContactForm';

// ❌ Ruim
import React, { useState } from 'react';
import ContactForm from '../../../components/ContactForm';
import useProperties from '../../../hooks/useProperties';
```

## Processo de Desenvolvimento

### 1. Criar uma Branch

```bash
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

### 2. Fazer Commits Semânticos

Use commits semânticos para melhor rastreabilidade:

```bash
git commit -m "feat: adiciona novo componente de card"
git commit -m "fix: corrige bug no formulário de contato"
git commit -m "docs: atualiza documentação de arquitetura"
git commit -m "refactor: reorganiza estrutura de pastas"
git commit -m "test: adiciona testes unitários para ContactForm"
```

### 3. Push e Pull Request

```bash
git push origin feature/nome-da-feature
```

Crie um Pull Request descrevendo:
- O que foi alterado
- Por que foi alterado
- Como testar

### 4. Code Review

Todos os PRs devem ser revisados antes de merge. Considere:
- Qualidade do código
- Testes
- Documentação
- Performance

## Testes

### Executar Testes

```bash
npm run test
```

### Escrever Testes

Sempre escreva testes para novas features:

```tsx
describe('ContactForm', () => {
  it('deve enviar formulário com dados válidos', async () => {
    // Teste
  });

  it('deve mostrar erro com dados inválidos', () => {
    // Teste
  });
});
```

## Lint e Formatação

### Verificar Lint

```bash
npm run lint
```

### Formatar Código

```bash
npx prettier --write .
```

## Performance

- Evite re-renders desnecessários
- Use `useMemo` e `useCallback` quando apropriado
- Otimize imagens com `next/image`
- Lazy load componentes pesados

## Acessibilidade

- Use tags semânticas HTML
- Adicione `aria-labels` quando necessário
- Teste com leitores de tela
- Mantenha contraste de cores adequado

## Documentação

- Documente componentes complexos
- Atualize `ARCHITECTURE.md` se mudar a estrutura
- Adicione comentários para lógica não óbvia
- Mantenha README atualizado

## Checklist Antes de Submeter PR

- [ ] Código segue os padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Lint passa sem erros
- [ ] Documentação foi atualizada
- [ ] Commits são semânticos
- [ ] Sem console.log ou código de debug

## Dúvidas?

Abra uma issue ou entre em contato com o time de desenvolvimento.

Obrigado por contribuir! 🚀
