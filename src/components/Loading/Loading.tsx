import { useSelector } from 'react-redux'

import { RootReducer } from '../../store/store'

import * as S from './Styles'
import { DotLoader } from 'react-spinners'
import { colors } from '../../Styles'

const Loading = () => {
  const { value } = useSelector((state: RootReducer) => state.loading)

  return (
    <>
      {value === true && (
        <S.LoadingContainerComp>
          <DotLoader color={colors.pink} />
        </S.LoadingContainerComp>
      )}
    </>
  )
}

export default Loading
