import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetDir = path.join(__dirname, 'src/assets/phone-preview');

const images = [
  'Screenshot 2026-08-17 at 16.57.56.png',
  'Screenshot 2026-08-17 at 16.58.11.png'
];

async function removeBackground(filename) {
  const inputPath = path.join(assetDir, filename);
  const outputPath = inputPath; // Overwrite original

  try {
    // Read the image
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Processing ${filename}...`);
    console.log(`Original size: ${metadata.width}x${metadata.height}`);

    // Extract just the phone screen area (removing the bezel)
    // Based on the screenshots, estimate the dark screen area
    const width = metadata.width;
    const height = metadata.height;

    // For the iPhone frame images, extract approximately the screen portion
    // The screen is the dark area in the center of the light frame
    const estimatedLeft = Math.round(width * 0.12);
    const estimatedTop = Math.round(height * 0.08);
    const estimatedWidth = Math.round(width * 0.76);
    const estimatedHeight = Math.round(height * 0.85);

    console.log(`Extracting: left=${estimatedLeft}, top=${estimatedTop}, width=${estimatedWidth}, height=${estimatedHeight}`);

    // Extract the screen area
    const processed = await sharp(inputPath)
      .extract({
        left: estimatedLeft,
        top: estimatedTop,
        width: estimatedWidth,
        height: estimatedHeight
      })
      .png()
      .toBuffer();

    // Save the processed image (overwrite original)
    fs.writeFileSync(outputPath, processed);
    console.log(`✓ Processed and saved ${filename}`);

  } catch (err) {
    console.error(`Error processing ${filename}:`, err.message);
  }
}

// Process both images
async function main() {
  for (const img of images) {
    await removeBackground(img);
  }
  console.log('\n✓ Background removal complete!');
}

main();
