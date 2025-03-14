import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import {
  AreaCloseSideBarComp,
  AsideContainerComp,
  CarrinhoDescriptionComp,
  CarrinhoList,
  CartTotalValue,
  SideBarComp,
  TitleComp
} from './Styles'
import CarrinhoItem from '../../components/CarrinhoItem/CarrinhoItem'
import { changeShow } from '../../store/reducers/Carrinho'
import { useEffect, useState } from 'react'
import { ButtonCardapioComp } from '../../Styles'

const SideBar = () => {
  const { itens } = useSelector((state: RootReducer) => state.carrinho)
  const dispatch = useDispatch()
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

  return (
    <AsideContainerComp>
      <AreaCloseSideBarComp
        onClick={() => dispatch(changeShow(false))}
      ></AreaCloseSideBarComp>
      <SideBarComp>
        <TitleComp>Carrinho</TitleComp>

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
            <CarrinhoDescriptionComp>Sem itens no carrinho</CarrinhoDescriptionComp>
          )}
        </CarrinhoList>

        <CartTotalValue>
          <p>Valor total</p>
          <p>R$ {valorTotal.replace('.', ',')}</p>
        </CartTotalValue>

        <ButtonCardapioComp>Continuar com a entrega</ButtonCardapioComp>
      </SideBarComp>
    </AsideContainerComp>
  )
}

export default SideBar
