/* ============================================================
   recoBA · selector de idioma
   El sitio en español vive en la raíz y cada traducción en su
   carpeta (/en/…). Este módulo sabe en qué idioma estamos y a
   qué dirección lleva cada idioma, conservando página y filtros.
   ============================================================ */
(function () {
  'use strict';
  const IDIOMAS = [
    { id: 'es', etiqueta: 'ES', nombre: 'Español' },
    { id: 'en', etiqueta: 'EN', nombre: 'English' }
  ];

  function actual() {
    return /(^|\/)en(\/|$)/.test(window.location.pathname) ? 'en' : 'es';
  }

  /* Ruta equivalente en otro idioma, manteniendo ?parámetros y #ancla. */
  function rutaPara(id) {
    let p = window.location.pathname;
    p = p.replace(/(^|\/)en(?=\/|$)/, '$1');
    if (!p.startsWith('/')) p = '/' + p;
    p = p.replace(/\/{2,}/g, '/');
    const destino = id === 'es' ? p : ('/' + id + p).replace(/\/{2,}/g, '/');
    return destino + window.location.search + window.location.hash;
  }

  function render(host) {
    if (!host) return;
    const hoy = actual();
    host.innerHTML = IDIOMAS.map((l) => {
      const on = l.id === hoy;
      return `<a class="lang-opt${on ? ' active' : ''}" href="${rutaPara(l.id)}" hreflang="${l.id}" lang="${l.id}"${on ? ' aria-current="true"' : ''} title="${l.nombre}">${l.etiqueta}</a>`;
    }).join('');
  }

  window.Lang = { IDIOMAS, actual, rutaPara, render };
})();
