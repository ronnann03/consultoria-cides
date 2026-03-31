import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoCides from '../../assets/logo-gorrito.png'
import './Navbar.css'

const nosotrosItems = [
  { label: 'Organigrama',             path: '/organigrama' },
  { label: 'Tips y Recomendaciones',  path: '/tips' },
]

const serviciosItems = [
  { label: 'Redacción de Tesis de Pregrado',    path: '/servicios/pregrado' },
  { label: 'Redacción de Tesis de Posgrado',    path: '/servicios/posgrado' },
  { label: 'Levantamiento de Observaciones',    path: '/servicios/observaciones' },
  { label: 'Parafraseo',                        path: '/servicios/parafraseo' },
  { label: 'Trabajo de Suficiencia Profesional', path: '/servicios/tsp' },
  { label: 'Artículo Científico',               path: '/servicios/articulo' },
  { label: 'Monografía',                        path: '/servicios/monografia' },
  { label: 'Planes de Negocio',                 path: '/servicios/planes' },
  { label: 'Elaboración de CV',                 path: '/servicios/cv' },
  { label: 'Diapositivas',                      path: '/servicios/diapositivas' },
]

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)
  const mobileRef = useRef(null)

  // Cierra al cambiar de ruta
  useEffect(() => { setOpenMenu(null) }, [location])

  // Cierra al hacer clic fuera
  useEffect(() => {
    const handler = (e) => {
      const inNav    = navRef.current    && navRef.current.contains(e.target)
      const inMobile = mobileRef.current && mobileRef.current.contains(e.target)
      if (!inNav && !inMobile) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const toggle = (key) => setOpenMenu(prev => prev === key ? null : key)

  return (
    <>
      {/* ══ NAVBAR DESKTOP ══ */}
      <nav className="navbar" ref={navRef}>

        <Link to="/" className="navbar-logo">
          <img src={logoCides} alt="Cides Logo" />
          <span className="navbar-logo-text">
            Cides<span>Tesis</span>
          </span>
        </Link>

        <ul className="nav-links">

          <li>
            <Link to="/" className="nav-link">Inicio</Link>
          </li>

          {/* Nosotros */}
          <li className="dropdown-wrap">
            <button
              className={`nav-link ${openMenu === 'nosotros' ? 'active' : ''}`}
              onClick={() => toggle('nosotros')}
            >
              Nosotros <span className="arrow">▾</span>
            </button>
            {openMenu === 'nosotros' && (
              <ul className="dropdown-menu">
                {nosotrosItems.map((item, i) => (
                  <li key={i}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            )}
          </li>

          {/* Servicios */}
          <li className="dropdown-wrap">
            <button
              className={`nav-link ${openMenu === 'servicios' ? 'active' : ''}`}
              onClick={() => toggle('servicios')}
            >
              Servicios <span className="arrow">▾</span>
            </button>
            {openMenu === 'servicios' && (
              <ul className="dropdown-menu">
                {serviciosItems.map((item, i) => (
                  <li key={i}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            )}
          </li>

          <li><Link to="/blog"     className="nav-link">Blog</Link></li>
          <li><Link to="/contacto" className="nav-link">Contacto</Link></li>

          <li>
            <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer" className="nav-cta">
              Consulta gratis
            </a>
          </li>

        </ul>
      </nav>

      {/* ══ BARRA MÓVIL HORIZONTAL (fija abajo) ══ */}
      <div className="mobile-nav-bar" ref={mobileRef}>
        <div className="mobile-nav-inner">

          <div className="mobile-nav-item">
            <Link to="/" className="mobile-nav-link">🏠 Inicio</Link>
          </div>

          {/* Nosotros móvil */}
          <div className="mobile-nav-item">
            <button
              className={`mobile-nav-link ${openMenu === 'mob-nosotros' ? 'active' : ''}`}
              onClick={() => toggle('mob-nosotros')}
            >
              👥 Nosotros <span className="mob-arrow">▾</span>
            </button>
            {openMenu === 'mob-nosotros' && (
              <ul className="mobile-dropdown">
                {nosotrosItems.map((item, i) => (
                  <li key={i}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            )}
          </div>

          {/* Servicios móvil */}
          <div className="mobile-nav-item">
            <button
              className={`mobile-nav-link ${openMenu === 'mob-servicios' ? 'active' : ''}`}
              onClick={() => toggle('mob-servicios')}
            >
              📋 Servicios <span className="mob-arrow">▾</span>
            </button>
            {openMenu === 'mob-servicios' && (
              <ul className="mobile-dropdown">
                {serviciosItems.map((item, i) => (
                  <li key={i}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            )}
          </div>

          <div className="mobile-nav-item">
            <Link to="/blog"     className="mobile-nav-link">✏️ Blog</Link>
          </div>

          <div className="mobile-nav-item">
            <Link to="/contacto" className="mobile-nav-link">📞 Contacto</Link>
          </div>

          <div className="mobile-nav-item">
            <a href="https://wa.me/51900000000" target="_blank" rel="noreferrer"
               className="mobile-nav-link mobile-cta-link">
              💬 Consulta
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
