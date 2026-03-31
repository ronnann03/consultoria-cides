import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar     from './components/Navbar/Navbar'
import Footer     from './components/Footer/Footer'
import Home       from './pages/Home/Home'
import Servicios  from './pages/Servicios/Servicios'
import Blog       from './pages/Blog/Blog'
import Organigrama from './pages/Organigrama/Organigrama'
import Tips       from './pages/Tips/Tips'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import TesisPregrado from './pages/Servicios/Pregrado/TesisPregrado'
import TesisPosgrado from './pages/Servicios/Posgrado/TesisPosgrado'
import LevObservaciones from './pages/Servicios/Observaciones/LevObservaciones'
import Parafraseo from './pages/Servicios/Parafraseo/Parafraseo'
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/servicios"   element={<Servicios />} />
        <Route path="/servicios/*" element={<Servicios />} />
        <Route path="/blog"        element={<Blog />} />
        <Route path="/organigrama" element={<Organigrama />} />
        <Route path="/tips"        element={<Tips />} />
        <Route path="/servicios/pregrado" element={<TesisPregrado />} />
        <Route path="/servicios/posgrado" element={<TesisPosgrado />} />
        <Route path="/servicios/observaciones" element={<LevObservaciones />} />
        <Route path="/servicios/parafraseo" element={<Parafraseo />} />
      </Routes>
      <Footer />

      {/* WHATSAPP FLOTANTE */}
      <a href="https://wa.me/51900000000" target="_blank" style={{
        position: 'fixed', bottom: '2rem', right: '2rem',
        width: '58px', height: '58px', borderRadius: '50%',
        background: '#25D366', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        fontSize: '1.8rem', zIndex: 999,
        boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
        textDecoration: 'none',
        animation: 'pulse 2s infinite'
      }}>
        💬
      </a>
    </BrowserRouter>
  )
}

export default App
