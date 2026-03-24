function Footer() {
  return (
    <footer>

      {/* GRID PRINCIPAL */}
      <div style={{
        background: '#1A0A2E',
        padding: '4rem 5%',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '3rem'
      }}>

        {/* LOGO Y DESCRIPCIÓN */}
        <div>
          <div style={{
            fontFamily: 'Georgia, serif', fontSize: '1.5rem',
            fontWeight: 'bold', marginBottom: '1rem'
          }}>
            <span style={{ color: 'var(--amarillo)' }}>Cides</span>
            <span style={{ color: 'white' }}>Tesis</span>
          </div>
          <p style={{
            color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem',
            lineHeight: 1.9, textTransform: 'uppercase',
            letterSpacing: '0.5px', marginBottom: '1.5rem'
          }}>
            Somos una empresa que brinda el servicio de redacción y asesoría
            de trabajos de investigación con el objetivo de que nuestros
            clientes logren superarse en el ámbito académico.
          </p>
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            {['Facebook', 'Instagram', 'YouTube', 'LinkedIn', 'TikTok'].map((red, i) => (
              <a key={i} href="#" style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: '0.75rem', textDecoration: 'none',
                transition: 'background 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--amarillo)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                {['f', 'ig', 'yt', 'in', 'tk'][i]}
              </a>
            ))}
          </div>
        </div>

        {/* SERVICIOS */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            Servicios
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {['Redacción de Tesis Pregrado', 'Redacción de Tesis Posgrado', 'Levantamiento de Observaciones', 'Parafraseo'].map((s, i) => (
              <li key={i} style={{ marginBottom: '0.7rem' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--amarillo)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* NOSOTROS */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            Nosotros
          </h4>
          <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
            {['Políticas de Privacidad', 'Equipo Cides', 'Testimonios'].map((s, i) => (
              <li key={i} style={{ marginBottom: '0.7rem' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--amarillo)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >{s}</a>
              </li>
            ))}
          </ul>
          <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Trabaja con nosotros
          </h4>
          <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.88rem' }}>Bolsa de Trabajo</a>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', marginTop: '1rem', lineHeight: 1.6 }}>
            RUC 20612864676<br />Cides Consultoría
          </p>
        </div>

        {/* CARRERAS */}
        <div>
          <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
            Carreras
          </h4>
          <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
            {['Ciencias Sociales', 'Ciencias de la Salud', 'Ciencias Empresariales', 'Ciencias Ingeniería y Arquitectura', 'Ciencias Biológicas', 'Ciencias Básicas'].map((s, i) => (
              <li key={i} style={{ marginBottom: '0.7rem' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--amarillo)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >{s}</a>
              </li>
            ))}
          </ul>
          <a href="#" style={{
            color: 'var(--amarillo)', fontWeight: '700',
            textDecoration: 'underline', fontSize: '0.9rem'
          }}>
            LIBRO DE RECLAMACIÓN
          </a>
        </div>
      </div>

      {/* PAGOS */}
      <div style={{
        background: '#120720', padding: '2rem 5%', textAlign: 'center',
        borderTop: '1px solid rgba(245,197,24,0.2)'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '1.5rem', fontWeight: '600' }}>
          Pagos CONFIABLES a través de:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {['BCP', 'BBVA', 'Interbank', 'Yape', 'PayPal', 'Niubiz'].map((p, i) => (
            <span key={i} style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'white', padding: '0.5rem 1.2rem',
              fontSize: '0.85rem', fontWeight: '600', borderRadius: '4px'
            }}>{p}</span>
          ))}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div style={{
        background: '#0D0518', padding: '1.2rem 5%',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem' }}>
          Copyright © 2026 Cides Consultoría. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  )
}

export default Footer