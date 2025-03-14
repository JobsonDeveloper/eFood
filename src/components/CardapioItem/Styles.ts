import styled from 'styled-components'
import { colors, TextComp, TitleComp } from '../../Styles'

export const CardapioItemComp = styled.li`
  background-color: ${colors.pink};
  width: 320px;
  padding: 8px;

  ${TitleComp} {
    margin-top: 8px;
  }

  ${TextComp} {
    margin: 8px 0;
  }
`

export const ImageCardapioComp = styled.img`
  width: 304px;
  height: 167px;
`
