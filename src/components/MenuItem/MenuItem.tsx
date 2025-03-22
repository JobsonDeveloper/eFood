import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import AOS from 'aos'

import { add } from '../../store/reducers/SelectedDish'

import 'aos/dist/aos.css'
import { ButtonMenuComp, TextDescription, TitleComp } from '../../Styles'
import * as S from './Styles'

const MenuItem = ({ menu, setShowDish }: MenuItemProps) => {
  const { id, foto, nome, descricao, porcao, preco } = menu
  const dispatch = useDispatch()

  const setDataDish = () => {
    dispatch(
      add({
        id,
        name: nome,
        description: descricao,
        emphasis: porcao,
        image: foto,
        value: preco
      })
    )

    setShowDish(true)
  }

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <S.MenuItemComp data-aos="zoom-in">
      <S.ImageMenuComp src={foto} alt="" />
      <TitleComp color="lightPink" fontWeight="900">
        {nome}
      </TitleComp>
      <TextDescription color="lightPink">{descricao}</TextDescription>
      <ButtonMenuComp onClick={setDataDish}>
        Adicionar ao carrinho
      </ButtonMenuComp>
    </S.MenuItemComp>
  )
}

export default MenuItem
