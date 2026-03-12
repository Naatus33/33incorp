<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/96d1334b-1a0e-41ca-8f89-32b9215f6796

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Erros comuns no navegador

- **404 em `main-app.js`, `page.js`, `app-pages-internals.js`**  
  Significa que os scripts do Next não estão sendo servidos. Use sempre o servidor do Next:
  - Desenvolvimento: `npm run dev` e acesse `http://localhost:3174`
  - Produção: `npm run build` e depois `npm run start` (ou execute o servidor standalone), e acesse pela URL que o servidor indicar.  
  Não abra o arquivo HTML do build diretamente (file://) e não use um servidor estático que não sirva a pasta `_next`.

- **"Cannot read properties of undefined (reading 'register')" no onreset**  
  Costuma ser consequência dos 404 acima: os bundles do cliente não carregam e o script inline tenta usar o runtime que não existe. Corrigir o modo de servir (ver acima) resolve.

- **"[Intervention] Images loaded lazily..."**  
  Aviso do navegador (lazy loading de imagens), não é erro da aplicação.
