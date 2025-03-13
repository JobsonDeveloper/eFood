import { useDispatch, useSelector } from 'react-redux'
import { HeroComp, HeroDataComp, HeroRestaurantComp } from './Styles'
import { RootReducer } from '../../store/store'
import { useEffect } from 'react'
import { adicionar } from '../../store/reducers/RestaurantSelected'

const Hero = () => {
  const {
    restaurantImage: image,
    restaurantName: name,
    restaurantType: type
  } = useSelector((state: RootReducer) => state.restaurantSelected)
  const dispatch = useDispatch()

  useEffect(() => {
    const data = sessionStorage.getItem('restaurant')

    if (data !== null) {
      const jsonData = JSON.parse(data)

      dispatch(
        adicionar({
          restaurantName: jsonData.restaurantName,
          restaurantImage: jsonData.restaurantImage,
          restaurantType: jsonData.restaurantType,
        })
      )
    }
  }, [])

  return (
    <HeroComp>
      <HeroRestaurantComp style={{ backgroundImage: `url(${image})` }}>
        <HeroDataComp>
          <div className="container">
            <p className="typeOfFood">{type}</p>
            <p className="restaurantName">{name}</p>
          </div>
        </HeroDataComp>
      </HeroRestaurantComp>
    </HeroComp>
  )
}

export default Hero
