import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { PrimeReactProvider } from 'primereact/api'

import Routes from './Routes'
import Header from './containers/Header/Header'
import store from './store/store'
import Footer from './containers/Footer/Footer'
import Loading from './components/Loading/Loading'

import GlobalStyle from './Styles'

function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Provider store={store}>
          <Loading />
          <Header />
          <Routes />
          <Footer />
        </Provider>
      </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App
