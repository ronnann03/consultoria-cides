const posts = [
  { icon: '📖', cat: 'Metodología', title: '¿Cómo elegir el tipo de investigación para tu tesis?', desc: 'Exploramos las diferencias entre investigación cuantitativa, cualitativa y mixta para que tomes la mejor decisión.', fecha: 'Marzo 2025' },
  { icon: '📊', cat: 'Estadística', title: 'SPSS vs R: ¿cuál deberías usar en tu tesis?',             desc: 'Comparamos las dos herramientas más usadas en análisis estadístico para investigaciones académicas en Perú.', fecha: 'Febrero 2025' },
  { icon: '🛡️', cat: 'Antiplagio',  title: 'Cómo bajar el porcentaje de Turnitin sin perder calidad', desc: 'Técnicas de parafraseo efectivo y citación correcta para reducir la similitud de tu tesis sin alterar el contenido.', fecha: 'Enero 2025' },
  { icon: '🎤', cat: 'Sustentación','title': '10 preguntas que el jurado siempre hace en la defensa', desc: 'Prepárate para las preguntas más frecuentes de los jurados y aprende cómo responder con seguridad y precisión.', fecha: 'Diciembre 2024' },
  { icon: '📝', cat: 'Redacción',   title: 'Normas APA 7ma edición: los errores más comunes',         desc: 'Repasamos los errores de formato y citación más frecuentes en tesis peruanas y cómo evitarlos fácilmente.', fecha: 'Noviembre 2024' },
  { icon: '🎯', cat: 'Consejos',    title: 'Cómo organizar tu tiempo para terminar la tesis en 3 meses', desc: 'Un plan de trabajo práctico semana a semana para que avances sin estrés y llegues a tiempo a tu sustentación.', fecha: 'Octubre 2024' },
]

function Blog() {
  return (
    <div style={{ paddingTop: '70px' }}>
      <div style={{ background: 'var(--morado)', padding: '5rem 5% 4rem', textAlign: 'center' }}>
        <span style={{ color: 'var(--amarillo-claro)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>Recursos académicos</span>
        <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--blanco)', marginBottom: '1rem' }}>Blog <em>CIDES</em></h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto', lineHeight: 1.75, fontWeight: 300 }}>
          Consejos prácticos, guías y recursos para ayudarte en tu proceso de titulación.
        </p>
      </div>
      <div style={{ padding: '5rem 5%', background: 'var(--gris-claro)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.5rem', maxWidth: 1200, margin: '0 auto' }}>
          {posts.map((p, i) => (
            <article key={i} style={{ background: 'var(--blanco)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow)', border: '1px solid transparent', transition: 'var(--transition)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = 'rgba(245,197,24,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; e.currentTarget.style.borderColor = 'transparent' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <span style={{ background: 'var(--amarillo-pale)', color: 'var(--morado-claro)', padding: '0.3rem 0.8rem', borderRadius: 50, fontSize: '0.75rem', fontWeight: 600 }}>{p.cat}</span>
                <span style={{ fontSize: '1.5rem' }}>{p.icon}</span>
              </div>
              <h2 style={{ fontFamily: 'Georgia,serif', fontSize: '1.05rem', color: 'var(--morado)', marginBottom: '0.7rem', lineHeight: 1.4 }}>{p.title}</h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.87rem', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.2rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{p.fecha}</span>
                <a href="#" style={{ color: 'var(--morado-claro)', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'var(--morado)'}
                  onMouseLeave={e => e.target.style.color = 'var(--morado-claro)'}>
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
