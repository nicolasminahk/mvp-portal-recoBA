/* ============================================================
   recoBA · estado compartido de la demostración
   Conecta el panel de administración con el portal del inversor:
   lo que se publica en el panel queda guardado en el navegador
   (mismo dominio) y el portal lo muestra. Sin backend.
   Si el navegador bloquea el almacenamiento, todo sigue
   funcionando: simplemente no se comparte entre pantallas.
   ============================================================ */
(function () {
  'use strict';
  const KEY = 'recoba-demo-v1';
  const VACIO = { avances: [], documentos: [], numeros: {}, personas: [], sello: null };

  function leer() {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (!raw) return Object.assign({}, VACIO);
      const d = JSON.parse(raw);
      return Object.assign({}, VACIO, d);
    } catch (e) {
      return Object.assign({}, VACIO);
    }
  }

  function guardar(d) {
    d.sello = new Date().toISOString();
    try {
      window.localStorage.setItem(KEY, JSON.stringify(d));
    } catch (e) { /* modo privado o almacenamiento lleno: la demo sigue, sin compartir */ }
    try {
      window.dispatchEvent(new CustomEvent('recoba-demo:cambio', { detail: d }));
    } catch (e) { /* navegadores antiguos */ }
    return d;
  }

  const api = {
    KEY,
    leer,
    /* avance: { obra, titulo, texto, fecha, fotos: [{ etiqueta, ph, url }], avisar } */
    addAvance(avance) {
      const d = leer();
      d.avances.unshift(Object.assign({ id: 'demo-av-' + Date.now(), tipo: 'avance' }, avance));
      return guardar(d);
    },
    /* documento: { obra, nombre, categoria, estado, fecha, visibilidad } */
    addDocumento(doc) {
      const d = leer();
      d.documentos.unshift(Object.assign({ id: 'demo-doc-' + Date.now() }, doc));
      return guardar(d);
    },
    /* partidas: [{ id, nombre, presupuesto, ejecutado }] */
    setNumeros(obraId, partidas) {
      const d = leer();
      d.numeros[obraId] = partidas;
      return guardar(d);
    },
    /* persona: { obra, nombre, email, monto, pct } */
    addPersona(persona) {
      const d = leer();
      d.personas.unshift(Object.assign({ id: 'demo-per-' + Date.now() }, persona));
      return guardar(d);
    },
    deObra(obraId) {
      const d = leer();
      return {
        avances: d.avances.filter((a) => a.obra === obraId),
        documentos: d.documentos.filter((x) => x.obra === obraId),
        numeros: d.numeros[obraId] || null,
        personas: d.personas.filter((p) => p.obra === obraId)
      };
    },
    resumen() {
      const d = leer();
      return { avances: d.avances.length, documentos: d.documentos.length, personas: d.personas.length, numeros: Object.keys(d.numeros).length, sello: d.sello };
    },
    reset() {
      try { window.localStorage.removeItem(KEY); } catch (e) { /* nada que borrar */ }
      try { window.dispatchEvent(new CustomEvent('recoba-demo:cambio', { detail: Object.assign({}, VACIO) })); } catch (e) { /* */ }
    },
    onCambio(fn) {
      window.addEventListener('recoba-demo:cambio', (e) => fn(e.detail));
      window.addEventListener('storage', (e) => { if (e.key === KEY) fn(leer()); });
    }
  };

  window.RecoBADemo = api;
})();
