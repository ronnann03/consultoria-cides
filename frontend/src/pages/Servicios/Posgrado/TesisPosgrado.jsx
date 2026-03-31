import { useState, useEffect, useRef } from 'react'
import './TesisPosgrado.css'

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
const NIVELES = [
  {
    icon: '🎓',
    titulo: 'Maestría',
    sub: 'Magíster / Maestro',
    desc: 'Investigación aplicada o teórica de nivel avanzado. Exige mayor profundidad bibliográfica, análisis crítico y aporte al conocimiento en el campo de estudio.',
    items: [
      'Tesis de maestría en gestión, educación, salud, derecho y más',
      'Diseño cualitativo, cuantitativo o mixto',
      'Revisión sistemática y metaanálisis',
      'Publicación en revistas indexadas',
    ],
  },
  {
    icon: '🏅',
    titulo: 'Doctorado',
    sub: 'Doctor / PhD',
    desc: 'El nivel más exigente de la investigación académica. Requiere un aporte original y significativo al campo disciplinar, con rigor metodológico de alto nivel.',
    items: [
      'Diseño y formulación de la tesis doctoral',
      'Revisión bibliográfica exhaustiva (Scopus / WoS)',
      'Metodologías avanzadas: SEM, análisis factorial, etc.',
      'Artículos científicos para revistas Q1 y Q2',
    ],
  },
]

const PASOS = [
  { num: '01', titulo: 'Diagnóstico inicial', desc: 'Evaluamos tu avance, línea de investigación y exigencias de tu programa.' },
  { num: '02', titulo: 'Diseño metodológico', desc: 'Definimos el enfoque, tipo, diseño y las técnicas de análisis más adecuadas.' },
  { num: '03', titulo: 'Desarrollo por capítulos', desc: 'Redactamos cada capítulo con revisiones periódicas y correcciones integradas.' },
  { num: '04', titulo: 'Entrega y sustentación', desc: 'Revisión final, antiplagio y preparación para la defensa ante el jurado.' },
]

const SERVICIOS = [
  { icon: '🔬', titulo: 'Revisión Sistemática', desc: 'PRISMA, PICO, análisis de evidencia científica para maestría y doctorado.' },
  { icon: '📊', titulo: 'Estadística Avanzada', desc: 'SEM, análisis factorial confirmatorio, regresión multivariada, ANOVA.' },
  { icon: '📝', titulo: 'Artículos Científicos', desc: 'Redacción y formateo para revistas indexadas en Scopus, WoS, SciELO.' },
  { icon: '🧠', titulo: 'Marco Epistémico', desc: 'Fundamentos ontológicos, epistemológicos y axiológicos de tu investigación.' },
  { icon: '🛠️', titulo: 'Observaciones del Jurado', desc: 'Levantamiento técnico de todas las observaciones para la segunda defensa.' },
  { icon: '🌐', titulo: 'Tesis en Inglés', desc: 'Redacción, traducción y adaptación para programas internacionales o duales.' },
]

const FAQS = [
  {
    q: '¿En qué se diferencia una tesis de posgrado de una de pregrado?',
    a: 'La tesis de posgrado exige mayor profundidad teórica, un aporte original más sustancial al conocimiento, metodologías más complejas (SEM, revisión sistemática, enfoques mixtos) y fuentes exclusivamente indexadas en bases como Scopus o Web of Science. El nivel de análisis crítico y la extensión también son significativamente mayores.',
  },
  {
    q: '¿Trabajan con todas las áreas del conocimiento a nivel de maestría y doctorado?',
    a: 'Sí. Contamos con asesores especializados en ciencias de la salud (medicina, enfermería, salud pública), ciencias sociales (educación, psicología, trabajo social), gestión y negocios (MBA, administración pública), ingeniería, derecho y humanidades.',
  },
  {
    q: '¿Cuánto tiempo toma una tesis de maestría desde cero?',
    a: 'Una tesis de maestría completa toma entre 3 y 6 meses dependiendo de la complejidad del tema, la disponibilidad de datos y los requisitos específicos del programa. El proyecto o perfil puede estar listo en 3 a 5 semanas.',
  },
  {
    q: '¿Pueden ayudarme con metodologías como SEM o análisis factorial?',
    a: 'Absolutamente. Nuestro equipo estadístico tiene experiencia con AMOS, SmartPLS, R y SPSS para modelamiento de ecuaciones estructurales, análisis factorial confirmatorio, regresión logística multinomial y otras técnicas avanzadas.',
  },
  {
    q: '¿Me ayudan a publicar en revistas indexadas?',
    a: 'Sí. Redactamos artículos científicos derivados de tu tesis con el formato exigido por revistas en Scopus, Web of Science o SciELO. También orientamos en la selección de la revista adecuada según el cuartil y el área temática.',
  },
  {
    q: '¿El trabajo es confidencial y original?',
    a: 'Sí, garantizamos confidencialidad absoluta. Todo el trabajo es redactado de forma original para cada cliente. Entregamos un reporte de antiplagio antes de la entrega final y nuestros índices de similitud siempre están por debajo del umbral institucional.',
  },
]

/* ─── Componente NivelCard ─── */
function NivelCard({ nivel, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`tpg-nivel-card ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}>
      <div className="tpg-nivel-header">
        <span className="icon">{nivel.icon}</span>
        <div>
          <h3>{nivel.titulo}</h3>
          <div className="sub">{nivel.sub}</div>
        </div>
      </div>
      <div className="tpg-nivel-body">
        <p>{nivel.desc}</p>
        <ul className="tpg-nivel-items">
          {nivel.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

/* ─── Componente Paso ─── */
function Paso({ paso, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`tpg-paso ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}>
      <div className="tpg-paso-num">{paso.num}</div>
      <h3>{paso.titulo}</h3>
      <p>{paso.desc}</p>
    </div>
  )
}

/* ─── Componente Servicio ─── */
function ServicioItem({ s, delay }) {
  const [ref, visible] = useVisible(0.1)
  return (
    <div ref={ref} className={`tpg-servicio ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}>
      <div className="tpg-servicio-icon">{s.icon}</div>
      <h3>{s.titulo}</h3>
      <p>{s.desc}</p>
    </div>
  )
}

/* ─── Componente FAQ ─── */
function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`tpg-faq-item ${open ? 'open' : ''}`}>
      <button className="tpg-faq-btn" onClick={() => setOpen(v => !v)}>
        <span>{item.q}</span>
        <span className="faq-icon">+</span>
      </button>
      <div className="tpg-faq-answer">{item.a}</div>
    </div>
  )
}

/* ─── Página principal ─── */
function TesisPosgrado() {
  const [diffRef, diffVisible] = useVisible(0.2)
  const [nivelesRef, nivelesVisible] = useVisible(0.1)
  const [procesoRef, procesoVisible] = useVisible(0.1)
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
      <section className="tpg-hero">
        <div className="tpg-hero-grid">

          {/* Texto */}
          <div className="tpg-hero-text">
            <span className="tpg-hero-tag">
              🏅 Nivel Avanzado
            </span>
            <h1>
              Redacción de Tesis<br />
              de <em>Posgrado</em>
            </h1>
            <p>
              Asesoría especializada para maestrías y doctorados. Metodologías
              avanzadas, fuentes indexadas y rigor académico al más alto nivel
              para que defiendas con confianza.
            </p>
            <div className="tpg-niveles">
              {[
                { icon: '🎓', label: 'Maestría' },
                { icon: '🏅', label: 'Doctorado' },
                { icon: '🌐', label: 'Programas Internacionales' },
              ].map((n, i) => (
                <span key={i} className="tpg-nivel-badge">
                  <span>{n.icon}</span> {n.label}
                </span>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="tpg-hero-card">
            <div className="tpg-hero-card-title">
              ✦ ¿Qué incluye el servicio?
            </div>
            <ul className="tpg-include-list">
              <li>Delimitación del problema y aporte original</li>
              <li>Marco teórico con fuentes Scopus / WoS</li>
              <li>Diseño metodológico avanzado (SEM, mixto, etc.)</li>
              <li>Validación y análisis estadístico especializado</li>
              <li>Redacción académica en nivel posgrado</li>
              <li>Discusión crítica y contraste teórico</li>
              <li>Referencias APA 7 / Vancouver / IEEE</li>
              <li>Preparación de artículo para revista indexada</li>
              <li>Revisión antiplagio + preparación para defensa</li>
            </ul>
            <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer"
              className="tpg-hero-cta">
              💬 Solicitar cotización gratis
            </a>
          </div>

        </div>
      </section>

      {/* ══ STATS ══ */}
      <div
        ref={diffRef}
        className="tpg-diff"
        style={fadeStyle(diffVisible)}
      >
        {[
          { num: '+200', label: 'Tesis de posgrado asesoradas' },
          { num: '8+',   label: 'Años de experiencia' },
          { num: 'Q1/Q2', label: 'Publicaciones en revistas' },
          { num: '100%', label: 'Confidencialidad garantizada' },
        ].map((s, i) => (
          <div key={i} className="tpg-diff-item">
            <span className="tpg-diff-num">{s.num}</span>
            <p className="tpg-diff-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ══ NIVELES ══ */}
      <section className="tpg-niveles-sec">
        <div ref={nivelesRef} style={fadeStyle(nivelesVisible)}>
          <div className="tpg-section-header">
            <span className="tpg-section-tag">Programas que cubrimos</span>
            <h2>Maestría y <em>Doctorado</em></h2>
          </div>
        </div>
        <div className="tpg-niveles-grid">
          {NIVELES.map((n, i) => (
            <NivelCard key={i} nivel={n} delay={i * 0.15} />
          ))}
        </div>
      </section>

      {/* ══ PROCESO ══ */}
      <section className="tpg-proceso">
        <div ref={procesoRef} style={fadeStyle(procesoVisible)}>
          <div className="tpg-section-header">
            <span className="tpg-section-tag">Cómo trabajamos</span>
            <h2>Nuestro <em>Proceso</em></h2>
          </div>
        </div>
        <div className="tpg-proceso-grid">
          {PASOS.map((p, i) => (
            <Paso key={i} paso={p} delay={i * 0.1} />
          ))}
        </div>
      </section>

      {/* ══ SERVICIOS ══ */}
      <section className="tpg-servicios">
        <div className="tpg-section-header">
          <span className="tpg-section-tag">Especialidades</span>
          <h2>Lo que <em>hacemos</em> por ti</h2>
        </div>
        <div className="tpg-servicios-grid">
          {SERVICIOS.map((s, i) => (
            <ServicioItem key={i} s={s} delay={i * 0.08} />
          ))}
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="tpg-faq">
        <div ref={faqRef} style={fadeStyle(faqVisible)}>
          <div className="tpg-section-header">
            <span className="tpg-section-tag">Preguntas frecuentes</span>
            <h2>Lo que más nos <em>preguntan</em></h2>
          </div>
          <div className="tpg-faq-list">
            {FAQS.map((item, i) => (
              <FaqItem key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section className="tpg-cta">
        <div ref={ctaRef} style={fadeStyle(ctaVisible)}>
          <h2>Da el siguiente paso en tu <em>carrera académica</em></h2>
          <p>
            Contáctanos hoy y recibe una evaluación gratuita de tu proyecto.
            Nuestro equipo de posgrado te responde en menos de 24 horas.
          </p>
          <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer"
            className="tpg-cta-btn">
            💬 Hablar por WhatsApp
          </a>
        </div>
      </section>

    </div>
  )
}

export default TesisPosgrado
