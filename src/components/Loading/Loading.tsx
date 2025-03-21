import { useSelector } from 'react-redux'

import { RootReducer } from '../../store/store'

import * as S from './Styles'

const Loading = () => {
  const { value } = useSelector((state: RootReducer) => state.loading)

  return (
    <>
      {value === true && (
        <S.LoadingContainerComp>
          <S.LoadingComp>
            <li></li>
            <li></li>
            <li></li>
          </S.LoadingComp>
        </S.LoadingContainerComp>
      )}
    </>
  )
}

export default Loading
