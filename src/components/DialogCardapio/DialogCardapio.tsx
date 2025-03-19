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
import { TextDescription, TitleComp } from '../../Styles'
import { adicionar, changeShow } from '../../store/reducers/Carrinho'
import { formataPreco } from '../../utils/utils'

type Props = {
  setShowDish: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogCardapio = ({setShowDish}: Props) => {
  const { name: dishName, image: dishImage, value: dishValue, emphasis, description } = useSelector(
    (state: RootReducer) => state.SelectedDishSlice
  )
  const dispatch = useDispatch()
  const valueDishString = `${formataPreco(dishValue)}`
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

          <TextDescription color="lightPink">
            {description}
          </TextDescription>

          <TextDescription color="lightPink" className='emphasis'>
            {emphasis}
          </TextDescription>

          <ButtonAddCarrinho onClick={AddCart}>Adicionar ao carrinho - {showValue}</ButtonAddCarrinho>
        </DialogInfos>
      </DialogDataComp>
    </DialogComp>
  )
}

export default DialogCardapio
