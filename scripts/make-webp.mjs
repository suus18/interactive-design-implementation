import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

// Converts the three full-size PNG artwork exports shipped in the source archive
// into web-only WebP so the deployed site stays light on mobile networks.
const srcDir = process.argv[2]
const outDir = process.argv[3]
const names = ['043dc', '9f3f4', 'e29ae']

if (!srcDir || !outDir) {
  console.error('usage: node scripts/make-webp.mjs <source-assets-dir> <output-assets-dir>')
  process.exit(1)
}

fs.mkdirSync(outDir, { recursive: true })

for (const name of names) {
  const input = path.join(srcDir, `${name}.png`)
  if (!fs.existsSync(input)) {
    console.error(`missing source artwork: ${input}`)
    process.exit(1)
  }
  const output = path.join(outDir, `${name}.webp`)
  const info = await sharp(input).webp({ quality: 80, effort: 6 }).toFile(output)
  console.log(`${name}.webp ${info.width}x${info.height} ${Math.round(info.size / 1024)}KB`)
}
