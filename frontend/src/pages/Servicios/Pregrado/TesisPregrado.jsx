import { useState, useEffect, useRef } from 'react'
import './TesisPregrado.css'

/* ─── Hook scroll fade ─── */
function useVisible(threshold = 0.15) {
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
const ETAPAS = [
  {
    num: '01',
    titulo: 'Reunión de diagnóstico',
    desc: 'Conversamos contigo para entender tu carrera, línea de investigación, avances previos y los requisitos específicos de tu universidad o asesor.',
  },
  {
    num: '02',
    titulo: 'Elección y delimitación del tema',
    desc: 'Te ayudamos a definir un problema de investigación viable, con bibliografía disponible y que cumpla con los criterios de originalidad exigidos.',
  },
  {
    num: '03',
    titulo: 'Elaboración del proyecto / perfil',
    desc: 'Redactamos el título, problema, objetivos, hipótesis, justificación, marco teórico inicial y metodología para la aprobación del proyecto.',
  },
  {
    num: '04',
    titulo: 'Desarrollo del marco teórico',
    desc: 'Construimos el fundamento bibliográfico con fuentes indexadas, citadas en APA 7ma edición, diferenciando antecedentes, bases teóricas y conceptuales.',
  },
  {
    num: '05',
    titulo: 'Diseño y aplicación del instrumento',
    desc: 'Elaboramos el cuestionario o ficha de observación, gestionamos la validez por juicio de expertos y calculamos la confiabilidad (Alpha de Cronbach).',
  },
  {
    num: '06',
    titulo: 'Análisis estadístico y resultados',
    desc: 'Procesamos los datos en SPSS o Excel, elaboramos tablas y figuras en formato APA, e interpretamos cada resultado con lenguaje académico.',
  },
  {
    num: '07',
    titulo: 'Discusión, conclusiones y recomendaciones',
    desc: 'Contrastamos los resultados con los antecedentes y el marco teórico, redactamos conclusiones por objetivo y formulamos recomendaciones aplicables.',
  },
  {
    num: '08',
    titulo: 'Revisión antiplagio y entrega final',
    desc: 'Verificamos el índice de similitud, realizamos los ajustes necesarios y entregamos el archivo final en el formato requerido por tu institución.',
  },
]

const SERVICIOS = [
  { icon: '📋', titulo: 'Proyecto de Tesis', desc: 'Perfil completo listo para aprobar ante el comité o asesor designado.' },
  { icon: '📖', titulo: 'Marco Teórico', desc: 'Antecedentes, bases teóricas y conceptuales con fuentes indexadas actualizadas.' },
  { icon: '📊', titulo: 'Análisis Estadístico', desc: 'Procesamiento SPSS/Excel, tablas APA y redacción de resultados.' },
  { icon: '🔍', titulo: 'Validación de Instrumentos', desc: 'Juicio de expertos, Alpha de Cronbach y prueba piloto completa.' },
  { icon: '✍️', titulo: 'Tesis Completa', desc: 'Todos los capítulos desde el planteamiento hasta las referencias bibliográficas.' },
  { icon: '🛠️', titulo: 'Levantamiento de Observaciones', desc: 'Corrección de todas las observaciones del jurado para tu próxima sustentación.' },
]

const FAQS = [
  {
    q: '¿Cuánto tiempo toma redactar una tesis de pregrado?',
    a: 'Depende del avance que tengas. Un proyecto desde cero toma entre 3 y 6 semanas. Una tesis completa puede tomar entre 2 y 4 meses, dependiendo de la carrera, el tipo de investigación y la disponibilidad de datos.',
  },
  {
    q: '¿La tesis pasará el control antiplagio de mi universidad?',
    a: 'Sí. Todo nuestro trabajo es original y redactado específicamente para cada cliente. Además, realizamos una verificación con software antiplagio antes de la entrega para asegurarnos de estar por debajo del umbral exigido.',
  },
  {
    q: '¿Trabajan con todas las carreras y universidades?',
    a: 'Sí. Tenemos asesores especializados en ciencias de la salud, ingeniería, administración, derecho, educación, psicología y ciencias sociales. Nos adaptamos al reglamento de tu universidad.',
  },
  {
    q: '¿Qué información necesitan para empezar?',
    a: 'En la primera reunión conversamos sobre tu carrera, línea de investigación, reglamento de tu facultad, avances que tengas y los plazos que manejas. No necesitas tener nada escrito para contactarnos.',
  },
  {
    q: '¿Incluye asesoría para la sustentación?',
    a: 'Sí, en nuestros paquetes completos incluimos orientación para la defensa: te preparamos para las preguntas del jurado, revisamos tus diapositivas y practicamos la presentación contigo.',
  },
  {
    q: '¿Cómo garantizan la confidencialidad?',
    a: 'Todo el trabajo que realizamos es estrictamente confidencial. No compartimos información ni trabajos de nuestros clientes bajo ninguna circunstancia. Tu privacidad es nuestra prioridad.',
  },
]

/* ─── Componente Etapa ─── */
function Etapa({ etapa, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`tp-etapa ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}>
      <div className="tp-etapa-left">
        <div className="tp-etapa-num">{etapa.num}</div>
        <div className="tp-etapa-line" />
      </div>
      <div className="tp-etapa-content">
        <h3>{etapa.titulo}</h3>
        <p>{etapa.desc}</p>
      </div>
    </div>
  )
}

/* ─── Componente ServicioCard ─── */
function ServicioCard({ s, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`tp-servicio-card ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}>
      <div className="tp-servicio-icon">{s.icon}</div>
      <h3>{s.titulo}</h3>
      <p>{s.desc}</p>
    </div>
  )
}

/* ─── Componente FAQ ─── */
function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`tp-faq-item ${open ? 'open' : ''}`}>
      <button className="tp-faq-btn" onClick={() => setOpen(v => !v)}>
        <span>{item.q}</span>
        <span className="faq-icon">+</span>
      </button>
      <div className="tp-faq-answer">{item.a}</div>
    </div>
  )
}

/* ─── Página principal ─── */
function TesisPregrado() {
  const [statsRef, statsVisible] = useVisible(0.2)
  const [servRef, servVisible] = useVisible(0.1)
  const [faqRef, faqVisible] = useVisible(0.1)

  return (
    <div>

      {/* ══ HERO ══ */}
      <section className="tp-hero">
        <div className="tp-hero-grid">

          {/* Texto */}
          <div className="tp-hero-text">
            <span className="tp-hero-tag">🎓 Servicio Especializado</span>
            <h1>
              Redacción de Tesis<br />
              de <em>Pregrado</em>
            </h1>
            <p>
              Acompañamos tu proceso desde la elección del tema hasta la
              sustentación exitosa. Metodología sólida, lenguaje académico
              y entrega en los plazos acordados.
            </p>
            <div className="tp-hero-badges">
              <span className="tp-badge">✔ APA 7ma edición</span>
              <span className="tp-badge">✔ Antiplagio garantizado</span>
              <span className="tp-badge">✔ Todas las carreras</span>
              <span className="tp-badge">✔ Todas las universidades</span>
            </div>
          </div>

          {/* Card derecha */}
          <div className="tp-hero-card">
            <h3>¿Qué incluye el servicio?</h3>
            <ul className="tp-include-list">
              <li>Elección y delimitación del tema</li>
              <li>Planteamiento del problema y objetivos</li>
              <li>Marco teórico con fuentes indexadas</li>
              <li>Diseño metodológico completo</li>
              <li>Instrumento validado (Alpha de Cronbach)</li>
              <li>Análisis estadístico con SPSS / Excel</li>
              <li>Discusión, conclusiones y recomendaciones</li>
              <li>Referencias en formato APA 7</li>
              <li>Revisión antiplagio antes de entrega</li>
            </ul>
            <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer"
              className="tp-hero-cta">
              💬 Solicitar cotización gratis
            </a>
          </div>

        </div>
      </section>

      {/* ══ STATS ══ */}
      <div
        ref={statsRef}
        className="tp-stats"
        style={{
          opacity: statsVisible ? 1 : 0,
          transform: statsVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {[
          { num: '+500', label: 'Tesis sustentadas' },
          { num: '8+',   label: 'Años de experiencia' },
          { num: '100%', label: 'Índice de aprobación' },
          { num: '48h',  label: 'Respuesta inicial' },
        ].map((s, i) => (
          <div key={i}>
            <span className="tp-stat-num">{s.num}</span>
            <p className="tp-stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ══ PROCESO ══ */}
      <section className="tp-proceso">
        <div className="tp-section-header">
          <span className="tp-section-tag">Cómo trabajamos</span>
          <h2>Nuestro <em>Proceso</em> Paso a Paso</h2>
        </div>
        <div className="tp-etapas">
          {ETAPAS.map((e, i) => (
            <Etapa key={i} etapa={e} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ══ SERVICIOS ══ */}
      <section className="tp-servicios">
        <div
          ref={servRef}
          style={{
            opacity: servVisible ? 1 : 0,
            transform: servVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="tp-section-header">
            <span className="tp-section-tag">Lo que cubrimos</span>
            <h2>Modalidades de <em>Servicio</em></h2>
          </div>
        </div>
        <div className="tp-servicios-grid">
          {SERVICIOS.map((s, i) => (
            <ServicioCard key={i} s={s} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="tp-faq">
        <div
          ref={faqRef}
          style={{
            opacity: faqVisible ? 1 : 0,
            transform: faqVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="tp-section-header">
            <span className="tp-section-tag">Preguntas frecuentes</span>
            <h2>Lo que más nos <em>preguntan</em></h2>
          </div>
          <div className="tp-faq-list">
            {FAQS.map((item, i) => (
              <FaqItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section className="tp-cta">
        <h2>¿Listo para titular?</h2>
        <p>
          Cuéntanos en qué etapa estás y te decimos exactamente cómo podemos ayudarte.
          Primera consulta sin costo.
        </p>
        <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer"
          className="tp-cta-btn">
          💬 Hablar por WhatsApp
        </a>
      </section>

    </div>
  )
}

export default TesisPregrado
