import { useDispatch } from 'react-redux'
import ImgLixeira from '../../assets/icons/lixeira.png'

type Props = {
  id: number
  name: string
  image: string
  value: number
}

import { TitleComp } from '../../Styles'
import {
  CarrinhoDataComp,
  CarrinhoImage,
  CarrinhoItemComp,
  ImageCloseComp,
  ProdutoValueComp
} from './Styles'
import { remover } from '../../store/reducers/Carrinho'

const CarrinhoItem = ({ id: prodId, name: prodName, image: prodImage, value: prodValue }: Props) => {
  const valueDishString = `${prodValue.toFixed(2)}`
  const showValue = valueDishString.replace('.', ',')
  const dispatch = useDispatch()

  const removeCartItem = () => {
    dispatch(
      remover({
        id: prodId,
        name: prodName,
        image: prodImage,
        value: prodValue
      })
    )
  }

  return (
    <CarrinhoItemComp>
      <CarrinhoImage style={{ backgroundImage: `url(${prodImage})` }} />

      <CarrinhoDataComp>
        <TitleComp fontWeight="900">{prodName}</TitleComp>
        <ProdutoValueComp>R$ {showValue}</ProdutoValueComp>
        <ImageCloseComp src={ImgLixeira} alt="Lixeira" onClick={removeCartItem}/>
      </CarrinhoDataComp>
    </CarrinhoItemComp>
  )
}

export default CarrinhoItem
