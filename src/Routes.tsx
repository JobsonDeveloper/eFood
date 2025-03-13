import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Restaurante from './pages/Restaurante/Restaurante'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/restaurante' element={<Restaurante />} />
    </Routes>
  )
}

export default Rotas
