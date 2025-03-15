import { useDispatch, useSelector } from 'react-redux'
import Hero from '../../components/Hero/Hero'
import ListaCardapio from '../../containers/ListaCardapio/ListaCardapio'
import SideBar from '../../containers/SideBar/SideBar'
import { RootReducer } from '../../store/store'
import { useEffect } from 'react'
import { showLoading } from '../../store/reducers/Loading'

const Restaurant = () => {
  const { show } = useSelector((state: RootReducer) => state.carrinho)
  const dispatch = useDispatch()

  // Apenas para simular um loading
  useEffect(() => {
    dispatch(showLoading(true))
    setTimeout(() => {
      dispatch(showLoading(false))
    }, 1000);
  },[])

  return (
    <>
      <Hero />
      <ListaCardapio />
      {show && <SideBar />}
    </>
  )
}

export default Restaurant
