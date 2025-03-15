import { useSelector } from 'react-redux'
import { LoadingComp, LoadingContainerComp } from './Styles'
import { RootReducer } from '../../store/store'

const Loading = () => {
  const { value } = useSelector((state: RootReducer) => state.loading)

  return (
    <>
      {value === true && (
        <LoadingContainerComp>
          <LoadingComp>
            <li></li>
            <li></li>
            <li></li>
          </LoadingComp>
        </LoadingContainerComp>
      )}
    </>
  )
}

export default Loading
