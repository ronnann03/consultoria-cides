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
    </BrowserRouter>
  )
}

export default App