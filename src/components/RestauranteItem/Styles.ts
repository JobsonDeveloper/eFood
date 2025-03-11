import styled from 'styled-components'
import { colors, DestaqueComp } from '../../Styles'
import { Link } from 'react-router'

export const ItemComp = styled.li`
  position: relative;
`

export const ImagemComp = styled.img`
  width: 472px;
  height: 217px;
  display: flex;
  flex-direction: column;
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
`