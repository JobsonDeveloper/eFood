import { BrowserRouter } from 'react-router'
import Rotas from './Routes'
import GlobalStyle from './Styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
