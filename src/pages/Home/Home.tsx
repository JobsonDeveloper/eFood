import { useDispatch } from "react-redux"
import ListaRestaurantes from "../../containers/ListaRestaurantes/ListaRestaurantes"
import { useEffect } from "react"
import { showLoading } from "../../store/reducers/Loading"

const Home = () => {
  const dispatch = useDispatch()

  // Apenas para simular um loading
  useEffect(() => {
    dispatch(showLoading(true))
    setTimeout(() => {
      dispatch(showLoading(false))
    }, 1000);
  },[])

  return (
    <div className="content">
      <ListaRestaurantes/>
    </div>
  )
}

export default Home
