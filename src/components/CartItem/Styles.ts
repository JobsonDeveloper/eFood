import styled from 'styled-components'
import { brackepoints, colors } from '../../Styles'

export const CartItemComp = styled.li`
  display: flex;
  padding: 8px;
  background-color: ${colors.lightPink};
  width: 344px;

  @media (max-width: ${brackepoints.small}) {
    width: 300px;
  }
`

export const CartImageComp = styled.img`
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  object-fit: cover;
`

export const CartDataComp = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  flex-grow: 1;
`

export const ProductValueComp = styled.p`
  color: ${colors.pink};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`

export const ImageCloseComp = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`
