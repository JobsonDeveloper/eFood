import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store/store'
import IconClose from '../../assets/icons/close.png'
import { add, changeShow } from '../../store/reducers/Cart'
import { formatPrice } from '../../utils/utils'

import { TextDescription, TitleComp } from '../../Styles'
import * as S from './Styles'

type Props = {
  setShowDish: React.Dispatch<React.SetStateAction<boolean>>
}

const MenuDialog = ({setShowDish}: Props) => {
  const { name: dishName, image: dishImage, value: dishValue, emphasis, description } = useSelector(
    (state: RootReducer) => state.SelectedDishSlice
  )
  const dispatch = useDispatch()
  const valueDishString = `${formatPrice(dishValue)}`
  const showValue = valueDishString.replace(".",',')

  const AddCart = () => {
    dispatch(
      add(
        {
          name: dishName,
          image: dishImage,
          value: dishValue
        }
      )
    )

    dispatch(
      changeShow(true)
    )
    
    setShowDish(false)
  }

  return (
    <S.DialogComp>
      <S.DialogDataComp>
        <S.CloseComp src={IconClose} onClick={() => setShowDish(false)}/>

        <S.DishImageComp style={{ backgroundImage: `url(${dishImage})` }} />

        <S.DialogInfosComp>
          <TitleComp color="lightPink" fontWeight="900">
            {dishName}
          </TitleComp>

          <TextDescription color="lightPink">
            {description}
          </TextDescription>

          <TextDescription color="lightPink" className='emphasis'>
            {emphasis}
          </TextDescription>

          <S.ButtonAddCartComp onClick={AddCart}>Adicionar ao carrinho - {showValue}</S.ButtonAddCartComp>
        </S.DialogInfosComp>
      </S.DialogDataComp>
    </S.DialogComp>
  )
}

export default MenuDialog
