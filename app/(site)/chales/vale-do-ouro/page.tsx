import fs from 'fs';
import path from 'path';
import ValeDoOuroClient from './ValeDoOuroClient';

const IMAGES_DIR = path.join(process.cwd(), 'public', 'imagens', 'valedoouro');
const HERO_FILENAME = '1.jpg';
const HERO_ALT_DEFAULT = 'Vale do Ouro - Vista principal';

type ManifestCaptions = Record<
  string,
  { alt: string; caption?: string }
>;

type Manifest = {
  hero?: string;
  captions?: ManifestCaptions;
  sectionImages?: {
    sobre?: string[];
    lazer?: string[];
  };
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type SectionImages = {
  sobre?: GalleryImage[];
  lazer?: GalleryImage[];
};

function loadManifest(): Manifest | null {
  const manifestPath = path.join(IMAGES_DIR, 'manifest.json');
  try {
    if (!fs.existsSync(manifestPath)) return null;
    const raw = fs.readFileSync(manifestPath, 'utf-8');
    return JSON.parse(raw) as Manifest;
  } catch {
    return null;
  }
}

function getImagePath(filename: string): string {
  return `/imagens/valedoouro/${filename}`;
}

export default function ValeDoOuroPage() {
  let galleryImages: GalleryImage[] = [];
  let heroImage: { src: string; alt: string } = {
    src: getImagePath(HERO_FILENAME),
    alt: HERO_ALT_DEFAULT,
  };
  let sectionImages: SectionImages = {};

  try {
    const files = fs
      .readdirSync(IMAGES_DIR, { withFileTypes: true })
      .filter((entry) => {
        if (!entry.isFile() || !/\.(png|jpe?g|webp|avif)$/i.test(entry.name))
          return false;
        const base = path.basename(entry.name, path.extname(entry.name));
        const num = parseInt(base, 10);
        return !Number.isNaN(num) && num >= 1 && num <= 29;
      })
      .map((entry) => entry.name)
      .sort((a, b) => {
        const numA = parseInt(path.basename(a, path.extname(a)), 10) || 0;
        const numB = parseInt(path.basename(b, path.extname(b)), 10) || 0;
        return numA - numB;
      });

    const manifest = loadManifest();
    const captions = manifest?.captions ?? {};

    galleryImages = files.map((file) => {
      const c = captions[file];
      return {
        src: getImagePath(file),
        alt: c?.alt ?? `Vale do Ouro - ${file.replace(/\.[^.]+$/, '')}`,
        ...(c?.caption && { caption: c.caption }),
      };
    });

    heroImage = {
      src: getImagePath(HERO_FILENAME),
      alt:
        captions[HERO_FILENAME]?.alt ??
        manifest?.captions?.[HERO_FILENAME]?.alt ??
        HERO_ALT_DEFAULT,
    };

    if (manifest?.sectionImages) {
      const toGallery = (filenames: string[]): GalleryImage[] =>
        filenames
          .filter((f) => fs.existsSync(path.join(IMAGES_DIR, f)))
          .map((f) => ({
            src: getImagePath(f),
            alt: captions[f]?.alt ?? `Vale do Ouro - ${f.replace(/\.[^.]+$/, '')}`,
            ...(captions[f]?.caption && { caption: captions[f].caption }),
          }));

      if (manifest.sectionImages.sobre?.length)
        sectionImages.sobre = toGallery(manifest.sectionImages.sobre);
      if (manifest.sectionImages.lazer?.length)
        sectionImages.lazer = toGallery(manifest.sectionImages.lazer);
    }
  } catch {
    galleryImages = [];
    heroImage = { src: getImagePath(HERO_FILENAME), alt: HERO_ALT_DEFAULT };
    sectionImages = {};
  }

  return (
    <ValeDoOuroClient
      galleryImages={galleryImages}
      heroImage={heroImage}
      sectionImages={sectionImages}
    />
  );
}
