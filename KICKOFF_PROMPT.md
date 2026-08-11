# Prompt de kickoff para Claude Code

> Abrí terminal en esta carpeta (`portal-recoba/`), corré `claude`, y pegá el
> prompt de abajo. CLAUDE.md ya le da todo el contexto permanente.

---

Lee CLAUDE.md, `portal-inversores.html` (maqueta validada) y
`brand/tokens.css` antes de escribir código. Vamos a construir la v1 completa
de `inversores.recoba.casa` en este repo. Trabajá por fases, commiteando al
final de cada una, y **usá subagentes en paralelo de forma agresiva dentro de
cada fase** (uno por vista, uno por endpoint, uno por módulo de schema, etc.)
en vez de resolver todo de forma secuencial — la fase no está terminada hasta
que todos los subagentes reportan y vos verificaste el criterio de aceptación.

**Fase 0 — Scaffold + tokens + deploy hello.** Next.js 15 (App Router,
TypeScript, Tailwind con `brand/tokens.css` copiado tal cual del repo del
radar como theme). Configurá Fraunces + Inter vía `next/font`. Estructura
`src/`. Repo GitHub `portal-recoba`, proyecto en Vercel, dominio
`inversores.recoba.casa` conectado (CNAME en el DNS de recoba.casa).
*Aceptación: página hello-world con wordmark "recoBA" en Fraunces, paleta
copper/ink aplicada, deployada y accesible en el dominio real.*

**Fase 1 — Schema + seed + auth.** En paralelo: (a) un subagente arma el
schema Drizzle completo (los 12 modelos de CLAUDE.md) contra Neon y el script
`pnpm seed` con datos demo basados en el caso Recoleta (inversión
US$138.850, ticket demo US$35.000 = 25,2%, TIR 6,4/9,1/12,1%, 3-4 inversores
demo, avances de obra de ejemplo, presupuesto con partidas y gastos
parciales); (b) otro subagente arma Auth.js v5 completo (Google + magic
link), tabla `investors` como allowlist, roles admin/investor, middleware que
bloquea a cualquiera no invitado. *Aceptación: `pnpm seed` corre limpio contra
Neon; un email fuera de la allowlist no puede loguearse (probado); un email
en allowlist entra y aterriza en dashboard vacío o admin según rol.*

**Fase 2 — Vistas de inversor.** Replicá la maqueta `portal-inversores.html`
pieza por pieza, un subagente por vista en paralelo:
1. `/` Dashboard: resumen de capital invertido total, proyectos activos,
   últimas novedades, accesos a oportunidades abiertas.
2. `/proyectos/[id]` Detalle con tabs/secciones: pipeline (línea de tiempo de
   `project_stages`), avances (feed de `updates` con `update_media`, fotos y
   video), gastos (presupuesto vs ejecutado por partida, con sub-partidas),
   mi inversión (monto, %, distribuciones recibidas por concepto), documentos
   (descarga vía URL firmada).
3. `/oportunidades` Listado de `opportunities` abiertas/próximas con target,
   ticket mínimo, cierre estimado, TIR proyectada; botón de interés que crea
   un `commitment`.
*Aceptación: navegación completa con los datos del seed, visualmente fiel a
la maqueta (mismos componentes, misma jerarquía), responsive.*

**Fase 3 — Panel admin.** CRUD completo en `/admin` (protegido por rol),
subagentes en paralelo por entidad: proyectos y stages, avances con subida de
media a Vercel Blob (con compresión), presupuesto y gastos, documentos,
oportunidades y commitments, invitaciones de inversores (alta en `investors`
+ envío del link de acceso). *Aceptación: un admin puede dar de alta un
proyecto nuevo de punta a punta (crear, subir 3 fotos de avance, cargar 5
gastos, invitar un inversor) sin tocar la DB a mano.*

**Fase 4 — Distribuciones + notificaciones.** Carga de `distributions` desde
admin con cálculo automático de saldo pendiente vs preferente acumulada.
Emails transaccionales con Resend: nuevo avance publicado (a los inversores
del proyecto), nueva distribución registrada, invitación de inversor.
*Aceptación: publicar un avance dispara un email real (o a inbox de test) a
los inversores correctos del proyecto y a nadie más.*

**Fase 5 — Hardening.** Tests de autorización (un inversor no puede ver
proyectos/documentos ajenos ni por URL directa ni por API — casos negativos
explícitos), Lighthouse en las vistas principales (perf + accesibilidad),
Open Graph privado (que compartir un link no filtre datos del proyecto a
quien no está logueado). *Aceptación: suite de tests de autorización en
verde, Lighthouse ≥90 en performance/accesibilidad en dashboard y detalle de
proyecto, preview de link de proyecto sin sesión no muestra datos.*

Cuestioná lo que veas mal, pero las decisiones de CLAUDE.md (stack, auth con
allowlist, sin integraciones externas en v1, identidad) ya están tomadas.

---

## Después del deploy (recordatorios)

1. Invitar a los primeros inversores reales desde `/admin` (no desde seed).
2. Cargar el primer proyecto real con avances y presupuesto reales,
   reemplazando los datos demo del caso Recoleta.
3. Revisar que `RESEND_API_KEY` y el dominio de envío estén verificados antes
   de invitar gente real (si no, el magic link no llega).
