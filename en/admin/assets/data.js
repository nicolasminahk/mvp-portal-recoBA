/* ============================================================
   recoBA · Admin panel — demo data
   Matches the investor portal demo (../index.html):
   same projects, figures, dates and investor “Martín G.”.
   Everything is illustrative. Reference date: 11/09/2026.
   Invariants (do not break):
   - Ayacucho 1400: budget US$138.850, spent US$110.410
     (the exact sum of its costs and its budget lines).
   - Martín G. capital: US$35.000 + US$25.000 = US$60.000.
   - Distributions received by Martín G.: 2 × US$956 = US$1.912.
   ============================================================ */
window.RECOBA_DATA = {
  instalacion: {
    cliente: 'recoBA Real Estate',
    marca: 'recoBA',
    dominio: 'gestion.recoba.casa',
    moneda: 'USD',
    hoy: '2026-09-11',
    colorPrincipal: '#C46A4A',
    datos: 'Supabase · Pro plan · EU region (Frankfurt)',
    web: 'Vercel · Pro plan',
    acceso: ['Google', 'Email link'],
    licencia: 'Perpetual licence to use this installation',
    mantenimiento: { plan: 'Basic', horasMes: 2, horasUsadas: 0.5, renovacion: '2027-09-11' },
    copias: 'Daily, managed by the data platform',
    emailObras: 'obras@recoba.casa'
  },

  usuario: { id: 'u-nicolas', nombre: 'Nicolás Minahk', iniciales: 'NM', perfil: 'admin', email: 'nicolasminahk@gmail.com' },

  fases: ['Under review', 'Purchased', 'Deed signed', 'Under construction', 'Furnishing', 'Rented', 'For sale', 'Sold'],

  perfiles: [
    { id: 'admin', nombre: 'Administration', descripcion: 'Manages projects, costs, documents, investors and installation settings.' },
    { id: 'obra', nombre: 'Site', descripcion: 'Site manager or project supervisor: uploads progress updates, photos and costs for their projects and submits them for review. Does not see investor data.' },
    { id: 'inversor', nombre: 'Investor', descripcion: 'Accesses the portal and sees only their own projects, their investment and the documents shared with them.' }
  ],

  // Permissions matrix: true = yes · false = no · text = yes, with limits
  permisos: [
    { accion: 'View the summary and the projects', admin: true, obra: 'Their projects only', inversor: false },
    { accion: 'Create projects and update phases', admin: true, obra: false, inversor: false },
    { accion: 'Upload progress updates, photos and videos', admin: true, obra: 'Submits for review', inversor: false },
    { accion: 'Publish progress updates and notify investors', admin: true, obra: false, inversor: false },
    { accion: 'Record costs with a receipt', admin: true, obra: 'Their projects only', inversor: false },
    { accion: 'View budget and variances', admin: true, obra: 'Their projects only', inversor: 'Summary by budget line' },
    { accion: 'Upload contracts and documents', admin: true, obra: 'Site documents', inversor: false },
    { accion: 'Manage investors, holdings and distributions', admin: true, obra: false, inversor: false },
    { accion: 'View their investment and the shared documents', admin: true, obra: false, inversor: 'Their own only' },
    { accion: 'Connect camera feeds', admin: true, obra: false, inversor: false },
    { accion: 'View the site cameras', admin: true, obra: 'Their projects only', inversor: 'If shared' },
    { accion: 'Settings, branding and users', admin: true, obra: false, inversor: false }
  ],

  equipo: [
    { id: 'u-nicolas', nombre: 'Nicolás Minahk', iniciales: 'NM', email: 'nicolasminahk@gmail.com', perfil: 'admin', obras: 'todas', estado: 'activo', acceso: 'Google', ultimoAcceso: '2026-09-11T09:05' },
    { id: 'u-carlos', nombre: 'Carlos R.', iniciales: 'CR', email: 'carlos.r@example.com', perfil: 'obra', obras: ['ayacucho'], estado: 'activo', acceso: 'Email link', ultimoAcceso: '2026-09-11T08:12' },
    { id: 'u-paula', nombre: 'Paula D.', iniciales: 'PD', email: 'paula.d@example.com', perfil: 'admin', obras: 'todas', estado: 'invitado', acceso: 'Google', invitado: '2026-09-09' }
  ],

  obras: [
    {
      id: 'ayacucho', nombre: 'Ayacucho 1400', barrio: 'Recoleta', ciudad: 'Buenos Aires',
      m2: 50, ambientes: 2, piso: '3rd', estado: 'Under construction', faseActual: 3,
      fechasFases: ['2026-02', '2026-04', '2026-05', '2026-06', null, null, null, null],
      avanceObra: 45, proximoHito: { texto: 'Services completed', fecha: '2026-09' },
      portada: 'ph-1', responsable: 'u-carlos',
      capital: 138850, presupuesto: 138850, ejecutado: 110410,
      inicioObra: '2026-06-05', finObraEstimado: '2026-11-30',
      inicioRenta: '2027-03', ventaEstimada: '2031',
      tir: { conservador: 6.4, base: 9.1, optimista: 12.1 }
    },
    {
      id: 'guemes', nombre: 'Güemes 3800', barrio: 'Palermo', ciudad: 'Buenos Aires',
      m2: 44, ambientes: 2, piso: '2nd', estado: 'Rented', faseActual: 5,
      fechasFases: ['2024-11', '2025-01', '2025-02', '2025-03', '2025-10', '2025-11', null, null],
      avanceObra: 100, ocupacionTrimestre: 71, tarifaMediaNoche: 74,
      proximoHito: { texto: 'Q3 2026 distribution', fecha: '2026-10' },
      portada: 'ph-2', responsable: null,
      capital: 125000, presupuesto: 114340, ejecutado: 114300
    },
    {
      id: 'junin', nombre: 'Junín 600', barrio: 'Barrio Norte', ciudad: 'Buenos Aires',
      m2: 47, ambientes: 2, piso: null, estado: 'Under review', faseActual: 0,
      fechasFases: ['2026-08', null, null, null, null, null, null, null],
      portada: 'ph-3', responsable: null,
      oportunidad: { estado: 'Open', objetivo: 97000, comprometido: 60140, ticketMinimo: 25000, tirBase: '9 – 11%', cierre: '2026-09-30', compraPrevista: 45900, puntuacionRadar: 78 }
    },
    {
      id: 'aguirre', nombre: 'Aguirre 1300', barrio: 'Villa Crespo', ciudad: 'Buenos Aires',
      m2: 38, ambientes: 2, piso: null, estado: 'Under review', faseActual: 0,
      fechasFases: ['2026-08', null, null, null, null, null, null, null],
      portada: 'ph-5', responsable: null,
      oportunidad: { estado: 'Open', objetivo: 68000, comprometido: 16320, ticketMinimo: 25000, tirBase: '9 – 11%', cierre: '2026-10-31', compraPrevista: 38500, puntuacionRadar: 71 }
    }
  ],

  // Budget lines per project. “sub” = sub-lines. The totals match the budget/spend of each project.
  partidas: {
    ayacucho: [
      { id: 'compra', nombre: 'Property purchase', presupuesto: 85000, ejecutado: 85000 },
      { id: 'costos-compra', nombre: 'Purchase costs', detalle: 'title deed, agency fees', presupuesto: 5950, ejecutado: 5950 },
      { id: 'reforma', nombre: 'Renovation', presupuesto: 35000, ejecutado: 17850, sub: [
        { id: 'demolicion', nombre: 'Strip-out', presupuesto: 2400, ejecutado: 2400 },
        { id: 'instalaciones', nombre: 'Services', presupuesto: 6800, ejecutado: 6100 },
        { id: 'bano', nombre: 'Bathroom', presupuesto: 4500, ejecutado: 2900 },
        { id: 'cocina', nombre: 'Kitchen', presupuesto: 5200, ejecutado: 1750 },
        { id: 'pisos', nombre: 'Flooring', presupuesto: 4900, ejecutado: 2700 },
        { id: 'pintura', nombre: 'Painting and finishes', presupuesto: 3400, ejecutado: 0 },
        { id: 'carpinteria', nombre: 'Joinery', presupuesto: 4300, ejecutado: 0 },
        { id: 'direccion', nombre: 'Site supervision', presupuesto: 3500, ejecutado: 2000 }
      ] },
      { id: 'contingencia', nombre: 'Contingency', presupuesto: 3500, ejecutado: 610 },
      { id: 'equipamiento', nombre: 'Furnishing', presupuesto: 7000, ejecutado: 0 },
      { id: 'tenencia', nombre: 'Holding costs', detalle: 'service charges, taxes', presupuesto: 2400, ejecutado: 1000 }
    ],
    guemes: [
      { id: 'compra', nombre: 'Property purchase', presupuesto: 72000, ejecutado: 72000 },
      { id: 'costos-compra', nombre: 'Purchase costs', detalle: 'title deed, agency fees', presupuesto: 5040, ejecutado: 5040 },
      { id: 'reforma', nombre: 'Renovation', presupuesto: 26000, ejecutado: 26850 },
      { id: 'contingencia', nombre: 'Contingency', presupuesto: 2600, ejecutado: 1900 },
      { id: 'equipamiento', nombre: 'Furnishing', presupuesto: 6500, ejecutado: 6310 },
      { id: 'tenencia', nombre: 'Holding costs', detalle: 'service charges, taxes', presupuesto: 2200, ejecutado: 2200 }
    ],
    junin: [],
    aguirre: []
  },

  // Recorded costs (Ayacucho 1400 in full). partida = id of a budget line or sub-line.
  gastos: [
    { id: 'gs-01', obra: 'ayacucho', fecha: '2026-09-01', partida: 'direccion', concepto: 'Site supervision fees · September', proveedor: 'Architecture practice', importe: 500, comprobante: true, cargadoPor: 'u-nicolas' },
    { id: 'gs-02', obra: 'ayacucho', fecha: '2026-08-22', partida: 'bano', concepto: 'Vanity unit and under-basin cabinet', proveedor: 'Amoblamientos Juncal', importe: 780, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-03', obra: 'ayacucho', fecha: '2026-08-19', partida: 'cocina', concepto: 'Deposit on the granite worktop', proveedor: 'Marmolería Arenales', importe: 550, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-04', obra: 'ayacucho', fecha: '2026-08-12', partida: 'cocina', concepto: 'Advance of 40 % on base and wall units', proveedor: 'Carpintería Soler', importe: 1200, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-05', obra: 'ayacucho', fecha: '2026-08-08', partida: 'bano', concepto: 'Ceramic wall tiles and taps', proveedor: 'Sanitarios Libertad', importe: 1420, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-06', obra: 'ayacucho', fecha: '2026-08-05', partida: 'tenencia', concepto: 'Service charges and taxes, June to August', proveedor: 'Building management', importe: 1000, comprobante: true, cargadoPor: 'u-nicolas' },
    { id: 'gs-07', obra: 'ayacucho', fecha: '2026-08-01', partida: 'direccion', concepto: 'Site supervision fees · August', proveedor: 'Architecture practice', importe: 500, comprobante: true, cargadoPor: 'u-nicolas' },
    { id: 'gs-08', obra: 'ayacucho', fecha: '2026-07-29', partida: 'pisos', concepto: 'Wood-effect porcelain tiles, 48 m²', proveedor: 'Cerámicos Pueyrredón', importe: 2700, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-09', obra: 'ayacucho', fecha: '2026-07-20', partida: 'bano', concepto: 'Bathroom waterproofing', proveedor: 'Plomería Sosa', importe: 700, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-10', obra: 'ayacucho', fecha: '2026-07-15', partida: 'instalaciones', concepto: 'New consumer unit and wiring', proveedor: 'Electricidad Méndez', importe: 2300, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-11', obra: 'ayacucho', fecha: '2026-07-08', partida: 'contingencia', concepto: 'Slab repair in the bathroom', proveedor: 'Albañilería Ríos', importe: 610, comprobante: false, cargadoPor: 'u-carlos' },
    { id: 'gs-12', obra: 'ayacucho', fecha: '2026-07-02', partida: 'instalaciones', concepto: 'Cold water, hot water and gas pipework', proveedor: 'Plomería Sosa', importe: 3800, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-13', obra: 'ayacucho', fecha: '2026-07-01', partida: 'direccion', concepto: 'Site supervision fees · June and July', proveedor: 'Architecture practice', importe: 1000, comprobante: true, cargadoPor: 'u-nicolas' },
    { id: 'gs-14', obra: 'ayacucho', fecha: '2026-06-18', partida: 'demolicion', concepto: 'Strip-out and waste removal', proveedor: 'Demoliciones Norte', importe: 2400, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-15', obra: 'ayacucho', fecha: '2026-05-28', partida: 'costos-compra', concepto: 'Notary and estate agency fees', proveedor: 'Notary', importe: 5950, comprobante: true, cargadoPor: 'u-nicolas' },
    { id: 'gs-16', obra: 'ayacucho', fecha: '2026-05-28', partida: 'compra', concepto: 'Property purchase price', proveedor: 'Seller', importe: 85000, comprobante: true, cargadoPor: 'u-nicolas' }
  ],

  // Site diary. estado: 'publicado' | 'borrador'. vistoPor = investors who opened it.
  avances: [
    { id: 'av-08', obra: 'ayacucho', fecha: '2026-09-11', titulo: 'Kitchen: base and wall units', texto: 'Base and wall units fitted in the kitchen. The granite worktop is still outstanding.', estado: 'borrador', autor: 'u-carlos', vistoPor: 0,
      media: [ { tipo: 'foto', etiqueta: 'Base units', ph: 'ph-3' }, { tipo: 'foto', etiqueta: 'Wall units', ph: 'ph-1' }, { tipo: 'foto', etiqueta: 'General view', ph: 'ph-5' }, { tipo: 'foto', etiqueta: 'Ironmongery', ph: 'ph-4' } ] },
    { id: 'av-07', obra: 'ayacucho', fecha: '2026-08-22', titulo: 'Main bathroom completed', texto: 'Main bathroom completed: vanity unit fitted and silicone sealing done. Kitchen installation starts next week.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 3,
      media: [ { tipo: 'foto', etiqueta: 'Bathroom completed', ph: 'ph-5' }, { tipo: 'foto', etiqueta: 'Vanity unit', ph: 'ph-2' } ] },
    { id: 'av-06', obra: 'ayacucho', fecha: '2026-08-08', titulo: 'Bathroom wall tiles and taps', texto: 'Progress on the main bathroom: ceramic wall tiles fixed and taps fitted. The vanity unit is still outstanding.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'foto', etiqueta: 'Bathroom, wall tiles', ph: 'ph-3' }, { tipo: 'foto', etiqueta: 'Taps fitted', ph: 'ph-4' } ] },
    { id: 'av-05', obra: 'ayacucho', fecha: '2026-07-29', titulo: 'Porcelain tiles in living room and bedroom', texto: 'Wood-effect porcelain tiles laid in the living room and main bedroom. Full walkthrough on video.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'video', etiqueta: 'Site walkthrough', duracion: '2:14', ph: 'ph-5' }, { tipo: 'foto', etiqueta: 'Living room floor', ph: 'ph-1' } ] },
    { id: 'av-04', obra: 'ayacucho', fecha: '2026-07-15', titulo: 'Electrical installation complete', texto: 'Electrical installation complete: new certified consumer unit, wiring and lighting points in every room.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'foto', etiqueta: 'Consumer unit', ph: 'ph-4' }, { tipo: 'foto', etiqueta: 'Wiring', ph: 'ph-2' } ] },
    { id: 'av-03', obra: 'ayacucho', fecha: '2026-07-02', titulo: 'Water and gas pipework', texto: 'New cold and hot water and gas pipework completed and tested. No snags from the registered gas engineer.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'foto', etiqueta: 'Water pipework', ph: 'ph-3' }, { tipo: 'foto', etiqueta: 'Gas pipework', ph: 'ph-1' }, { tipo: 'foto', etiqueta: 'Pressure test', ph: 'ph-4' } ] },
    { id: 'av-02', obra: 'ayacucho', fecha: '2026-06-18', titulo: 'Kitchen and bathroom strip-out', texto: 'Kitchen and bathroom fully stripped out. Waste removed and the spaces cleared for the new layout.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'foto', etiqueta: 'Kitchen strip-out', ph: 'ph-4' }, { tipo: 'foto', etiqueta: 'Bathroom strip-out', ph: 'ph-2' } ] },
    { id: 'av-01', obra: 'ayacucho', fecha: '2026-06-05', titulo: 'Start on site', texto: 'Start on site: protections installed, site compound set up and final survey of the existing services.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'foto', etiqueta: 'Site compound', ph: 'ph-1' } ] },
    { id: 'av-g3', obra: 'guemes', fecha: '2026-08-01', titulo: 'Updated photos of the living room', texto: 'Updated photos of the living room for the short-let listing.', estado: 'publicado', autor: 'u-nicolas', publicadoPor: 'u-nicolas', vistoPor: 2,
      media: [ { tipo: 'foto', etiqueta: 'Living room completed', ph: 'ph-2' } ] },
    { id: 'av-g2', obra: 'guemes', fecha: '2025-10-28', titulo: 'Fully furnished', texto: 'Fully furnished: furniture, appliances and linen. The unit is ready for short lets.', estado: 'publicado', autor: 'u-nicolas', publicadoPor: 'u-nicolas', vistoPor: 3,
      media: [ { tipo: 'foto', etiqueta: 'Bedroom furnished', ph: 'ph-5' }, { tipo: 'foto', etiqueta: 'Kitchen furnished', ph: 'ph-3' } ] },
    { id: 'av-g1', obra: 'guemes', fecha: '2025-03-10', titulo: 'Start on site', texto: 'Start on site: kitchen and bathroom strip-out.', estado: 'publicado', autor: 'u-nicolas', publicadoPor: 'u-nicolas', vistoPor: 3,
      media: [ { tipo: 'foto', etiqueta: 'Strip-out', ph: 'ph-4' } ] }
  ],

  // Inbox: everything forwarded to the single address of this installation (instalacion.emailObras).
  // estado 'pendiente' = already assigned to a project · 'sin-asignar' = waiting for someone to assign a project (obraSugerida is the panel suggestion).
  bandeja: [
    { id: 'bz1', obra: 'ayacucho', tipo: 'foto', remitente: 'Carlos R.', via: 'Forwarded from mobile', asunto: 'Photos of the finished kitchen', fecha: '2026-09-11T09:40', adjuntos: 3, estado: 'pendiente' },
    { id: 'bz2', obra: 'ayacucho', tipo: 'factura', remitente: 'Marmolería Arenales', via: 'Supplier email', asunto: 'Invoice 0001-00042 · granite worktop', fecha: '2026-09-10T17:12', adjuntos: 1, estado: 'pendiente' },
    { id: 'bz3', obra: null, obraSugerida: 'guemes', tipo: 'documento', remitente: 'Building management', via: 'Email', asunto: 'August service charge statement', fecha: '2026-09-08T11:05', adjuntos: 1, estado: 'sin-asignar' },
    { id: 'bz4', obra: null, tipo: 'factura', remitente: 'Pinturería Centro', via: 'Supplier email', asunto: 'Quote for painting and finishes', fecha: '2026-09-11T08:20', adjuntos: 2, estado: 'sin-asignar' }
  ],

  categoriasDocumento: ['Contracts', 'Title deeds and ownership', 'Insurance and permits', 'Quotes and budgets', 'Invoices and receipts', 'Reports and statements'],

  // visibilidad: 'inversores' (project investors) · 'equipo' (team only) · 'seleccionados'
  visibilidades: [
    { id: 'inversores', nombre: 'Project investors', descripcion: 'Visible to every investor with a holding in this project.' },
    { id: 'equipo', nombre: 'Team only', descripcion: 'Administration and Site profiles only. Does not appear in the portal.' },
    { id: 'seleccionados', nombre: 'Selected investors', descripcion: 'Only the people you select.' }
  ],

  documentos: [
    { id: 'd01', obra: 'ayacucho', nombre: 'Trust agreement', categoria: 'Contracts', tipo: 'PDF', estado: 'Signed', fecha: '2026-03-12', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '1,2 MB' },
    { id: 'd02', obra: 'ayacucho', nombre: 'Purchase agreement', categoria: 'Contracts', tipo: 'PDF', estado: 'Signed', fecha: '2026-04-10', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '640 KB' },
    { id: 'd03', obra: 'ayacucho', nombre: 'Title deed', categoria: 'Title deeds and ownership', tipo: 'PDF', estado: 'Registered', fecha: '2026-05-28', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '2,4 MB' },
    { id: 'd04', obra: 'ayacucho', nombre: 'Land registry search', categoria: 'Title deeds and ownership', tipo: 'PDF', estado: 'No encumbrances', fecha: '2026-04-02', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '310 KB' },
    { id: 'd05', obra: 'ayacucho', nombre: 'Site insurance policy', categoria: 'Insurance and permits', tipo: 'PDF', estado: 'In force', fecha: '2026-06-01', vence: '2026-11-30', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '880 KB' },
    { id: 'd06', obra: 'ayacucho', nombre: 'Quarterly report Q2-2026', categoria: 'Reports and statements', tipo: 'PDF', estado: 'Published', fecha: '2026-07-10', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '1,1 MB' },
    { id: 'd07', obra: 'ayacucho', nombre: 'Building contract with the contractor', categoria: 'Contracts', tipo: 'PDF', estado: 'Signed', fecha: '2026-06-01', vence: '2026-11-30', visibilidad: 'equipo', subidoPor: 'u-nicolas', peso: '1,6 MB' },
    { id: 'd08', obra: 'ayacucho', nombre: 'Renovation budget v3', categoria: 'Quotes and budgets', tipo: 'XLSX', estado: 'Approved', fecha: '2026-05-30', visibilidad: 'equipo', subidoPor: 'u-carlos', peso: '96 KB' },
    { id: 'd09', obra: 'ayacucho', nombre: 'Municipal works notice', categoria: 'Insurance and permits', tipo: 'PDF', estado: 'Approved', fecha: '2026-05-29', visibilidad: 'equipo', subidoPor: 'u-carlos', peso: '420 KB' },
    { id: 'd10', obra: 'ayacucho', nombre: 'Invoices and receipts · August 2026', categoria: 'Invoices and receipts', tipo: 'Carpeta', estado: '6 files', fecha: '2026-08-31', visibilidad: 'equipo', subidoPor: 'u-carlos', peso: '4,8 MB' },
    { id: 'd11', obra: 'guemes', nombre: 'Trust agreement', categoria: 'Contracts', tipo: 'PDF', estado: 'Signed', fecha: '2024-12-18', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '1,1 MB' },
    { id: 'd12', obra: 'guemes', nombre: 'Title deed', categoria: 'Title deeds and ownership', tipo: 'PDF', estado: 'Registered', fecha: '2025-02-20', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '2,2 MB' },
    { id: 'd13', obra: 'guemes', nombre: 'Short-let management agreement', categoria: 'Contracts', tipo: 'PDF', estado: 'In force', fecha: '2025-11-01', vence: '2026-10-31', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '540 KB' },
    { id: 'd14', obra: 'guemes', nombre: 'Quarterly report Q2-2026', categoria: 'Reports and statements', tipo: 'PDF', estado: 'Published', fecha: '2026-07-10', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '980 KB' },
    { id: 'd15', obra: 'junin', nombre: 'Opportunity analysis', categoria: 'Reports and statements', tipo: 'PDF', estado: 'Published', fecha: '2026-08-18', visibilidad: 'seleccionados', compartidoCon: ['i-andres', 'i-carmen'], subidoPor: 'u-nicolas', peso: '1,9 MB' }
  ],

  inversores: [
    { id: 'i-martin', nombre: 'Martín G.', iniciales: 'MG', email: 'martin.g@example.com', estado: 'activo', acceso: 'Google', alta: '2024-12-18', ultimoAcceso: '2026-08-25' },
    { id: 'i-laura', nombre: 'Laura V.', iniciales: 'LV', email: 'laura.v@example.com', estado: 'activo', acceso: 'Google', alta: '2024-12-18', ultimoAcceso: '2026-09-02' },
    { id: 'i-carmen', nombre: 'Carmen S.', iniciales: 'CS', email: 'carmen.s@example.com', estado: 'activo', acceso: 'Email link', alta: '2024-12-18', ultimoAcceso: '2026-07-16' },
    { id: 'i-familia-o', nombre: 'Familia O.', iniciales: 'FO', email: 'familia.o@example.com', estado: 'activo', acceso: 'Google', alta: '2026-03-12', ultimoAcceso: '2026-08-23' },
    { id: 'i-andres', nombre: 'Andrés T.', iniciales: 'AT', email: 'andres.t@example.com', estado: 'invitado', acceso: 'Google', invitado: '2026-09-05' }
  ],

  // pct = holding in the trust for that project. Ayacucho totals US$138.850 (100 %); Güemes US$125.000 (100 %).
  participaciones: [
    { inversor: 'i-martin', obra: 'ayacucho', monto: 35000, pct: 25.2, fecha: '2026-03-12' },
    { inversor: 'i-laura', obra: 'ayacucho', monto: 40000, pct: 28.8, fecha: '2026-03-12' },
    { inversor: 'i-carmen', obra: 'ayacucho', monto: 35000, pct: 25.2, fecha: '2026-03-12' },
    { inversor: 'i-familia-o', obra: 'ayacucho', monto: 28850, pct: 20.8, fecha: '2026-03-12' },
    { inversor: 'i-martin', obra: 'guemes', monto: 25000, pct: 20, fecha: '2024-12-18' },
    { inversor: 'i-laura', obra: 'guemes', monto: 50000, pct: 40, fecha: '2024-12-18' },
    { inversor: 'i-carmen', obra: 'guemes', monto: 50000, pct: 40, fecha: '2024-12-18' }
  ],

  // Commitments on open opportunities. The “comprometido” of each project is the reference figure;
  // this breakdown may not cover it in full (Aguirre 1300 has no breakdown loaded).
  compromisos: [
    { inversor: 'i-andres', obra: 'junin', monto: 25000, estado: 'Confirmed', fecha: '2026-09-04' },
    { inversor: 'i-carmen', obra: 'junin', monto: 35140, estado: 'Interested', fecha: '2026-08-27' }
  ],

  // Each investor receives total × their pct in the project (Martín G.: US$956 per quarter).
  distribuciones: [
    { id: 'ds-q1', obra: 'guemes', periodo: 'Q1 2026', fecha: '2026-04-15', total: 4780, concepto: 'Rental income for the quarter', estado: 'Paid' },
    { id: 'ds-q2', obra: 'guemes', periodo: 'Q2 2026', fecha: '2026-07-15', total: 4780, concepto: 'Rental income for the quarter', estado: 'Paid' },
    { id: 'ds-q3', obra: 'guemes', periodo: 'Q3 2026', fecha: '2026-10-15', total: null, concepto: 'Rental income for the quarter', estado: 'Scheduled' }
  ],

  // Cameras: the panel only shows feeds the company already has. tipo: 'stream' | 'enlace' | 'capturas'
  camaras: [
    { id: 'c1', obra: 'ayacucho', nombre: 'Façade', tipo: 'capturas', origen: 'On-site 4G camera', detalle: 'Drops a still every 10 minutes into the project folder.', estado: 'conectada', ultima: '2026-09-11T10:20', compartidaConInversores: true, ph: 'ph-4' },
    { id: 'c2', obra: 'ayacucho', nombre: 'Living room', tipo: 'stream', origen: 'On-site recorder', detalle: 'Live feed in web format, streamed by your own recorder.', estado: 'conectada', ultima: '2026-09-11T13:10', compartidaConInversores: true, ph: 'ph-1' },
    { id: 'c3', obra: 'ayacucho', nombre: 'Bathroom', tipo: 'enlace', origen: 'Alarm provider', detalle: 'The provider does not allow the image to be embedded: the panel opens their viewer.', estado: 'solo-enlace', ultima: '2026-09-11T12:10', compartidaConInversores: false, ph: 'ph-5' }
  ],

  tiposSenal: [
    { id: 'stream', nombre: 'Live feed', descripcion: 'A video address already streamed in web format by your recorder, your camera or your provider.' },
    { id: 'enlace', nombre: 'Provider viewer', descripcion: 'The web viewer of your security or alarm company. If it cannot be embedded, the panel shows a direct link.' },
    { id: 'capturas', nombre: 'Periodic stills', descripcion: 'Images the camera drops into your company storage. The panel sorts them by date and builds the timelapse.' }
  ],

  capturas: [
    { camara: 'c2', fecha: '2026-09-11T13:10', ph: 'ph-1' },
    { camara: 'c3', fecha: '2026-09-11T12:10', ph: 'ph-5' },
    { camara: 'c1', fecha: '2026-09-11T10:20', ph: 'ph-4' },
    { camara: 'c1', fecha: '2026-09-11T09:00', ph: 'ph-3' },
    { camara: 'c1', fecha: '2026-09-11T08:00', ph: 'ph-2' },
    { camara: 'c2', fecha: '2026-09-11T07:20', ph: 'ph-1' },
    { camara: 'c1', fecha: '2026-09-11T07:00', ph: 'ph-4' }
  ],

  responsabilidadCamaras: {
    empresa: ['Cameras, recorder and installation on site', 'Internet connection or data SIM', 'Recording and retention of the footage', 'Signage and compliance with CCTV regulations'],
    recoba: ['Connecting the feed or the stills to the panel', 'Showing it only to authorised profiles', 'Advising on the choice of equipment'],
    nota: 'Image availability depends on the equipment and the connection of your company.'
  },

  alertas: [
    { id: 'al1', tono: 'gold', icono: 'clock', titulo: 'Progress update awaiting publication', texto: 'Carlos R. submitted “Kitchen: base and wall units” with 4 photos.', obra: 'ayacucho', accion: { label: 'Review', href: 'obra.html?id=ayacucho#diario' } },
    { id: 'al2', tono: 'copper', icono: 'mail', titulo: 'Unreviewed inbox items', texto: 'Two items from the panel mailbox, already assigned to Ayacucho 1400: kitchen photos and an invoice.', obra: 'ayacucho', accion: { label: 'View inbox', href: 'obra.html?id=ayacucho#bandeja' } },
    { id: 'al3', tono: 'copper', icono: 'trend', titulo: 'Budget line close to its limit', texto: 'Services has used 90% of its budget with the project 45% complete.', obra: 'ayacucho', accion: { label: 'View figures', href: 'obra.html?id=ayacucho#numeros' } },
    { id: 'al4', tono: 'ink', icono: 'users', titulo: 'Invitation not accepted', texto: 'Andrés T. has not accessed the portal yet (invited on 05/09/2026).', obra: 'junin', accion: { label: 'View people', href: 'obra.html?id=junin#personas' } },
    { id: 'al5', tono: 'gold', icono: 'file', titulo: 'Contract expiring soon', texto: 'The short-let management agreement for Güemes 3800 expires on 31/10/2026.', obra: 'guemes', accion: { label: 'View documents', href: 'obra.html?id=guemes#documentos' } }
  ],

  actividad: [
    { fecha: '2026-09-11T08:12', quien: 'u-carlos', icono: 'image', texto: 'uploaded 4 photos to Ayacucho 1400 and submitted the progress update for review' },
    { fecha: '2026-09-09T11:02', quien: 'u-nicolas', icono: 'users', texto: 'invited Paula D. with the Administration profile' },
    { fecha: '2026-09-05T10:15', quien: 'u-nicolas', icono: 'mail', texto: 'invited Andrés T. to the investor portal' },
    { fecha: '2026-09-04T16:20', quien: 'u-nicolas', icono: 'trend', texto: 'recorded the commitment from Andrés T. in Junín 600 (US$25.000)' },
    { fecha: '2026-09-02T09:48', quien: 'i-laura', icono: 'download', texto: 'downloaded the Q2-2026 report for Güemes 3800' },
    { fecha: '2026-09-01T17:30', quien: 'u-nicolas', icono: 'receipt', texto: 'recorded US$500 of site supervision fees in Ayacucho 1400' },
    { fecha: '2026-08-25T21:10', quien: 'i-martin', icono: 'eye', texto: 'viewed the 22/08 progress update for Ayacucho 1400' },
    { fecha: '2026-08-22T19:05', quien: 'u-nicolas', icono: 'send', texto: 'published “Main bathroom completed” and notified 4 investors' }
  ],

  avisos: [
    { id: 'n1', nombre: 'New progress update published', destinatarios: 'Project investors', activo: true, asunto: 'New progress update at {obra}' },
    { id: 'n2', nombre: 'New document shared', destinatarios: 'Based on the document visibility', activo: true, asunto: 'New document available: {documento}' },
    { id: 'n3', nombre: 'Distribution paid', destinatarios: 'Project investors', activo: true, asunto: '{periodo} distribution for {obra}' },
    { id: 'n4', nombre: 'Progress update submitted for review', destinatarios: 'Administration', activo: true, asunto: '{persona} submitted a progress update for {obra}' },
    { id: 'n5', nombre: 'Weekly team summary', destinatarios: 'Administration', activo: false, asunto: 'Weekly project summary' },
    { id: 'n6', nombre: 'Portal invitation', destinatarios: 'Invited person', activo: true, asunto: '{marca} invites you to your investor portal' }
  ]
};
