import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import AOS from 'aos'

import ImgDelete from '../../assets/icons/lixeira.png'
import { remove } from '../../store/reducers/Cart'

import 'aos/dist/aos.css'
import { TitleComp } from '../../Styles'
import * as S from './Styles'

const CartItem = ({ id: prodId, name: prodName, image: prodImage, value: prodValue, delay }: CartItemProps) => {
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

   useEffect(() => {
      AOS.init()
    },[])
  

  return (
    <S.CartItemComp data-aos="fade-left" data-aos-delay={delay}>
      <S.CartImageComp src={prodImage} />

      <S.CartDataComp>
        <TitleComp fontWeight="900">{prodName}</TitleComp>
        <S.ProductValueComp>R$ {showValue}</S.ProductValueComp>
        <S.ImageCloseComp src={ImgDelete} alt="Lixeira" onClick={removeCartItem}/>
      </S.CartDataComp>
    </S.CartItemComp>
  )
}

export default CartItem
