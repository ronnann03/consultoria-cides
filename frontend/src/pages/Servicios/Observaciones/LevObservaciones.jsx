import { useState, useEffect, useRef } from 'react'
import './LevObservaciones.css'

/* ─── Hook scroll visible ─── */
function useVisible(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

/* ─── Datos ─── */
const TIPOS = [
  {
    icon: '📐',
    titulo: 'Observaciones Metodológicas',
    desc: 'Problemas con el diseño de investigación, tipo de estudio, nivel, muestra, muestreo o la coherencia entre objetivos e hipótesis.',
    color: 'rojo',
  },
  {
    icon: '📚',
    titulo: 'Observaciones Bibliográficas',
    desc: 'Fuentes desactualizadas, citas incorrectas en APA, antecedentes insuficientes o referencias que no coinciden con el texto.',
    color: 'azul',
  },
  {
    icon: '✍️',
    titulo: 'Observaciones de Redacción',
    desc: 'Errores de coherencia, cohesión, uso de primera persona, falta de lenguaje académico o párrafos sin sustento bibliográfico.',
    color: 'naranja',
  },
  {
    icon: '📊',
    titulo: 'Observaciones Estadísticas',
    desc: 'Errores en tablas, figuras, interpretación de resultados, pruebas de normalidad o elección incorrecta del análisis estadístico.',
    color: 'verde',
  },
  {
    icon: '🔬',
    titulo: 'Observaciones del Instrumento',
    desc: 'Cuestionario sin validez de contenido, sin Alpha de Cronbach, ítems mal redactados o que no responden a los indicadores.',
    color: 'morado',
  },
  {
    icon: '📋',
    titulo: 'Observaciones de Formato',
    desc: 'Incumplimiento del reglamento institucional: márgenes, tipo de letra, portada, índice, numeración o estructura de capítulos.',
    color: 'amarillo',
  },
]

const PASOS = [
  {
    num: '01',
    titulo: 'Recepción del acta de observaciones',
    desc: 'Nos envías el acta del jurado con todas las observaciones anotadas y tu tesis actual. Analizamos cada punto en detalle.',
    tiempo: 'Día 1',
  },
  {
    num: '02',
    titulo: 'Diagnóstico y plan de acción',
    desc: 'Clasificamos las observaciones por tipo, urgencia y complejidad. Te presentamos un plan claro con tiempos estimados.',
    tiempo: 'Día 1-2',
  },
  {
    num: '03',
    titulo: 'Corrección técnica',
    desc: 'Nuestro equipo especializado corrige cada observación con sustento teórico y metodológico sólido. Ningún punto queda sin resolver.',
    tiempo: 'Días 3-12',
  },
  {
    num: '04',
    titulo: 'Revisión antiplagio',
    desc: 'Verificamos que las correcciones no afecten el índice de similitud. Ajustamos si es necesario para mantenerte por debajo del umbral.',
    tiempo: 'Día 13',
  },
  {
    num: '05',
    titulo: 'Entrega y preparación para sustentación',
    desc: 'Entregamos la tesis corregida con un informe de cambios y te preparamos para responder preguntas del jurado en la segunda defensa.',
    tiempo: 'Día 14',
  },
]

const CASOS = [
  {
    icon: '⚠️',
    titulo: '"El marco teórico es insuficiente"',
    desc: 'Ampliamos antecedentes con fuentes indexadas actualizadas y reforzamos las bases teóricas y conceptuales con citación APA correcta.',
  },
  {
    icon: '❌',
    titulo: '"La muestra no está justificada"',
    desc: 'Aplicamos la fórmula estadística correspondiente, justificamos el tipo de muestreo y corregimos los criterios de inclusión y exclusión.',
  },
  {
    icon: '🔁',
    titulo: '"Los objetivos e hipótesis no se alinean"',
    desc: 'Reestructuramos la matriz de consistencia garantizando coherencia total entre el problema, objetivos, hipótesis y variables.',
  },
  {
    icon: '📉',
    titulo: '"Las tablas y figuras no tienen formato APA"',
    desc: 'Reformateamos todas las tablas y figuras según APA 7ma edición: numeración, título, nota y citación de fuente correctamente.',
  },
  {
    icon: '🧮',
    titulo: '"El análisis estadístico es incorrecto"',
    desc: 'Reprocesamos los datos con la prueba adecuada (paramétrica o no paramétrica) según la naturaleza de las variables y el tamaño muestral.',
  },
  {
    icon: '📝',
    titulo: '"El instrumento no tiene validez"',
    desc: 'Gestionamos la validación por juicio de expertos, calculamos el Alpha de Cronbach y adjuntamos los certificados correspondientes.',
  },
  {
    icon: '🔤',
    titulo: '"Hay errores de redacción académica"',
    desc: 'Reescribimos los párrafos observados en tercera persona, con lenguaje formal, coherencia y cohesión propias del nivel académico.',
  },
  {
    icon: '📑',
    titulo: '"El formato no cumple el reglamento"',
    desc: 'Ajustamos márgenes, fuente, interlineado, portada y estructura al reglamento específico de tu facultad o escuela de posgrado.',
  },
]

const FAQS = [
  {
    q: '¿En cuánto tiempo pueden corregir todas las observaciones?',
    a: 'Dependiendo de la cantidad y complejidad de las observaciones, el plazo habitual es de 7 a 15 días hábiles. Si el jurado fijó una fecha límite, cuéntanos y ajustamos el plan de trabajo para llegar a tiempo.',
  },
  {
    q: '¿Qué necesito enviarles para empezar?',
    a: 'Solo necesitamos el acta o informe de observaciones del jurado (puede ser una foto) y el archivo Word de tu tesis actual. Con eso empezamos el diagnóstico el mismo día.',
  },
  {
    q: '¿Garantizan que el jurado apruebe en la segunda sustentación?',
    a: 'Sí. Nos comprometemos a resolver al 100% cada observación del acta. Si el jurado realiza nuevas observaciones adicionales no contempladas en el acta original, las atendemos sin costo adicional.',
  },
  {
    q: '¿Trabajan con observaciones de maestría y doctorado también?',
    a: 'Absolutamente. Atendemos observaciones de todos los niveles: pregrado, maestría y doctorado, en todas las áreas del conocimiento y bajo los reglamentos de cualquier universidad peruana.',
  },
  {
    q: '¿El porcentaje de similitud aumentará con las correcciones?',
    a: 'No. Verificamos el índice de similitud antes de la entrega final y nos aseguramos de que las adiciones y correcciones estén correctamente parafraseadas y citadas, manteniendo el porcentaje dentro del límite institucional.',
  },
]

/* ─── Componentes ─── */
function TipoCard({ tipo, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`lo-tipo-card ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}>
      <div className={`lo-tipo-top ${tipo.color}`} />
      <div className="lo-tipo-body">
        <div className="lo-tipo-icon">{tipo.icon}</div>
        <h3>{tipo.titulo}</h3>
        <p>{tipo.desc}</p>
      </div>
    </div>
  )
}

function Paso({ paso, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`lo-paso ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}>
      <div className="lo-paso-left">
        <div className="lo-paso-num">{paso.num}</div>
        <div className="lo-paso-line" />
      </div>
      <div className="lo-paso-content">
        <h3>{paso.titulo}</h3>
        <p>{paso.desc}</p>
        <span className="lo-paso-tiempo">⏱ {paso.tiempo}</span>
      </div>
    </div>
  )
}

function CasoCard({ caso, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`lo-caso ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}>
      <div className="lo-caso-icon">{caso.icon}</div>
      <div>
        <h3>{caso.titulo}</h3>
        <p>{caso.desc}</p>
      </div>
    </div>
  )
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`lo-faq-item ${open ? 'open' : ''}`}>
      <button className="lo-faq-btn" onClick={() => setOpen(v => !v)}>
        <span>{item.q}</span>
        <span className="faq-icon">+</span>
      </button>
      <div className="lo-faq-answer">{item.a}</div>
    </div>
  )
}

/* ─── Página principal ─── */
function LevObservaciones() {
  const [tiposRef, tiposVisible] = useVisible(0.1)
  const [procesoRef, procesoVisible] = useVisible(0.1)
  const [casosRef, casosVisible] = useVisible(0.1)
  const [faqRef, faqVisible] = useVisible(0.1)
  const [ctaRef, ctaVisible] = useVisible(0.2)

  const fadeStyle = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  })

  return (
    <div>

      {/* ══ HERO ══ */}
      <section className="lo-hero">
        <div className="lo-hero-grid">

          <div className="lo-hero-text">
            <span className="lo-urgente-tag">🚨 ¿Te desaprobaron?</span>
            <h1>
              Levantamiento de<br />
              <em>Observaciones</em>
            </h1>
            <div className="lo-alerta">
              <strong>No te rindas.</strong> El 90% de las observaciones del jurado tienen solución técnica. Nuestro equipo ha resuelto más de 500 actas de observaciones con éxito comprobado.
            </div>
            <div className="lo-garantias">
              <span className="lo-garantia">✔ Entrega en 7-15 días</span>
              <span className="lo-garantia">✔ 100% de observaciones resueltas</span>
              <span className="lo-garantia">✔ Antiplagio garantizado</span>
              <span className="lo-garantia">✔ Todos los niveles</span>
            </div>
          </div>

          <div className="lo-hero-card">
            <div className="lo-hero-card-title">🔧 ¿Qué corregimos?</div>
            <ul className="lo-include-list">
              <li>Observaciones metodológicas y de diseño</li>
              <li>Marco teórico y bibliografía desactualizada</li>
              <li>Errores en tablas, figuras y formato APA</li>
              <li>Instrumento sin validez ni confiabilidad</li>
              <li>Análisis estadístico incorrecto</li>
              <li>Redacción y coherencia académica</li>
              <li>Matriz de consistencia desalineada</li>
              <li>Formato y estructura según reglamento</li>
              <li>Preparación para segunda sustentación</li>
            </ul>
            <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer"
              className="lo-hero-cta">
              🚀 Enviar mis observaciones ahora
            </a>
          </div>

        </div>
      </section>

      {/* ══ STRIP ══ */}
      <div className="lo-strip">
        ⏰ ¿Tienes fecha límite del jurado? <span>Cuéntanos y nos adaptamos a tu plazo.</span>
      </div>

      {/* ══ TIPOS ══ */}
      <section className="lo-tipos">
        <div ref={tiposRef} style={fadeStyle(tiposVisible)}>
          <div className="lo-section-header">
            <span className="lo-section-tag">Lo que resolvemos</span>
            <h2>Tipos de <em>Observaciones</em> que atendemos</h2>
          </div>
        </div>
        <div className="lo-tipos-grid">
          {TIPOS.map((t, i) => (
            <TipoCard key={i} tipo={t} delay={i * 0.09} />
          ))}
        </div>
      </section>

      {/* ══ PROCESO ══ */}
      <section className="lo-proceso">
        <div ref={procesoRef} style={fadeStyle(procesoVisible)}>
          <div className="lo-section-header">
            <span className="lo-section-tag">Cómo trabajamos</span>
            <h2>Nuestro <em>Proceso</em> de Corrección</h2>
          </div>
        </div>
        <div className="lo-proceso-timeline">
          {PASOS.map((p, i) => (
            <Paso key={i} paso={p} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ══ CASOS ══ */}
      <section className="lo-casos">
        <div ref={casosRef} style={fadeStyle(casosVisible)}>
          <div className="lo-section-header">
            <span className="lo-section-tag">Ejemplos reales</span>
            <h2>Observaciones <em>frecuentes</em> que resolvemos</h2>
          </div>
        </div>
        <div className="lo-casos-grid">
          {CASOS.map((c, i) => (
            <CasoCard key={i} caso={c} delay={i * 0.07} />
          ))}
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="lo-faq">
        <div ref={faqRef} style={fadeStyle(faqVisible)}>
          <div className="lo-section-header">
            <span className="lo-section-tag">Preguntas frecuentes</span>
            <h2>Lo que más nos <em>preguntan</em></h2>
          </div>
          <div className="lo-faq-list">
            {FAQS.map((item, i) => <FaqItem key={i} item={item} />)}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="lo-cta">
        <div ref={ctaRef} style={fadeStyle(ctaVisible)}>
          <h2>Tu segunda sustentación<br />puede ser <em>la definitiva</em></h2>
          <p>
            Envíanos tu acta de observaciones hoy y recibe un diagnóstico
            gratuito en menos de 24 horas. Sin compromisos.
          </p>
          <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer"
            className="lo-cta-btn">
            💬 Enviar mis observaciones
          </a>
        </div>
      </section>

    </div>
  )
}

export default LevObservaciones
