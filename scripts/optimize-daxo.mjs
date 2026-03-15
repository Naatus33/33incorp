import sharp from 'sharp';
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const input = join(root, 'public', 'parceiros', 'daxo.png');
const output = join(root, 'public', 'parceiros', 'daxo.webp');

if (!existsSync(input)) {
  console.error('daxo.png not found');
  process.exit(1);
}

const image = sharp(input);
const meta = await image.metadata();
const width = meta.width || 1200;
// Resize to max 400px width for partner logo, maintain aspect
const maxWidth = 400;
const resizeWidth = width > maxWidth ? maxWidth : width;

await sharp(input)
  .resize(resizeWidth)
  .webp({ quality: 82, effort: 6 })
  .toFile(output);

const { size } = await import('fs').then(fs => fs.promises.stat(output));
console.log(`Created ${output}, size: ${(size / 1024).toFixed(1)} KB`);
if (size > 102400) {
  console.warn('Target was <100KB; consider lowering quality or max width');
}
