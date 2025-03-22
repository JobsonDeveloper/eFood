import { Dispatch, SetStateAction } from 'react'

import {
  ButtonMenuComp,
  SideBarFormComp,
  SideBarTitleComp
} from '../../Styles'
import { TextComp } from './Styles'

const PurchaseCompleted = ({ setShow, requestId }: PurchaseCompletedProps) => {

  const purchaseCompleted = () => {
    setShow('list')
  }

  return (
    <SideBarFormComp>
      <SideBarTitleComp>Pedido realizado - {requestId}</SideBarTitleComp>

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

      <ButtonMenuComp type="button" onClick={purchaseCompleted}>
        Concluir
      </ButtonMenuComp>
    </SideBarFormComp>
  )
}

export default PurchaseCompleted
