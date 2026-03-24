import heroBg from '../assets/Foto-de-inicio.jpg'

function Home() {
  return (
    <div>

      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '7rem 5% 4rem',
        position: 'relative'
      }}>
        {/* OVERLAY OSCURO */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(20, 5, 40, 0.75)'
        }} />

        {/* TEXTO IZQUIERDA */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '0.5rem' }}>
            Bienvenido(a) a <strong style={{ color: 'var(--amarillo)' }}>CIDES CONSULTORÍA</strong>, el mejor servicio en
          </p>
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: 'var(--blanco)', lineHeight: 1.2,
            marginBottom: '0.8rem'
          }}>
            Redacción y Asesoría de Tesis
          </h1>
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            color: 'var(--amarillo)', lineHeight: 1.2
          }}>
            Tesis de Pregrado<br />Y Posgrado
          </h2>
        </div>

        {/* FORMULARIO DERECHA */}
        <div style={{
          position: 'relative', zIndex: 2,
          background: 'rgba(255,255,255,0.97)',
          padding: '2.5rem', borderRadius: '4px',
          display: 'flex', flexDirection: 'column', gap: '1rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
        }}>
          {['Nombre', 'Correo electrónico', 'Carrera'].map((placeholder, i) => (
            <input key={i} placeholder={placeholder} style={{
              width: '100%', padding: '0.9rem 1rem',
              border: '1.5px solid #e0e0e0', borderRadius: '4px',
              fontSize: '0.95rem', outline: 'none',
              fontFamily: 'inherit'
            }} />
          ))}

          <select style={{
            width: '100%', padding: '0.9rem 1rem',
            border: '1.5px solid #e0e0e0', borderRadius: '4px',
            fontSize: '0.95rem', color: '#888',
            fontFamily: 'inherit', outline: 'none'
          }}>
            <option value="">« Selecciona un tipo de consulta »</option>
            <option>Tesis Completa</option>
            <option>Proyecto de Tesis</option>
            <option>Desarrollo de Tesis</option>
            <option>Levantamiento de observaciones</option>
            <option>Parafraseo</option>
          </select>

          <select style={{
            width: '100%', padding: '0.9rem 1rem',
            border: '1.5px solid #e0e0e0', borderRadius: '4px',
            fontSize: '0.95rem', color: '#888',
            fontFamily: 'inherit', outline: 'none'
          }}>
            <option value="">« ¿En qué nivel educativo te encuentras? »</option>
            <option>Estudiante de pregrado</option>
            <option>Bachiller</option>
            <option>Estudiante de maestría</option>
            <option>Doctorado</option>
          </select>

          <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
            <span style={{
              padding: '0.9rem', background: '#f5f5f5',
              borderRight: '1px solid #e0e0e0',
              fontSize: '0.9rem', color: '#555'
            }}>🇵🇪 +51</span>
            <input placeholder="WhatsApp" style={{
              flex: 1, padding: '0.9rem 1rem',
              border: 'none', outline: 'none',
              fontSize: '0.95rem', fontFamily: 'inherit'
            }} />
          </div>

          <button style={{
            background: 'var(--morado)', color: 'var(--blanco)',
            padding: '1rem', fontWeight: '700',
            fontSize: '1rem', border: 'none',
            cursor: 'pointer', letterSpacing: '1px',
            borderRadius: '4px', transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.target.style.background = 'var(--morado-claro)'}
          onMouseLeave={e => e.target.style.background = 'var(--morado)'}
          >
            ENVIAR
          </button>
        </div>
      </section>

      {/* STATS */}
      <div style={{
        background: 'var(--texto)',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        padding: '3rem 5%', gap: '2rem', textAlign: 'center'
      }}>
        {[
          { num: '+500', label: 'Clientes satisfechos' },
          { num: '10/10', label: 'Calificación' },
          { num: '+8', label: 'Años de experiencia' },
          { num: '100%', label: 'Compromiso' }
        ].map((s, i) => (
          <div key={i}>
            <span style={{
              fontFamily: 'Georgia, serif',
              fontSize: '2.5rem', fontWeight: '700',
              color: 'var(--amarillo)', display: 'block'
            }}>{s.num}</span>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '0.3rem' }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* SERVICIOS */}
      <section id="servicios" style={{ padding: '6rem 5%', background: 'var(--gris-claro)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: 'var(--morado-claro)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Lo que ofrecemos
          </span>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: 'var(--morado)', marginTop: '0.5rem' }}>
            Nuestros <em>Servicios</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {[
            { icon: '📝', title: 'Redacción de Tesis', desc: 'Redactamos tu tesis de pregrado o posgrado con metodología sólida y lenguaje académico.' },
            { icon: '🔍', title: 'Levantamiento de Observaciones', desc: 'Corregimos las observaciones del jurado para que apruebes en la siguiente sustentación.' },
            { icon: '📊', title: 'Asesoría Estadística', desc: 'Procesamos tus datos con SPSS, R o Excel y elaboramos los resultados de tu investigación.' },
            { icon: '✍️', title: 'Parafraseo', desc: 'Reducimos el porcentaje de similitud de tu tesis para que pase el control antiplagio.' },
            { icon: '🎓', title: 'Proyecto de Tesis', desc: 'Elaboramos el proyecto o perfil de investigación desde cero hasta la aprobación.' },
            { icon: '📋', title: 'Artículos Científicos', desc: 'Publicamos tu investigación en revistas indexadas con el formato requerido.' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'var(--blanco)', padding: '2rem',
              borderLeft: '4px solid var(--amarillo)',
              boxShadow: '0 4px 20px rgba(74,14,143,0.08)',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--morado)', marginBottom: '0.7rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={{ padding: '6rem 5%', background: 'var(--morado)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: 'var(--amarillo)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Lo que dicen
          </span>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: 'var(--blanco)', marginTop: '0.5rem' }}>
            Clientes que <em style={{ color: 'var(--amarillo)' }}>confían</em> en nosotros
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {[
            { nombre: 'María R.', ciudad: 'Lima', texto: 'Excelente servicio, muy profesionales y puntuales. Logré titularme gracias a su ayuda.' },
            { nombre: 'Juan C.', ciudad: 'Arequipa', texto: 'No esperaba tanta dedicación. Desde el primer contacto sentí que les importaba mi caso.' },
            { nombre: 'Lucía P.', ciudad: 'Trujillo', texto: 'Muy buen equipo, siempre disponibles. Logré mis objetivos antes de lo esperado.' },
          ].map((t, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(245,197,24,0.3)',
              padding: '1.8rem', borderRadius: '4px'
            }}>
              <div style={{ color: 'var(--amarillo)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "{t.texto}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'var(--amarillo)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontWeight: '700', color: 'var(--morado)'
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
      </section>

      {/* CONTACTO */}
      <section style={{
        padding: '6rem 5%', background: 'var(--amarillo)',
        textAlign: 'center'
      }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: 'var(--morado)', marginBottom: '1rem' }}>
          ¿Listo para empezar?
        </h2>
        <p style={{ color: 'var(--morado)', fontSize: '1.05rem', marginBottom: '2rem', opacity: 0.8 }}>
          Contáctanos hoy y recibe una consulta inicial completamente gratuita.
        </p>
        <a href="https://wa.me/51900000000" target="_blank" style={{
          background: 'var(--morado)', color: 'var(--blanco)',
          padding: '1rem 2.5rem', fontWeight: '700',
          fontSize: '1rem', textDecoration: 'none',
          display: 'inline-block'
        }}>
          💬 Escribir por WhatsApp
        </a>
      </section>

    </div>
  )
}

export default Home