import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import CardapioItem from '../../components/CardapioItem/CardapioItem'
import { CardapioListComp } from './Styles'

const ListaCardapio = () => {
  const { cardapio } = useSelector((state: RootReducer) => state.restaurantSelected)

  return (
    <CardapioListComp className="container">
      {cardapio.map((item) => (
        <CardapioItem
          key={item.id}
          cardapio={item}
        />
      ))}
    </CardapioListComp>
  )
}

export default ListaCardapio
