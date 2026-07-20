import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

// 1. Wipe dist directory before building to eliminate any stale/duplicate builds
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 2. Find all presentation directories (subdirectories containing <dirname>.md)
const items = fs.readdirSync(rootDir);
const presentations = [];

for (const item of items) {
  const itemPath = path.join(rootDir, item);
  if (fs.statSync(itemPath).isDirectory() && item !== 'dist' && item !== 'public' && item !== 'node_modules') {
    const mdPath = path.join(itemPath, `${item}.md`);
    if (fs.existsSync(mdPath)) {
      presentations.push({ dir: item, md: `${item}/${item}.md` });
    }
  }
}

console.log(`Found ${presentations.length} presentation(s) to build:`, presentations.map(p => p.dir));

// 3. Build each presentation to dist/<dirname> with relative base
for (const p of presentations) {
  console.log(`\n📦 Building presentation: ${p.dir}...`);
  const outPath = path.join(distDir, p.dir);
  execSync(`npx slidev build ${p.md} --out "${outPath}" --base ./`, { stdio: 'inherit', cwd: rootDir });
  
  // Ensure 404.html fallback exists in each presentation folder
  const indexPath = path.join(outPath, 'index.html');
  const presentation404Path = path.join(outPath, '404.html');
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, presentation404Path);
  }

  // Copy public assets into subfolder dist to guarantee favicon resolution
  if (fs.existsSync(publicDir)) {
    for (const file of fs.readdirSync(publicDir)) {
      fs.copyFileSync(path.join(publicDir, file), path.join(outPath, file));
    }
  }
}

// 4. Copy public assets to dist root for landing page and root favicon resolution
if (fs.existsSync(publicDir)) {
  for (const file of fs.readdirSync(publicDir)) {
    fs.copyFileSync(path.join(publicDir, file), path.join(distDir, file));
  }
}

// 5. Generate index landing page
console.log('\n🌐 Generating index landing page...');
execSync(`node build-index.js`, { stdio: 'inherit', cwd: rootDir });

// 6. Create root 404.html fallback copying index.html
const rootIndexPath = path.join(distDir, 'index.html');
const root404Path = path.join(distDir, '404.html');
if (fs.existsSync(rootIndexPath)) {
  fs.copyFileSync(rootIndexPath, root404Path);
}

console.log('\n✨ Build complete! Open dist/index.html in your browser or run pnpm run preview.');
