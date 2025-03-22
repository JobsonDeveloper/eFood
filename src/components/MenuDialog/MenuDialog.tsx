import { useDispatch, useSelector } from 'react-redux'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { RootReducer } from '../../store/store'
import IconClose from '../../assets/icons/close.png'
import { add, changeShow } from '../../store/reducers/Cart'
import { formatPrice } from '../../utils/utils'

import { TextDescription, TitleComp } from '../../Styles'
import * as S from './Styles'
import { useEffect } from 'react'

const MenuDialog = ({ setShowDish }: MenuDialogProps) => {
  const {
    name: dishName,
    image: dishImage,
    value: dishValue,
    emphasis,
    description
  } = useSelector((state: RootReducer) => state.SelectedDishSlice)
  const dispatch = useDispatch()
  const valueDishString = `${formatPrice(dishValue)}`
  const showValue = valueDishString.replace('.', ',')

  const AddCart = () => {
    dispatch(
      add({
        name: dishName,
        image: dishImage,
        value: dishValue
      })
    )

    dispatch(changeShow(true))

    setShowDish(false)
  }

  useEffect(() => {
    AOS.init({
      duration: 300
    })
  }, [])

  return (
    <S.DialogComp>
      <S.DialogDataComp data-aos="fade-up">
        <S.CloseComp src={IconClose} onClick={() => setShowDish(false)} />

        <S.DishImageComp style={{ backgroundImage: `url(${dishImage})` }} />

        <S.DialogInfosComp>
          <TitleComp color="lightPink" fontWeight="900">
            {dishName}
          </TitleComp>

          <TextDescription color="lightPink">{description}</TextDescription>

          <TextDescription color="lightPink" className="emphasis">
            Serve: de {emphasis}
          </TextDescription>

          <S.ButtonAddCartComp onClick={AddCart}>
            Adicionar ao carrinho - {showValue}
          </S.ButtonAddCartComp>
        </S.DialogInfosComp>
      </S.DialogDataComp>
    </S.DialogComp>
  )
}

export default MenuDialog
