function Servicios() {
  const servicios = [
    {
      icon: '📝',
      title: 'Redacción de Tesis de Pregrado',
      desc: 'Elaboramos tu tesis completa desde el planteamiento del problema hasta las conclusiones, con metodología sólida y lenguaje académico.',
      items: ['Tesis de Administración', 'Tesis de Contabilidad', 'Tesis de Derecho', 'Tesis de Ingeniería', 'Tesis de Salud', 'Tesis de Educación']
    },
    {
      icon: '🎓',
      title: 'Redacción de Tesis de Posgrado',
      desc: 'Asesoramos y redactamos tesis de maestría y doctorado con el nivel académico y rigor metodológico que exigen los programas de posgrado.',
      items: ['Tesis de Maestría', 'Tesis de Doctorado', 'MBA', 'Gestión Pública', 'Ciencias de la Salud', 'Ingenierías']
    },
    {
      icon: '🔍',
      title: 'Levantamiento de Observaciones',
      desc: 'Corregimos todas las observaciones realizadas por el jurado para que puedas aprobar en tu próxima sustentación sin contratiempos.',
      items: ['Observaciones metodológicas', 'Observaciones estadísticas', 'Observaciones de redacción', 'Marco teórico', 'Resultados y discusión', 'Referencias APA']
    },
    {
      icon: '✍️',
      title: 'Parafraseo',
      desc: 'Reducimos el porcentaje de similitud de tu tesis para que pase el control antiplagio (Turnitin, Urkund) sin perder el contenido original.',
      items: ['Parafraseo de capítulos', 'Reducción de similitud', 'Control Turnitin', 'Reescritura académica', 'Citas y referencias', 'Revisión final']
    },
    {
      icon: '📊',
      title: 'Asesoría Estadística',
      desc: 'Procesamos y analizamos tus datos con software especializado para que obtengas resultados sólidos y bien interpretados.',
      items: ['SPSS', 'R Studio', 'Excel avanzado', 'Análisis descriptivo', 'Análisis inferencial', 'Interpretación de resultados']
    },
    {
      icon: '📋',
      title: 'Artículos Científicos',
      desc: 'Redactamos y publicamos artículos científicos en revistas indexadas a partir de tu investigación o desde cero.',
      items: ['Artículos de revisión', 'Artículos originales', 'Revisión sistemática', 'Revistas Scopus', 'Revistas Latindex', 'Formato APA/Vancouver']
    },
    {
      icon: '💼',
      title: 'Trabajo de Suficiencia Profesional',
      desc: 'Elaboramos tu TSP con el formato y los requisitos específicos de tu universidad para que obtengas tu título profesional.',
      items: ['TSP de Ingeniería', 'TSP de Arquitectura', 'TSP de Letras', 'TSP de Salud', 'Informe de prácticas', 'Memoria descriptiva']
    },
    {
      icon: '📈',
      title: 'Planes de Negocio',
      desc: 'Desarrollamos planes de negocio completos y profesionales para emprendimientos, titulación o presentación ante inversores.',
      items: ['Análisis de mercado', 'Plan financiero', 'Estudio de viabilidad', 'Canvas', 'FODA', 'Proyecciones']
    },
    {
      icon: '🖥️',
      title: 'Diapositivas',
      desc: 'Diseñamos presentaciones profesionales y visualmente atractivas para tu sustentación de tesis o exposición académica.',
      items: ['PowerPoint profesional', 'Diseño visual', 'Infografías', 'Animaciones', 'Estructura de sustentación', 'Ensayo de presentación']
    },
  ]

  return (
    <div style={{ paddingTop: '5rem' }}>

      {/* HERO SERVICIOS */}
      <section style={{
        background: 'linear-gradient(135deg, var(--morado) 0%, var(--morado-claro) 100%)',
        padding: '5rem 5%', textAlign: 'center'
      }}>
        <span style={{ color: 'var(--amarillo)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Lo que ofrecemos
        </span>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--blanco)', marginTop: '0.8rem', marginBottom: '1rem' }}>
          Nuestros <em style={{ color: 'var(--amarillo)' }}>Servicios</em>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
          Contamos con un equipo de expertos listos para ayudarte en cada etapa de tu proceso académico.
        </p>
      </section>

      {/* GRID DE SERVICIOS */}
      <section style={{ padding: '6rem 5%', background: 'var(--gris-claro)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {servicios.map((s, i) => (
            <div key={i} style={{
              background: 'var(--blanco)', borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(74,14,143,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(74,14,143,0.18)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(74,14,143,0.08)'
            }}
            >
              {/* HEADER CARD */}
              <div style={{ background: 'var(--morado)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '2rem' }}>{s.icon}</span>
                <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--blanco)', fontSize: '1.05rem', lineHeight: 1.3 }}>{s.title}</h3>
              </div>
              {/* BODY CARD */}
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {s.items.map((item, j) => (
                    <span key={j} style={{
                      background: 'var(--gris-claro)', color: 'var(--morado)',
                      padding: '0.3rem 0.8rem', borderRadius: '20px',
                      fontSize: '0.78rem', fontWeight: '500',
                      border: '1px solid rgba(74,14,143,0.15)'
                    }}>{item}</span>
                  ))}
                </div>
                <a href="https://wa.me/51900000000" target="_blank" style={{
                  display: 'inline-block', marginTop: '1.2rem',
                  background: 'var(--amarillo)', color: 'var(--morado)',
                  padding: '0.6rem 1.4rem', fontWeight: '700',
                  fontSize: '0.85rem', textDecoration: 'none',
                  borderRadius: '4px'
                }}>
                  Consultar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: '5rem 5%', background: 'var(--morado)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.2rem', color: 'var(--blanco)', marginBottom: '1rem' }}>
          ¿No encuentras lo que buscas?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', marginBottom: '2rem' }}>
          Contáctanos y con gusto te asesoramos sin compromiso.
        </p>
        <a href="https://wa.me/51900000000" target="_blank" style={{
          background: 'var(--amarillo)', color: 'var(--morado)',
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

export default Servicios