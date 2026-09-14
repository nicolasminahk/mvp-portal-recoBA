/* ============================================================
   recoBA · Panel de administración — datos de demostración
   Coinciden con la demo del portal del inversor (../index.html):
   mismas obras, cifras, fechas e inversor «Martín G.».
   Todo es ilustrativo. Fecha de referencia: 11/09/2026.
   Invariantes (no romper):
   - Ayacucho 1400: presupuesto US$138.850, ejecutado US$110.410
     (suma exacta de sus gastos y de sus partidas).
   - Capital de Martín G.: US$35.000 + US$25.000 = US$60.000.
   - Distribuciones cobradas por Martín G.: 2 × US$956 = US$1.912.
   ============================================================ */
window.RECOBA_DATA = {
  instalacion: {
    cliente: 'recoBA Real Estate',
    marca: 'recoBA',
    dominio: 'gestion.recoba.casa',
    moneda: 'USD',
    hoy: '2026-09-11',
    colorPrincipal: '#C46A4A',
    datos: 'Supabase · plan Pro · región UE (Frankfurt)',
    web: 'Vercel · plan Pro',
    acceso: ['Google', 'Enlace por correo'],
    licencia: 'Licencia de uso perpetua sobre esta instalación',
    mantenimiento: { plan: 'Básico', horasMes: 2, horasUsadas: 0.5, renovacion: '2027-09-11' },
    copias: 'Diarias, gestionadas por la plataforma de datos',
    dominioObras: 'obras.recoba.casa'
  },

  usuario: { id: 'u-nicolas', nombre: 'Nicolás Minahk', iniciales: 'NM', perfil: 'admin', email: 'nicolasminahk@gmail.com' },

  fases: ['En estudio', 'Comprado', 'Escriturado', 'En obra', 'Equipamiento', 'En renta', 'En venta', 'Vendido'],

  perfiles: [
    { id: 'admin', nombre: 'Administración', descripcion: 'Gestiona obras, gastos, documentos, inversores y ajustes de la instalación.' },
    { id: 'obra', nombre: 'Obra', descripcion: 'Jefe o dirección de obra: sube avances, fotos y gastos de sus obras y los envía a revisión. No ve datos de inversores.' },
    { id: 'inversor', nombre: 'Inversor', descripcion: 'Accede al portal y ve solo sus obras, su inversión y los documentos que se le comparten.' }
  ],

  // Matriz de permisos: true = sí · false = no · texto = sí, con límite
  permisos: [
    { accion: 'Ver el resumen y las obras', admin: true, obra: 'Solo sus obras', inversor: false },
    { accion: 'Crear obras y actualizar fases', admin: true, obra: false, inversor: false },
    { accion: 'Subir avances, fotos y vídeos', admin: true, obra: 'Envía a revisión', inversor: false },
    { accion: 'Publicar avances y avisar a inversores', admin: true, obra: false, inversor: false },
    { accion: 'Registrar gastos con comprobante', admin: true, obra: 'Solo sus obras', inversor: false },
    { accion: 'Ver presupuesto y desvíos', admin: true, obra: 'Solo sus obras', inversor: 'Resumen por partida' },
    { accion: 'Subir contratos y documentos', admin: true, obra: 'Documentos de obra', inversor: false },
    { accion: 'Gestionar inversores, participaciones y distribuciones', admin: true, obra: false, inversor: false },
    { accion: 'Ver su inversión y los documentos compartidos', admin: true, obra: false, inversor: 'Solo lo suyo' },
    { accion: 'Conectar señales de cámara', admin: true, obra: false, inversor: false },
    { accion: 'Ver cámaras de la obra', admin: true, obra: 'Solo sus obras', inversor: 'Si se comparte' },
    { accion: 'Ajustes, marca y usuarios', admin: true, obra: false, inversor: false }
  ],

  equipo: [
    { id: 'u-nicolas', nombre: 'Nicolás Minahk', iniciales: 'NM', email: 'nicolasminahk@gmail.com', perfil: 'admin', obras: 'todas', estado: 'activo', acceso: 'Google', ultimoAcceso: '2026-09-11T09:05' },
    { id: 'u-carlos', nombre: 'Carlos R.', iniciales: 'CR', email: 'carlos.r@example.com', perfil: 'obra', obras: ['ayacucho'], estado: 'activo', acceso: 'Enlace por correo', ultimoAcceso: '2026-09-11T08:12' },
    { id: 'u-paula', nombre: 'Paula D.', iniciales: 'PD', email: 'paula.d@example.com', perfil: 'admin', obras: 'todas', estado: 'invitado', acceso: 'Google', invitado: '2026-09-09' }
  ],

  obras: [
    {
      id: 'ayacucho', email: 'ayacucho@obras.recoba.casa', nombre: 'Ayacucho 1400', barrio: 'Recoleta', ciudad: 'Buenos Aires',
      m2: 50, ambientes: 2, piso: '3º', estado: 'En obra', faseActual: 3,
      fechasFases: ['2026-02', '2026-04', '2026-05', '2026-06', null, null, null, null],
      avanceObra: 45, proximoHito: { texto: 'Fin de instalaciones', fecha: '2026-09' },
      portada: 'ph-1', responsable: 'u-carlos',
      capital: 138850, presupuesto: 138850, ejecutado: 110410,
      inicioObra: '2026-06-05', finObraEstimado: '2026-11-30',
      inicioRenta: '2027-03', ventaEstimada: '2031',
      tir: { conservador: 6.4, base: 9.1, optimista: 12.1 }
    },
    {
      id: 'guemes', email: 'guemes@obras.recoba.casa', nombre: 'Güemes 3800', barrio: 'Palermo', ciudad: 'Buenos Aires',
      m2: 44, ambientes: 2, piso: '2º', estado: 'En renta', faseActual: 5,
      fechasFases: ['2024-11', '2025-01', '2025-02', '2025-03', '2025-10', '2025-11', null, null],
      avanceObra: 100, ocupacionTrimestre: 71, tarifaMediaNoche: 74,
      proximoHito: { texto: 'Distribución Q3 2026', fecha: '2026-10' },
      portada: 'ph-2', responsable: null,
      capital: 125000, presupuesto: 114340, ejecutado: 114300
    },
    {
      id: 'junin', email: 'junin@obras.recoba.casa', nombre: 'Junín 600', barrio: 'Barrio Norte', ciudad: 'Buenos Aires',
      m2: 47, ambientes: 2, piso: null, estado: 'En estudio', faseActual: 0,
      fechasFases: ['2026-08', null, null, null, null, null, null, null],
      portada: 'ph-3', responsable: null,
      oportunidad: { estado: 'Abierta', objetivo: 97000, comprometido: 60140, ticketMinimo: 25000, tirBase: '9 – 11%', cierre: '2026-09-30', compraPrevista: 45900, puntuacionRadar: 78 }
    },
    {
      id: 'aguirre', email: 'aguirre@obras.recoba.casa', nombre: 'Aguirre 1300', barrio: 'Villa Crespo', ciudad: 'Buenos Aires',
      m2: 38, ambientes: 2, piso: null, estado: 'En estudio', faseActual: 0,
      fechasFases: ['2026-08', null, null, null, null, null, null, null],
      portada: 'ph-5', responsable: null,
      oportunidad: { estado: 'Abierta', objetivo: 68000, comprometido: 16320, ticketMinimo: 25000, tirBase: '9 – 11%', cierre: '2026-10-31', compraPrevista: 38500, puntuacionRadar: 71 }
    }
  ],

  // Partidas por obra. «sub» = subpartidas. Las sumas cuadran con presupuesto/ejecutado de cada obra.
  partidas: {
    ayacucho: [
      { id: 'compra', nombre: 'Compra del inmueble', presupuesto: 85000, ejecutado: 85000 },
      { id: 'costos-compra', nombre: 'Costos de compra', detalle: 'escritura, comisiones', presupuesto: 5950, ejecutado: 5950 },
      { id: 'reforma', nombre: 'Reforma', presupuesto: 35000, ejecutado: 17850, sub: [
        { id: 'demolicion', nombre: 'Demolición', presupuesto: 2400, ejecutado: 2400 },
        { id: 'instalaciones', nombre: 'Instalaciones', presupuesto: 6800, ejecutado: 6100 },
        { id: 'bano', nombre: 'Baño', presupuesto: 4500, ejecutado: 2900 },
        { id: 'cocina', nombre: 'Cocina', presupuesto: 5200, ejecutado: 1750 },
        { id: 'pisos', nombre: 'Pisos', presupuesto: 4900, ejecutado: 2700 },
        { id: 'pintura', nombre: 'Pintura y terminaciones', presupuesto: 3400, ejecutado: 0 },
        { id: 'carpinteria', nombre: 'Carpintería', presupuesto: 4300, ejecutado: 0 },
        { id: 'direccion', nombre: 'Dirección de obra', presupuesto: 3500, ejecutado: 2000 }
      ] },
      { id: 'contingencia', nombre: 'Contingencia', presupuesto: 3500, ejecutado: 610 },
      { id: 'equipamiento', nombre: 'Equipamiento', presupuesto: 7000, ejecutado: 0 },
      { id: 'tenencia', nombre: 'Costos de tenencia', detalle: 'expensas, impuestos', presupuesto: 2400, ejecutado: 1000 }
    ],
    guemes: [
      { id: 'compra', nombre: 'Compra del inmueble', presupuesto: 72000, ejecutado: 72000 },
      { id: 'costos-compra', nombre: 'Costos de compra', detalle: 'escritura, comisiones', presupuesto: 5040, ejecutado: 5040 },
      { id: 'reforma', nombre: 'Reforma', presupuesto: 26000, ejecutado: 26850 },
      { id: 'contingencia', nombre: 'Contingencia', presupuesto: 2600, ejecutado: 1900 },
      { id: 'equipamiento', nombre: 'Equipamiento', presupuesto: 6500, ejecutado: 6310 },
      { id: 'tenencia', nombre: 'Costos de tenencia', detalle: 'expensas, impuestos', presupuesto: 2200, ejecutado: 2200 }
    ],
    junin: [],
    aguirre: []
  },

  // Gastos registrados (Ayacucho 1400 completo). partida = id de partida o subpartida.
  gastos: [
    { id: 'gs-01', obra: 'ayacucho', fecha: '2026-09-01', partida: 'direccion', concepto: 'Honorarios de dirección de obra · septiembre', proveedor: 'Estudio de arquitectura', importe: 500, comprobante: true, cargadoPor: 'u-nicolas' },
    { id: 'gs-02', obra: 'ayacucho', fecha: '2026-08-22', partida: 'bano', concepto: 'Vanitory y mueble bajo lavatorio', proveedor: 'Amoblamientos Juncal', importe: 780, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-03', obra: 'ayacucho', fecha: '2026-08-19', partida: 'cocina', concepto: 'Seña de la mesada de granito', proveedor: 'Marmolería Arenales', importe: 550, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-04', obra: 'ayacucho', fecha: '2026-08-12', partida: 'cocina', concepto: 'Anticipo del 40 % de bajo mesada y alacenas', proveedor: 'Carpintería Soler', importe: 1200, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-05', obra: 'ayacucho', fecha: '2026-08-08', partida: 'bano', concepto: 'Revestimientos cerámicos y grifería', proveedor: 'Sanitarios Libertad', importe: 1420, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-06', obra: 'ayacucho', fecha: '2026-08-05', partida: 'tenencia', concepto: 'Expensas e impuestos de junio a agosto', proveedor: 'Administración del edificio', importe: 1000, comprobante: true, cargadoPor: 'u-nicolas' },
    { id: 'gs-07', obra: 'ayacucho', fecha: '2026-08-01', partida: 'direccion', concepto: 'Honorarios de dirección de obra · agosto', proveedor: 'Estudio de arquitectura', importe: 500, comprobante: true, cargadoPor: 'u-nicolas' },
    { id: 'gs-08', obra: 'ayacucho', fecha: '2026-07-29', partida: 'pisos', concepto: 'Porcelanato símil madera, 48 m²', proveedor: 'Cerámicos Pueyrredón', importe: 2700, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-09', obra: 'ayacucho', fecha: '2026-07-20', partida: 'bano', concepto: 'Impermeabilización del baño', proveedor: 'Plomería Sosa', importe: 700, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-10', obra: 'ayacucho', fecha: '2026-07-15', partida: 'instalaciones', concepto: 'Tablero eléctrico nuevo y cableado', proveedor: 'Electricidad Méndez', importe: 2300, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-11', obra: 'ayacucho', fecha: '2026-07-08', partida: 'contingencia', concepto: 'Reparación de losa en el baño', proveedor: 'Albañilería Ríos', importe: 610, comprobante: false, cargadoPor: 'u-carlos' },
    { id: 'gs-12', obra: 'ayacucho', fecha: '2026-07-02', partida: 'instalaciones', concepto: 'Cañerías de agua fría, caliente y gas', proveedor: 'Plomería Sosa', importe: 3800, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-13', obra: 'ayacucho', fecha: '2026-07-01', partida: 'direccion', concepto: 'Honorarios de dirección de obra · junio y julio', proveedor: 'Estudio de arquitectura', importe: 1000, comprobante: true, cargadoPor: 'u-nicolas' },
    { id: 'gs-14', obra: 'ayacucho', fecha: '2026-06-18', partida: 'demolicion', concepto: 'Demolición y retiro de escombros', proveedor: 'Demoliciones Norte', importe: 2400, comprobante: true, cargadoPor: 'u-carlos' },
    { id: 'gs-15', obra: 'ayacucho', fecha: '2026-05-28', partida: 'costos-compra', concepto: 'Escribanía y comisión inmobiliaria', proveedor: 'Escribanía', importe: 5950, comprobante: true, cargadoPor: 'u-nicolas' },
    { id: 'gs-16', obra: 'ayacucho', fecha: '2026-05-28', partida: 'compra', concepto: 'Precio de compra del inmueble', proveedor: 'Parte vendedora', importe: 85000, comprobante: true, cargadoPor: 'u-nicolas' }
  ],

  // Diario de obra. estado: 'publicado' | 'borrador'. vistoPor = inversores que lo abrieron.
  avances: [
    { id: 'av-08', obra: 'ayacucho', fecha: '2026-09-11', titulo: 'Cocina: bajo mesada y alacenas', texto: 'Colocación del bajo mesada y las alacenas de la cocina. Queda pendiente la mesada de granito.', estado: 'borrador', autor: 'u-carlos', vistoPor: 0,
      media: [ { tipo: 'foto', etiqueta: 'Bajo mesada', ph: 'ph-3' }, { tipo: 'foto', etiqueta: 'Alacenas', ph: 'ph-1' }, { tipo: 'foto', etiqueta: 'Vista general', ph: 'ph-5' }, { tipo: 'foto', etiqueta: 'Herrajes', ph: 'ph-4' } ] },
    { id: 'av-07', obra: 'ayacucho', fecha: '2026-08-22', titulo: 'Baño principal terminado', texto: 'Baño principal terminado: vanitory instalado y detalles de silicona listos. Arranca la colocación de la cocina la semana próxima.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 3,
      media: [ { tipo: 'foto', etiqueta: 'Baño terminado', ph: 'ph-5' }, { tipo: 'foto', etiqueta: 'Vanitory', ph: 'ph-2' } ] },
    { id: 'av-06', obra: 'ayacucho', fecha: '2026-08-08', titulo: 'Revestimientos y grifería del baño', texto: 'Avance de baño principal: colocación de revestimientos cerámicos y grifería instalada. Queda pendiente el mueble vanitory.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'foto', etiqueta: 'Baño, revestimiento', ph: 'ph-3' }, { tipo: 'foto', etiqueta: 'Grifería instalada', ph: 'ph-4' } ] },
    { id: 'av-05', obra: 'ayacucho', fecha: '2026-07-29', titulo: 'Porcelanato en living y dormitorio', texto: 'Colocación de porcelanato símil madera en living y dormitorio principal. Recorrida completa en video.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'video', etiqueta: 'Recorrida de obra', duracion: '2:14', ph: 'ph-5' }, { tipo: 'foto', etiqueta: 'Piso living', ph: 'ph-1' } ] },
    { id: 'av-04', obra: 'ayacucho', fecha: '2026-07-15', titulo: 'Instalación eléctrica completa', texto: 'Instalación eléctrica completa: tablero nuevo certificado, cableado y bocas de luz en todos los ambientes.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'foto', etiqueta: 'Tablero eléctrico', ph: 'ph-4' }, { tipo: 'foto', etiqueta: 'Cableado', ph: 'ph-2' } ] },
    { id: 'av-03', obra: 'ayacucho', fecha: '2026-07-02', titulo: 'Cañerías de agua y gas', texto: 'Cañerías nuevas de agua fría/caliente y gas terminadas y probadas. Sin observaciones del gasista matriculado.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'foto', etiqueta: 'Cañerías agua', ph: 'ph-3' }, { tipo: 'foto', etiqueta: 'Cañería gas', ph: 'ph-1' }, { tipo: 'foto', etiqueta: 'Prueba hidráulica', ph: 'ph-4' } ] },
    { id: 'av-02', obra: 'ayacucho', fecha: '2026-06-18', titulo: 'Demolición de cocina y baño', texto: 'Demolición completa de cocina y baño. Retiro de escombros y liberación de espacios para la nueva distribución.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'foto', etiqueta: 'Demolición cocina', ph: 'ph-4' }, { tipo: 'foto', etiqueta: 'Demolición baño', ph: 'ph-2' } ] },
    { id: 'av-01', obra: 'ayacucho', fecha: '2026-06-05', titulo: 'Inicio de obra', texto: 'Inicio de obra: montaje de protecciones, obrador y relevamiento final de instalaciones existentes.', estado: 'publicado', autor: 'u-carlos', publicadoPor: 'u-nicolas', vistoPor: 4,
      media: [ { tipo: 'foto', etiqueta: 'Obrador', ph: 'ph-1' } ] },
    { id: 'av-g3', obra: 'guemes', fecha: '2026-08-01', titulo: 'Fotos actualizadas del living', texto: 'Fotos actualizadas del living para el anuncio de renta temporal.', estado: 'publicado', autor: 'u-nicolas', publicadoPor: 'u-nicolas', vistoPor: 2,
      media: [ { tipo: 'foto', etiqueta: 'Living terminado', ph: 'ph-2' } ] },
    { id: 'av-g2', obra: 'guemes', fecha: '2025-10-28', titulo: 'Equipamiento completo', texto: 'Equipamiento completo: mobiliario, electrodomésticos y blanquería. La unidad queda lista para renta temporal.', estado: 'publicado', autor: 'u-nicolas', publicadoPor: 'u-nicolas', vistoPor: 3,
      media: [ { tipo: 'foto', etiqueta: 'Dormitorio equipado', ph: 'ph-5' }, { tipo: 'foto', etiqueta: 'Cocina equipada', ph: 'ph-3' } ] },
    { id: 'av-g1', obra: 'guemes', fecha: '2025-03-10', titulo: 'Inicio de obra', texto: 'Inicio de obra: demolición de cocina y baño.', estado: 'publicado', autor: 'u-nicolas', publicadoPor: 'u-nicolas', vistoPor: 3,
      media: [ { tipo: 'foto', etiqueta: 'Demolición', ph: 'ph-4' } ] }
  ],

  // Bandeja de la obra: lo que llega reenviado a su dirección de correo y espera revisión.
  bandeja: [
    { id: 'bz1', obra: 'ayacucho', tipo: 'foto', remitente: 'Carlos R.', via: 'Reenviado desde el móvil', asunto: 'Fotos de la cocina terminada', fecha: '2026-09-11T09:40', adjuntos: 3, estado: 'pendiente' },
    { id: 'bz2', obra: 'ayacucho', tipo: 'factura', remitente: 'Marmolería Arenales', via: 'Email del proveedor', asunto: 'Factura 0001-00042 · mesada de granito', fecha: '2026-09-10T17:12', adjuntos: 1, estado: 'pendiente' },
    { id: 'bz3', obra: 'guemes', tipo: 'documento', remitente: 'Administración del edificio', via: 'Email', asunto: 'Liquidación de expensas de agosto', fecha: '2026-09-08T11:05', adjuntos: 1, estado: 'pendiente' }
  ],

  categoriasDocumento: ['Contratos', 'Escrituras y dominio', 'Seguros y permisos', 'Presupuestos', 'Facturas y comprobantes', 'Rendiciones e informes'],

  // visibilidad: 'inversores' (inversores de la obra) · 'equipo' (solo equipo) · 'seleccionados'
  visibilidades: [
    { id: 'inversores', nombre: 'Inversores de la obra', descripcion: 'Lo ven todos los inversores con participación en esta obra.' },
    { id: 'equipo', nombre: 'Solo equipo', descripcion: 'Solo perfiles de Administración y Obra. No aparece en el portal.' },
    { id: 'seleccionados', nombre: 'Inversores seleccionados', descripcion: 'Solo las personas que se elijan.' }
  ],

  documentos: [
    { id: 'd01', obra: 'ayacucho', nombre: 'Contrato de fideicomiso', categoria: 'Contratos', tipo: 'PDF', estado: 'Firmado', fecha: '2026-03-12', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '1,2 MB' },
    { id: 'd02', obra: 'ayacucho', nombre: 'Boleto de compraventa', categoria: 'Contratos', tipo: 'PDF', estado: 'Firmado', fecha: '2026-04-10', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '640 KB' },
    { id: 'd03', obra: 'ayacucho', nombre: 'Escritura', categoria: 'Escrituras y dominio', tipo: 'PDF', estado: 'Registrada', fecha: '2026-05-28', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '2,4 MB' },
    { id: 'd04', obra: 'ayacucho', nombre: 'Informe de dominio', categoria: 'Escrituras y dominio', tipo: 'PDF', estado: 'Sin gravámenes', fecha: '2026-04-02', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '310 KB' },
    { id: 'd05', obra: 'ayacucho', nombre: 'Póliza de seguro de obra', categoria: 'Seguros y permisos', tipo: 'PDF', estado: 'Vigente', fecha: '2026-06-01', vence: '2026-11-30', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '880 KB' },
    { id: 'd06', obra: 'ayacucho', nombre: 'Rendición trimestral Q2-2026', categoria: 'Rendiciones e informes', tipo: 'PDF', estado: 'Publicada', fecha: '2026-07-10', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '1,1 MB' },
    { id: 'd07', obra: 'ayacucho', nombre: 'Contrato de obra con la constructora', categoria: 'Contratos', tipo: 'PDF', estado: 'Firmado', fecha: '2026-06-01', vence: '2026-11-30', visibilidad: 'equipo', subidoPor: 'u-nicolas', peso: '1,6 MB' },
    { id: 'd08', obra: 'ayacucho', nombre: 'Presupuesto de reforma v3', categoria: 'Presupuestos', tipo: 'XLSX', estado: 'Aprobado', fecha: '2026-05-30', visibilidad: 'equipo', subidoPor: 'u-carlos', peso: '96 KB' },
    { id: 'd09', obra: 'ayacucho', nombre: 'Aviso de obra municipal', categoria: 'Seguros y permisos', tipo: 'PDF', estado: 'Aprobado', fecha: '2026-05-29', visibilidad: 'equipo', subidoPor: 'u-carlos', peso: '420 KB' },
    { id: 'd10', obra: 'ayacucho', nombre: 'Facturas y comprobantes · agosto 2026', categoria: 'Facturas y comprobantes', tipo: 'Carpeta', estado: '6 archivos', fecha: '2026-08-31', visibilidad: 'equipo', subidoPor: 'u-carlos', peso: '4,8 MB' },
    { id: 'd11', obra: 'guemes', nombre: 'Contrato de fideicomiso', categoria: 'Contratos', tipo: 'PDF', estado: 'Firmado', fecha: '2024-12-18', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '1,1 MB' },
    { id: 'd12', obra: 'guemes', nombre: 'Escritura', categoria: 'Escrituras y dominio', tipo: 'PDF', estado: 'Registrada', fecha: '2025-02-20', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '2,2 MB' },
    { id: 'd13', obra: 'guemes', nombre: 'Contrato de administración de renta temporal', categoria: 'Contratos', tipo: 'PDF', estado: 'Vigente', fecha: '2025-11-01', vence: '2026-10-31', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '540 KB' },
    { id: 'd14', obra: 'guemes', nombre: 'Rendición trimestral Q2-2026', categoria: 'Rendiciones e informes', tipo: 'PDF', estado: 'Publicada', fecha: '2026-07-10', visibilidad: 'inversores', subidoPor: 'u-nicolas', peso: '980 KB' },
    { id: 'd15', obra: 'junin', nombre: 'Análisis de la oportunidad', categoria: 'Rendiciones e informes', tipo: 'PDF', estado: 'Publicado', fecha: '2026-08-18', visibilidad: 'seleccionados', compartidoCon: ['i-andres', 'i-carmen'], subidoPor: 'u-nicolas', peso: '1,9 MB' }
  ],

  inversores: [
    { id: 'i-martin', nombre: 'Martín G.', iniciales: 'MG', email: 'martin.g@example.com', estado: 'activo', acceso: 'Google', alta: '2024-12-18', ultimoAcceso: '2026-08-25' },
    { id: 'i-laura', nombre: 'Laura V.', iniciales: 'LV', email: 'laura.v@example.com', estado: 'activo', acceso: 'Google', alta: '2024-12-18', ultimoAcceso: '2026-09-02' },
    { id: 'i-carmen', nombre: 'Carmen S.', iniciales: 'CS', email: 'carmen.s@example.com', estado: 'activo', acceso: 'Enlace por correo', alta: '2024-12-18', ultimoAcceso: '2026-07-16' },
    { id: 'i-familia-o', nombre: 'Familia O.', iniciales: 'FO', email: 'familia.o@example.com', estado: 'activo', acceso: 'Google', alta: '2026-03-12', ultimoAcceso: '2026-08-23' },
    { id: 'i-andres', nombre: 'Andrés T.', iniciales: 'AT', email: 'andres.t@example.com', estado: 'invitado', acceso: 'Google', invitado: '2026-09-05' }
  ],

  // pct = participación en el fideicomiso de esa obra. Ayacucho suma US$138.850 (100 %); Güemes US$125.000 (100 %).
  participaciones: [
    { inversor: 'i-martin', obra: 'ayacucho', monto: 35000, pct: 25.2, fecha: '2026-03-12' },
    { inversor: 'i-laura', obra: 'ayacucho', monto: 40000, pct: 28.8, fecha: '2026-03-12' },
    { inversor: 'i-carmen', obra: 'ayacucho', monto: 35000, pct: 25.2, fecha: '2026-03-12' },
    { inversor: 'i-familia-o', obra: 'ayacucho', monto: 28850, pct: 20.8, fecha: '2026-03-12' },
    { inversor: 'i-martin', obra: 'guemes', monto: 25000, pct: 20, fecha: '2024-12-18' },
    { inversor: 'i-laura', obra: 'guemes', monto: 50000, pct: 40, fecha: '2024-12-18' },
    { inversor: 'i-carmen', obra: 'guemes', monto: 50000, pct: 40, fecha: '2024-12-18' }
  ],

  // Compromisos sobre oportunidades abiertas. «comprometido» de cada obra es el dato de referencia;
  // este detalle puede no cubrirlo entero (Aguirre 1300 no tiene detalle cargado).
  compromisos: [
    { inversor: 'i-andres', obra: 'junin', monto: 25000, estado: 'Confirmado', fecha: '2026-09-04' },
    { inversor: 'i-carmen', obra: 'junin', monto: 35140, estado: 'Interesado', fecha: '2026-08-27' }
  ],

  // Cada inversor cobra total × su pct en la obra (Martín G.: US$956 por trimestre).
  distribuciones: [
    { id: 'ds-q1', obra: 'guemes', periodo: 'Q1 2026', fecha: '2026-04-15', total: 4780, concepto: 'Renta del trimestre', estado: 'Pagada' },
    { id: 'ds-q2', obra: 'guemes', periodo: 'Q2 2026', fecha: '2026-07-15', total: 4780, concepto: 'Renta del trimestre', estado: 'Pagada' },
    { id: 'ds-q3', obra: 'guemes', periodo: 'Q3 2026', fecha: '2026-10-15', total: null, concepto: 'Renta del trimestre', estado: 'Programada' }
  ],

  // Cámaras: el panel solo muestra señales que la empresa ya tiene. tipo: 'stream' | 'enlace' | 'capturas'
  camaras: [
    { id: 'c1', obra: 'ayacucho', nombre: 'Fachada', tipo: 'capturas', origen: 'Cámara 4G de la obra', detalle: 'Deja una captura cada 10 minutos en la carpeta de la obra.', estado: 'conectada', ultima: '2026-09-11T10:20', compartidaConInversores: true, ph: 'ph-4' },
    { id: 'c2', obra: 'ayacucho', nombre: 'Living', tipo: 'stream', origen: 'Grabador de la obra', detalle: 'Señal en directo en formato web, emitida por el grabador de la empresa.', estado: 'conectada', ultima: '2026-09-11T13:10', compartidaConInversores: true, ph: 'ph-1' },
    { id: 'c3', obra: 'ayacucho', nombre: 'Baño', tipo: 'enlace', origen: 'Proveedor de alarmas', detalle: 'El proveedor no permite incrustar la imagen: el panel abre su visor.', estado: 'solo-enlace', ultima: '2026-09-11T12:10', compartidaConInversores: false, ph: 'ph-5' }
  ],

  tiposSenal: [
    { id: 'stream', nombre: 'Señal en directo', descripcion: 'Una dirección de vídeo que ya emite su grabador, su cámara o su proveedor en formato web.' },
    { id: 'enlace', nombre: 'Visor del proveedor', descripcion: 'El visor web de su empresa de seguridad o alarmas. Si no permite incrustarlo, el panel muestra un acceso directo.' },
    { id: 'capturas', nombre: 'Capturas periódicas', descripcion: 'Imágenes que la cámara deja en un almacenamiento de su empresa. El panel las ordena por fecha y arma el timelapse.' }
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
    empresa: ['Cámaras, grabador e instalación en la obra', 'Conexión a internet o tarjeta de datos', 'Grabación y conservación de las imágenes', 'Carteles y cumplimiento de la normativa de videovigilancia'],
    recoba: ['Conectar la señal o las capturas al panel', 'Mostrarla solo a los perfiles autorizados', 'Asesorar en la elección del equipo'],
    nota: 'La disponibilidad de la imagen depende del equipo y la conexión de su empresa.'
  },

  alertas: [
    { id: 'al1', tono: 'gold', icono: 'clock', titulo: 'Avance pendiente de publicar', texto: 'Carlos R. envió «Cocina: bajo mesada y alacenas» con 4 fotos.', obra: 'ayacucho', accion: { label: 'Revisar', href: 'obra.html?id=ayacucho#diario' } },
    { id: 'al2', tono: 'copper', icono: 'mail', titulo: 'Entradas sin revisar', texto: 'Llegaron 2 entradas al correo de Ayacucho 1400: fotos de la cocina y una factura.', obra: 'ayacucho', accion: { label: 'Ver bandeja', href: 'obra.html?id=ayacucho#bandeja' } },
    { id: 'al3', tono: 'copper', icono: 'trend', titulo: 'Partida cerca del límite', texto: 'Instalaciones lleva el 90% de su presupuesto con la obra al 45%.', obra: 'ayacucho', accion: { label: 'Ver números', href: 'obra.html?id=ayacucho#numeros' } },
    { id: 'al4', tono: 'ink', icono: 'users', titulo: 'Invitación sin aceptar', texto: 'Andrés T. aún no ha accedido al portal (invitado el 05/09/2026).', obra: 'junin', accion: { label: 'Ver personas', href: 'obra.html?id=junin#personas' } },
    { id: 'al5', tono: 'gold', icono: 'file', titulo: 'Contrato próximo a vencer', texto: 'La administración de renta temporal de Güemes 3800 vence el 31/10/2026.', obra: 'guemes', accion: { label: 'Ver documentos', href: 'obra.html?id=guemes#documentos' } }
  ],

  actividad: [
    { fecha: '2026-09-11T08:12', quien: 'u-carlos', icono: 'image', texto: 'subió 4 fotos a Ayacucho 1400 y envió el avance a revisión' },
    { fecha: '2026-09-09T11:02', quien: 'u-nicolas', icono: 'users', texto: 'invitó a Paula D. con perfil Administración' },
    { fecha: '2026-09-05T10:15', quien: 'u-nicolas', icono: 'mail', texto: 'invitó a Andrés T. al portal del inversor' },
    { fecha: '2026-09-04T16:20', quien: 'u-nicolas', icono: 'trend', texto: 'registró el compromiso de Andrés T. en Junín 600 (US$25.000)' },
    { fecha: '2026-09-02T09:48', quien: 'i-laura', icono: 'download', texto: 'descargó la rendición Q2-2026 de Güemes 3800' },
    { fecha: '2026-09-01T17:30', quien: 'u-nicolas', icono: 'receipt', texto: 'registró US$500 de honorarios de dirección de obra en Ayacucho 1400' },
    { fecha: '2026-08-25T21:10', quien: 'i-martin', icono: 'eye', texto: 'vio el avance del 22/08 de Ayacucho 1400' },
    { fecha: '2026-08-22T19:05', quien: 'u-nicolas', icono: 'send', texto: 'publicó «Baño principal terminado» y avisó a 4 inversores' }
  ],

  avisos: [
    { id: 'n1', nombre: 'Nuevo avance publicado', destinatarios: 'Inversores de la obra', activo: true, asunto: 'Nuevo avance en {obra}' },
    { id: 'n2', nombre: 'Nuevo documento compartido', destinatarios: 'Según la visibilidad del documento', activo: true, asunto: 'Nuevo documento disponible: {documento}' },
    { id: 'n3', nombre: 'Distribución pagada', destinatarios: 'Inversores de la obra', activo: true, asunto: 'Distribución {periodo} de {obra}' },
    { id: 'n4', nombre: 'Avance enviado a revisión', destinatarios: 'Administración', activo: true, asunto: '{persona} envió un avance de {obra}' },
    { id: 'n5', nombre: 'Resumen semanal del equipo', destinatarios: 'Administración', activo: false, asunto: 'Resumen semanal de obras' },
    { id: 'n6', nombre: 'Invitación al portal', destinatarios: 'Persona invitada', activo: true, asunto: '{marca} le invita a su portal del inversor' }
  ]
};
