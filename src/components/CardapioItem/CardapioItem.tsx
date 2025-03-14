import { useState } from 'react'
import { ButtonCardapioComp, TextComp, TitleComp } from '../../Styles'
import { CardapioItemComp, ImageCardapioComp } from './Styles'
import DialogCardapio from '../DialogCardapio/DialogCardapio'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/SelectedDish'

type Props = {
  id: number
  image: string
  name: string
  description: string
  details: string
  emphasis: string
  value: number
}

const CardapioItem = ({
  id,
  image: imageDish,
  name: nameDish,
  emphasis: emphesisDish,
  value: valueDish,
  description: descriptionDish,
  details
}: Props) => {
  const [showDish, setShowDish] = useState(false)
  const dispatch = useDispatch()

  const setDataDish = () => {
    dispatch(
      adicionar({
        name: nameDish,
        description: details,
        emphasis: emphesisDish,
        image: imageDish,
        value: valueDish
      })
    )

    setShowDish(true)
  }

  return (
    <CardapioItemComp>
      <ImageCardapioComp src={imageDish} alt="" />
      <TitleComp color="lightPink" fontWeight="900">
        {nameDish}
      </TitleComp>
      <TextComp color="lightPink" lineHeight="22">
        {descriptionDish}
      </TextComp>
      <ButtonCardapioComp onClick={setDataDish}>Adicionar ao carrinho</ButtonCardapioComp>

      {showDish && <DialogCardapio setShowDish={setShowDish} />}
    </CardapioItemComp>
  )
}

export default CardapioItem
