import { BrowserRouter, useLocation } from 'react-router'
import Rotas from './Routes'
import GlobalStyle from './Styles'
import Header from './containers/Header/Header'
import { Provider } from 'react-redux'
import store from './store/store'
import Footer from './containers/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>

        <Header />
        <Rotas/>
        <Footer />

      </Provider>
    </BrowserRouter>
  )
}

export default App
