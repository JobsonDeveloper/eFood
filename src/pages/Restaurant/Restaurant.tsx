import { useDispatch, useSelector } from 'react-redux'
import Hero from '../../components/Hero/Hero'
import ListaCardapio from '../../containers/ListaCardapio/ListaCardapio'
import SideBar from '../../containers/SideBar/SideBar'
import { RootReducer } from '../../store/store'
import { useEffect } from 'react'
import { showLoading } from '../../store/reducers/Loading'
import { useParams } from 'react-router'
import { adicionar } from '../../store/reducers/RestaurantSelected'

const Restaurant = () => {
  const { item } = useSelector((state: RootReducer) => state.restaurante)
  const { show } = useSelector((state: RootReducer) => state.carrinho)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(showLoading(true))
    setTimeout(() => {
      dispatch(showLoading(false))
    }, 1000)

    item.map((data) => {
      if (id) {
        if (data.id == parseInt(id)) {
          dispatch(adicionar({
            restaurantName: data.titulo,
            restaurantType: data.tipo,
            restaurantImage: data.capa,
            cardapio: data.cardapio
          }))
        }
      }
    })
  }, [])

  return (
    <>
      <Hero />
      <ListaCardapio />
      {show && <SideBar />}
    </>
  )
}

export default Restaurant
