import ImgStars from '../../assets/icons/estrela.png'
import { ButtonComp, CardDataComp, HeaderCardComp, ImagemComp, ItemComp, StarsComp, TagsComp } from './Styles'
import { DestaqueComp, TextComp, TitleComp } from '../../Styles'
import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/RestaurantSelected'

type Props = {
  id: number
  name: string
  tags: Array<string>
  image: string
  stars: number
  description: string
  type: string
}

const RestauranteItem = ({
  name,
  tags,
  image,
  stars,
  description,
  type
}: Props) => {
  const dispatch = useDispatch()

  const setRestaurantSelected = () => {
    dispatch(adicionar(
      {
        restaurantName: name,
        restaurantImage: image,
        restaurantType: type
      }
    ))
  }

  return (
    <ItemComp>
      <ImagemComp src={image} alt="Imagem do restaurante" />

      <TagsComp>
        {tags.map((item, key) => (
          <DestaqueComp key={key}>{item}</DestaqueComp>
        ))}
      </TagsComp>

      <CardDataComp>
        <HeaderCardComp>
          <TitleComp>{name}</TitleComp>
          <StarsComp>
            <TitleComp>{stars}</TitleComp> <img src={ImgStars} alt="Estrela" />
          </StarsComp>
        </HeaderCardComp>

        <TextComp className='descricao'>{description}</TextComp>

        <ButtonComp to="/restaurante" onClick={setRestaurantSelected}>Saiba mais</ButtonComp>
      </CardDataComp>
    </ItemComp>
  )
}

export default RestauranteItem
