import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { run } = require('react-snap');
const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const chromeCandidates = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/snap/bin/chromium'
].filter(Boolean);

const chromePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));

const options = {
  ...(packageJson.reactSnap || {})
};

if (chromePath) {
  options.puppeteerExecutablePath = chromePath;
  console.log(`Using Chrome for prerender: ${chromePath}`);
} else {
  console.log('No system Chrome detected, using Puppeteer bundled Chromium.');
}

run(options).catch((error) => {
  console.error(error);
  process.exit(1);
});
