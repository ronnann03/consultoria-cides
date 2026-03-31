import { useState, useEffect, useRef } from 'react'
import './Parafraseo.css'

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
const QUE_ES = {
  si: [
    'Reescribir ideas con tus propias palabras manteniendo el significado',
    'Citar correctamente la fuente original en APA 7',
    'Usar sinónimos, cambiar estructura y orden de ideas',
    'Reducir el porcentaje de similitud de forma ética',
    'Adaptar el lenguaje al nivel académico del trabajo',
  ],
  no: [
    'Copiar y pegar texto cambiando solo algunas palabras',
    'Usar software automático de parafraseo sin revisión',
    'Eliminar las citas para ocultar el origen de las ideas',
    'Reordenar párrafos sin modificar el contenido',
    'Sintetizar sin comprender ni dominar el tema',
  ],
}

const PASOS = [
  {
    num: '01',
    titulo: 'Recepción y análisis',
    desc: 'Recibimos tu tesis y el reporte de similitud (Turnitin o similar). Identificamos cada sección con alto porcentaje.',
  },
  {
    num: '02',
    titulo: 'Clasificación de fuentes',
    desc: 'Distinguimos qué párrafos son citables, cuáles deben parafrasearse y cuáles requieren nueva bibliografía.',
  },
  {
    num: '03',
    titulo: 'Parafraseo académico',
    desc: 'Reescribimos cada sección con lenguaje académico propio, sin alterar el significado ni la argumentación.',
  },
  {
    num: '04',
    titulo: 'Verificación y entrega',
    desc: 'Generamos un nuevo reporte de similitud. Si no está por debajo del umbral, seguimos ajustando sin costo extra.',
  },
]

const HERRAMIENTAS = [
  {
    icon: '🔎',
    titulo: 'Turnitin',
    desc: 'La plataforma antiplagio más usada en universidades peruanas. Trabajamos directamente con sus reportes.',
  },
  {
    icon: '📋',
    titulo: 'Unicheck',
    desc: 'Detector utilizado en SUNEDU y varias universidades privadas. Conocemos su algoritmo de detección.',
  },
  {
    icon: '🛡️',
    titulo: 'iThenticate',
    desc: 'Sistema premium para revistas y programas de posgrado. Ideal para artículos científicos y tesis doctorales.',
  },
  {
    icon: '📊',
    titulo: 'PlagScan',
    desc: 'Usado en instituciones internacionales. Verificamos la similitud antes y después del parafraseo.',
  },
  {
    icon: '✅',
    titulo: 'Compilatio',
    desc: 'Popular en universidades de América Latina y Europa. Aplicamos técnicas específicas para este detector.',
  },
  {
    icon: '🌐',
    titulo: 'Google Scholar',
    desc: 'Cruzamos fuentes para garantizar que el parafraseo sea genuinamente original y académicamente válido.',
  },
]

const CASOS = [
  {
    num: '#01',
    titulo: 'Tesis con 60–80% de similitud',
    desc: 'El caso más frecuente. Reescribimos todos los capítulos observados y reducimos a menos del 25% garantizado.',
  },
  {
    num: '#02',
    titulo: 'Marco teórico copiado de fuentes',
    desc: 'Identificamos cada fuente original, parafraseamos correctamente y agregamos la cita APA correspondiente.',
  },
  {
    num: '#03',
    titulo: 'Antecedentes sin parafraseo',
    desc: 'Reescribimos cada antecedente sintetizando los hallazgos en lenguaje académico propio con citación correcta.',
  },
  {
    num: '#04',
    titulo: 'Proyecto de tesis antes de la entrega',
    desc: 'Revisamos el perfil completo antes de presentarlo al comité para asegurar que pase el filtro de similitud.',
  },
  {
    num: '#05',
    titulo: 'Artículo científico para revista',
    desc: 'Reducimos la similitud del manuscrito cumpliendo los estándares de las revistas indexadas (Scopus, WoS).',
  },
  {
    num: '#06',
    titulo: 'Segunda sustentación con observación de plagio',
    desc: 'Atendemos urgente los capítulos observados por el jurado y entregamos en el menor tiempo posible.',
  },
]

const FAQS = [
  {
    q: '¿A qué porcentaje reducen la similitud?',
    a: 'El estándar que manejamos es dejar la similitud por debajo del 25%, que es el límite más común en universidades peruanas. Si tu institución exige un porcentaje menor (15% o 10%), también trabajamos para llegar a ese umbral.',
  },
  {
    q: '¿El parafraseo afecta el contenido o las ideas de mi tesis?',
    a: 'No. El parafraseo académico consiste en expresar las mismas ideas con otras palabras y estructura. El significado, los argumentos, los resultados y las conclusiones se mantienen intactos. Solo cambia la forma de expresarlos.',
  },
  {
    q: '¿Incluyen un reporte de similitud después del parafraseo?',
    a: 'Sí. Antes de la entrega final verificamos la similitud y te enviamos el reporte junto con el archivo corregido. Si el porcentaje no está dentro del umbral solicitado, continuamos ajustando sin costo adicional hasta lograrlo.',
  },
  {
    q: '¿Cuánto tiempo toma el parafraseo de una tesis completa?',
    a: 'Una tesis de pregrado con alto porcentaje de similitud toma entre 5 y 10 días hábiles. Para tesis de posgrado o casos con más del 70% de similitud, el plazo puede extenderse a 2 semanas. Si tienes urgencia, cuéntanos y evaluamos.',
  },
  {
    q: '¿Trabajan con tesis de todas las carreras?',
    a: 'Sí. Contamos con parafrasistas especializados en ciencias de la salud, ingeniería, administración, derecho, educación, psicología y ciencias sociales. El parafraseo respeta el vocabulario técnico de cada disciplina.',
  },
  {
    q: '¿Es legal el servicio de parafraseo?',
    a: 'Sí. El parafraseo es una técnica académica legítima y reconocida. Lo que hacemos es enseñarte y aplicar las buenas prácticas de escritura académica: reescribir con palabras propias y citar correctamente las fuentes originales.',
  },
]

/* ─── Componentes ─── */
function QueCard({ tipo, data, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`pf-que-card ${tipo} ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}>
      <div className="pf-que-card-header">
        <span className="ico">{tipo === 'si' ? '✅' : '❌'}</span>
        <h3>{tipo === 'si' ? 'El parafraseo SÍ es...' : 'El parafraseo NO es...'}</h3>
      </div>
      <ul className={`pf-que-list ${tipo}`}>
        {data.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

function Paso({ paso, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`pf-paso ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}>
      <div className="pf-paso-num">{paso.num}</div>
      <h3>{paso.titulo}</h3>
      <p>{paso.desc}</p>
    </div>
  )
}

function ToolCard({ tool, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`pf-tool ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}>
      <div className="pf-tool-icon">{tool.icon}</div>
      <h3>{tool.titulo}</h3>
      <p>{tool.desc}</p>
    </div>
  )
}

function CasoCard({ caso, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`pf-caso-card ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}>
      <div className="pf-caso-num">{caso.num}</div>
      <h3>{caso.titulo}</h3>
      <p>{caso.desc}</p>
    </div>
  )
}

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`pf-faq-item ${open ? 'open' : ''}`}>
      <button className="pf-faq-btn" onClick={() => setOpen(v => !v)}>
        <span>{item.q}</span>
        <span className="faq-icon">+</span>
      </button>
      <div className="pf-faq-answer">{item.a}</div>
    </div>
  )
}

/* ─── Página principal ─── */
function Parafraseo() {
  const [queRef, queVisible] = useVisible(0.1)
  const [procesoRef, procesoVisible] = useVisible(0.1)
  const [toolsRef, toolsVisible] = useVisible(0.1)
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
      <section className="pf-hero">
        <div className="pf-hero-grid">

          <div className="pf-hero-text">
            <span className="pf-hero-tag">📄 Control de Similitud</span>
            <h1>
              Servicio de<br />
              <em>Parafraseo</em> Académico
            </h1>
            <p>
              Reducimos el porcentaje de similitud de tu tesis de forma ética,
              técnica y garantizada. Sin alterar tus ideas ni comprometer la
              calidad académica de tu investigación.
            </p>
            <div className="pf-badges">
              <span className="pf-badge">✔ Menos del 25% garantizado</span>
              <span className="pf-badge">✔ Reporte de similitud incluido</span>
              <span className="pf-badge">✔ Turnitin / Unicheck / iThenticate</span>
            </div>
          </div>

          <div className="pf-hero-card">
            <div className="pf-hero-card-title">📊 Tu tesis antes y después</div>
            <div className="pf-similitud-demo">
              <div className="pf-sim-row">
                <div className="pf-sim-label">
                  <span>Similitud actual</span>
                  <span className="pct">68%</span>
                </div>
                <div className="pf-sim-bar-wrap">
                  <div className="pf-sim-bar rojo" />
                </div>
              </div>
              <div className="pf-arrow">↓</div>
              <div className="pf-sim-row">
                <div className="pf-sim-label">
                  <span>Después del parafraseo</span>
                  <span className="pct ok">18%</span>
                </div>
                <div className="pf-sim-bar-wrap">
                  <div className="pf-sim-bar verde" />
                </div>
              </div>
            </div>
            <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer"
              className="pf-hero-cta">
              💬 Reducir mi similitud ahora
            </a>
          </div>

        </div>
      </section>

      {/* ══ STRIP ══ */}
      <div className="pf-strip">
        <div className="pf-strip-item"><span>✓</span> Turnitin</div>
        <div className="pf-strip-item"><span>✓</span> Unicheck</div>
        <div className="pf-strip-item"><span>✓</span> iThenticate</div>
        <div className="pf-strip-item"><span>✓</span> PlagScan</div>
        <div className="pf-strip-item"><span>✓</span> Compilatio</div>
      </div>

      {/* ══ QUÉ ES ══ */}
      <section className="pf-que-es">
        <div ref={queRef} style={fadeStyle(queVisible)}>
          <div className="pf-section-header">
            <span className="pf-section-tag">Conceptos clave</span>
            <h2>¿Qué es y qué <em>no es</em> el parafraseo?</h2>
          </div>
        </div>
        <div className="pf-que-grid">
          <QueCard tipo="si" data={QUE_ES.si} delay={0} />
          <QueCard tipo="no" data={QUE_ES.no} delay={0.1} />
        </div>
      </section>

      {/* ══ PROCESO ══ */}
      <section className="pf-proceso">
        <div ref={procesoRef} style={fadeStyle(procesoVisible)}>
          <div className="pf-section-header">
            <span className="pf-section-tag">Cómo trabajamos</span>
            <h2>Nuestro <em>Proceso</em> de Parafraseo</h2>
          </div>
        </div>
        <div className="pf-pasos-grid">
          {PASOS.map((p, i) => (
            <Paso key={i} paso={p} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ══ HERRAMIENTAS ══ */}
      <section className="pf-herramientas">
        <div ref={toolsRef} style={fadeStyle(toolsVisible)}>
          <div className="pf-section-header">
            <span className="pf-section-tag">Compatibilidad</span>
            <h2>Trabajamos con todos los <em>detectores</em></h2>
          </div>
        </div>
        <div className="pf-tools-grid">
          {HERRAMIENTAS.map((t, i) => (
            <ToolCard key={i} tool={t} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ══ CASOS ══ */}
      <section className="pf-casos">
        <div ref={casosRef} style={fadeStyle(casosVisible)}>
          <div className="pf-section-header">
            <span className="pf-section-tag">Situaciones frecuentes</span>
            <h2>¿En qué <em>casos</em> te ayudamos?</h2>
          </div>
        </div>
        <div className="pf-casos-grid">
          {CASOS.map((c, i) => (
            <CasoCard key={i} caso={c} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="pf-faq">
        <div ref={faqRef} style={fadeStyle(faqVisible)}>
          <div className="pf-section-header">
            <span className="pf-section-tag">Preguntas frecuentes</span>
            <h2>Lo que más nos <em>preguntan</em></h2>
          </div>
          <div className="pf-faq-list">
            {FAQS.map((item, i) => <FaqItem key={i} item={item} />)}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="pf-cta">
        <div ref={ctaRef} style={fadeStyle(ctaVisible)}>
          <h2>¿Tu tesis tiene mucha similitud?</h2>
          <p>
            Envíanos tu reporte de Turnitin y te decimos exactamente cuánto
            podemos reducir y en qué tiempo. Consulta gratuita.
          </p>
          <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer"
            className="pf-cta-btn">
            💬 Enviar mi reporte de similitud
          </a>
        </div>
      </section>

    </div>
  )
}

export default Parafraseo
