import { useDispatch } from 'react-redux'
import {
  AreaCloseSideBarComp,
  AsideContainerComp,
  SideBarComp,
  TitleComp
} from './Styles'
import { changeShow } from '../../store/reducers/Carrinho'
import { useState } from 'react'
import CartList from '../CartList/CartList'
import DeliveryForm from '../DeliveryForm/DeliveryForm'
import PaymentForm from '../PaymentForm/PaymentForm'
import PurchaseCompleted from '../PurchaseCompleted/PurchaseCompleted'

const SideBar = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState('payment')
  const ShowContent = () => {
    switch (show) {
      case 'list':
        return <CartList setShow={setShow}/>
        break
      case 'delivery':
        return <DeliveryForm setShow={setShow}/>
        break
      case 'payment':
        return <PaymentForm setShow={setShow}/>
        break
      default:
        return <PurchaseCompleted setShow={setShow}/>
        break
    }
  }

  return (
    <AsideContainerComp>
      <AreaCloseSideBarComp
        onClick={() => dispatch(changeShow(false))}
      ></AreaCloseSideBarComp>
      <SideBarComp>
        <ShowContent />
      </SideBarComp>
    </AsideContainerComp>
  )
}

export default SideBar
