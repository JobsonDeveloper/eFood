import { Link, useLocation } from 'react-router'
import {
  CartItem,
  HeaderComp,
  LinksItem,
  ListComp,
  LogoItem,
  TitleComp
} from './Styles'
import Logo from '../../assets/icons/logo.png'
import { LogoComp } from '../../Styles'
import ImageBackgroundBase from '../../assets/images/fundoRosa.svg'
import ImageBackgroundRestaurante from '../../assets/images/macaronada.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { changeShow } from '../../store/reducers/Carrinho'

const Header = () => {
  const pagePath = useLocation().pathname === '/' ? true : false
  const carrinho = useSelector((state: RootReducer) => state.carrinho.itens)
  const dispatch = useDispatch()

  return (
    <HeaderComp style={{ backgroundImage: `url(${ImageBackgroundBase})` }}>
      <ListComp className="container">
        <LinksItem>
          {!pagePath && (
            <Link to="/" className="links">
              Restaurantes
            </Link>
          )}
        </LinksItem>

        <LogoItem>
          <Link to="/">
            <LogoComp src={Logo} alt="Logo da eFood" />
          </Link>
        </LogoItem>

        {!pagePath && (
          <CartItem className="links" onClick={() => dispatch(changeShow(true))}>
            {carrinho.length} produto(s) no carrinho
          </CartItem>
        )}
      </ListComp>
      {pagePath && (
        <TitleComp className="container">
          Viva experiências gastronômicas no conforto da sua casa
        </TitleComp>
      )}
    </HeaderComp>
  )
}

export default Header
