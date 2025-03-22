import styled from 'styled-components'
import { brackepoints, colors } from '../../Styles'

export const HeaderComp = styled.header`
  min-height: 163px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ListComp = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 64px 0;
  align-items: center;

  .links {
    color: ${colors.pink};
    font-weight: 900;
    font-size: 18px;
    text-decoration: none;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .carrinhoIcon {
    display: none;
  }

  @media (max-width: ${brackepoints.littleSmall}) {
    grid-template-columns: none;
    grid-template-areas:
      'logo'
      'link'
      'carrinho';
    row-gap: 36px;

    .linkRestaurante {
      grid-area: link;
      text-align: center;
      width: 100%;
    }

    .logo {
      grid-area: logo;
    }

    .carrinhoText {
      display: none;
    }

    .carrinhoIcon {
      grid-area: carrinho;
      display: flex;
      justify-content: center;
      font-size: 32px;
      color: ${colors.pink};
    }
  }
`

export const TitleComp = styled.h1`
  display: flex;
  align-items: end;
  justify-content: center;
  text-align: center;
  color: ${colors.pink};
  font-weight: 900;
  font-size: 36px;
  margin-bottom: 40px;
  max-width: 539px;
  height: 174px;

  @media (max-width: ${brackepoints.small}) {
    font-size: 24px;
    max-width: 310px;
  }
`

export const LinksItemComp = styled.li`
  justify-content: left;
`

export const CartItemComp = styled.li`
  text-align: end;
`

export const LogoItemComp = styled.li`
  display: flex;
  justify-content: center;
`
