import { useDispatch } from 'react-redux'
import { useState } from 'react'

import MenuDialog from '../MenuDialog/MenuDialog'
import { add } from '../../store/reducers/SelectedDish'
import Menu from '../../model/Menu'

import { ButtonMenuComp, TextDescription, TitleComp } from '../../Styles'
import * as S from './Styles'

type Props = {
  menu: Menu
}

const MenuItem = ({ menu }: Props) => {
  const { id, foto, nome, descricao, porcao, preco } = menu
  const [showDish, setShowDish] = useState(false)
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


  return (
    <S.MenuItemComp>
      <S.ImageMenuComp src={foto} alt="" />
      <TitleComp color="lightPink" fontWeight="900">
        {nome}
      </TitleComp>
      <TextDescription color="lightPink">
        {descricao}
      </TextDescription>
      <ButtonMenuComp onClick={setDataDish}>Adicionar ao carrinho</ButtonMenuComp>

      {showDish && <MenuDialog setShowDish={setShowDish} />}
    </S.MenuItemComp>
  )
}

export default MenuItem
