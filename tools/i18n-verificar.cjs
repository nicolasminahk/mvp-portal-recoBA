// Verifica una versión traducida completa:
//   node tools/i18n-verificar.cjs en [carpeta]
// 1) genera el sitio, 2) comprueba que el JavaScript sigue siendo válido,
// 3) abre cada pantalla y recoge errores de consola y textos que siguen en español.
const { chromium } = require('/Users/s333ma/Documents/House-Fliping/radar-recoba/node_modules/playwright');
const { execFileSync } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

const IDIOMA = process.argv[2] || 'en';
const SALIDA = path.resolve(process.argv[3] || `/tmp/i18n-verificar-${IDIOMA}`);
const RAIZ = path.join(__dirname, '..');

const PAGINAS = [
  'index.html',
  'admin/index.html',
  'admin/obra.html?id=ayacucho',
  'admin/obra.html?id=ayacucho#documentos',
  'admin/obra.html?id=ayacucho#numeros',
  'admin/obra.html?id=ayacucho#personas',
  'admin/obra.html?id=ayacucho#camara',
  'admin/obra.html?id=guemes',
  'admin/ajustes.html',
  'admin/movil.html'
];
const JS = ['admin/assets/data.js', 'admin/assets/admin.js', 'admin/assets/demo-store.js', 'admin/assets/lang.js'];

// Nombres propios que no se traducen y no deben contar como «español pendiente»
const PROPIOS = /Ayacucho|Güemes|Junín|Aguirre|Recoleta|Palermo|Barrio Norte|Villa Crespo|Buenos Aires|recoBA|Minahk|Martín|Carlos|Laura|Carmen|Andrés|Paula|Marmolería|Plomería|Cerámicos|Albañilería|Amoblamientos|Demoliciones|Pinturería|Sanitarios|Electricidad|Soler|Arenales|Sosa|Méndez|Ríos|Juncal|Pueyrredún|Pueyrredón|Libertad|Centro|obras@|gestion\.recoba|recoba\.casa/;
const ESPANOL = /\b(de|del|la|el|los|las|una|unos|con|para|que|su|sus|obra|obras|avance|avances|gasto|gastos|documento|documentos|inversor|inversores|fecha|nombre|correo|cámara|cámaras|bandeja|presupuesto|números|personas|añadir|revisar|publicar|guardar|cancelar|cerrar|buscar|ajustes|subir|enviar|desde|hasta|más|día|días|mes|año|sin revisar|pendiente)\b/i;

function servir(dir) {
  const tipos = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.json': 'application/json' };
  const srv = http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
    if (p.endsWith('/')) p += 'index.html';
    const f = path.join(dir, p);
    if (!f.startsWith(dir) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end('no'); return; }
    res.writeHead(200, { 'Content-Type': tipos[path.extname(f)] || 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise((ok) => srv.listen(0, () => ok({ srv, port: srv.address().port })));
}

(async () => {
  console.log(execFileSync('node', [path.join(__dirname, 'i18n-build.cjs'), IDIOMA, SALIDA], { encoding: 'utf8' }).split('\n')[1]);

  const sintaxis = [];
  for (const rel of JS) {
    try { execFileSync('node', ['--check', path.join(SALIDA, rel)]); sintaxis.push({ archivo: rel, ok: true }); }
    catch (e) { sintaxis.push({ archivo: rel, ok: false, error: String(e.stderr || e).split('\n').slice(0, 3).join(' ') }); }
  }

  const { srv, port } = await servir(SALIDA);
  const browser = await chromium.launch();
  const resultados = [];
  for (const pagina of PAGINAS) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errores = [];
    page.on('pageerror', (e) => errores.push(e.message));
    page.on('console', (m) => { if (m.type() === 'error') errores.push('consola: ' + m.text()); });
    await page.goto(`http://localhost:${port}/${pagina}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(700);
    if (pagina === 'index.html') {
      const entrar = await page.$('#btn-google-login');
      if (entrar) { await entrar.click(); await page.waitForTimeout(700); }
    }
    const textos = await page.evaluate(() => [...document.querySelectorAll('body *')]
      .filter((el) => !el.closest('script, style') && el.children.length === 0)
      .map((el) => (el.textContent || '').trim()).filter((t) => t.length > 2));
    const pendientes = [...new Set(textos.filter((t) => ESPANOL.test(t) && !PROPIOS.test(t)))].slice(0, 12);
    resultados.push({ pagina, errores: errores.slice(0, 3), pendientes });
    await page.close();
  }
  await browser.close();
  srv.close();
  console.log(JSON.stringify({ sintaxis, resultados }, null, 2));
})().catch((e) => { console.error(e); process.exit(1); });
