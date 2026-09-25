const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const projects = [
  { name: 'CurriculoReact', url: 'https://ruanggd123.github.io/CurriculoReact/' },
  { name: 'echo-world', url: 'https://ruanggd123.github.io/echo-world/' },
  { name: 'meruoca', url: 'https://ruanggd123.github.io/meruoca/' },
  { name: 'idc_website', url: 'https://idc-despertar-da-cidadania.web.app/' },
  { name: 'Certifica-ESG-AgriFamiliar', url: 'https://idc-despertar-da-cidadania.web.app/' },
  { name: 'Certifica-AgriFamiliar-ESG', url: 'https://idc-despertar-da-cidadania.web.app/' },
  { name: 'Rifa', url: 'https://ruanggd123.github.io/Rifa/' },
  { name: 'Batalha-de-seguidores', url: 'https://ruanggd123.github.io/Batalha-de-seguidores/' },
  { name: 'formSimples', url: 'https://ruanggd123.github.io/formSimples/' },
  { name: 'Modelo_Curriculo', url: 'https://ruanggd123.github.io/Modelo_Curriculo/' },
  { name: 'TecWebTarefa1', url: 'https://ruanggd123.github.io/TecWebTarefa1/' },
  { name: 'portfolio', url: 'https://ruanggd123.github.io/portfolio/' }
];

(async () => {
  const screenshotsDir = path.join(__dirname, 'assets', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1
  });

  for (const p of projects) {
    const page = await context.newPage();
    const outPath = path.join(screenshotsDir, `${p.name}.png`);
    console.log(`Capturing: ${p.name} -> ${outPath}`);
    try {
      await page.goto(p.url, { waitUntil: 'load', timeout: 20000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  OK: ${p.name}`);
    } catch (e) {
      console.log(`  ERR ${p.name}: ${e.message}`);
    }
    await page.close();
  }

  await browser.close();
  console.log('Capture completed successfully.');
})();
