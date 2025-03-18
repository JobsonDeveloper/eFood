import { useSelector } from 'react-redux'
import { HeroComp, HeroDataComp, HeroRestaurantComp } from './Styles'
import { RootReducer } from '../../store/store'

const Hero = () => {
  const { restaurantName: name, restaurantType: type, restaurantImage: cover } = useSelector((state: RootReducer) => state.restaurantSelected)

  return (
    <HeroComp>
      <HeroRestaurantComp style={{ backgroundImage: `url(${cover})` }}>
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
