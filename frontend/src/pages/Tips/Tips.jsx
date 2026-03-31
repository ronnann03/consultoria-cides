import { useState, useEffect, useRef } from 'react'
import './Tips.css'

/* ─── Datos de tips ─── */
const TIPS = [
  {
    id: 1,
    icon: '📌',
    categoria: 'Planificación',
    titulo: 'Define tu tema antes de empezar',
    desc: 'Un tema bien delimitado es la mitad del trabajo. Asegúrate de que sea viable, relevante y que cuente con fuentes bibliográficas suficientes antes de comprometerte.',
    tag: 'Esencial',
    acento: 'amarillo',
  },
  {
    id: 2,
    icon: '📚',
    categoria: 'Bibliografía',
    titulo: 'Usa fuentes académicas de calidad',
    desc: 'Prioriza artículos indexados en Scopus, Web of Science o SciELO. Evita blogs, Wikipedia y páginas sin autor. Tu asesor verificará cada referencia.',
    tag: 'Investigación',
    acento: 'morado',
  },
  {
    id: 3,
    icon: '🎯',
    categoria: 'Metodología',
    titulo: 'Alinea objetivos, hipótesis e instrumentos',
    desc: 'Cada objetivo específico debe tener su pregunta de investigación, su variable y su indicador en el instrumento. Si alguno no cierra, el jurado lo detectará.',
    tag: 'Clave',
    acento: 'verde',
  },
  {
    id: 4,
    icon: '✍️',
    categoria: 'Redacción',
    titulo: 'Escribe en tercera persona y voz pasiva',
    desc: 'El lenguaje académico exige impersonalidad. Evita frases como "yo creo" o "nosotros hicimos". Usa "se determinó", "se analizó", "los resultados indican".',
    tag: 'Redacción',
    acento: 'azul',
  },
  {
    id: 5,
    icon: '📊',
    categoria: 'Estadística',
    titulo: 'Elige el análisis estadístico correcto',
    desc: 'Antes de ingresar datos al SPSS o R, define si tus variables son numéricas u ordinales y si tu muestra es paramétrica o no. Un error aquí invalida todo el capítulo.',
    tag: 'Análisis',
    acento: 'morado',
  },
  {
    id: 6,
    icon: '🔍',
    categoria: 'Antiplagio',
    titulo: 'Parafrasea, no copies ni pegues',
    desc: 'El índice de similitud debe estar por debajo del 25% en la mayoría de universidades. Cita correctamente en APA 7 y reescribe con tus propias palabras cada idea.',
    tag: 'Ético',
    acento: 'rojo',
  },
  {
    id: 7,
    icon: '🗓️',
    categoria: 'Planificación',
    titulo: 'Crea un cronograma realista',
    desc: 'Divide tu tesis por capítulos y asigna semanas específicas a cada uno. Incluye tiempo para correcciones, revisiones del asesor y levantamiento de observaciones.',
    tag: 'Organización',
    acento: 'amarillo',
  },
  {
    id: 8,
    icon: '💬',
    categoria: 'Asesoría',
    titulo: 'Mantén comunicación constante con tu asesor',
    desc: 'No esperes a tener el capítulo completo para enviar avances. Manda borradores parciales, anota cada corrección y confirma por escrito los acuerdos que llegues.',
    tag: 'Gestión',
    acento: 'verde',
  },
  {
    id: 9,
    icon: '🏛️',
    categoria: 'Sustentación',
    titulo: 'Practica la defensa en voz alta',
    desc: 'Ensaya frente a un espejo o con compañeros. Prepara respuestas para preguntas difíciles del jurado: limitaciones del estudio, elección de metodología y proyecciones.',
    tag: 'Presentación',
    acento: 'azul',
  },
  {
    id: 10,
    icon: '📝',
    categoria: 'Redacción',
    titulo: 'El resumen (abstract) se escribe al final',
    desc: 'Espera a tener la tesis completa para redactar el resumen. Debe incluir objetivo, metodología, resultados y conclusión en máximo 250 palabras. No copies el texto interno.',
    tag: 'Redacción',
    acento: 'morado',
  },
  {
    id: 11,
    icon: '⚖️',
    categoria: 'Metodología',
    titulo: 'Valida tu instrumento antes de aplicarlo',
    desc: 'Un cuestionario sin validez de contenido ni confiabilidad (Alpha de Cronbach ≥ 0.70) no tiene valor científico. Realiza la prueba piloto con al menos 10 participantes.',
    tag: 'Rigor',
    acento: 'rojo',
  },
  {
    id: 12,
    icon: '🌐',
    categoria: 'Bibliografía',
    titulo: 'Cita en APA 7ma edición correctamente',
    desc: 'Verifica el formato para libros, artículos, tesis y páginas web. Cada referencia en el texto debe aparecer en la lista final y viceversa. Usa Zotero o Mendeley para automatizar.',
    tag: 'Formato',
    acento: 'verde',
  },
]

const CATEGORIAS = ['Todos', ...Array.from(new Set(TIPS.map(t => t.categoria)))]

/* ─── Hook fade-in por scroll ─── */
function useCardVisible() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

/* ─── Componente TipCard ─── */
function TipCard({ tip, index }) {
  const [ref, visible] = useCardVisible()
  return (
    <article
      ref={ref}
      className={`tip-card ${visible ? 'visible' : ''}`}
      style={{ animationDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className={`tip-card-accent ${tip.acento}`} />
      <div className="tip-card-body">
        <div className="tip-card-icon">{tip.icon}</div>
        <div className="tip-card-cat">{tip.categoria}</div>
        <h3>{tip.titulo}</h3>
        <p>{tip.desc}</p>
      </div>
      <div className="tip-card-footer">
        <span className="tip-num">#{String(tip.id).padStart(2, '0')}</span>
        <span className="tip-tag">{tip.tag}</span>
      </div>
    </article>
  )
}

/* ─── Página principal ─── */
function Tips() {
  const [filtro, setFiltro] = useState('Todos')

  const tipsFiltrados = filtro === 'Todos'
    ? TIPS
    : TIPS.filter(t => t.categoria === filtro)

  return (
    <div>
      {/* ── HERO ── */}
      <section className="tips-hero">
        <div className="tips-hero-inner">
          <span className="tips-hero-tag">📖 Guía Académica</span>
          <h1>
            Tips y <em>Recomendaciones</em><br />
            para tu Tesis
          </h1>
          <p>
            Consejos prácticos de nuestro equipo de asesores con más de 8 años
            de experiencia acompañando a estudiantes de pregrado y posgrado en Perú.
          </p>
        </div>
      </section>

      {/* ── FILTROS ── */}
      <div className="tips-filters">
        <div className="tips-filters-inner">
          {CATEGORIAS.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filtro === cat ? 'active' : ''}`}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── GRID DE TIPS ── */}
      <section className="tips-section">
        <div className="tips-grid">
          {tipsFiltrados.map((tip, i) => (
            <TipCard key={tip.id} tip={tip} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="tips-cta">
        <h2>¿Necesitas ayuda <em>personalizada</em>?</h2>
        <p>
          Nuestro equipo está listo para acompañarte en cada etapa de tu tesis,
          desde el proyecto hasta la sustentación.
        </p>
        <a
          href="https://wa.me/51900000000"
          target="_blank"
          rel="noreferrer"
          className="tips-cta-btn"
        >
          💬 Hablar con un asesor
        </a>
      </section>
    </div>
  )
}

export default Tips
