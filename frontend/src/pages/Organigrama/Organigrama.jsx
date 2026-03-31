const equipo = {
  gerente: { nombre: 'Dirección General', cargo: 'CEO & Fundador', icon: '👑', color: '#4A0E8F' },
  areas: [
    {
      nombre: 'Área Metodológica',
      icon: '🔬',
      color: '#7B2FBE',
      miembros: ['Asesor Metodológico Senior', 'Asesor Metodológico Jr.'],
    },
    {
      nombre: 'Área Estadística',
      icon: '📊',
      color: '#7B2FBE',
      miembros: ['Estadístico SPSS / R', 'Analista de Datos'],
    },
    {
      nombre: 'Área de Redacción',
      icon: '✍️',
      color: '#7B2FBE',
      miembros: ['Redactor Académico Senior', 'Redactor APA / Vancouver'],
    },
    {
      nombre: 'Área Comercial',
      icon: '💼',
      color: '#C9920A',
      miembros: ['Atención al Cliente', 'Marketing Digital'],
    },
  ],
}

function Organigrama() {
  return (
    <div style={{ paddingTop: '70px' }}>

      {/* Header */}
      <div style={{ background: 'var(--morado)', padding: '5rem 5% 4rem', textAlign: 'center' }}>
        <span style={{ color: 'var(--amarillo-claro)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>Estructura organizacional</span>
        <h1 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--blanco)', marginBottom: '1rem' }}>Nuestro <em>Equipo</em></h1>
        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: 560, margin: '0 auto', lineHeight: 1.75, fontWeight: 300 }}>
          Un equipo multidisciplinario comprometido con tu éxito académico.
        </p>
      </div>

      {/* Organigrama */}
      <div style={{ padding: '5rem 5%', background: 'var(--gris-claro)' }}>

        {/* CEO */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{
            background: 'var(--morado)', color: 'var(--blanco)',
            borderRadius: 'var(--radius-lg)', padding: '1.5rem 3rem',
            textAlign: 'center', boxShadow: 'var(--shadow-lg)',
            border: '3px solid var(--amarillo)', minWidth: 220,
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{equipo.gerente.icon}</div>
            <div style={{ fontFamily: 'Georgia,serif', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{equipo.gerente.nombre}</div>
            <div style={{ color: 'var(--amarillo)', fontSize: '0.82rem', fontWeight: 600 }}>{equipo.gerente.cargo}</div>
          </div>
        </div>

        {/* Línea vertical */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
          <div style={{ width: 2, height: 40, background: 'var(--amarillo)' }} />
        </div>

        {/* Línea horizontal */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
          <div style={{ height: 2, background: 'var(--amarillo)', width: 'calc(25% * 3 + 4.5rem)' }} />
        </div>

        {/* Áreas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem', maxWidth: 1100, margin: '0 auto' }}>
          {equipo.areas.map((area, i) => (
            <div key={i}>
              {/* Línea hacia arriba */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: 2, height: 30, background: 'var(--amarillo)' }} />
              </div>
              {/* Card área */}
              <div style={{
                background: area.color, color: 'var(--blanco)',
                borderRadius: 'var(--radius)', padding: '1.2rem',
                textAlign: 'center', marginBottom: '1rem',
                boxShadow: 'var(--shadow)',
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{area.icon}</div>
                <div style={{ fontFamily: 'Georgia,serif', fontSize: '0.88rem', fontWeight: 700 }}>{area.nombre}</div>
              </div>
              {/* Miembros */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {area.miembros.map((m, j) => (
                  <div key={j} style={{
                    background: 'var(--blanco)', borderRadius: 8,
                    padding: '0.8rem 1rem', fontSize: '0.82rem',
                    color: 'var(--muted)', fontWeight: 500,
                    border: '1px solid var(--gris-border)',
                    borderLeft: '3px solid var(--amarillo)',
                    boxShadow: 'var(--shadow)',
                    textAlign: 'center',
                  }}>
                    {m}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nota */}
        <p style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--muted)', fontSize: '0.85rem', fontWeight: 300 }}>
          Nuestro equipo cuenta con más de 20 profesionales especializados disponibles para atenderte.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .org-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .org-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

export default Organigrama
