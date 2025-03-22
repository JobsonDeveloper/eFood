import ImgStars from '../../assets/icons/estrela.png'
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'
import { EmphasisComp, TextComp, TitleComp } from '../../Styles'
import * as S from './Styles'

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const { id, avaliacao, capa, descricao, destacado, titulo, tipo } = restaurant

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <S.ItemComp data-aos="zoom-in">
      <S.ImageComp src={capa} alt="Imagem do restaurante" />
      <S.TagsComp>
        {destacado === true && <EmphasisComp>Destaque da semana</EmphasisComp>}
        <EmphasisComp>{tipo}</EmphasisComp>
      </S.TagsComp>

      <S.CardDataComp>
        <S.HeaderCardComp>
          <TitleComp>{titulo}</TitleComp>
          <S.StarsComp>
            <TitleComp>{avaliacao}</TitleComp>{' '}
            <img src={ImgStars} alt="Estrela" />
          </S.StarsComp>
        </S.HeaderCardComp>

        <TextComp className="descricao">{descricao}</TextComp>

        <S.ButtonComp to={`/restaurante/${id}`}>Saiba mais</S.ButtonComp>
      </S.CardDataComp>
    </S.ItemComp>
  )
}

export default RestaurantItem
