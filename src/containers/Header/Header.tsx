import { Link, useLocation } from 'react-router'
import {
  HeaderComp,
  ListComp,
  TitleComp
} from './Styles'
import Logo from '../../assets/icons/logo.png'
import { LogoComp } from '../../Styles'
import ImageBackgroundBase from '../../assets/images/fundoRosa.svg'
import ImageBackgroundRestaurante from '../../assets/images/macaronada.svg'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'

const Header = () => {
  const pagePath = useLocation().pathname === '/' ? true : false
  const carrinho = useSelector((state: RootReducer) => state.carrinho.itens)

  return (
    <HeaderComp style={{ backgroundImage: `url(${ImageBackgroundBase})` }}>
      <ListComp>
        <li>
          {!pagePath && (
            <Link to="/" className="links">
              Restaurantes
            </Link>
          )}
        </li>

        <li>
          <LogoComp src={Logo} alt="Logo da eFood" />
        </li>

        {!pagePath && (
          <button className="links">
            {carrinho.length} produto(s) no carrinho
          </button>
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
