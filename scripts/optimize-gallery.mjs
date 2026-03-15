/**
 * Compress gallery images in public/imagens that are larger than 300KB.
 * Keeps original format; reduces dimensions (max 1920px) and quality to bring size down.
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_ROOT = path.join(__dirname, '..', 'public', 'imagens');
const MAX_SIZE_BYTES = 300 * 1024;
const MAX_WIDTH = 1920;
const QUALITY = 82;

async function optimizeFile(filePath) {
  const stat = fs.statSync(filePath);
  if (stat.size <= MAX_SIZE_BYTES) return false;

  const ext = path.extname(filePath).toLowerCase();
  const isJpeg = ['.jpg', '.jpeg'].includes(ext);
  const isPng = ext === '.png';

  if (!isJpeg && !isPng) return false;

  const buffer = fs.readFileSync(filePath);
  let pipeline = sharp(buffer).rotate(); // auto-orient

  const meta = await pipeline.metadata();
  const width = meta.width || 1920;
  if (width > MAX_WIDTH) {
    pipeline = pipeline.resize(MAX_WIDTH);
  }

  if (isJpeg) {
    pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
  } else if (isPng) {
    pipeline = pipeline.png({ compressionLevel: 9 });
  }

  const out = await pipeline.toBuffer();
  if (out.length >= stat.size) return false;

  fs.writeFileSync(filePath, out);
  console.log(`  ${path.basename(filePath)}: ${(stat.size / 1024).toFixed(0)} KB → ${(out.length / 1024).toFixed(0)} KB`);
  return true;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...walkDir(full));
    } else if (/\.(jpe?g|png|webp)$/i.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  if (!fs.existsSync(IMAGES_ROOT)) {
    console.log('public/imagens not found');
    return;
  }

  const files = walkDir(IMAGES_ROOT);
  let count = 0;
  for (const f of files) {
    try {
      if (await optimizeFile(f)) count++;
    } catch (err) {
      console.warn('Skip', path.relative(IMAGES_ROOT, f), err.message);
    }
  }
  console.log(`Optimized ${count} image(s).`);
}

main();
