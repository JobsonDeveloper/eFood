import { Route, Routes } from 'react-router'

import Home from './pages/Home/Home'
import Restaurant from './pages/Restaurant/Restaurant'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/restaurante/:id' element={<Restaurant />} />
    </Routes>
  )
}

export default Rotas
