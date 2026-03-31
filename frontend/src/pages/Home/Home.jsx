import { useEffect, useRef, useState } from 'react'
import heroBg from '../../assets/Foto-de-inicio.jpg'
import './Home.css' 

/* ─── Hook: fade-in al hacer scroll ─── */
function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

/* ─── Componente contador animado ─── */
function Counter({ target }) {
  const [count, setCount] = useState(0)
  const [ref, visible] = useFadeIn()
  const num = parseInt(target.replace(/\D/g, '')) || 0

  useEffect(() => {
    if (!visible || num === 0) return
    let start = 0
    const step = Math.ceil(num / (1400 / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= num) { setCount(num); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [visible, num])

  const display = target.startsWith('+')
    ? `+${count}`
    : target.includes('/')
      ? target
      : `${count}`

  return <span ref={ref}>{display}</span>
}

function Home() {
  const [statsRef, statsVisible] = useFadeIn()
  const [servRef,  servVisible]  = useFadeIn()
  const [testRef,  testVisible]  = useFadeIn()
  const [ctaRef,   ctaVisible]   = useFadeIn()

  const fadeStyle = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(32px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  })

  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay oscuro */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,5,40,0.78)' }} />

        <div className="hero-grid">
          {/* Texto izquierda */}
          <div className="hero-text">
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '0.5rem' }}>
              Bienvenido(a) a <strong style={{ color: 'var(--amarillo)' }}>CIDES CONSULTORÍA</strong>, el mejor servicio en
            </p>
            <h1 className="hero-title">
              Redacción y Asesoría de Tesis
            </h1>
            <h2 className="hero-subtitle">
              Tesis de Pregrado<br />Y Posgrado
            </h2>
          </div>

          {/* Formulario derecha */}
          <div className="hero-form">
            {['Nombre', 'Correo electrónico', 'Carrera'].map((placeholder, i) => (
              <input key={i} placeholder={placeholder} />
            ))}

            <select defaultValue="">
              <option value="" disabled>« Selecciona un tipo de consulta »</option>
              <option>Tesis Completa</option>
              <option>Proyecto de Tesis</option>
              <option>Desarrollo de Tesis</option>
              <option>Levantamiento de observaciones</option>
              <option>Parafraseo</option>
            </select>

            <select defaultValue="">
              <option value="" disabled>« ¿En qué nivel educativo te encuentras? »</option>
              <option>Estudiante de pregrado</option>
              <option>Bachiller</option>
              <option>Estudiante de maestría</option>
              <option>Doctorado</option>
            </select>

            <div className="whatsapp-input-wrap">
              <span className="prefix">🇵🇪 +51</span>
              <input placeholder="WhatsApp" type="tel" />
            </div>

            <button className="send-btn">ENVIAR</button>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div ref={statsRef} className="stats-grid" style={fadeStyle(statsVisible)}>
        {[
          { num: '+500', label: 'Clientes satisfechos' },
          { num: '10/10', label: 'Calificación' },
          { num: '+8',   label: 'Años de experiencia' },
          { num: '100%', label: 'Compromiso' },
        ].map((s, i) => (
          <div key={i} style={{ padding: '0.5rem 0' }}>
            <span className="stats-num"><Counter target={s.num} /></span>
            <p className="stats-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── SERVICIOS ── */}
      <section id="servicios" style={{ padding: 'clamp(3rem,8vw,6rem) 5%', background: 'var(--gris-claro)' }}>
        <div ref={servRef} style={fadeStyle(servVisible)}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: 'var(--morado-claro)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Lo que ofrecemos
            </span>
            <h2 className="section-title" style={{ color: 'var(--morado)', marginTop: '0.5rem' }}>
              Nuestros <em>Servicios</em>
            </h2>
          </div>
          <div className="services-grid">
            {[
              { icon: '📝', title: 'Redacción de Tesis',            desc: 'Redactamos tu tesis de pregrado o posgrado con metodología sólida y lenguaje académico.' },
              { icon: '🔍', title: 'Levantamiento de Observaciones', desc: 'Corregimos las observaciones del jurado para que apruebes en la siguiente sustentación.' },
              { icon: '📊', title: 'Asesoría Estadística',           desc: 'Procesamos tus datos con SPSS, R o Excel y elaboramos los resultados de tu investigación.' },
              { icon: '✍️', title: 'Parafraseo',                     desc: 'Reducimos el porcentaje de similitud de tu tesis para que pase el control antiplagio.' },
              { icon: '🎓', title: 'Proyecto de Tesis',              desc: 'Elaboramos el proyecto o perfil de investigación desde cero hasta la aprobación.' },
              { icon: '📋', title: 'Artículos Científicos',          desc: 'Publicamos tu investigación en revistas indexadas con el formato requerido.' },
            ].map((s, i) => (
              <div key={i} className="service-card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--morado)', marginBottom: '0.7rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section style={{ padding: 'clamp(3rem,8vw,6rem) 5%', background: 'var(--morado)' }}>
        <div ref={testRef} style={fadeStyle(testVisible)}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: 'var(--amarillo)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Lo que dicen
            </span>
            <h2 className="section-title" style={{ color: 'var(--blanco)', marginTop: '0.5rem' }}>
              Clientes que <em style={{ color: 'var(--amarillo)' }}>confían</em> en nosotros
            </h2>
          </div>
          <div className="testimonios-grid">
            {[
              { nombre: 'María R.', ciudad: 'Lima',     texto: 'Excelente servicio, muy profesionales y puntuales. Logré titularme gracias a su ayuda.' },
              { nombre: 'Juan C.', ciudad: 'Arequipa',  texto: 'No esperaba tanta dedicación. Desde el primer contacto sentí que les importaba mi caso.' },
              { nombre: 'Lucía P.', ciudad: 'Trujillo', texto: 'Muy buen equipo, siempre disponibles. Logré mis objetivos antes de lo esperado.' },
            ].map((t, i) => (
              <div key={i} className="testimonio-card">
                <div style={{ color: 'var(--amarillo)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '2px' }}>★★★★★</div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{t.texto}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: 'var(--amarillo)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontWeight: '700', color: 'var(--morado)', flexShrink: 0,
                  }}>
                    {t.nombre[0]}
                  </div>
                  <div>
                    <div style={{ color: 'var(--blanco)', fontWeight: '600', fontSize: '0.9rem' }}>{t.nombre}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>{t.ciudad}, Perú</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: 'clamp(3rem,8vw,6rem) 5%', background: 'var(--amarillo)', textAlign: 'center' }}>
        <div ref={ctaRef} style={fadeStyle(ctaVisible)}>
          <h2 className="section-title" style={{ color: 'var(--morado)', marginBottom: '1rem' }}>
            ¿Listo para empezar?
          </h2>
          <p style={{ color: 'var(--morado)', fontSize: '1.05rem', marginBottom: '2rem', opacity: 0.8 }}>
            Contáctanos hoy y recibe una consulta inicial completamente gratuita.
          </p>
          <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer" className="whatsapp-btn">
            💬 Escribir por WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
