import { useState } from 'react'
import { ButtonCardapioComp, TextDescription, TitleComp } from '../../Styles'
import { CardapioItemComp, ImageCardapioComp } from './Styles'
import DialogCardapio from '../DialogCardapio/DialogCardapio'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/SelectedDish'
import Cardapio from '../../model/Cardapio'

type Props = {
  cardapio: Cardapio
}

const CardapioItem = ({ cardapio }: Props) => {
  const { id, foto, nome, descricao, porcao, preco } = cardapio
  const [showDish, setShowDish] = useState(false)
  const dispatch = useDispatch()

  const setDataDish = () => {
    dispatch(
      adicionar({
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
    <CardapioItemComp>
      <ImageCardapioComp src={foto} alt="" />
      <TitleComp color="lightPink" fontWeight="900">
        {nome}
      </TitleComp>
      <TextDescription color="lightPink">
        {descricao}
      </TextDescription>
      <ButtonCardapioComp onClick={setDataDish}>Adicionar ao carrinho</ButtonCardapioComp>

      {showDish && <DialogCardapio setShowDish={setShowDish} />}
    </CardapioItemComp>
  )
}

export default CardapioItem
