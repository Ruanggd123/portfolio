// Captura screenshots dos projetos com GitHub Pages ativas
const { chromium } = require('playwright');

const projects = [
  { name: 'Batalha-de-seguidores', url: 'https://ruanggd123.github.io/Batalha-de-seguidores/' },
  { name: 'CurriculoReact',       url: 'https://ruanggd123.github.io/CurriculoReact/' },
  { name: 'formSimples',          url: 'https://ruanggd123.github.io/formSimples/' },
  { name: 'Modelo_Curriculo',     url: 'https://ruanggd123.github.io/Modelo_Curriculo/' },
  { name: 'Rifa',                 url: 'https://ruanggd123.github.io/Rifa/' },
  { name: 'TecWebTarefa1',        url: 'https://ruanggd123.github.io/TecWebTarefa1/' },
  { name: 'Tj',                   url: 'https://ruanggd123.github.io/Tj/' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
  });

  for (const p of projects) {
    const page = await context.newPage();
    const outPath = `assets/screenshots/${p.name}.png`;
    console.log(`Capturing: ${p.name} -> ${outPath}`);
    try {
      await page.goto(p.url, { waitUntil: 'networkidle', timeout: 20000 });
      // dá uma pausa pra animacoes/estabilizar
      await page.waitForTimeout(1500);
      await page.screenshot({ path: outPath, fullPage: false });
      console.log(`  OK: ${p.name}`);
    } catch (e) {
      console.log(`  ERR ${p.name}: ${e.message}`);
      // tenta screenshot mesmo assim (visivel)
      try {
        await page.screenshot({ path: outPath, fullPage: false });
        console.log(`  OK (fallback): ${p.name}`);
      } catch (e2) {
        console.log(`  FALHOU ${p.name}: ${e2.message}`);
      }
    }
    await page.close();
  }

  await browser.close();
  console.log('Done.');
})();
