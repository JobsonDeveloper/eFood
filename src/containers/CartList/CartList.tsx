import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CarrinhoDescriptionComp, CarrinhoList, CartTotalValue } from './Styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { ButtonCardapioComp } from '../../Styles'
import CarrinhoItem from '../../components/CarrinhoItem/CarrinhoItem'

type Props = {
    setShow: Dispatch<SetStateAction<string>>
}

const CartList = ({ setShow }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.carrinho)
  const [valorTotal, setValorTotal] = useState('')

  useEffect(() => {
    if (itens.length === 0) {
      setValorTotal('0,00')
    } else {
      let valor = 0
      itens.map((item) => {
        valor += item.value
        setValorTotal(`${valor.toFixed(2)}`)
      })
    }
  }, [itens])

  const makePayment = () => {
    if(itens.length > 0) {
        setShow('delivery')
    }
    else {
        alert("Nenhum produto foi adicionado ao carrinho!")
    }
  }

  return (
    <>
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
        <p>R$ {valorTotal.replace('.', ',')}</p>
      </CartTotalValue>

      <ButtonCardapioComp onClick={makePayment}>Continuar com a entrega</ButtonCardapioComp>
    </>
  )
}

export default CartList
