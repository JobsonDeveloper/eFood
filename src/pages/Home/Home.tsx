import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import RestaurantList from '../../containers/RestaurantList/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/Api'
import { showLoading } from '../../store/reducers/Loading'
import { update } from '../../store/reducers/Restaurant'

const Home = () => {
  const { data, isLoading } = useGetRestaurantsQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    if(data) {
      dispatch(update(data))
      dispatch(showLoading(false))
    }
  }, [isLoading])

  return (
    <div className="content">
      <RestaurantList />
    </div>
  )
}

export default Home
