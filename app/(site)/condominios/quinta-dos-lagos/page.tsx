import fs from 'fs';
import path from 'path';
import QuintaDosLagosClient from './QuintaDosLagosClient';

export default function QuintaDosLagosPage() {
  const dir = path.join(
    process.cwd(),
    'public',
    'imagens',
    'quinta dos lagos',
  );

  let galleryImages: { src: string; alt: string }[] = [];

  try {
    const files = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => {
        if (!entry.isFile() || !/\.(png|jpe?g|webp|avif)$/i.test(entry.name))
          return false;
        const base = path.basename(entry.name, path.extname(entry.name));
        const num = parseInt(base, 10);
        return !Number.isNaN(num) && num >= 1 && num <= 27 && num !== 7;
      })
      .map((entry) => entry.name)
      .sort((a, b) => {
        const numA = parseInt(path.basename(a, path.extname(a)), 10) || 0;
        const numB = parseInt(path.basename(b, path.extname(b)), 10) || 0;
        return numA - numB;
      });

    const basePath = '/imagens/quinta%20dos%20lagos';
    galleryImages = files.map((file) => ({
      src: `${basePath}/${encodeURIComponent(file)}`,
      alt: `Condomínio Quinta dos Lagos - ${file.replace(/\.[^.]+$/, '')}`,
    }));
  } catch (error) {
    // Se a pasta não existir em algum ambiente, a galeria apenas fica vazia.
    galleryImages = [];
  }

  return <QuintaDosLagosClient galleryImages={galleryImages} />;
}


