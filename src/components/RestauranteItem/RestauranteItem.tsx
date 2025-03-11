import { Link } from 'react-router'
import ImgStars from '../../assets/icons/estrela.png'
import { ButtonComp, CardDataComp, HeaderCardComp, ImagemComp, ItemComp, StarsComp, TagsComp } from './Styles'
import { DestaqueComp, TextComp, TitleComp } from '../../Styles'

type Props = {
  id: number
  name: string
  tags: Array<string>
  image: string
  stars: number
  description: string
}

const RestauranteItem = ({
  id,
  name,
  tags,
  image,
  stars,
  description
}: Props) => {
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

        <TextComp>{description}</TextComp>

        <ButtonComp to="/">Saiba mais</ButtonComp>
      </CardDataComp>
    </ItemComp>
  )
}

export default RestauranteItem
