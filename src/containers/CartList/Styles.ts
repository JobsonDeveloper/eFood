import styled from 'styled-components'
import { brackepoints, colors } from '../../Styles'

export const CartListComp = styled.ul`
  display: grid;
  row-gap: 16px;
`

export const CartTotalValueComp = styled.div`
  width: 344px;
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;

  p {
    font-weight: 700;
    font-size: 14px;
    color: ${colors.lightPink};
  }

  @media (max-width: ${brackepoints.small}) {
    width: 300px;
  }
`

export const CartDescriptionComp = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: ${colors.lightPink};
  width: 100%;
  text-align: center;
  margin: 8px 0;
`
