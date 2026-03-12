import fs from 'fs';
import path from 'path';
import TauariResidenceClient from './TauariResidenceClient';

export default function TauariResidencePage() {
  const dir = path.join(
    process.cwd(),
    'public',
    'imagens',
    'tauari-residence',
  );

  let galleryImages: { src: string; alt: string }[] = [];

  try {
    const files = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => {
        if (!entry.isFile() || !/\.(png|jpe?g|webp|avif)$/i.test(entry.name)) {
          return false;
        }
        const base = path.basename(entry.name, path.extname(entry.name));
        const num = parseInt(base, 10);
        return !Number.isNaN(num) && num >= 1 && num <= 30;
      })
      .map((entry) => entry.name)
      .sort((a, b) => {
        const numA = parseInt(path.basename(a, path.extname(a)), 10) || 0;
        const numB = parseInt(path.basename(b, path.extname(b)), 10) || 0;
        return numA - numB;
      });

    const basePath = '/imagens/tauari-residence';
    galleryImages = files.map((file) => ({
      src: `${basePath}/${encodeURIComponent(file)}`,
      alt: `Tauari Residence - ${file.replace(/\.[^.]+$/, '')}`,
    }));
  } catch (_error) {
    // Se a pasta não existir em algum ambiente, a galeria apenas fica vazia.
    galleryImages = [];
  }

  return <TauariResidenceClient galleryImages={galleryImages} />;
}

