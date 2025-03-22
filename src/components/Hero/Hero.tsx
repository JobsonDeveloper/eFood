import { useSelector } from 'react-redux'

import { RootReducer } from '../../store/store'

import * as S from './Styles'

const Hero = () => {
  const {
    restaurantName: name,
    restaurantType: type,
    restaurantImage: cover
  } = useSelector((state: RootReducer) => state.restaurantSelected)

  return (
    <S.HeroComp>
      <S.HeroRestaurantComp style={{ backgroundImage: `url(${cover})` }}>
        <S.HeroDataComp>
          <div className="container">
            <p className="typeOfFood">{type}</p>
            <p className="restaurantName">{name}</p>
          </div>
        </S.HeroDataComp>
      </S.HeroRestaurantComp>
    </S.HeroComp>
  )
}

export default Hero
