import { useDispatch } from 'react-redux'

import ImgDelete from '../../assets/icons/lixeira.png'
import { remove } from '../../store/reducers/Cart'

import { TitleComp } from '../../Styles'
import * as S from './Styles'

type Props = {
  id: number
  name: string
  image: string
  value: number
}

const CartItem = ({ id: prodId, name: prodName, image: prodImage, value: prodValue }: Props) => {
  const valueDishString = `${prodValue.toFixed(2)}`
  const showValue = valueDishString.replace('.', ',')
  const dispatch = useDispatch()

  const removeCartItem = () => {
    dispatch(
      remove({
        id: prodId,
        name: prodName,
        image: prodImage,
        value: prodValue
      })
    )
  }

  return (
    <S.CartItemComp>
      <S.CartImageComp style={{ backgroundImage: `url(${prodImage})` }} />

      <S.CartDataComp>
        <TitleComp fontWeight="900">{prodName}</TitleComp>
        <S.ProductValueComp>R$ {showValue}</S.ProductValueComp>
        <S.ImageCloseComp src={ImgDelete} alt="Lixeira" onClick={removeCartItem}/>
      </S.CartDataComp>
    </S.CartItemComp>
  )
}

export default CartItem
