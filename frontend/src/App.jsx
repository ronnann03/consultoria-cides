import { useEffect, useState } from 'react'
import api from './services/api'

function App() {
  const [mensaje, setMensaje] = useState('Cargando...')

  useEffect(() => {
    api.get('/')
      .then(res => setMensaje(res.data.mensaje))
      .catch(() => setMensaje('Error al conectar con el backend'))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Mi Consultoría</h1>
      <p>Mensaje del backend: <strong>{mensaje}</strong></p>
    </div>
  )
}

export default App