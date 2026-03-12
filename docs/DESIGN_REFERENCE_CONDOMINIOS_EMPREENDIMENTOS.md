# Referência de design – Condomínios e Empreendimentos

A página **Quinta dos Lagos** (`/quinta-dos-lagos`) é a **referência oficial** de padrão visual para todas as páginas de condomínios e empreendimentos do projeto. Novas páginas e alterações visuais devem seguir este exemplo para manter consistência.

## Arquivo de referência

- **Componente:** `app/condominios/quinta-dos-lagos/QuintaDosLagosClient.tsx`
- **Rota:** `/condominios/quinta-dos-lagos`

## Onde aplicar o padrão

- Páginas em `app/condominios/*/` (ex.: Fazenda Medeiros, Geminado 01, Geminado 02)
- Páginas em `app/empreendimentos/*/` (ex.: Horizon, Vila das Flores, empreendimento-01)

## Padrão visual (resumo)

| Elemento | Padrão |
|----------|--------|
| **Fundo da página** | Gradiente `from-slate-100/60 via-slate-50 to-emerald-50/50` — evita “parede branca” |
| **Parágrafos** | `text-gray-700` para leitura confortável |
| **Rótulos de seção** | `text-gray-500`, uppercase, tracking largo, com ícone |
| **Títulos** | `text-primary`, font-light ou font-medium conforme hierarquia |
| **Seções em bloco** | Alternar: `bg-white`, `bg-slate-50`, `bg-emerald-50/40` ou `bg-emerald-50/50`; sempre `rounded-3xl`, padding (`py-10 px-6 sm:px-8`), borda e sombra leve |
| **Cards** | Fundo definido, `shadow-md`/`shadow-lg`, `ring-1 ring-black/5`, bordas visíveis para contraste com o fundo |
| **Animações** | `motion` + `fadeInUp` e `staggerContainer` de `@/lib/animations`; seções com `whileInView` e `viewport={{ once: true }}` |
| **CTA final** | Bloco com gradiente primary, texto branco, botão branco com texto primary |

## Estrutura de seções (referência)

1. Hero: badge, título, subtítulo, tags, imagem principal, legenda
2. Sobre + Ficha Técnica (grid 2 colunas em lg)
3. Como Chegar (bloco com cards Carro / Helicóptero / Avião)
4. Localização (endereço, coordenadas, pontos de interesse)
5. Estrutura de Lazer (lista de itens com ícones)
6. Infraestrutura & Amenidades (cards com título e descrição)
7. Galeria (grid de imagens + lightbox)
8. Investimento & Condições
9. CTA (Fale com a Group 33)

## Regras do Cursor

As regras em `.cursor/rules/` (`condominios-empreendimentos-design.mdc` e `empreendimentos-design.mdc`) instruem o assistente a usar esta referência ao editar arquivos em `app/condominios/**/*.tsx` e `app/empreendimentos/**/*.tsx`.
