import styled from 'styled-components'
import { brackepoints, colors, TextComp } from '../../Styles'

export const FooterComp = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.lightPink};
  height: 298px;
  padding: 40px 0;

  ${TextComp} {
    text-align: center;
    max-width: 480px;
    margin: 0;
  }

  @media (max-width: ${brackepoints.small}) {
    ${TextComp} {
      padding: 0 15px;
    }
  }
`

export const SocialLinksComp = styled.ul`
  display: flex;
  column-gap: 8px;
  margin: 32px 0 80px 0;
`
