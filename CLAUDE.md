# inversores.recoba.casa — Portal de Inversores recoBA

Proyecto: web app privada para los co-inversores de **recoBA** (house flipping
premium en Buenos Aires vía fideicomisos). Es la cara del inversor: entra y ve
avances de obra de sus proyectos (fotos/videos), planilla de gastos presupuesto
vs ejecutado, estado del proyecto en un pipeline, sus documentos, su inversión
y distribuciones, y nuevas oportunidades para sumar capital.

## Contexto de negocio (no cambiar sin preguntar)

- Modelo "flipping paciente": compra a reciclar 20-30% bajo mercado → reforma
  6-8 meses → renta temporal premium 3-5 años → venta. Fideicomisos con 3-5
  co-inversores por activo, tickets US$25.000-50.000.
- Waterfall de distribución: (1) preferente 6% anual USD, trimestral,
  acumulativa; (2) devolución 100% del capital; (3) plusvalía 80/20
  (80% inversores / 20% recoBA). El portal debe reflejar este orden, no
  inventar otro.
- Caso real de referencia (Recoleta, usar en seeds demo): inversión total
  US$138.850 = compra 85.000 + costos de compra 5.950 + reforma 35.000 +
  contingencia 3.500 + equipamiento 7.000 + holding 2.400. TIR proyectada del
  inversor: 6,4% / 9,1% / 12,1% (escenarios). Ticket demo US$35.000 = 25,2%
  de participación.
- Existe una maqueta HTML validada (`portal-inversores.html`, en esta misma
  carpeta) que define la UX/UI de referencia: navegación, secciones
  del detalle de proyecto, tarjetas de oportunidad, estados del pipeline. La
  app real debe **replicarla**, no reinterpretarla — es la fuente de verdad
  visual junto con `brand/tokens.css`.

## Arquitectura (fijo, no abrir debate)

- **Next.js 15 (App Router, TypeScript) en Vercel**, dominio
  `inversores.recoba.casa`. Repo nuevo `portal-recoba` (separado de
  `radar-recoba`).
- **DB: Postgres (Neon) + Drizzle ORM.** Proyecto Neon propio, separado del
  radar — no compartir instancia ni esquema.
- **Auth: Auth.js (NextAuth v5).** Google provider + email magic link como
  fallback. Sin registro abierto: solo emails presentes en la tabla
  `investors` con status `invited`/`active` pueden entrar (allowlist estricta,
  chequeada en el callback de sign-in). Roles `admin` (Nicolás y socios) e
  `investor`. El admin invita desde `/admin`.
- **Media: Vercel Blob** para fotos/video de avances de obra, subida desde el
  panel admin. Comprimir imágenes (server-side o client-side) antes de subir;
  no guardar originales pesados sin optimizar.
- **Todo el contenido lo carga el admin** desde `/admin`: proyectos, cambios
  de estado de pipeline, avances con fotos/video, gastos, documentos,
  distribuciones, oportunidades e invitaciones. **Sin integraciones externas
  en v1** (nada de scraping, APIs bancarias, etc. — eso es del radar).

## Modelo de datos (Drizzle, mínimo viable)

- `users` — vía Auth.js (tabla estándar del adapter).
- `investors` (email, nombre, status: invited|active, user_id nullable hasta
  que acepta).
- `projects` (nombre, barrio, direccion, m2, ambientes, estado_actual,
  presupuesto_total_usd, fechas clave, portada_url).
- `project_stages` (project_id, stage enum:
  estudio|comprado|escriturado|obra|equipamiento|renta|venta|vendido, fecha,
  nota) — historial del pipeline, no solo el estado actual.
- `updates` (project_id, fecha, titulo, cuerpo, published) — posts de avance.
- `update_media` (update_id, blob_url, tipo: foto|video, caption, orden).
- `budget_lines` (project_id, partida, parent_id nullable para sub-partidas,
  presupuesto_usd, orden).
- `expenses` (budget_line_id, fecha, monto_usd, descripcion, comprobante_url
  nullable).
- `investments` (investor_id, project_id, monto_usd, pct, fecha).
- `distributions` (investment_id, fecha, monto_usd, concepto:
  preferente|capital|plusvalia).
- `documents` (project_id, nombre, blob_url, visibilidad: all|per-investor).
- `opportunities` (estado: abierta|proximamente|cerrada, target_usd,
  ticket_min, cierre_estimado, tir_proyectada, descripcion, project_id
  nullable).
- `commitments` (opportunity_id, investor_id, monto_usd, estado:
  interesado|confirmado).

**Derivados — no almacenar, calcular en queries/server:** % ejecutado por
partida (sum expenses / presupuesto_usd), capital invertido total del
inversor (sum investments), valor estimado del proyecto, TIR realizada
(a partir de distributions + capital + fecha).

## Seguridad (obligatorio, no es opcional para v1)

- Un inversor **solo** ve proyectos donde tiene un registro en `investments`
  (join investor_id), más las `opportunities` en estado `abierta` (y
  `proximamente` si se decide mostrarlas). Nunca listar proyectos ajenos ni
  aunque sea solo el nombre.
- Documentos y media **detrás de URLs firmadas o proxy autenticado** — nunca
  blobs públicos de Vercel Blob con URL adivinable. Verificar
  investor_id/visibilidad en el server antes de firmar/servir.
- Rutas `/admin/*` protegidas por rol `admin` en middleware, no solo en la UI.
- Rate limiting básico en los endpoints de auth (magic link) para evitar
  enumeración/abuso.
- Nada de datos reales (nombres, montos, emails de inversores reales) en
  seeds públicos del repo — usar el caso Recoleta anonimizado/demo.

## Identidad visual (obligatoria)

Misma identidad que `radar.recoba.casa` — copiar `brand/tokens.css` tal cual
del repo del radar (paleta copper `#C46A4A` / ink `#1C2331` / cream `#FAF6F0`
/ sage `#5F7161` / gold `#C9A96A`; Fraunces para display/cifras + Inter para
UI; radius 14px). Estética premium-editorial, español es-AR, sin emojis en la
UI. Nombre de marca: **recoBA** (con BA en mayúscula). La maqueta
`portal-inversores.html` manda sobre layout y componentes; los tokens mandan
sobre color/tipografía.

## Contexto para Claude Code con memoria

Este es el **segundo proyecto del ecosistema recoBA**, hermano de
`radar.recoba.casa` (deal-flow inmobiliario, ya en producción). Comparten
identidad visual completa (tokens, tipografía, tono) y stack técnico
(Next.js 15 + Drizzle + Neon + Vercel), pero son repos y bases de datos
independientes: el radar prospecta oportunidades de compra, el portal
gestiona la relación con los inversores ya comprometidos en fideicomisos. No
mezclar datos ni reutilizar el proyecto Neon del radar.

## Convenciones

- Commits convencionales en inglés; UI y docs en español.
- Tests de autorización obligatorios: un inversor no debe poder acceder ni
  por URL directa a datos de otro proyecto/inversor.
- Montos siempre en USD (moneda del negocio); aclarar en UI cuando algo esté
  proyectado vs realizado (ej. TIR proyectada vs distribuciones reales).
- No exponer nada sin auth; ni siquiera metadata de proyectos por rutas
  públicas.
