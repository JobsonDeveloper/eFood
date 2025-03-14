import { Dispatch, SetStateAction } from 'react'
import { ButtonCardapioComp, SidebarFormComp, SideBarTitleComp } from '../../Styles'

type Props = {
  setShow: Dispatch<SetStateAction<string>>
}

const PurchaseCompleted = ({ setShow }: Props) => {
  return (
    <SidebarFormComp>
      <SideBarTitleComp>Pedido realizado - ORDER_ID</SideBarTitleComp>

      <p></p>

      <ButtonCardapioComp type="button" onClick={() => setShow('list')}>
        Continuar com o pagamento
      </ButtonCardapioComp>
    </SidebarFormComp>
  )
}

export default PurchaseCompleted
