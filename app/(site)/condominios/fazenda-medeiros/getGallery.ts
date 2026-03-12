import 'server-only';
import fs from 'fs';
import path from 'path';

export type GalleryImage = { src: string; alt: string };

export function getFazendaMedeirosGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), 'public', 'imagens', 'fazenda');

  try {
    const files = fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((entry) => {
        if (!entry.isFile() || !/\.(png|jpe?g|webp|avif)$/i.test(entry.name))
          return false;
        return true;
      })
      .map((entry) => entry.name)
      .sort((a, b) => {
        const baseA = path.basename(a, path.extname(a));
        const baseB = path.basename(b, path.extname(b));
        const numA = parseInt(baseA, 10);
        const numB = parseInt(baseB, 10);
        if (!Number.isNaN(numA) && !Number.isNaN(numB)) return numA - numB;
        return String(baseA).localeCompare(String(baseB));
      });

    if (files.length === 0) {
      return [
        { src: '/imagens/fazenda/1.jpg', alt: 'Fazenda Medeiros - Vista principal' },
      ];
    }

    return files.map((file) => ({
      src: `/imagens/fazenda/${file}`,
      alt: `Fazenda Medeiros - ${file.replace(/\.[^.]+$/, '')}`,
    }));
  } catch {
    return [
      { src: '/imagens/fazenda/1.jpg', alt: 'Fazenda Medeiros - Vista principal' },
    ];
  }
}
