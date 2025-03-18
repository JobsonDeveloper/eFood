import ImgStars from '../../assets/icons/estrela.png'
import { ButtonComp, CardDataComp, HeaderCardComp, ImagemComp, ItemComp, StarsComp, TagsComp } from './Styles'
import { DestaqueComp, TextComp, TitleComp } from '../../Styles'
import Restautante from '../../model/Restaurante'

type RestauranteProps = {
  restaurante: Restautante
}

const RestauranteItem = ({ restaurante }: RestauranteProps) => {
  const { id, avaliacao, capa, descricao, destacado, titulo, tipo } = restaurante

  return (
    <ItemComp>
      <ImagemComp src={capa} alt="Imagem do restaurante" />

      <TagsComp>
        {destacado === true && 
          <DestaqueComp>Destaque da semana</DestaqueComp>
        }        
        <DestaqueComp>{tipo}</DestaqueComp>
      </TagsComp>

      <CardDataComp>
        <HeaderCardComp>
          <TitleComp>{titulo}</TitleComp>
          <StarsComp>
            <TitleComp>{avaliacao}</TitleComp> <img src={ImgStars} alt="Estrela" />
          </StarsComp>
        </HeaderCardComp>

        <TextComp className='descricao'>{descricao}</TextComp>

        <ButtonComp to={`/restaurante/${id}`}>Saiba mais</ButtonComp>
      </CardDataComp>
    </ItemComp>
  )
}

export default RestauranteItem
