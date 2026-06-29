import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

function convertImagesToWebp() {
  return {
    name: 'convert-images-to-webp',
    async buildStart() {
      const imagesDir = path.resolve('public/assets/images');
      if (!fs.existsSync(imagesDir)) return;

      const files = fs.readdirSync(imagesDir);
      for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
          const filePath = path.join(imagesDir, file);
          const baseName = path.basename(file, ext);
          const webpPath = path.join(imagesDir, `${baseName}.webp`);

          let shouldConvert = false;
          if (!fs.existsSync(webpPath)) {
            shouldConvert = true;
          } else {
            const sourceStats = fs.statSync(filePath);
            const webpStats = fs.statSync(webpPath);
            if (sourceStats.mtimeMs > webpStats.mtimeMs) {
              shouldConvert = true;
            }
          }

          if (shouldConvert) {
            console.log(`[WebP Converter] Converting ${file} to WebP...`);
            try {
              await sharp(filePath).webp({ quality: 80 }).toFile(webpPath);
              console.log(`[WebP Converter] Converted ${file} to WebP successfully!`);
            } catch (err) {
              console.error(`[WebP Converter] Failed to convert ${file} to WebP:`, err);
            }
          }
        }
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), convertImagesToWebp()],
})
