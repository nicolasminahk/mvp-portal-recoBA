/* ============================================================
   recoBA · Panel de administración (maqueta navegable)
   Shell compartido por todas las pantallas: barra lateral, barra
   superior, iconos, modales, pestañas, zonas de subida, avisos y
   formateadores. Sin backend: los datos salen de assets/data.js
   y las acciones son de demostración (no se guarda nada).
   ============================================================ */
(function () {
  'use strict';

  const D = window.RECOBA_DATA;
  if (!D) {
    console.error('Falta assets/data.js antes de assets/admin.js');
    return;
  }

  /* ---------- Iconos (trazo 24×24) ---------- */
  const ICONS = {
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1"/><path d="M10 21v-3h4v3"/>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14.8c2 .7 3.2 2.4 3.6 5.2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
    camera: '<path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><circle cx="12" cy="13" r="3.5"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    external: '<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    bell: '<path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    upload: '<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
    download: '<path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    alert: '<path d="M12 3.5 2.5 20h19z"/><path d="M12 10v4.5M12 17.5v.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.01"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M16 7l3 3"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.3 7.5 9.5 4.4-1.2 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2 2 4-4"/>',
    link: '<path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1 1"/><path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1-1"/>',
    'chevron-right': '<path d="m9 6 6 6-6 6"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
    filter: '<path d="M4 5h16l-6 8v6l-4-2v-4z"/>',
    dots: '<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 7 8.5-7"/>',
    send: '<path d="M21 3 10 14"/><path d="M21 3 14.5 21l-4.5-7-7-4.5z"/>',
    trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    trash: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
    database: '<ellipse cx="12" cy="5.5" rx="7.5" ry="2.5"/><path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13"/><path d="M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.8 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.1"/><circle cx="10.5" cy="7.5" r="1.1"/><circle cx="15" cy="7.5" r="1.1"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    signal: '<path d="M5 18v-2M9 18v-5M13 18v-8M17 18V7"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/>',
    grid: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
    table: '<rect x="3.5" y="4" width="17" height="16" rx="2"/><path d="M3.5 9.5h17M3.5 15h17M9.5 4v16"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 3v5h5"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 21v-5h-5"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    wallet: '<path d="M4 7a2 2 0 0 1 2-2h12v4"/><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 13.5h2"/>',
    percent: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>'
  };

  function icon(name, cls) {
    const p = ICONS[name];
    if (!p) return '';
    return `<svg class="ico${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  }

  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  /* ---------- Formateadores (es-ES, con punto de miles siempre) ---------- */
  function group(n, decimals = 0) {
    if (n === null || n === undefined || Number.isNaN(Number(n))) return '—';
    const neg = n < 0;
    const [int, dec] = Math.abs(Number(n)).toFixed(decimals).split('.');
    return (neg ? '−' : '') + int.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + (dec ? ',' + dec : '');
  }
  function money(n, currency) {
    if (n === null || n === undefined) return '—';
    const cur = currency || D.instalacion.moneda;
    const sign = n < 0 ? '−' : '';
    const abs = group(Math.abs(n));
    return cur === 'EUR' ? `${sign}${abs} €` : `${sign}US$${abs}`;
  }
  function pct(n, decimals = 0) { return group(n, decimals) + '%'; }

  const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const MESES_C = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  const pad = (n) => String(n).padStart(2, '0');
  function parts(iso) {
    const [d, t] = String(iso).split('T');
    const [y, m, day] = d.split('-').map(Number);
    return { y, m, d: day || null, t: t || null };
  }
  /* style: 'short' 22/08/2026 · 'medium' 22 ago 2026 · 'long' 22 de agosto de 2026
            'month' Ago 2026 · 'day' 22/08 · 'time' 08:12 · 'datetime' 22/08/2026 08:12 */
  function date(iso, style = 'short') {
    if (!iso) return '—';
    const p = parts(iso);
    if (!p.d || style === 'month') { const m = MESES_C[p.m - 1]; return `${m.charAt(0).toUpperCase()}${m.slice(1)} ${p.y}`; }
    if (style === 'medium') return `${p.d} ${MESES_C[p.m - 1]} ${p.y}`;
    if (style === 'long') return `${p.d} de ${MESES[p.m - 1]} de ${p.y}`;
    if (style === 'day') return `${pad(p.d)}/${pad(p.m)}`;
    if (style === 'time') return p.t || '';
    if (style === 'datetime') return `${pad(p.d)}/${pad(p.m)}/${p.y}${p.t ? ' ' + p.t : ''}`;
    return `${pad(p.d)}/${pad(p.m)}/${p.y}`;
  }
  function toDate(iso) { const p = parts(iso); return new Date(p.y, p.m - 1, p.d || 1); }
  function daysUntil(iso) { return Math.round((toDate(iso) - toDate(D.instalacion.hoy)) / 86400000); }
  function ago(iso) {
    if (!iso) return '—';
    const p = parts(iso);
    const diff = -daysUntil(iso);
    const hora = p.t ? ` ${p.t}` : '';
    if (diff <= 0) return `hoy${hora}`;
    if (diff === 1) return `ayer${hora}`;
    if (diff < 7) return `hace ${diff} días`;
    return date(iso, 'short');
  }

  /* ---------- Consultas sobre los datos ---------- */
  const obra = (id) => D.obras.find((o) => o.id === id);
  const persona = (id) => D.equipo.find((p) => p.id === id) || D.inversores.find((p) => p.id === id);
  const perfil = (id) => D.perfiles.find((p) => p.id === id);
  const qs = (name) => new URLSearchParams(window.location.search).get(name);
  const partidas = (obraId) => D.partidas[obraId] || [];
  function partidasPlanas(obraId) {
    const out = [];
    partidas(obraId).forEach((p) => {
      out.push(Object.assign({}, p, { nivel: 0 }));
      (p.sub || []).forEach((s) => out.push(Object.assign({}, s, { nivel: 1, padre: p.id })));
    });
    return out;
  }
  function partidaNombre(obraId, partidaId) {
    const f = partidasPlanas(obraId).find((p) => p.id === partidaId);
    return f ? f.nombre : partidaId;
  }
  const gastos = (obraId) => D.gastos.filter((g) => !obraId || g.obra === obraId);
  const avances = (obraId) => D.avances.filter((a) => !obraId || a.obra === obraId);
  const documentos = (obraId) => D.documentos.filter((d) => !obraId || d.obra === obraId);
  const camaras = (obraId) => D.camaras.filter((c) => !obraId || c.obra === obraId);
  function participaciones(filtro = {}) {
    return D.participaciones.filter((p) => (!filtro.obra || p.obra === filtro.obra) && (!filtro.inversor || p.inversor === filtro.inversor));
  }
  const capitalDe = (inversorId) => participaciones({ inversor: inversorId }).reduce((s, p) => s + p.monto, 0);
  function distribucionesDe(inversorId) {
    return D.distribuciones.filter((d) => d.estado === 'Pagada' && d.total).reduce((s, d) => {
      const part = D.participaciones.find((p) => p.obra === d.obra && p.inversor === inversorId);
      return s + (part ? Math.round((d.total * part.pct) / 100) : 0);
    }, 0);
  }
  const visibilidad = (id) => (D.visibilidades.find((v) => v.id === id) || { nombre: id }).nombre;
  /* Trabajo pendiente dentro de las obras: borradores por publicar + entradas ya asignadas.
     Lo que llega sin asignar se cuenta aparte, en la bandeja de la portada. */
  const pendientes = () => D.avances.filter((a) => a.estado === 'borrador').length
    + (D.bandeja || []).filter((b) => b.estado === 'pendiente').length;

  /* ---------- Piezas de interfaz reutilizables ---------- */
  const ESTADO_CHIP = {
    'En estudio': 'chip-gold', Comprado: 'chip-ink', Escriturado: 'chip-ink', 'En obra': 'chip-copper',
    Equipamiento: 'chip-copper', 'En renta': 'chip-sage', 'En venta': 'chip-gold', Vendido: 'chip-ink'
  };
  const chip = (text, cls) => `<span class="chip ${cls || 'chip-ink'}">${esc(text)}</span>`;
  const estadoChip = (estado) => chip(estado, ESTADO_CHIP[estado]);
  function avatar(p, size) {
    if (!p) return '';
    const cls = size === 'sm' ? ' avatar-sm' : size === 'lg' ? ' avatar-lg' : '';
    const tone = p.perfil === 'obra' ? ' avatar-sage' : p.id && p.id.startsWith('i-') ? ' avatar-ink' : '';
    return `<span class="avatar${cls}${tone}" title="${esc(p.nombre)}">${esc(p.iniciales)}</span>`;
  }
  function bar(ejecutado, presupuesto) {
    const raw = presupuesto ? (ejecutado / presupuesto) * 100 : 0;
    const w = Math.max(0, Math.min(100, Math.round(raw)));
    const cls = ejecutado > presupuesto ? ' over' : w >= 100 ? ' full' : w === 0 ? ' zero' : '';
    return `<div class="mini-bar" title="${pct(raw)}"><div class="mini-bar-fill${cls}" style="width:${w}%"></div></div>`;
  }
  function phases(o) {
    return `<div class="phases">${D.fases.map((nombre, i) => {
      const state = i < o.faseActual ? 'done' : i === o.faseActual ? 'current' : 'future';
      const f = o.fechasFases[i];
      const dot = state === 'done' ? icon('check') : String(i + 1);
      return `<div class="phase ${state}"><div class="phase-dot">${dot}</div><div class="phase-name">${esc(nombre)}</div><div class="phase-date">${f ? esc(date(f, 'month')) : '—'}</div></div>`;
    }).join('')}</div>`;
  }

  /* ---------- Shell: barra lateral y barra superior ---------- */
  const NAV = [
    { group: 'Obras', items: [
      { id: 'obras', label: 'Todas las obras', href: 'index.html', icon: 'building' },
      { id: 'movil', label: 'Carga desde el móvil', href: 'movil.html', icon: 'phone' }
    ] },
    { group: 'Configuración', items: [
      { id: 'ajustes', label: 'Ajustes', href: 'ajustes.html', icon: 'settings' },
      { id: 'portal', label: 'Ver portal del inversor', href: '../index.html', icon: 'eye', external: true }
    ] }
  ];
  const TITLES = {
    obras: 'Obras', obra: 'Obra', movil: 'Carga desde el móvil', ajustes: 'Ajustes'
  };

  function renderSidebar(page) {
    const el = document.getElementById('sidebar');
    if (!el) return;
    const active = page === 'obra' ? 'obras' : page;
    const pendientes = D.avances.filter((a) => a.estado === 'borrador').length + (D.bandeja || []).filter((b) => b.estado === 'pendiente').length;
    const inst = D.instalacion;
    const nav = NAV.map((g) => `<div class="sb-group">${esc(g.group)}</div>` + g.items.map((it) => {
      const on = it.id === active;
      const count = it.id === 'obras' && pendientes ? `<span class="sb-count" title="Entradas pendientes de revisar">${pendientes}</span>` : '';
      const ext = it.external ? icon('external', 'sb-ext') : '';
      return `<a class="sb-link${on ? ' active' : ''}" href="${it.href}"${on ? ' aria-current="page"' : ''}>${icon(it.icon)}<span>${esc(it.label)}</span>${count}${ext}</a>`;
    }).join('')).join('');
    const u = D.usuario;
    el.innerHTML = `
      <a class="sb-brand" href="index.html" aria-label="Inicio del panel"><span class="wordmark">reco<span class="ba">BA</span></span><span class="sb-badge">Administración</span></a>
      <div class="sb-install"><b>${esc(inst.cliente)}</b>${esc(inst.dominio)}</div>
      <nav aria-label="Secciones del panel">${nav}</nav>
      <div class="sb-foot">${avatar(u)}<div><div class="sb-foot-name">${esc(u.nombre)}</div><div class="sb-foot-role">${esc((perfil(u.perfil) || {}).nombre || '')}</div></div></div>
      <p class="sb-demo">Maqueta navegable · datos ilustrativos<button class="sb-reset" type="button" id="sb-reset" title="Borra lo publicado en la demostración">Reiniciar</button></p>`;
    const reset = el.querySelector('#sb-reset');
    if (reset) reset.addEventListener('click', () => {
      if (window.RecoBADemo) window.RecoBADemo.reset();
      toast('Demostración reiniciada', 'refresh');
      setTimeout(() => window.location.reload(), 600);
    });
  }

  function renderTopbar(page) {
    const el = document.getElementById('topbar');
    if (!el) return;
    let crumbs = '<a href="index.html">Administración</a><span class="sep">/</span>';
    if (page === 'obra') {
      const o = obra(qs('id')) || D.obras[0];
      crumbs += `<a href="index.html">Obras</a><span class="sep">/</span><span class="current">${esc(o.nombre)}</span>`;
    } else {
      crumbs += `<span class="current">${esc(TITLES[page] || '')}</span>`;
    }
    const alertas = D.alertas.slice(0, 5);
    el.innerHTML = `
      <nav class="crumbs" aria-label="Ruta">${crumbs}</nav>
      <label class="top-search">${icon('search')}<input type="search" placeholder="Buscar en el panel" aria-label="Buscar"><span class="kbd">⌘K</span></label>
      <div class="top-menu">
        <button class="icon-btn" type="button" id="bell-btn" aria-haspopup="true" aria-expanded="false" aria-label="Avisos">${icon('bell')}<span class="dot"></span></button>
        <div class="top-dropdown" id="bell-dd" role="menu">
          <div class="top-dd-head"><span>Avisos</span><span>${alertas.length}</span></div>
          ${alertas.map((a) => `<a class="top-dd-item" role="menuitem" href="${esc(a.accion ? a.accion.href : '#')}"><span class="list-icon tone-${esc(a.tono)}">${icon(a.icono)}</span><span><b>${esc(a.titulo)}</b><small>${esc(a.texto)}</small></span></a>`).join('')}
        </div>
      </div>
      <a class="btn btn-copper btn-sm" href="obra.html?id=${esc(page === 'obra' ? (obra(qs('id')) || D.obras[0]).id : D.obras[0].id)}#publicar" aria-label="Publicar avance">${icon('plus')}<span class="btn-label">Publicar avance</span></a>`;

    const btn = el.querySelector('#bell-btn');
    const dd = el.querySelector('#bell-dd');
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
    const search = el.querySelector('.top-search input');
    search.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); toast('La búsqueda global estará en la versión real', 'search'); }
    });
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); search.focus(); }
      if (e.key === 'Escape' && dd.classList.contains('open')) { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    });
  }

  /* ---------- Avisos flotantes ---------- */
  function toast(msg, iconName = 'check') {
    let host = document.querySelector('.toast-host');
    if (!host) {
      host = document.createElement('div');
      host.className = 'toast-host';
      host.setAttribute('role', 'status');
      host.setAttribute('aria-live', 'polite');
      document.body.appendChild(host);
    }
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `${icon(iconName)}<span></span>`;
    t.querySelector('span').textContent = msg;
    host.appendChild(t);
    setTimeout(() => {
      t.style.transition = 'opacity .3s ease';
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 320);
    }, 3200);
  }

  /* ---------- Modales ---------- */
  function openModal(id) {
    const el = typeof id === 'string' ? document.getElementById(id) : id;
    if (!el) return;
    el.classList.add('open');
    el.setAttribute('aria-hidden', 'false');
    const focusable = el.querySelector('input:not([type=hidden]), select, textarea, button:not(.modal-close)');
    if (focusable) setTimeout(() => focusable.focus(), 60);
    el.dispatchEvent(new CustomEvent('modal:open', { bubbles: true }));
  }
  function closeModal(id) {
    const el = typeof id === 'string' ? document.getElementById(id) : id;
    if (!el) return;
    el.classList.remove('open');
    el.setAttribute('aria-hidden', 'true');
    el.dispatchEvent(new CustomEvent('modal:close', { bubbles: true }));
  }

  document.addEventListener('click', (e) => {
    const opener = e.target.closest('[data-open-modal]');
    if (opener) { e.preventDefault(); openModal(opener.dataset.openModal); return; }
    const closer = e.target.closest('[data-close-modal]');
    if (closer) { e.preventDefault(); closeModal(closer.closest('.modal-overlay')); return; }
    if (e.target.classList && e.target.classList.contains('modal-overlay')) { closeModal(e.target); return; }
    const toaster = e.target.closest('[data-toast]');
    if (toaster) { e.preventDefault(); toast(toaster.dataset.toast, toaster.dataset.toastIcon || 'check'); }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach((m) => closeModal(m));
  });

  /* Formularios de demostración: <form data-demo="Mensaje del aviso">.
     Los listeners propios de la página sobre 'submit' corren antes que este. */
  document.addEventListener('submit', (e) => {
    const f = e.target.closest('form[data-demo]');
    if (!f) return;
    e.preventDefault();
    const overlay = f.closest('.modal-overlay');
    if (overlay) closeModal(overlay);
    toast(f.dataset.demo || 'Guardado');
    f.dispatchEvent(new CustomEvent('demo:submit', { bubbles: true }));
    if (f.dataset.reset !== 'false') f.reset();
  });

  /* ---------- Pestañas: [data-tabs] > .tab[data-tab] + [data-panel] ---------- */
  function activateTab(box, name) {
    box.querySelectorAll('.tab[data-tab]').forEach((t) => {
      const on = t.dataset.tab === name;
      t.classList.toggle('active', on);
      t.setAttribute('aria-selected', String(on));
    });
    box.querySelectorAll('[data-panel]').forEach((p) => p.classList.toggle('active', p.dataset.panel === name));
    box.dispatchEvent(new CustomEvent('tabs:change', { bubbles: true, detail: name }));
  }
  function initTabs(root = document) {
    root.querySelectorAll('[data-tabs]').forEach((box) => {
      if (box.dataset.tabsReady) return;
      box.dataset.tabsReady = '1';
      box.addEventListener('click', (e) => {
        const t = e.target.closest('.tab[data-tab]');
        if (t && box.contains(t)) activateTab(box, t.dataset.tab);
      });
      const hash = window.location.hash.slice(1);
      const fromHash = hash && box.querySelector(`.tab[data-tab="${CSS.escape(hash)}"]`);
      const first = fromHash || box.querySelector('.tab.active') || box.querySelector('.tab[data-tab]');
      if (first) activateTab(box, first.dataset.tab);
    });
  }

  /* ---------- Selector segmentado: [data-segmented] > button[data-value] ---------- */
  function initSegmented(root = document) {
    root.querySelectorAll('[data-segmented]').forEach((s) => {
      if (s.dataset.ready) return;
      s.dataset.ready = '1';
      s.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b || !s.contains(b)) return;
        s.querySelectorAll('button').forEach((x) => { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', String(x === b)); });
        s.dispatchEvent(new CustomEvent('segmented:change', { bubbles: true, detail: b.dataset.value }));
      });
    });
  }

  /* ---------- Zonas de subida: .dropzone (+ .file-list opcional en el mismo contenedor) ---------- */
  function initDropzones(root = document) {
    root.querySelectorAll('.dropzone').forEach((z) => {
      if (z.dataset.ready) return;
      z.dataset.ready = '1';
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = z.dataset.multiple !== 'false';
      if (z.dataset.accept) input.accept = z.dataset.accept;
      input.hidden = true;
      z.after(input);
      const emit = (files) => {
        const list = Array.from(files || []);
        if (!list.length) return;
        const names = list.map((f) => f.name);
        const fileList = z.parentElement && z.parentElement.querySelector('.file-list');
        if (fileList) {
          names.forEach((n) => {
            const row = document.createElement('div');
            row.className = 'file-row';
            row.innerHTML = `${icon('file')}<span></span>`;
            row.querySelector('span').textContent = n;
            fileList.appendChild(row);
          });
        }
        z.dispatchEvent(new CustomEvent('dropzone:files', { bubbles: true, detail: { names, files: list } }));
      };
      z.setAttribute('role', 'button');
      z.tabIndex = 0;
      z.addEventListener('click', () => input.click());
      z.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); } });
      input.addEventListener('change', () => { emit(input.files); input.value = ''; });
      z.addEventListener('dragover', (e) => { e.preventDefault(); z.classList.add('drag'); });
      z.addEventListener('dragleave', () => z.classList.remove('drag'));
      z.addEventListener('drop', (e) => { e.preventDefault(); z.classList.remove('drag'); emit(e.dataTransfer.files); });
    });
  }

  /* ---------- Iconos declarativos: <span data-icon="upload"></span> ---------- */
  function hydrateIcons(root = document) {
    root.querySelectorAll('[data-icon]').forEach((el) => {
      if (el.dataset.iconReady) return;
      el.dataset.iconReady = '1';
      el.outerHTML = icon(el.dataset.icon, el.className || '');
    });
  }

  function hydrate(root = document) {
    hydrateIcons(root);
    initTabs(root);
    initSegmented(root);
    initDropzones(root);
  }

  function boot() {
    const page = document.body.dataset.page || '';
    renderSidebar(page);
    renderTopbar(page);
    hydrate(document);
  }

  window.Admin = {
    data: D, icon, esc,
    group, money, pct, date, ago, daysUntil,
    obra, persona, perfil, qs, partidas, partidasPlanas, partidaNombre,
    gastos, avances, documentos, camaras, participaciones, capitalDe, distribucionesDe, visibilidad, pendientes,
    chip, estadoChip, avatar, bar, phases,
    toast, openModal, closeModal, activateTab, hydrate
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
