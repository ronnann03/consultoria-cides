import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoCides from '../../assets/logo-gorrito.png'

const NAV_SERVICIOS = [
  { label: 'Redacción de Tesis de Pregrado',       path: '/servicios/pregrado' },
  { label: 'Redacción de Tesis de Posgrado',        path: '/servicios/posgrado' },
  { label: 'Levantamiento de Observaciones',        path: '/servicios/observaciones' },
  { label: 'Parafraseo',                            path: '/servicios/parafraseo' },
  { label: 'Trabajo de Suficiencia Profesional',    path: '/servicios/tsp' },
  { label: 'Artículo Científico',                   path: '/servicios/articulo' },
  { label: 'Monografía',                            path: '/servicios/monografia' },
  { label: 'Planes de Negocio',                     path: '/servicios/planes' },
  { label: 'Elaboración de CV',                     path: '/servicios/cv' },
  { label: 'Diapositivas',                          path: '/servicios/diapositivas' },
]

const NAV_NOSOTROS = [
  { label: 'Organigrama',            path: '/organigrama' },
  { label: 'Tips y Recomendaciones', path: '/tips' },
]

export default function Navbar() {
  const [dropNosotros,  setDropNosotros]  = useState(false)
  const [dropServicios, setDropServicios] = useState(false)
  const [mobileOpen,    setMobileOpen]    = useState(false)
  const [scrolled,      setScrolled]      = useState(false)
  const location = useLocation()

  /* Cierra menú móvil al cambiar de ruta */
  useEffect(() => { setMobileOpen(false) }, [location])

  /* Efecto scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dropStyle = {
    position: 'absolute', top: '100%', left: 0,
    background: 'var(--morado-dark)', minWidth: '270px',
    listStyle: 'none', padding: '0.5rem 0',
    boxShadow: '0 12px 36px rgba(0,0,0,0.35)',
    borderTop: '2px solid var(--amarillo)',
    marginTop: '0.4rem', zIndex: 200,
    borderRadius: '0 0 8px 8px',
  }

  const dropLinkStyle = {
    display: 'block', padding: '0.65rem 1.2rem',
    color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
    fontSize: '0.87rem', transition: 'all 0.2s',
  }

  const navLinkStyle = {
    color: 'var(--blanco)', textDecoration: 'none',
    fontSize: '0.88rem', fontWeight: '500',
    letterSpacing: '0.4px', textTransform: 'uppercase',
    transition: 'color 0.2s', cursor: 'pointer',
  }

  return (
    <>
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 5%', height: '70px',
        background: scrolled ? 'rgba(45,15,94,0.98)' : 'var(--morado)',
        position: 'fixed', top: 0, width: '100%', zIndex: 100,
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.25)' : '0 2px 20px rgba(0,0,0,0.15)',
        backdropFilter: 'blur(10px)',
        transition: 'var(--transition)',
        borderBottom: '1px solid rgba(245,197,24,0.15)',
      }}>

        {/* LOGO */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <img src={logoCides} alt="Cides Logo" style={{ height: '44px', width: '44px', objectFit: 'contain' }} />
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '1.35rem', fontWeight: 'bold' }}>
              <span style={{ color: 'var(--amarillo)' }}>Cides</span>
              <span style={{ color: 'var(--blanco)' }}>Tesis</span>
            </span>
          </div>
        </Link>

        {/* LINKS DESKTOP */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}
            className="nav-desktop">

          <li>
            <Link to="/" style={navLinkStyle}
              onMouseEnter={e => e.target.style.color = 'var(--amarillo)'}
              onMouseLeave={e => e.target.style.color = 'var(--blanco)'}>
              Inicio
            </Link>
          </li>

          {/* NOSOTROS dropdown */}
          <li style={{ position: 'relative' }}
              onMouseEnter={() => setDropNosotros(true)}
              onMouseLeave={() => setDropNosotros(false)}>
            <span style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--amarillo)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--blanco)'}>
              Nosotros ▾
            </span>
            {dropNosotros && (
              <ul style={dropStyle}>
                {NAV_NOSOTROS.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} style={dropLinkStyle}
                      onMouseEnter={e => { e.target.style.background = 'rgba(245,197,24,0.15)'; e.target.style.color = 'var(--amarillo)' }}
                      onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'rgba(255,255,255,0.8)' }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* SERVICIOS dropdown */}
          <li style={{ position: 'relative' }}
              onMouseEnter={() => setDropServicios(true)}
              onMouseLeave={() => setDropServicios(false)}>
            <span style={{ ...navLinkStyle, display: 'flex', alignItems: 'center', gap: '0.3rem' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--amarillo)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--blanco)'}>
              Servicios ▾
            </span>
            {dropServicios && (
              <ul style={dropStyle}>
                {NAV_SERVICIOS.map((item, i) => (
                  <li key={i}>
                    <Link to={item.path} style={dropLinkStyle}
                      onMouseEnter={e => { e.target.style.background = 'rgba(245,197,24,0.15)'; e.target.style.color = 'var(--amarillo)' }}
                      onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'rgba(255,255,255,0.8)' }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link to="/blog" style={navLinkStyle}
              onMouseEnter={e => e.target.style.color = 'var(--amarillo)'}
              onMouseLeave={e => e.target.style.color = 'var(--blanco)'}>
              Blog
            </Link>
          </li>

          <li>
            <Link to="/contacto" style={navLinkStyle}
              onMouseEnter={e => e.target.style.color = 'var(--amarillo)'}
              onMouseLeave={e => e.target.style.color = 'var(--blanco)'}>
              Contacto
            </Link>
          </li>

          {/* CTA */}
          <li>
            <a href="#formulario" style={{
              background: 'var(--amarillo)', color: 'var(--morado)',
              padding: '0.5rem 1.3rem', fontWeight: '700',
              fontSize: '0.85rem', textDecoration: 'none',
              borderRadius: '6px', transition: 'var(--transition)',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--amarillo-claro)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--amarillo)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Consulta gratis
            </a>
          </li>
        </ul>

        {/* HAMBURGER MÓVIL */}
        <button onClick={() => setMobileOpen(o => !o)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', flexDirection: 'column', gap: '5px' }}
          className="hamburger-btn" aria-label="Abrir menú">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '24px', height: '2px',
              background: 'var(--blanco)', borderRadius: '2px',
              transition: 'var(--transition)',
              transform: mobileOpen
                ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                : i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
                : 'scaleX(0) translateX(-100%)'
                : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* MENÚ MÓVIL */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: '70px', left: 0, right: 0, zIndex: 99,
          background: 'var(--morado-dark)',
          padding: '1.5rem 5% 2rem',
          display: 'flex', flexDirection: 'column', gap: '0.2rem',
          borderBottom: '2px solid var(--amarillo)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}>
          {[
            { label: 'Inicio', path: '/' },
            { label: 'Organigrama', path: '/organigrama' },
            { label: 'Tips', path: '/tips' },
            { label: 'Servicios', path: '/servicios' },
            { label: 'Blog', path: '/blog' },
            { label: 'Contacto', path: '/contacto' },
          ].map((item, i) => (
            <Link key={i} to={item.path} style={{
              color: 'rgba(255,255,255,0.85)', textDecoration: 'none',
              fontSize: '1rem', fontWeight: '500', padding: '0.7rem 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              {item.label}
            </Link>
          ))}
          <a href="#formulario" style={{
            marginTop: '1rem', background: 'var(--amarillo)', color: 'var(--morado)',
            padding: '0.8rem 1.5rem', borderRadius: '6px', fontWeight: '700',
            textDecoration: 'none', textAlign: 'center', fontSize: '0.95rem',
          }}>
            ✏️ Consulta gratis
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
