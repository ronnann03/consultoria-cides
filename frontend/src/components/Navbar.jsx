import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoCides from '../assets/logo-gorrito.png'

function Navbar() {
  const [dropNosotros, setDropNosotros] = useState(false)
  const [dropServicios, setDropServicios] = useState(false)

  const dropStyle = {
    position: 'absolute', top: '100%', left: 0,
    background: '#2D0F5E', minWidth: '260px',
    listStyle: 'none', padding: '0.5rem 0',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
    borderTop: '2px solid var(--amarillo)',
    marginTop: '0.5rem', zIndex: 200
  }

  const linkStyle = {
    display: 'block', padding: '0.7rem 1.2rem',
    color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
    fontSize: '0.88rem', transition: 'all 0.2s'
  }

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 5%',
      background: 'var(--morado)',
      position: 'fixed',
      top: 0, width: '100%',
      zIndex: 100,
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
          onMouseEnter={() => setDropNosotros(true)}
          onMouseLeave={() => setDropNosotros(false)}
        >
          <span style={{ color: 'var(--blanco)', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Nosotros ▾
          </span>
          {dropNosotros && (
            <ul style={dropStyle}>
              {[
                { label: 'Organigrama', path: '/organigrama' },
                { label: 'Tips y Recomendaciones', path: '/tips' },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} style={linkStyle}
                    onMouseEnter={e => { e.target.style.background = 'rgba(245,197,24,0.15)'; e.target.style.color = 'var(--amarillo)' }}
                    onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'rgba(255,255,255,0.8)' }}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* SERVICIOS */}
        <li style={{ position: 'relative' }}
          onMouseEnter={() => setDropServicios(true)}
          onMouseLeave={() => setDropServicios(false)}
        >
          <span style={{ color: 'var(--blanco)', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Servicios ▾
          </span>
          {dropServicios && (
            <ul style={dropStyle}>
              {[
                { label: 'Redacción de Tesis de Pregrado', path: '/servicios/pregrado' },
                { label: 'Redacción de Tesis de Posgrado', path: '/servicios/posgrado' },
                { label: 'Levantamiento de Observaciones', path: '/servicios/observaciones' },
                { label: 'Parafraseo', path: '/servicios/parafraseo' },
                { label: 'Trabajo de Suficiencia Profesional', path: '/servicios/tsp' },
                { label: 'Artículo Científico', path: '/servicios/articulo' },
                { label: 'Monografía', path: '/servicios/monografia' },
                { label: 'Planes de Negocio', path: '/servicios/planes' },
                { label: 'Elaboración de CV', path: '/servicios/cv' },
                { label: 'Diapositivas', path: '/servicios/diapositivas' },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} style={linkStyle}
                    onMouseEnter={e => { e.target.style.background = 'rgba(245,197,24,0.15)'; e.target.style.color = 'var(--amarillo)' }}
                    onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'rgba(255,255,255,0.8)' }}
                  >{item.label}</Link>
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