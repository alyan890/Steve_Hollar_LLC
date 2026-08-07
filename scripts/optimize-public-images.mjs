import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "public");
const optimizedDir = path.join(publicDir, "optimized");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "optimized") continue;
      files.push(...(await walk(fullPath)));
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (supportedExtensions.has(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  await fs.mkdir(optimizedDir, { recursive: true });

  const files = await walk(publicDir);
  const imageFiles = files.filter((filePath) => !filePath.includes(`${path.sep}video${path.sep}`));

  for (const inputPath of imageFiles) {
    const relativePath = path.relative(publicDir, inputPath);
    const parsed = path.parse(relativePath);
    const outputPath = path.join(optimizedDir, `${parsed.name}.webp`);

    try {
      await sharp(inputPath, { failOn: "none" })
        .resize({ width: 1600, withoutEnlargement: true, fit: "inside" })
        .webp({ quality: 75 })
        .toFile(outputPath);

      console.log(`Optimized ${relativePath} -> ${path.relative(publicDir, outputPath)}`);
    } catch (error) {
      console.warn(`Skipped ${relativePath}: ${error.message}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
