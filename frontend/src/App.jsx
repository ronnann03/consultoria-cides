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
    </BrowserRouter>
  )
}

export default App
