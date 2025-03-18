import { useEffect } from 'react'
import ListaRestaurantes from '../../containers/ListaRestaurantes/ListaRestaurantes'
import { useGetRestaurantesQuery } from '../../services/Api'
import { useDispatch } from 'react-redux'
import { showLoading } from '../../store/reducers/Loading'
import { atualizar } from '../../store/reducers/Restaurante'

const Home = () => {
  const { data, isLoading } = useGetRestaurantesQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    if(data) {
      dispatch(atualizar(data))
      dispatch(showLoading(false))
    }
  }, [isLoading])

  return (
    <div className="content">
      <ListaRestaurantes />
    </div>
  )
}

export default Home
