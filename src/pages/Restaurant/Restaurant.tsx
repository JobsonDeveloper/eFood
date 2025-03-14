import { useSelector } from 'react-redux'
import Hero from '../../components/Hero/Hero'
import ListaCardapio from '../../containers/ListaCardapio/ListaCardapio'
import SideBar from '../../containers/SideBar/SideBar'
import { RootReducer } from '../../store/store'

const Restaurant = () => {
  const { show } = useSelector((state: RootReducer) => state.carrinho)

  return (
    <>
      <Hero />
      <ListaCardapio />
      {show && <SideBar />}
    </>
  )
}

export default Restaurant
