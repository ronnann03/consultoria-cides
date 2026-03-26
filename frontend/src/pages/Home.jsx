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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        alignItems: 'center',
        alignContent: 'center',
        gap: '2rem',
        padding: '7rem 5% 4rem',
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20, 5, 40, 0.75)' }} />

        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', marginBottom: '0.5rem' }}>
            Bienvenido(a) a <strong style={{ color: 'var(--amarillo)' }}>CIDES CONSULTORÍA</strong>, el mejor servicio en
          </p>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: 'var(--blanco)', lineHeight: 1.2, marginBottom: '0.8rem' }}>
            Redacción y Asesoría de Tesis
          </h1>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--amarillo)', lineHeight: 1.2 }}>
            Tesis de Pregrado<br />Y Posgrado
          </h2>
        </div>

        <div style={{
          position: 'relative', zIndex: 2,
          background: 'rgba(255,255,255,0.97)',
          padding: '2rem', borderRadius: '4px',
          display: 'flex', flexDirection: 'column', gap: '0.8rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          width: '100%', maxWidth: '460px', justifySelf: 'end'
        }}>
          <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--morado)', fontSize: '1.1rem', textAlign: 'center', marginBottom: '0.3rem' }}>
            Solicita tu consulta gratis
          </h3>
          {['Nombre', 'Correo electrónico', 'Carrera'].map((placeholder, i) => (
            <input key={i} placeholder={placeholder} style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #e0e0e0', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }} />
          ))}
          <select style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #e0e0e0', borderRadius: '4px', fontSize: '0.9rem', color: '#888', fontFamily: 'inherit', outline: 'none', background: 'white' }}>
            <option value="">« Selecciona un tipo de consulta »</option>
            <option>Tesis Completa</option>
            <option>Proyecto de Tesis</option>
            <option>Desarrollo de Tesis</option>
            <option>Levantamiento de observaciones</option>
            <option>Parafraseo</option>
          </select>
          <select style={{ width: '100%', padding: '0.8rem 1rem', border: '1.5px solid #e0e0e0', borderRadius: '4px', fontSize: '0.9rem', color: '#888', fontFamily: 'inherit', outline: 'none', background: 'white' }}>
            <option value="">« ¿En qué nivel educativo te encuentras? »</option>
            <option>Estudiante de pregrado</option>
            <option>Bachiller</option>
            <option>Estudiante de maestría</option>
            <option>Doctorado</option>
          </select>
          <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #e0e0e0', borderRadius: '4px', overflow: 'hidden' }}>
            <span style={{ padding: '0.8rem', background: '#f5f5f5', borderRight: '1px solid #e0e0e0', fontSize: '0.9rem', color: '#555', whiteSpace: 'nowrap' }}>🇵🇪 +51</span>
            <input placeholder="WhatsApp" style={{ flex: 1, padding: '0.8rem 1rem', border: 'none', outline: 'none', fontSize: '0.9rem', fontFamily: 'inherit' }} />
          </div>
          <button style={{ background: 'var(--morado)', color: 'var(--blanco)', padding: '0.9rem', fontWeight: '700', fontSize: '1rem', border: 'none', cursor: 'pointer', letterSpacing: '1px', borderRadius: '4px', transition: 'background 0.2s', marginTop: '0.3rem' }}
            onMouseEnter={e => e.target.style.background = 'var(--morado-claro)'}
            onMouseLeave={e => e.target.style.background = 'var(--morado)'}
          >ENVIAR</button>
        </div>
      </section>

      {/* STATS */}
      <div style={{ background: 'var(--texto)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', padding: '3rem 5%', gap: '2rem', textAlign: 'center' }}>
        {[
          { num: '+500', label: 'Clientes satisfechos' },
          { num: '10/10', label: 'Calificación' },
          { num: '+8', label: 'Años de experiencia' },
          { num: '100%', label: 'Compromiso' }
        ].map((s, i) => (
          <div key={i}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: '700', color: 'var(--amarillo)', display: 'block' }}>{s.num}</span>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', marginTop: '0.3rem' }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* NOSOTROS */}
      <section style={{ padding: '6rem 5%', background: 'var(--blanco)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* LADO IZQUIERDO - imagen decorativa */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--morado), var(--morado-claro))',
              borderRadius: '8px', height: '400px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '6rem', position: 'relative', overflow: 'hidden'
            }}>
              <span style={{ opacity: 0.3 }}>🎓</span>
              <div style={{
                position: 'absolute', bottom: '-1rem', right: '-1rem',
                background: 'var(--amarillo)', padding: '1.2rem 1.8rem',
                borderRadius: '4px', textAlign: 'center'
              }}>
                <span style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--morado)', display: 'block' }}>+8</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--morado)', fontWeight: '600' }}>Años de experiencia</span>
              </div>
            </div>
          </div>

          {/* LADO DERECHO - texto */}
          <div>
            <span style={{ color: 'var(--morado-claro)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Quiénes somos
            </span>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--morado)', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
              Un equipo que trabaja <em>para ti</em>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Somos <strong>CIDES Consultoría</strong>, una empresa especializada en la redacción y asesoría de trabajos de investigación. Nuestro objetivo es ayudarte a titularte con éxito, acompañándote en cada etapa del proceso con profesionalismo y dedicación.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Contamos con un equipo multidisciplinario de asesores metodológicos, estadísticos y temáticos, listos para brindarte el apoyo que necesitas.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                '✅ Equipo de asesores certificados y especializados',
                '✅ Metodología probada con más de 500 casos exitosos',
                '✅ Atención personalizada y seguimiento constante',
                '✅ Resultados garantizados en plazos claros'
              ].map((item, i) => (
                <p key={i} style={{ color: 'var(--texto)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section style={{ padding: '6rem 5%', background: 'var(--gris-claro)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--morado-claro)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Nuestro proceso
          </span>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--morado)', marginTop: '0.5rem' }}>
            ¿Cómo <em>trabajamos</em>?
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          {[
            { num: '01', icon: '💬', title: 'Consulta inicial', desc: 'Contáctanos por WhatsApp o el formulario. Te atendemos de inmediato y sin compromiso.' },
            { num: '02', icon: '📋', title: 'Evaluamos tu caso', desc: 'Analizamos tu situación, el nivel de avance y el tipo de asesoría que necesitas.' },
            { num: '03', icon: '📝', title: 'Elaboramos tu trabajo', desc: 'Nuestro equipo de expertos trabaja en tu proyecto con metodología sólida y rigurosa.' },
            { num: '04', icon: '🎓', title: 'Apruebas y te titulas', desc: 'Te acompañamos hasta la sustentación final para que logres tu titulación con éxito.' },
          ].map((paso, i) => (
            <div key={i} style={{
              background: 'var(--blanco)', padding: '2rem',
              borderRadius: '8px', textAlign: 'center',
              boxShadow: '0 4px 20px rgba(74,14,143,0.08)',
              position: 'relative', overflow: 'hidden',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                position: 'absolute', top: '1rem', right: '1rem',
                fontFamily: 'Georgia, serif', fontSize: '3.5rem',
                fontWeight: '900', color: 'rgba(74,14,143,0.06)', lineHeight: 1
              }}>{paso.num}</div>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{paso.icon}</div>
              <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--morado)', fontSize: '1.1rem', marginBottom: '0.8rem' }}>{paso.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{paso.desc}</p>
              <div style={{ width: '40px', height: '3px', background: 'var(--amarillo)', margin: '1.2rem auto 0' }} />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" style={{ padding: '6rem 5%', background: 'var(--blanco)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: 'var(--morado-claro)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Lo que ofrecemos
          </span>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: 'var(--morado)', marginTop: '0.5rem' }}>
            Nuestros <em>Servicios</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { icon: '📝', title: 'Redacción de Tesis', desc: 'Redactamos tu tesis de pregrado o posgrado con metodología sólida y lenguaje académico.' },
            { icon: '🔍', title: 'Levantamiento de Observaciones', desc: 'Corregimos las observaciones del jurado para que apruebes en la siguiente sustentación.' },
            { icon: '📊', title: 'Asesoría Estadística', desc: 'Procesamos tus datos con SPSS, R o Excel y elaboramos los resultados de tu investigación.' },
            { icon: '✍️', title: 'Parafraseo', desc: 'Reducimos el porcentaje de similitud de tu tesis para que pase el control antiplagio.' },
            { icon: '🎓', title: 'Proyecto de Tesis', desc: 'Elaboramos el proyecto o perfil de investigación desde cero hasta la aprobación.' },
            { icon: '📋', title: 'Artículos Científicos', desc: 'Publicamos tu investigación en revistas indexadas con el formato requerido.' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'var(--gris-claro)', padding: '2rem',
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { nombre: 'María R.', ciudad: 'Lima', texto: 'Excelente servicio, muy profesionales y puntuales. Logré titularme gracias a su ayuda.' },
            { nombre: 'Juan C.', ciudad: 'Arequipa', texto: 'No esperaba tanta dedicación. Desde el primer contacto sentí que les importaba mi caso.' },
            { nombre: 'Lucía P.', ciudad: 'Trujillo', texto: 'Muy buen equipo, siempre disponibles. Logré mis objetivos antes de lo esperado.' },
          ].map((t, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(245,197,24,0.3)', padding: '1.8rem', borderRadius: '4px' }}>
              <div style={{ color: 'var(--amarillo)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "{t.texto}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--amarillo)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--morado)' }}>
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
      <section style={{ padding: '6rem 5%', background: 'var(--amarillo)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: 'var(--morado)', marginBottom: '1rem' }}>
          ¿Listo para empezar?
        </h2>
        <p style={{ color: 'var(--morado)', fontSize: '1.05rem', marginBottom: '2rem', opacity: 0.8 }}>
          Contáctanos hoy y recibe una consulta inicial completamente gratuita.
        </p>
        <a href="https://wa.me/51900000000" target="_blank" style={{ background: 'var(--morado)', color: 'var(--blanco)', padding: '1rem 2.5rem', fontWeight: '700', fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
          💬 Escribir por WhatsApp
        </a>
      </section>

    </div>
  )
}

export default Home