// Genera la copia traducida del sitio a partir de los archivos en español.
//   node tools/i18n-build.cjs en
// Copia todo el sitio a /<idioma>/ y aplica, en los archivos de texto, el
// diccionario de tools/i18n/<idioma>/<archivo con __>.json (más _global.json).
// Las claves se aplican de más larga a más corta para que no se pisen.
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const IDIOMA = process.argv[2] || 'en';
const DIC = path.join(__dirname, 'i18n', IDIOMA);
// Segundo argumento: carpeta de salida alternativa (para pruebas en paralelo).
const SALIDA = process.argv[3] ? path.resolve(process.argv[3]) : path.join(RAIZ, IDIOMA);

const TRADUCIBLES = [
  'index.html',
  'admin/index.html',
  'admin/obra.html',
  'admin/ajustes.html',
  'admin/movil.html',
  'admin/_plantilla.html',
  'admin/assets/admin.js',
  'admin/assets/data.js'
];
const EXCLUIR = new Set(['.git', 'node_modules', 'en', 'de', 'tools', '.DS_Store']);

function copiar(desde, hasta) {
  fs.mkdirSync(hasta, { recursive: true });
  for (const entrada of fs.readdirSync(desde, { withFileTypes: true })) {
    if (EXCLUIR.has(entrada.name)) continue;
    if (entrada.isFile() && entrada.name.endsWith('.md')) continue; // docs internas, no se publican
    const o = path.join(desde, entrada.name);
    const d = path.join(hasta, entrada.name);
    if (entrada.isDirectory()) copiar(o, d);
    else fs.copyFileSync(o, d);
  }
}

function diccionario(rel) {
  const leer = (f) => (fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {});
  const global = leer(path.join(DIC, '_global.json'));
  const propio = leer(path.join(DIC, rel.replace(/\//g, '__') + '.json'));
  return Object.assign({}, global, propio);
}

function aplicar(texto, dic) {
  const claves = Object.keys(dic).filter((k) => k && dic[k]).sort((a, b) => b.length - a.length);
  let n = 0;
  for (const k of claves) {
    if (!texto.includes(k)) continue;
    n += texto.split(k).length - 1;
    texto = texto.split(k).join(dic[k]);
  }
  return { texto, n };
}

if (!fs.existsSync(DIC)) { console.error('No hay diccionario en', DIC); process.exit(1); }
fs.rmSync(SALIDA, { recursive: true, force: true });
copiar(RAIZ, SALIDA);

const informe = [];
for (const rel of TRADUCIBLES) {
  const f = path.join(SALIDA, rel);
  if (!fs.existsSync(f)) { informe.push({ archivo: rel, estado: 'no existe' }); continue; }
  const dic = diccionario(rel);
  const original = fs.readFileSync(f, 'utf8');
  const { texto, n } = aplicar(original, dic);
  // la etiqueta de idioma del documento
  const final = texto.replace(/<html lang="[^"]*"/g, `<html lang="${IDIOMA}"`);
  fs.writeFileSync(f, final);
  informe.push({ archivo: rel, claves: Object.keys(dic).length, sustituciones: n });
}
console.log(JSON.stringify({ idioma: IDIOMA, salida: path.relative(RAIZ, SALIDA), informe }, null, 2));
