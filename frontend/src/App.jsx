import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Blog from './pages/Blog'
import Organigrama from './pages/Organigrama'
import Tips from './pages/Tips'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/organigrama" element={<Organigrama />} />
        <Route path="/tips" element={<Tips />} />
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