import styled from 'styled-components'
import { brackepoints, colors, TextComp, TitleComp } from '../../Styles'

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
  width: 100%;
  max-width: 950px;
  max-height: 100vh;
  column-gap: 24px;

  @media (max-width: ${brackepoints.littleBig}) {
    flex-direction: column;
    margin: 0 10px;
    width: max-content;
    padding: 0;
  }
`

export const CloseComp = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;

  @media (max-width: ${brackepoints.littleBig}) {
    filter: drop-shadow(2px 2px 0px #000);
    top: 3px;
    right: 3px;
    width: 24px;
    height: 24px;
  }
`

export const DishImageComp = styled.div`
  width: 280px;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: ${brackepoints.littleBig}) {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`

export const DialogInfosComp = styled.div`
  ${TitleComp} {
    max-width: 580px;
    margin: 0 0 16px;
  }

  ${TextComp} {
    max-width: 580px;
    margin: 0;
  }

  .emphasis {
    margin-top: 25px;
    margin-bottom: 16px;
  }

  @media (max-width: ${brackepoints.littleBig}) {
    padding: 10px;

    ${TitleComp} {
      margin-top: 8px;
      text-align: center;
    }
  }
`

export const ButtonAddCartComp = styled.button`
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

  @media (max-width: ${brackepoints.littleBig}) {
    width: 100%;
    height: 40px;
  }
`
