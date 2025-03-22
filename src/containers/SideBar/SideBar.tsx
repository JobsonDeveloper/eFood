import { InputMask } from 'primereact/inputmask'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import { changeShow, clear } from '../../store/reducers/Cart'
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
  const [requestId, setRequestId] = useState(0)

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
      cardOwner: Yup.string().when((_values, schema) =>
        show === 'payment'
          ? schema.required('Este campo é obrigatório')
          : schema
      ),
      cardNumber: Yup.string().when((_values, schema) =>
        show === 'payment'
          ? schema.required('Este campo é obrigatório')
          : schema
      ),
      cvv: Yup.string().when((_values, schema) =>
        show === 'payment'
          ? schema.required('Este campo é obrigatório')
          : schema
      ),
      expireMonth: Yup.string().when((_values, schema) =>
        show === 'payment'
          ? schema.required('Este campo é obrigatório')
          : schema
      ),
      expireYear: Yup.string().when((_values, schema) =>
        show === 'payment'
          ? schema.required('Este campo é obrigatório')
          : schema
      )
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
    }
  })

  const showPayment = () => {
    function verifyError(inputName: string) {
      const isTouched = inputName in formValidator.touched
      const isInvalid = inputName in formValidator.errors
      const hasError = !isTouched || (isTouched && isInvalid)
      return hasError
    }

    if (
      verifyError('fullName') ||
      verifyError('address') ||
      verifyError('city') ||
      verifyError('cep') ||
      verifyError('number')
    ) {
      return
    } else {
      setShow('payment')
    }
  }

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
    if (data && isSuccess) {
      setRequestId(data.orderId)
      setShow('finish')
      dispatch(clear())
    }
  }, [isSuccess])

  return (
    <S.AsideContainerComp>
      <S.AreaCloseSideBarComp
        onClick={() => dispatch(changeShow(false))}
      ></S.AreaCloseSideBarComp>
      <S.SideBarComp>
        {show === 'list' && <CartList setShow={setShow} />}
        <form onSubmit={formValidator.handleSubmit}>
          {show === 'delivery' && (
            <SideBarFormComp>
              <SideBarTitleComp>Entrega</SideBarTitleComp>

              <SideBarLabelComp htmlFor="name">
                Quem irá receber
              </SideBarLabelComp>
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
                    className={
                      checkInputHasError('number') ? 'input-error' : ''
                    }
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
                className={
                  checkInputHasError('complement') ? 'input-error' : ''
                }
              />

              <S.SidebarContainerButtonsComp>
                <ButtonMenuComp type="button" onClick={showPayment}>
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
            <SideBarFormComp>
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
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formValidator.values.cardNumber}
                    onChange={formValidator.handleChange}
                    onBlur={formValidator.handleBlur}
                    className={`cardNumberStyle ${
                      checkInputHasError('cardNumber') ? 'input-error' : ''
                    }`}
                    mask="9999 9999 9999 9999"
                  />
                </li>

                <li>
                  <SideBarLabelComp htmlFor="cvv">CVV</SideBarLabelComp>
                  <InputMask
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formValidator.values.cvv}
                    onChange={formValidator.handleChange}
                    onBlur={formValidator.handleBlur}
                    className={`cvvStyle ${
                      checkInputHasError('cvv') ? 'input-error' : ''
                    }`}
                    mask="999"
                  />
                </li>
              </ul>

              <ul>
                <li>
                  <SideBarLabelComp htmlFor="expireMonth">
                    Mês de vencimento
                  </SideBarLabelComp>
                  <InputMask
                    type="text"
                    id="expireMonth"
                    name="expireMonth"
                    value={formValidator.values.expireMonth}
                    onChange={formValidator.handleChange}
                    onBlur={formValidator.handleBlur}
                    className={
                      checkInputHasError('expireMonth') ? 'input-error' : ''
                    }
                    mask="99"
                  />
                </li>

                <li>
                  <SideBarLabelComp htmlFor="expireYear">
                    Ano de vencimento
                  </SideBarLabelComp>
                  <InputMask
                    type="text"
                    id="expireYear"
                    name="expireYear"
                    value={formValidator.values.expireYear}
                    onChange={formValidator.handleChange}
                    onBlur={formValidator.handleBlur}
                    className={
                      checkInputHasError('expireYear') ? 'input-error' : ''
                    }
                    mask="9999"
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
        </form>
        {show === 'finish' && (
          <PurchaseCompleted setShow={setShow} requestId={requestId} />
        )}
      </S.SideBarComp>
    </S.AsideContainerComp>
  )
}

export default SideBar
