import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Restaurant from './pages/Restaurant/Restaurant'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/restaurante' element={<Restaurant />} />
    </Routes>
  )
}

export default Rotas
