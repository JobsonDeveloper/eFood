import { InputMask } from 'primereact/inputmask'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { changeShow } from '../../store/reducers/Cart'
import { getTotalPrice } from '../../utils/utils'
import CartList from '../CartList/CartList'
import { RootReducer } from '../../store/store'
import PurchaseCompleted from '../PurchaseCompleted/PurchaseCompleted'
import { usePurchaseMutation } from '../../services/Api'

import {
  ButtonMenuComp,
  SideBarFormComp,
  SideBarLabelComp,
  SideBarTitleComp
} from '../../Styles'
import * as S from './Styles'

const SideBar = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState('list')
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [totalValue, setTotalValue] = useState('')
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()

  const formValidator = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cvv: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Este campo é obrigatório'),
      address: Yup.string().required('Este campo é obrigatório'),
      city: Yup.string().required('Este campo é obrigatório'),
      cep: Yup.string().required('Este campo é obrigatório'),
      number: Yup.string().required('Este campo é obrigatório'),
      complement: Yup.string(),
      cardOwner: Yup.string().required('Este campo é obrigatório'),
      cardNumber: Yup.string().required('Este campo é obrigatório'),
      cvv: Yup.string().required('Este campo é obrigatório'),
      expireMonth: Yup.string().required('Este campo é obrigatório'),
      expireYear: Yup.string().required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.value
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        }
      })

      console.log(values)
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formValidator.touched
    const isInvalid = fieldName in formValidator.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  useEffect(() => {
    setTotalValue(`${getTotalPrice(items)}`)
  }, [items])

  useEffect(() => {
    if (isSuccess) setShow('finish')
  }, [isSuccess])

  return (
    <S.AsideContainerComp>
      <S.AreaCloseSideBarComp
        onClick={() => dispatch(changeShow(false))}
      ></S.AreaCloseSideBarComp>
      <S.SideBarComp>
        {show === 'list' && <CartList setShow={setShow} />}
        {show === 'delivery' && (
          <SideBarFormComp>
            <SideBarTitleComp>Entrega</SideBarTitleComp>

            <SideBarLabelComp htmlFor="name">Quem irá receber</SideBarLabelComp>
            <input
              type="text"
              id="name"
              name="fullName"
              value={formValidator.values.fullName}
              onChange={formValidator.handleChange}
              onBlur={formValidator.handleBlur}
              className={checkInputHasError('fullName') ? 'input-error' : ''}
            />

            <SideBarLabelComp htmlFor="address">Endereço</SideBarLabelComp>
            <input
              type="text"
              id="address"
              name="address"
              value={formValidator.values.address}
              onChange={formValidator.handleChange}
              onBlur={formValidator.handleBlur}
              className={checkInputHasError('address') ? 'input-error' : ''}
            />

            <SideBarLabelComp htmlFor="city">Cidade</SideBarLabelComp>
            <input
              type="text"
              id="city"
              name="city"
              value={formValidator.values.city}
              onChange={formValidator.handleChange}
              onBlur={formValidator.handleBlur}
              className={checkInputHasError('city') ? 'input-error' : ''}
            />

            <ul>
              <li>
                <SideBarLabelComp htmlFor="cep">CEP</SideBarLabelComp>
                <InputMask
                  mask="99999-999"
                  type="text"
                  id="cep"
                  name="cep"
                  value={formValidator.values.cep}
                  onChange={formValidator.handleChange}
                  onBlur={formValidator.handleBlur}
                  className={checkInputHasError('cep') ? 'input-error' : ''}
                />
              </li>

              <li>
                <SideBarLabelComp htmlFor="number">Número</SideBarLabelComp>
                <input
                  type="number"
                  id="number"
                  name="number"
                  value={formValidator.values.number}
                  onChange={formValidator.handleChange}
                  onBlur={formValidator.handleBlur}
                  className={checkInputHasError('number') ? 'input-error' : ''}
                />
              </li>
            </ul>

            <SideBarLabelComp htmlFor="complement">
              Complemento (opcional)
            </SideBarLabelComp>
            <input
              type="text"
              id="complement"
              name="complement"
              value={formValidator.values.complement}
              onChange={formValidator.handleChange}
              onBlur={formValidator.handleBlur}
              className={checkInputHasError('complement') ? 'input-error' : ''}
            />

            <S.SidebarContainerButtonsComp>
              <ButtonMenuComp
                type="button"
                onClick={() => setShow('payment')}
              >
                Continuar com o pagamento
              </ButtonMenuComp>
              <ButtonMenuComp type="button" onClick={() => setShow('list')}>
                Voltar para o carrinho
              </ButtonMenuComp>
              <ButtonMenuComp
                type="button"
                onClick={() => dispatch(changeShow(false))}
              >
                voltar
              </ButtonMenuComp>
            </S.SidebarContainerButtonsComp>
          </SideBarFormComp>
        )}
        {show === 'payment' && (
          <SideBarFormComp onSubmit={formValidator.handleSubmit}>
            <SideBarTitleComp>
              Pagamento - Valor a pagar R$ {totalValue}
            </SideBarTitleComp>

            <SideBarLabelComp htmlFor="cardOwner">
              Nome no cartão
            </SideBarLabelComp>
            <input
              type="text"
              id="cardOwner"
              name="cardOwner"
              value={formValidator.values.cardOwner}
              onChange={formValidator.handleChange}
              onBlur={formValidator.handleBlur}
              className={checkInputHasError('cardOwner') ? 'input-error' : ''}
            />

            <ul>
              <li>
                <SideBarLabelComp htmlFor="number">
                  Número do cartão
                </SideBarLabelComp>
                <InputMask
                  mask="9999 9999 9999 9999"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formValidator.values.cardNumber}
                  onChange={formValidator.handleChange}
                  onBlur={formValidator.handleBlur}
                  className={`cardNumberStyle ${
                    checkInputHasError('cardNumber') ? 'input-error' : ''
                  }`}
                />
              </li>

              <li>
                <SideBarLabelComp htmlFor="cvv">CVV</SideBarLabelComp>
                <InputMask
                  mask="999"
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formValidator.values.cvv}
                  onChange={formValidator.handleChange}
                  onBlur={formValidator.handleBlur}
                  className={`cvvStyle ${
                    checkInputHasError('cvv') ? 'input-error' : ''
                  }`}
                />
              </li>
            </ul>

            <ul>
              <li>
                <SideBarLabelComp htmlFor="expireMonth">
                  Mês de vencimento
                </SideBarLabelComp>
                <InputMask
                  mask="99"
                  type="text"
                  id="expireMonth"
                  name="expireMonth"
                  value={formValidator.values.expireMonth}
                  onChange={formValidator.handleChange}
                  onBlur={formValidator.handleBlur}
                  className={
                    checkInputHasError('expireMonth') ? 'input-error' : ''
                  }
                />
              </li>

              <li>
                <SideBarLabelComp htmlFor="expireYear">
                  Ano de vencimento
                </SideBarLabelComp>
                <InputMask
                  mask="9999"
                  type="text"
                  id="expireYear"
                  name="expireYear"
                  value={formValidator.values.expireYear}
                  onChange={formValidator.handleChange}
                  onBlur={formValidator.handleBlur}
                  className={
                    checkInputHasError('expireYear') ? 'input-error' : ''
                  }
                />
              </li>
            </ul>

            <S.SidebarContainerButtonsComp>
              <ButtonMenuComp type="submit">
                {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
              </ButtonMenuComp>
              <ButtonMenuComp
                type="button"
                onClick={() => setShow('delivery')}
              >
                Voltar para a edição de endereço
              </ButtonMenuComp>
              <ButtonMenuComp
                className="btnCloseAside"
                type="button"
                onClick={() => dispatch(changeShow(false))}
              >
                voltar
              </ButtonMenuComp>
            </S.SidebarContainerButtonsComp>
          </SideBarFormComp>
        )}
        {isSuccess && data && <PurchaseCompleted setShow={setShow} />}
      </S.SideBarComp>
    </S.AsideContainerComp>
  )
}

export default SideBar
