import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CarrinhoDescriptionComp, CarrinhoList, CartTotalValue } from './Styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { ButtonCardapioComp, SideBarTitleComp } from '../../Styles'
import CarrinhoItem from '../../components/CarrinhoItem/CarrinhoItem'
import { changeShow } from '../../store/reducers/Carrinho'
import { formataPreco } from '../../utils/utils'

type Props = {
  setShow: Dispatch<SetStateAction<string>>
}

const CartList = ({ setShow }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.carrinho)
  const [valorTotal, setValorTotal] = useState('')
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return itens.reduce((cumulator, currentValue) => {
      return (cumulator += currentValue.value)
    }, 0)
  }

  useEffect(() => {
    if (itens.length === 0) {
      setValorTotal('0,00')
    } else {
      const valorCalculado = `${formataPreco(getTotalPrice())}`
      setValorTotal(valorCalculado.replace('.', ','))
    }
  }, [itens])

  const makePayment = () => {
    if (itens.length > 0) {
      setShow('delivery')
    } else {
      alert('Nenhum produto foi adicionado ao carrinho!')
    }
  }

  return (
    <>
      <SideBarTitleComp>Carrinho</SideBarTitleComp>
      <CarrinhoList>
        {itens.length != 0 ? (
          itens.map((produto) => (
            <CarrinhoItem
              key={produto.id}
              id={produto.id}
              name={produto.name}
              image={produto.image}
              value={produto.value}
            />
          ))
        ) : (
          <CarrinhoDescriptionComp>
            Sem itens no carrinho
          </CarrinhoDescriptionComp>
        )}
      </CarrinhoList>

      <CartTotalValue>
        <p>Valor total</p>
        <p>{valorTotal.replace('.', ',')}</p>
      </CartTotalValue>

      <ButtonCardapioComp onClick={makePayment}>
        Continuar com a entrega
      </ButtonCardapioComp>
      <ButtonCardapioComp
        className="btnCloseAside"
        onClick={() => dispatch(changeShow(false))}
      >
        voltar
      </ButtonCardapioComp>
    </>
  )
}

export default CartList
