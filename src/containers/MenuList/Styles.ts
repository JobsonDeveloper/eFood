import styled from 'styled-components'
import { brackepoints } from '../../Styles'

export const MenuListComp = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 56px 0 120px 0;
  gap: 32px;
  justify-items: center;

  @media (max-width: ${brackepoints.big}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${brackepoints.littleSmall}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
