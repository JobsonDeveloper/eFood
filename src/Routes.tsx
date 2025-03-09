import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default Rotas
