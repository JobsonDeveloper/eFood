import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router'

import { RootReducer } from '../../store/store'
import { changeShow } from '../../store/reducers/Cart'
import Logo from '../../assets/icons/logo.png'
import { LogoComp } from '../../Styles'
import ImageBackgroundBase from '../../assets/images/fundoRosa.svg'

import * as S from './Styles'

const Header = () => {
  const pagePath = useLocation().pathname === '/' ? true : false  
  const cart = useSelector((state: RootReducer) => state.cart.items)
  const dispatch = useDispatch()

  return (
    <S.HeaderComp style={{ backgroundImage: `url(${ImageBackgroundBase})` }}>
      <S.ListComp className="container">
        <S.LinksItemComp className='linkRestaurante'>
          {!pagePath && (
            <Link to="/" className="links">
              Restaurantes
            </Link>
          )}
        </S.LinksItemComp>

        <S.LogoItemComp className='logo'>
          <Link to="/">
            <LogoComp src={Logo} alt="Logo da eFood" />
          </Link>
        </S.LogoItemComp>

        {!pagePath && (
          <S.CartItemComp className="links carrinho" onClick={() => dispatch(changeShow(true))}>
            {cart.length} produto(s) no carrinho
          </S.CartItemComp>
        )}
      </S.ListComp>
      {pagePath && (
        <S.TitleComp className="container">
          Viva experiências gastronômicas no conforto da sua casa
        </S.TitleComp>
      )}
    </S.HeaderComp>
  )
}

export default Header
