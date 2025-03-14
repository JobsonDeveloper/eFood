import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import {
  ButtonCardapioComp,
  SidebarContainerButtonsComp,
  SidebarFormComp,
  SidebarInputsComp,
  SideBarLabelComp,
  SideBarTitleComp
} from '../../Styles'
import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from 'react'
import { InputCartaoComp, InputCvvComp } from './Styles'
import { changeShow } from '../../store/reducers/Carrinho'

type Props = {
  setShow: Dispatch<SetStateAction<string>>
}

const PaymentForm = ({ setShow }: Props) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)
  const [cvv, setCvv] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)
  const { itens } = useSelector((state: RootReducer) => state.carrinho)
  const [valorTotal, setValorTotal] = useState('')
  const dispatch = useDispatch()

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

  const finishRequest = (ev: FormEvent) => {
    ev.preventDefault()

    if (name === '' || number === 0 || cvv === 0 || month === 0 || year === 0) {
      alert('Verifique se todos os campos foram preenchidos!')
    } else {
      setShow('finish')
    }
  }

  return (
    <SidebarFormComp onSubmit={finishRequest}>
      <SideBarTitleComp>
        Pagamento - Valor a pagar R$ {valorTotal}
      </SideBarTitleComp>

      <SideBarLabelComp htmlFor="name">Nome no cartão</SideBarLabelComp>
      <SidebarInputsComp
        type="text"
        id="name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />

      <ul>
        <li>
          <SideBarLabelComp htmlFor="number">Número do cartão</SideBarLabelComp>
          <InputCartaoComp
            type="number"
            id="number"
            value={number}
            onChange={(ev) => setNumber(parseInt(ev.target.value))}
          />
        </li>

        <li>
          <SideBarLabelComp htmlFor="cvv">CVV</SideBarLabelComp>
          <InputCvvComp
            type="number"
            id="cvv"
            value={cvv}
            onChange={(ev) => setCvv(parseInt(ev.target.value))}
          />
        </li>
      </ul>

      <ul>
        <li>
          <SideBarLabelComp htmlFor="month">Mês de vencimento</SideBarLabelComp>
          <SidebarInputsComp
            type="number"
            id="month"
            value={month}
            onChange={(ev) => setMonth(parseInt(ev.target.value))}
          />
        </li>

        <li>
          <SideBarLabelComp htmlFor="year">Ano de vencimento</SideBarLabelComp>
          <SidebarInputsComp
            type="number"
            id="year"
            value={year}
            onChange={(ev) => setYear(parseInt(ev.target.value))}
          />
        </li>
      </ul>

      <SidebarContainerButtonsComp>
        <ButtonCardapioComp type="submit">
          Finalizar pagamento
        </ButtonCardapioComp>
        <ButtonCardapioComp type="button" onClick={() => setShow('delivery')}>
          Voltar para a edição de endereço
        </ButtonCardapioComp>
        <ButtonCardapioComp
          className="btnCloseAside"
          onClick={() => dispatch(changeShow(false))}
        >
          voltar
        </ButtonCardapioComp>
      </SidebarContainerButtonsComp>
    </SidebarFormComp>
  )
}

export default PaymentForm
