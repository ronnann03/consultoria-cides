import { useState } from 'react'

function Blog() {
  const [activo, setActivo] = useState(null)

  const posts = [
    {
      icon: '📝',
      categoria: 'Consejos',
      fecha: '15 Marzo 2026',
      title: '5 pasos para comenzar tu tesis desde cero',
      desc: 'Descubre cómo organizar tu tiempo y recursos para arrancar tu proceso de investigación sin estrés y con resultados reales.',
      contenido: 'Iniciar una tesis puede parecer abrumador, pero con los pasos correctos es totalmente manejable. Primero, define tu tema con claridad. Segundo, revisa la literatura existente. Tercero, plantea tu problema de investigación. Cuarto, elige tu metodología. Quinto, organiza tu cronograma de trabajo y cúmplelo.'
    },
    {
      icon: '🎯',
      categoria: 'Estrategia',
      fecha: '8 Marzo 2026',
      title: 'Cómo definir un buen problema de investigación',
      desc: 'El problema de investigación es la base de tu tesis. Aprende a formularlo correctamente para evitar observaciones del jurado.',
      contenido: 'Un buen problema de investigación debe ser específico, medible y relevante. Debe responder a una pregunta que aún no tiene respuesta clara en la literatura. Evita problemas demasiado amplios o vagos. Usa verbos precisos y delimita bien el campo de estudio, la población y el periodo de tiempo.'
    },
    {
      icon: '📊',
      categoria: 'Estadística',
      fecha: '1 Marzo 2026',
      title: 'SPSS vs R: ¿Cuál usar para tu tesis?',
      desc: 'Comparamos las dos herramientas estadísticas más usadas en investigación académica para que elijas la mejor según tu caso.',
      contenido: 'SPSS es más amigable para principiantes y es ampliamente aceptado en ciencias sociales y salud. R es más potente y gratuito, ideal para análisis complejos. Si recién empiezas, SPSS es más sencillo. Si buscas mayor flexibilidad y no tienes presupuesto, R es la mejor opción.'
    },
    {
      icon: '🔍',
      categoria: 'Antiplagio',
      fecha: '22 Feb 2026',
      title: 'Cómo reducir el porcentaje de similitud en Turnitin',
      desc: 'El antiplagio es uno de los mayores obstáculos antes de sustentar. Te enseñamos técnicas efectivas para reducirlo correctamente.',
      contenido: 'Para reducir la similitud en Turnitin: parafrasea correctamente sin cambiar solo palabras sueltas, usa citas directas con comillas y referencia, reescribe oraciones completas con tus propias palabras, evita copiar de fuentes digitales sin citar, y revisa bien las referencias bibliográficas.'
    },
    {
      icon: '🎓',
      categoria: 'Sustentación',
      fecha: '15 Feb 2026',
      title: '¿Cómo prepararte para la sustentación de tu tesis?',
      desc: 'La sustentación es el momento final. Con esta guía sabrás exactamente cómo prepararte para impresionar al jurado.',
      contenido: 'Prepara una presentación clara y visual de no más de 20 diapositivas. Practica tu exposición varias veces en voz alta. Anticipa las preguntas del jurado y prepara respuestas. Conoce tu tesis a fondo, especialmente la metodología y los resultados. Llega con tiempo, descansado y con confianza.'
    },
    {
      icon: '💡',
      categoria: 'Guía',
      fecha: '8 Feb 2026',
      title: 'Todo sobre el levantamiento de observaciones',
      desc: 'Las observaciones del jurado no son el fin. Aprende cómo abordarlas correctamente para aprobar en tu siguiente intento.',
      contenido: 'Lee cada observación con calma y sin desanimarte. Clasifícalas por tipo: metodológicas, de redacción o de fondo. Prioriza las más críticas. Busca asesoría especializada si alguna observación no la entiendes. Responde cada una con evidencia y sustento teórico. Entrega un documento de levantamiento bien organizado.'
    },
  ]

  return (
    <div style={{ paddingTop: '5rem' }}>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--morado) 0%, var(--morado-claro) 100%)',
        padding: '5rem 5%', textAlign: 'center'
      }}>
        <span style={{ color: 'var(--amarillo)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Recursos gratuitos
        </span>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--blanco)', marginTop: '0.8rem', marginBottom: '1rem' }}>
          Nuestro <em style={{ color: 'var(--amarillo)' }}>Blog</em>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
          Artículos, guías y consejos para ayudarte en tu proceso de titulación.
        </p>
      </section>

      {/* POSTS */}
      <section style={{ padding: '6rem 5%', background: 'var(--gris-claro)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {posts.map((post, i) => (
            <div key={i} style={{
              background: 'var(--blanco)', borderRadius: '6px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(74,14,143,0.08)',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* IMAGEN */}
              <div style={{
                background: 'linear-gradient(135deg, var(--morado), var(--morado-claro))',
                height: '140px', display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '3.5rem', position: 'relative'
              }}>
                <span style={{ opacity: 0.4 }}>{post.icon}</span>
                <span style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  background: 'var(--amarillo)', color: 'var(--morado)',
                  padding: '0.3rem 0.8rem', fontSize: '0.7rem',
                  fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase'
                }}>{post.categoria}</span>
              </div>

              {/* CONTENIDO */}
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: 'var(--muted)', fontSize: '0.78rem', marginBottom: '0.5rem' }}>{post.fecha}</p>
                <h3 style={{ fontFamily: 'Georgia, serif', color: 'var(--morado)', fontSize: '1.05rem', lineHeight: 1.4, marginBottom: '0.8rem' }}>
                  {post.title}
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {post.desc}
                </p>

                {/* EXPANDIR */}
                {activo === i && (
                  <p style={{ color: 'var(--texto)', fontSize: '0.88rem', lineHeight: 1.8, marginBottom: '1rem', padding: '1rem', background: 'var(--gris-claro)', borderRadius: '4px', borderLeft: '3px solid var(--amarillo)' }}>
                    {post.contenido}
                  </p>
                )}

                <button onClick={() => setActivo(activo === i ? null : i)} style={{
                  background: activo === i ? 'var(--morado)' : 'transparent',
                  color: activo === i ? 'var(--blanco)' : 'var(--morado)',
                  border: '1.5px solid var(--morado)',
                  padding: '0.5rem 1.2rem', fontWeight: '600',
                  fontSize: '0.85rem', cursor: 'pointer',
                  borderRadius: '4px', transition: 'all 0.2s'
                }}>
                  {activo === i ? 'Cerrar ↑' : 'Leer más →'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 5%', background: 'var(--amarillo)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: 'var(--morado)', marginBottom: '1rem' }}>
          ¿Necesitas asesoría personalizada?
        </h2>
        <p style={{ color: 'var(--morado)', fontSize: '1rem', marginBottom: '2rem', opacity: 0.8 }}>
          Nuestro equipo está listo para ayudarte hoy mismo.
        </p>
        <a href="https://wa.me/51900000000" target="_blank" style={{
          background: 'var(--morado)', color: 'var(--blanco)',
          padding: '1rem 2.5rem', fontWeight: '700',
          fontSize: '1rem', textDecoration: 'none', display: 'inline-block'
        }}>
          💬 Escribir por WhatsApp
        </a>
      </section>

    </div>
  )
}

export default Blog