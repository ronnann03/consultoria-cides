import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logoCides from '../assets/logo-gorrito.png'

function Navbar() {
  const [dropNosotros, setDropNosotros] = useState(false)
  const [dropServicios, setDropServicios] = useState(false)
  const [subMenu, setSubMenu] = useState(null)

  const timerNosotros = useRef(null)
  const timerServicios = useRef(null)

  const abrirNosotros = () => { clearTimeout(timerNosotros.current); setDropNosotros(true) }
  const cerrarNosotros = () => { timerNosotros.current = setTimeout(() => setDropNosotros(false), 200) }

  const abrirServicios = () => { clearTimeout(timerServicios.current); setDropServicios(true) }
  const cerrarServicios = () => {
    timerServicios.current = setTimeout(() => {
      setDropServicios(false)
      setSubMenu(null)
    }, 200)
  }

  const dropStyle = {
    position: 'absolute', top: '100%', left: 0,
    background: '#2D0F5E', minWidth: '280px',
    listStyle: 'none', padding: '0.5rem 0',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    borderTop: '2px solid var(--amarillo)',
    marginTop: '0', zIndex: 200
  }

  const linkStyle = {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.7rem 1.2rem',
    color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
    fontSize: '0.88rem', transition: 'all 0.2s', cursor: 'pointer'
  }

  const serviciosMenu = [
    {
      label: 'Redacción de Tesis de Pregrado',
      path: '/servicios/pregrado',
      sub: [
        { label: 'Tesis de Letras', sub2: ['Tesis de Administración', 'Tesis de Contabilidad', 'Tesis de Derecho', 'Tesis de Educación', 'Tesis de Economía', 'Más carreras'] },
        { label: 'Tesis de Salud', sub2: ['Tesis de Medicina', 'Tesis de Psicología', 'Tesis de Enfermería', 'Tesis de Nutrición', 'Más carreras'] },
        { label: 'Tesis de Ingeniería y Arquitectura', sub2: ['Tesis de Arquitectura', 'Tesis de Ing. Industrial', 'Tesis de Ing. Civil', 'Tesis de Ing. de Sistemas', 'Más carreras'] },
      ]
    },
    { label: 'Redacción de Tesis de Posgrado', path: '/servicios/posgrado', sub: [
      { label: 'Maestría Letras', sub2: [] },
      { label: 'Maestría Ingenierías', sub2: [] },
      { label: 'Maestría de Salud', sub2: [] },
      { label: 'MBA', sub2: [] },
      { label: 'Doctorado', sub2: [] },
    ]},
    { label: 'Levantamiento de Observaciones Pregrado', path: '/servicios/observaciones', sub: [] },
    { label: 'Levantamiento de Observaciones Maestría', path: '/servicios/observaciones-maestria', sub: [] },
    { label: 'Parafraseo', path: '/servicios/parafraseo', sub: [] },
    { label: 'Trabajo de Suficiencia Profesional', path: '/servicios/tsp', sub: [] },
    { label: 'Artículo Científico', path: '/servicios/articulo', sub: [] },
    { label: 'Monografía', path: '/servicios/monografia', sub: [] },
    { label: 'Planes de Negocio', path: '/servicios/planes', sub: [] },
    { label: 'Elaboración de CV', path: '/servicios/cv', sub: [] },
    { label: 'Diapositivas', path: '/servicios/diapositivas', sub: [] },
  ]

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '1rem 5%',
      background: 'var(--morado)', position: 'fixed',
      top: 0, width: '100%', zIndex: 100,
      boxShadow: '0 2px 20px rgba(0,0,0,0.2)'
    }}>

      {/* LOGO */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={logoCides} alt="Cides Logo" style={{ height: '45px', width: '45px', objectFit: 'contain' }} />
          <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 'bold', color: 'var(--amarillo)' }}>
            Cides<span style={{ color: 'var(--blanco)' }}>Tesis</span>
          </div>
        </div>
      </Link>

      {/* LINKS */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>

        {/* INICIO */}
        <li>
          <Link to="/" style={{ color: 'var(--blanco)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}
            onMouseEnter={e => e.target.style.color = 'var(--amarillo)'}
            onMouseLeave={e => e.target.style.color = 'var(--blanco)'}
          >Inicio</Link>
        </li>

        {/* NOSOTROS */}
        <li style={{ position: 'relative' }}
          onMouseEnter={abrirNosotros}
          onMouseLeave={cerrarNosotros}
        >
          <span style={{ color: 'var(--blanco)', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Nosotros ▾
          </span>
          {dropNosotros && (
            <ul style={dropStyle}
              onMouseEnter={abrirNosotros}
              onMouseLeave={cerrarNosotros}
            >
              {[
                { label: 'Organigrama', path: '/organigrama' },
                { label: 'Tips y Recomendaciones', path: '/tips' },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} style={linkStyle}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,197,24,0.15)'; e.currentTarget.style.color = 'var(--amarillo)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* SERVICIOS */}
        <li style={{ position: 'relative' }}
          onMouseEnter={abrirServicios}
          onMouseLeave={cerrarServicios}
        >
          <span style={{ color: 'var(--blanco)', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Servicios ▾
          </span>

          {dropServicios && (
            <ul style={dropStyle}
              onMouseEnter={abrirServicios}
              onMouseLeave={cerrarServicios}
            >
              {serviciosMenu.map((item, i) => (
                <li key={i} style={{ position: 'relative' }}
                  onMouseEnter={() => item.sub.length > 0 && setSubMenu(i)}
                  onMouseLeave={() => {}}
                >
                  <div style={{
                    ...linkStyle,
                    background: subMenu === i ? 'rgba(245,197,24,0.15)' : 'transparent',
                    color: subMenu === i ? 'var(--amarillo)' : 'rgba(255,255,255,0.8)'
                  }}>
                    <span>{item.label}</span>
                    {item.sub.length > 0 && <span style={{ fontSize: '0.7rem' }}>▶</span>}
                  </div>

                  {/* SEGUNDO NIVEL */}
                  {subMenu === i && item.sub.length > 0 && (
                    <ul style={{
                      position: 'absolute', top: 0, left: '100%',
                      background: '#1A0A2E', minWidth: '220px',
                      listStyle: 'none', padding: '0.5rem 0',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                      borderTop: '2px solid var(--amarillo)',
                      zIndex: 300
                    }}>
                      {item.sub.map((sub, j) => (
                        <li key={j}>
                          <div style={{ ...linkStyle, fontSize: '0.85rem' }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,197,24,0.15)'; e.currentTarget.style.color = 'var(--amarillo)' }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)' }}
                          >
                            <span>{sub.label}</span>
                            {sub.sub2.length > 0 && <span style={{ fontSize: '0.7rem' }}>▶</span>}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* BLOG */}
        <li>
          <Link to="/blog" style={{ color: 'var(--blanco)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}
            onMouseEnter={e => e.target.style.color = 'var(--amarillo)'}
            onMouseLeave={e => e.target.style.color = 'var(--blanco)'}
          >Blog</Link>
        </li>

        {/* CONTACTO */}
        <li>
          <Link to="/contacto" style={{ color: 'var(--blanco)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase' }}
            onMouseEnter={e => e.target.style.color = 'var(--amarillo)'}
            onMouseLeave={e => e.target.style.color = 'var(--blanco)'}
          >Contacto</Link>
        </li>

        {/* BOTÓN CTA */}
        <li>
          <a href="https://wa.me/51900000000" target="_blank" style={{
            background: 'var(--amarillo)', color: 'var(--morado)',
            padding: '0.5rem 1.2rem', fontWeight: '700',
            fontSize: '0.85rem', textDecoration: 'none'
          }}>
            Consulta gratis
          </a>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar