import { BrowserRouter } from 'react-router'
import Rotas from './Routes'
import GlobalStyle from './Styles'
import Header from './components/Header/Header'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
      <Header />
      <Rotas />
      </Provider>
    </BrowserRouter>
  )
}

export default App
