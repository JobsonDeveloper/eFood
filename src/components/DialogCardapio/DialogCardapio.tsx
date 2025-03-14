import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import {
    ButtonAddCarrinho,
  CloseComp,
  DialogComp,
  DialogDataComp,
  DialogInfos,
  DishImageComp
} from './Styles'
import IconClose from '../../assets/icons/close.png'
import { TextComp, TitleComp } from '../../Styles'
import { adicionar, changeShow } from '../../store/reducers/Carrinho'

type Props = {
  setShowDish: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogCardapio = ({setShowDish}: Props) => {
  const { name: dishName, image: dishImage, value: dishValue, emphasis, description } = useSelector(
    (state: RootReducer) => state.SelectedDishSlice
  )
  const dispatch = useDispatch()
  const valueDishString = `${dishValue.toFixed(2)}`
  const showValue = valueDishString.replace(".",',')

  const AddCart = () => {
    dispatch(
      adicionar(
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
    <DialogComp>
      <DialogDataComp>
        <CloseComp src={IconClose} onClick={() => setShowDish(false)}/>

        <DishImageComp style={{ backgroundImage: `url(${dishImage})` }} />

        <DialogInfos>
          <TitleComp color="lightPink" fontWeight="900">
            {dishName}
          </TitleComp>

          <TextComp color="lightPink" lineHeight="22">
            {description}
          </TextComp>

          <TextComp color="lightPink" lineHeight="22" className='emphasis'>
            {emphasis}
          </TextComp>

          <ButtonAddCarrinho onClick={AddCart}>Adicionar ao carrinho - R$ {showValue}</ButtonAddCarrinho>
        </DialogInfos>
      </DialogDataComp>
    </DialogComp>
  )
}

export default DialogCardapio
