# Maqueta del panel de administración — convenciones

Maqueta navegable (HTML estático, sin backend) del **panel de administración** de la
plataforma de seguimiento de recoBA. Es la cara del equipo: aquí se cargan obras,
avances con fotos, documentos, cámara, personas y números de cada obra. Lo que se carga
aquí es lo que ve el inversor en el portal (`../index.html`, la demo ya publicada en
`gestion.recoba.casa`). Esta carpeta se publicará en `gestion.recoba.casa/admin/`.

Se usa para vender el producto a promotoras, constructoras, inmobiliarias y fondos en
España. Tiene que verse **real, sobrio y fácil**: poco texto, datos concentrados y
acciones claras.

## Archivos y dueños

| Archivo | Qué es |
|---|---|
| `assets/admin.css` | Estilos compartidos |
| `assets/admin.js` | Shell y utilidades (`window.Admin`) |
| `assets/data.js` | Datos de demostración (`window.RECOBA_DATA`) |
| `_plantilla.html` | Plantilla de página |
| `index.html` | **Obras**: portada con la lista de obras y lo que espera respuesta |
| `obra.html` | **La obra**: bandeja de correo y pestañas de avances, documentos, cámara, personas y números |
| `ajustes.html` | Marca, equipo interno, acceso, avisos e instalación |
| `movil.html` | Carga desde el móvil (perfil Obra) |

**Concepto (12-sep-2026):** la unidad es la obra. Todo lo de una obra vive dentro
de esa obra; no hay módulos globales de gastos, documentos, inversores ni cámaras.
El panel no compite con el sistema de gestión del cliente: recoge lo que ya circula
(cada obra tiene su dirección de correo, `obra.email`, y su bandeja en `D.bandeja`)
y se lo muestra al inversor. Los números van en versión simple: partidas grandes,
sin factura por factura.

Cada agente escribe **solo su archivo**. Si necesita algo que no existe en los
compartidos, lo resuelve dentro de su página y lo menciona en su informe final.

## Estructura obligatoria de cada página

Partir de `_plantilla.html`:

- `<body data-page="…">` con uno de estos valores: `obras`, `obra`, `movil` o `ajustes`.
  Marca la sección activa y la ruta de la barra superior.
- Mantener `#sidebar`, `#topbar` y `main.content` (el shell los rellena solo).
- Scripts al final del `<body>`, en este orden: `assets/data.js`, `assets/admin.js` y
  después el script de la página.
- Modales fuera de `.app`, como hermanos al final del `<body>`.
- `<title>`: `Nombre de la pantalla · Administración recoBA`.

## API `window.Admin`

- **Datos**
  - `Admin.data`: el objeto `RECOBA_DATA` completo.
  - `obra(id)`, `persona(id)` (equipo o inversores), `perfil(id)`.
  - `partidas(obraId)`, `partidasPlanas(obraId)` (con `nivel` y `padre`), `partidaNombre(obraId, partidaId)`.
  - `gastos(obraId?)`, `avances(obraId?)`, `documentos(obraId?)`, `camaras(obraId?)`.
  - `participaciones({ obra?, inversor? })`, `capitalDe(inversorId)`, `distribucionesDe(inversorId)`, `visibilidad(id)`.
  - `qs('id')`: lee un parámetro de la URL.
- **Formato** (usarlos siempre, nunca formatear a mano)
  - `money(n)`: `US$138.850`.
  - `pct(n, decimales)`: `79,5%`.
  - `group(n)`: `1.200`.
  - `date(iso, estilo)`: `short` 22/08/2026 · `medium` 22 ago 2026 · `long` 22 de agosto de 2026 · `month` Ago 2026 · `day` 22/08 · `time` · `datetime`.
  - `ago(iso)`: hoy 08:12 · ayer · hace 3 días · 25/08/2026.
  - `daysUntil(iso)`.
  - La fecha de referencia («hoy») es **11/09/2026**.
- **Piezas de HTML** (devuelven texto HTML)
  - `icon(nombre, clase?)`.
  - `chip(texto, 'chip-copper' | 'chip-sage' | 'chip-gold' | 'chip-ink' | 'chip-outline')` y `estadoChip(estadoDeObra)`.
  - `avatar(persona, 'sm' | 'lg')`.
  - `bar(ejecutado, presupuesto)`: minibarra; queda en verde al 100 % y en cobre oscuro si hay sobrecoste.
  - `phases(obra)`: las 8 fases con fechas.
  - `esc(texto)`: **escapar siempre** los textos que se insertan en HTML.
- **Interacción**
  - `toast(mensaje, icono?)`.
  - `openModal(id)` y `closeModal(id)`.
  - `activateTab(contenedor, nombre)`.
  - `hydrate(nodo)`: llamarlo después de insertar HTML que tenga `data-icon`, pestañas, `.dropzone` o `data-segmented`.

Iconos disponibles: `home building receipt file folder users user camera video settings phone eye external bell search plus minus upload download check x alert info clock calendar image lock key shield link chevron-right chevron-down arrow-right filter dots mail send trend edit trash database globe palette play signal list grid table refresh pin wallet percent copy`.

## Comportamientos declarativos (ya funcionan)

- `data-open-modal="id"` abre un modal; `data-close-modal` lo cierra. También se cierran con Escape y con clic en el fondo.
- `<form data-demo="Mensaje">`: al enviarse se cierra el modal, se muestra el aviso y se resetea. Si la página escucha `submit` en ese formulario, su listener corre **antes**, así que puede leer los valores y añadir el elemento a la lista en memoria. Para no resetear: `data-reset="false"`.
- `data-toast="Mensaje"` en cualquier botón o enlace muestra un aviso (acciones de demostración como «Descargar» o «Reenviar»).
- Pestañas: contenedor `[data-tabs]` con `.tab[data-tab="x"]` y `[data-panel="x"]`. Se abre la pestaña cuyo nombre coincida con el `#hash` de la URL. No anidar contenedores `[data-tabs]`.
- Selector segmentado: `[data-segmented]` con botones `data-value`; emite `segmented:change`.
- `.dropzone`: abre el selector de archivos y acepta arrastrar. Si el contenedor padre tiene un `.file-list`, pinta los nombres. Emite `dropzone:files` con `{ names }`.
- `<span data-icon="upload"></span>` se reemplaza por el SVG.

## Clases CSS disponibles

- **Estructura:** `page-head` (con `eyebrow`, `h1`, `page-sub` y `page-actions`), `section-title`, `card` (`card-head`, `card-body`, `card-pad`, `card-foot`), `grid-2`, `grid-3`, `grid-main-side`, `stack`, `row`, `row-between`, `wrap-gap`.
- **Métricas:** `stats-grid`, `stat-card`, `stat-label`, `stat-value` (`accent`), `stat-sub` (`ok`, `warn`).
- **Botones:** `btn` con `btn-copper`, `btn-ink`, `btn-ghost`, `btn-text`, `btn-danger`, `btn-sm` y `btn-block`; `icon-btn`.
- **Tablas:** `table-wrap` > `table` con `th`, `td.num`, `tr.sub`, `tr.total`, `cell-title` y `cell-meta`.
- **Estados:** `chip` y variantes, `tone-copper`, `tone-gold`, `tone-sage`, `tone-ink` (fondos suaves para `list-icon`).
- **Formularios:** `field`, `label`, `hint`, `input`, `select`, `textarea`, `form-grid` (`span-2`), `input-affix`, `switch` (input + `span.track`), `check`, `option-cards` > `option-card` (`option-title`, `option-desc`), `dropzone`, `file-list`.
- **Navegación:** `tabs` > `tab` (`.count`), `segmented`.
- **Modales:** `modal-overlay` > `modal` (`modal-lg`) > `modal-head`, `modal-desc`, `modal-body`, `modal-foot`, `modal-close`.
- **Mensajes:** `alert` (`alert-copper`, `alert-gold`, `alert-sage`, `alert-ink`) con `alert-title` y `alert-text`.
- **Listas:** `list` > `list-item` (`list-icon`, `list-main`, `list-title`, `list-meta`).
- **Personas y fotos:** `avatar`, `thumb ph-1…ph-5` (foto simulada con `<span>` de etiqueta).
- **Seguimiento:** `timeline` > `tl-item` (`draft`) y `tl-date`; `phases`; `mini-bar`; `progress-track` > `progress-fill`; `empty`.
- **Utilidades:** `muted`, `soft`, `strong`, `tnum`, `numeral`, `mono`, `kbd`, `divider`, `mt-4…mt-32`.

Estilos propios: en un `<style>` de la página, **siempre con prefijo de página**
(`.pg-gastos-…`). No redefinir clases compartidas ni tocar `:root`. Sin sombras
enormes ni efectos llamativos; la estética es la del portal: cálida, editorial y sobria.

## Datos (`assets/data.js`)

Obras: `ayacucho` (Ayacucho 1400, **en obra**, la protagonista), `guemes` (Güemes 3800,
en renta), `junin` y `aguirre` (en estudio, con oportunidad abierta a inversión).
Cada obra tiene `email` (su dirección de correo) y entradas en `bandeja` (lo reenviado
que espera revisión). Hay además `partidas`, `gastos` (Ayacucho completo, hoy solo se usa
para totales: el panel base no lleva lista de gastos), `avances` (con un **borrador** de
Carlos R. pendiente de publicar), `documentos`, `inversores`, `participaciones`,
`compromisos`, `distribuciones`, `camaras`, `tiposSenal`, `capturas`,
`responsabilidadCamaras`, `equipo`, `perfiles`, `permisos`, `alertas`, `actividad` y `avisos`.

Reglas:
- **No inventar cifras que contradigan los datos.** Ayacucho: presupuesto US$138.850 y ejecutado US$110.410; las sumas cuadran.
- Si una pantalla necesita un número derivado, calcularlo a partir de los datos.
- Si necesita un dato nuevo que no existe (p. ej. un historial), crearlo en la página, coherente con lo existente, y declararlo en el informe.
- Moneda de la instalación: US$.
- Las acciones de demostración pueden modificar los arrays en memoria para que la interfaz responda. No se guarda nada: nada de `localStorage` ni peticiones de red.

## Lenguaje

- **Interfaz** en español neutro de España: botones y títulos en infinitivo o sustantivo («Publicar avance», «Registrar gasto», «Subir documento»). Si hay que dirigirse a alguien, de usted. **Nunca voseo ni tuteo.** «vídeo», «móvil», «archivo», «subir».
- **Datos** de las obras (textos de avances, conceptos de gastos): se dejan tal cual están en `data.js` (vocabulario de Buenos Aires, porque las obras están allí).
- Sin emojis, sin lorem ipsum, sin signos de exclamación.
- Frases cortas. Las ayudas explican *para qué* sirve algo, no *cómo* está hecho.

## Posicionamiento que la interfaz debe reflejar

- La instalación **es del cliente**: vive en sus cuentas (datos en la UE) y tiene una licencia de uso.
- **Perfiles:** Administración (todo), Obra (sube avances y gastos de sus obras; los avances quedan pendientes de revisión) e Inversor (solo ve lo suyo, en el portal).
- **Cámaras:** el panel solo **muestra señales que la empresa ya tiene** (señal en directo, visor del proveedor o capturas periódicas). El equipo, la conexión, la grabación y la normativa de videovigilancia son responsabilidad de la empresa. Nada de «cámara incluida» ni «directo 24/7 garantizado».
- Sin tiempos de respuesta garantizados, sin integraciones con ERP o CRM, sin radar dentro del panel.

## Verificación (obligatoria antes de terminar)

```bash
node /private/tmp/claude-501/-Users-s333ma-Documents-claude-code-recova/d7ab71ee-f6ab-4a40-8fdb-a183cfb8da7b/scratchpad/deck/verify-admin.cjs <pagina.html> '<selector que abre un modal>' ...
```

El script genera capturas en `…/scratchpad/deck/admin-shots/` e informa de errores de
consola, iconos sin hidratar y desbordes horizontales en escritorio y móvil.

Pasos:
1. Mirar las capturas con la herramienta Read.
2. Corregir hasta que no haya errores ni desbordes y la pantalla se vea terminada: nada cortado, alineado y con jerarquía clara.
3. Probar cada modal y cada acción principal al menos una vez.

## Informe final (breve)

- Archivo(s) creados.
- Qué muestra la pantalla y qué acciones funcionan.
- Datos nuevos creados dentro de la página, si hubo.
- Cosas que harían falta en los compartidos.
- Resultado de la verificación.
