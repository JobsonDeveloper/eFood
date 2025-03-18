import RestauranteItem from '../../components/RestauranteItem/RestauranteItem'
import { ListaComp } from './Styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'

const ListaRestaurantes = () => {
  const { item: restaurantes } = useSelector((state: RootReducer) => state.restaurante)

  return (
    <ListaComp className="container">
      {restaurantes.map((item) => (
        <RestauranteItem key={item.id} restaurante={item} />
      ))}
    </ListaComp>
  )
}

export default ListaRestaurantes
