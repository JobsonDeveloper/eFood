import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store/store'
import CartItem from '../../components/CartItem/CartItem'
import { changeShow } from '../../store/reducers/Cart'
import { formatPrice } from '../../utils/utils'

import { ButtonMenuComp, SideBarTitleComp } from '../../Styles'
import * as S from './Styles'

type Props = {
  setShow: Dispatch<SetStateAction<string>>
}

const CartList = ({ setShow }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [allValue, setAllValue] = useState('')
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.value)
    }, 0)
  }

  useEffect(() => {
    if (items.length === 0) {
      setAllValue('0,00')
    } else {
      const calculatedValue = `${formatPrice(getTotalPrice())}`
      setAllValue(calculatedValue.replace('.', ','))
    }
  }, [items])

  const makePayment = () => {
    if (items.length > 0) {
      setShow('delivery')
    } else {
      alert('Nenhum produto foi adicionado ao carrinho!')
    }
  }

  return (
    <>
      <SideBarTitleComp>Carrinho</SideBarTitleComp>
      <S.CartListComp>
        {items.length != 0 ? (
          items.map((produto) => (
            <CartItem
              key={produto.id}
              id={produto.id}
              name={produto.name}
              image={produto.image}
              value={produto.value}
              delay={produto.id * 100}
            />
          ))
        ) : (
          <S.CartDescriptionComp>Sem items no carrinho</S.CartDescriptionComp>
        )}
      </S.CartListComp>

      {items.length > 0 && (
        <>
          <S.CartTotalValueComp>
            <p>Valor total</p>
            <p>{allValue.replace('.', ',')}</p>
          </S.CartTotalValueComp>

          <ButtonMenuComp onClick={makePayment}>
            Continuar com a entrega
          </ButtonMenuComp>
        </>
      )}
      <ButtonMenuComp
        className="btnCloseAside"
        type="button"
        onClick={() => dispatch(changeShow(false))}
      >
        voltar
      </ButtonMenuComp>
    </>
  )
}

export default CartList
