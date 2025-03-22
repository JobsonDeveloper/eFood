import { useSelector } from 'react-redux'

import RestaurantItem from '../../components/RestaurantItem/RestaurantItem'
import { RootReducer } from '../../store/store'

import { ListComp } from './Styles'

const RestaurantList = () => {
  const { item: restaurants } = useSelector(
    (state: RootReducer) => state.restaurant
  )

  return (
    <ListComp className="container">
      {restaurants.map((item) => (
        <RestaurantItem key={item.id} restaurant={item} />
      ))}
    </ListComp>
  )
}

export default RestaurantList
