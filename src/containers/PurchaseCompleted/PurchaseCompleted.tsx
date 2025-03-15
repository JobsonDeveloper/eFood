import { Dispatch, SetStateAction } from 'react'
import {
  ButtonCardapioComp,
  SidebarFormComp,
  SideBarTitleComp
} from '../../Styles'
import { TextComp } from './Styles'
import { useDispatch } from 'react-redux'
import { esvaziar } from '../../store/reducers/Carrinho'

type Props = {
  setShow: Dispatch<SetStateAction<string>>
}

const PurchaseCompleted = ({ setShow }: Props) => {
  const dispatch = useDispatch()
  let order = Math.random() * 20000;
  order = Math.floor(order + 1);

  const purchaseCompleted = () => {
    dispatch(esvaziar())
    setShow('list')
  }

  return (
    <SidebarFormComp>
      <SideBarTitleComp>Pedido realizado - {order}</SideBarTitleComp>

      <TextComp>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </TextComp>

      <TextComp>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </TextComp>

      <TextComp>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.{' '}
      </TextComp>

      <TextComp>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite! <br />
      </TextComp>

      <ButtonCardapioComp type="button" onClick={purchaseCompleted}>
        Concluir
      </ButtonCardapioComp>
    </SidebarFormComp>
  )
}

export default PurchaseCompleted
