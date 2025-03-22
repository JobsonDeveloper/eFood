import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Hero from '../../components/Hero/Hero'
import MenuList from '../../containers/MenuList/MenuList'
import SideBar from '../../containers/SideBar/SideBar'
import { RootReducer } from '../../store/store'
import { showLoading } from '../../store/reducers/Loading'
import { add } from '../../store/reducers/RestaurantSelected'

const Restaurant = () => {
  const { item } = useSelector((state: RootReducer) => state.restaurant)
  const { show } = useSelector((state: RootReducer) => state.cart)
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
          dispatch(
            add({
              restaurantName: data.titulo,
              restaurantType: data.tipo,
              restaurantImage: data.capa,
              menu: data.cardapio
            })
          )
        }
      }
    })
  }, [])

  return (
    <>
      <Hero />
      <MenuList />
      {show && <SideBar />}
    </>
  )
}

export default Restaurant
