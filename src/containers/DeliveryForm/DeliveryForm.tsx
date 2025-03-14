import { useDispatch } from 'react-redux'
import { changeShow } from '../../store/reducers/Carrinho'
import {
  ButtonCardapioComp,
  SidebarContainerButtonsComp,
  SidebarFormComp,
  SidebarInputsComp,
  SideBarLabelComp,
  SideBarTitleComp
} from '../../Styles'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'

type Props = {
  setShow: Dispatch<SetStateAction<string>>
}

const DeliveryForm = ({ setShow }: Props) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [cep, setCep] = useState(0)
  const [number, setNumber] = useState(0)
  const [complement, setComplement] = useState('')
  const dispatch = useDispatch()

  const makePayment = (ev: FormEvent) => {
    ev.preventDefault()

    if (
      name === '' ||
      address === '' ||
      city === '' ||
      cep === 0 ||
      number === 0
    ) {
      alert('Verifique se os campos obrigatórios foram preenchidos!')
    } else {
      setShow('payment')
    }
  }

  return (
    <SidebarFormComp onSubmit={makePayment}>
      <SideBarTitleComp>Entrega</SideBarTitleComp>

      <SideBarLabelComp htmlFor="name">Quem irá receber</SideBarLabelComp>
      <SidebarInputsComp
        type="text"
        id="name"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />

      <SideBarLabelComp htmlFor="address">Endereço</SideBarLabelComp>
      <SidebarInputsComp
        type="text"
        id="address"
        value={address}
        onChange={(ev) => setAddress(ev.target.value)}
      />

      <SideBarLabelComp htmlFor="city">Cidade</SideBarLabelComp>
      <SidebarInputsComp
        type="text"
        id="city"
        value={city}
        onChange={(ev) => setCity(ev.target.value)}
      />

      <ul>
        <li>
          <SideBarLabelComp htmlFor="cep">CEP</SideBarLabelComp>
          <SidebarInputsComp
            type="number"
            id="cep"
            value={cep}
            onChange={(ev) => setCep(parseInt(ev.target.value))}
          />
        </li>

        <li>
          <SideBarLabelComp htmlFor="number">Número</SideBarLabelComp>
          <SidebarInputsComp
            type="number"
            id="number"
            value={number}
            onChange={(ev) => setNumber(parseInt(ev.target.value))}
          />
        </li>
      </ul>

      <SideBarLabelComp htmlFor="complement">
        Complemento (opcional)
      </SideBarLabelComp>
      <SidebarInputsComp
        type="text"
        id="complement"
        value={complement}
        onChange={(ev) => setComplement(ev.target.value)}
      />

      <SidebarContainerButtonsComp>
        <ButtonCardapioComp type="submit">
          Continuar com o pagamento
        </ButtonCardapioComp>
        <ButtonCardapioComp type="button" onClick={() => setShow('list')}>
          Voltar para o carrinho
        </ButtonCardapioComp>
        <ButtonCardapioComp
          onClick={() => dispatch(changeShow(false))}
        >
          voltar
        </ButtonCardapioComp>
      </SidebarContainerButtonsComp>
    </SidebarFormComp>
  )
}

export default DeliveryForm
