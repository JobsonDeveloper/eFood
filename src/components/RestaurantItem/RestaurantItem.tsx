import Restautante from '../../model/Restaurant'
import ImgStars from '../../assets/icons/estrela.png'

import { EmphasisComp, TextComp, TitleComp } from '../../Styles'
import * as S from './Styles'

type RestaurantProps = {
  restaurant: Restautante
}

const RestaurantItem = ({ restaurant }: RestaurantProps) => {
  const { id, avaliacao, capa, descricao, destacado, titulo, tipo } = restaurant

  return (
    <S.ItemComp>
      <S.TagsComp>
      <S.ImageComp src={capa} alt="Imagem do restaurante" />
        {destacado === true && 
          <EmphasisComp>Destaque da semana</EmphasisComp>
        }        
        <EmphasisComp>{tipo}</EmphasisComp>
      </S.TagsComp>

      <S.CardDataComp>
        <S.HeaderCardComp>
          <TitleComp>{titulo}</TitleComp>
          <S.StarsComp>
            <TitleComp>{avaliacao}</TitleComp> <img src={ImgStars} alt="Estrela" />
          </S.StarsComp>
        </S.HeaderCardComp>

        <TextComp className='descricao'>{descricao}</TextComp>

        <S.ButtonComp to={`/restaurante/${id}`}>Saiba mais</S.ButtonComp>
      </S.CardDataComp>
    </S.ItemComp>
  )
}

export default RestaurantItem
