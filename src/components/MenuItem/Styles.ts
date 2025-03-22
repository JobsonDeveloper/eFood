import styled from 'styled-components'
import { colors, TextComp, TitleComp } from '../../Styles'

export const MenuItemComp = styled.li`
  background-color: ${colors.pink};
  width: 320px;
  padding: 8px;

  ${TitleComp} {
    margin-top: 8px;
  }

  ${TextComp} {
    margin: 8px 0;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const ImageMenuComp = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
`