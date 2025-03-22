import styled from 'styled-components'
import { brackepoints } from '../../Styles'

export const ListComp = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 80px 0 120px 0;
  column-gap: 80px;
  row-gap: 48px;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    /* column-gap: 10px;
    row-gap: 12px; */
  }

  @media (max-width: ${brackepoints.littleSmall}) {
    grid-template-columns: 1fr;
    padding: 40px 5px 60px 5px;
  }
`
