import styled from 'styled-components'
import { colors, TextComp, TitleComp } from '../../Styles'

export const DialogComp = styled.div`
  position: fixed;
  background-color: ${colors.shadow};
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DialogDataComp = styled.article`
  background-color: ${colors.pink};
  padding: 32px;
  position: relative;
  display: flex;
  width: 1024px;
  max-height: 100vh;
  column-gap: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 0 10px;
    width: max-content;
  }

  @media (max-width: 576px) {
    padding: 25px;
  }
`

export const CloseComp = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  background-color: ${colors.pink};
`

export const DishImageComp = styled.div`
  width: 280px;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-bottom: 8px;
  }
`

export const DialogInfos = styled.div`
  ${TitleComp} {
    max-width: 656px;
    margin: 0 0 16px;

    @media (max-width: 1024px) {
      width: 250px;
      margin-top: 8px;
    }
  }

  ${TextComp} {
    max-width: 656px;
    margin: 0;

    @media (max-width: 1024px) {
      width: 250px;
    }
  }

  .emphasis {
    margin-top: 25px;
    margin-bottom: 16px;
  }
`

export const ButtonAddCarrinho = styled.button`
  background-color: ${colors.lightPink};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 8px;
  color: ${colors.pink};
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.whiteTow};
  }
`
