import { Link } from 'react-router'

import styled from 'styled-components'

import { colors } from '../../Styles'

export const ItemComp = styled.li`
  position: relative;

  @media (max-width: 992px) {
    width: 310px;
  }
`

export const ImageComp = styled.img`
  width: 472px;
  height: 217px;
  display: flex;
  flex-direction: column;
  object-fit: cover;

  @media (max-width: 992px) {
    width: 310px;
    height: 142px;
  }
`

export const TagsComp = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
  column-gap: 8px;
`

export const CardDataComp = styled.article`
  padding: 8px;
  border: 1px solid ${colors.pink};
  border-top: none;
  display: flex;
  flex-direction: column;

  .descricao {
    display: -webkit-box;
    -webkit-line-clamp: 3; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const HeaderCardComp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StarsComp = styled.span`
  display: flex;
  align-items: center;
  column-gap: 8px;

  img {
    width: 21px;
    height: 21px;
  }
`

export const ButtonComp = styled(Link)`
  background-color: ${colors.pink};
  color: ${colors.white};
  font-weight: 700;
  font-size: 14px;
  padding: 6px 4px;
  text-decoration: none;
  display: inline-block;
  width: 82px;
`
