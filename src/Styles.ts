import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  lightPink: '#FFEBD9',
  white: '#FFFFFF',
  whiteTow: '#FFF8F2',
  shadow: 'rgba(0, 0, 0, 0.69)',
  error: '#ff',
  black: '#000'
}

export const brackepoints = {
  small: '576px',
  littleSmall: '768px',
  littleBig: '992px',
  big: '1200px'
}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      font-family: Roboto, sans-serif;
  }

  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }

  @media (max-width: ${brackepoints.big}) {
    .container {
      max-width: 950px;
    }
  }

  @media (max-width: ${brackepoints.littleBig}) {
    .container {
      max-width: 768px;
    }
  }

  @media (max-width: ${brackepoints.littleSmall}) {
    .container {
      max-width: 576px;
    }
  }

  @media (max-width: ${brackepoints.small}) {
    .container {
      max-width: 310px;
    }
  }

  .content {
    background-color: ${colors.whiteTow};
  }

  @media (min-width: ${brackepoints.small}) {
    .btnCloseAside {
      display: none;
    }
  }
`

export default GlobalStyle

export const LogoComp = styled.img`
  width: 125px;
  height: 58px;
`

export const EmphasisComp = styled.span`
  background-color: ${colors.pink};
  color: ${colors.white};
  font-weight: 700;
  font-size: 12px;
  padding: 6px 4px;
`

export const TitleComp = styled.h4<TextsProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '18px')};
  color: ${(props) =>
    props.color === 'lightPink' ? colors.lightPink : colors.pink};
`

export const TextComp = styled.p<TextsProps>`
  font-weight: 400px;
  line-height: ${(props) =>
    props.lineHeight ? props.lineHeight + 'px' : 'normal'};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  margin: 16px 0;
  color: ${(props) =>
    props.color === 'lightPink' ? colors.lightPink : colors.pink};
`

export const ButtonMenuComp = styled.button`
  width: 100%;
  color: ${colors.pink};
  background-color: ${colors.lightPink};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.whiteTow};
  }
`

export const SideBarTitleComp = styled.h4`
  font-size: 16px;
  color: ${colors.lightPink};
  font-weight: 700;
  margin-bottom: 16px;
`

export const SideBarLabelComp = styled.label`
  font-size: 14px;
  color: ${colors.lightPink};
  font-weight: 700;
  margin: 8px 0;
`

export const SideBarFormComp = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    column-gap: 34px;

    li {
      display: flex;
      flex-direction: column;
    }
  }

  input {
    background-color: ${colors.lightPink};
    outline: none;
    color: #4b4b4b;
    padding: 8px;
    border: none;
    font-size: 700;
    font-size: 14px;
    border: 1px solid transparent;

    &.input-error {
      background-color: rgb(255, 125, 32);
      border-color: ${colors.black};
    }
  }

  .cvvStyle {
    width: 88px;
  }

  .cardNumberStyle {
    width: 260px;
  }

  @media (max-width: ${brackepoints.littleSmall}) {
    input {
      min-width: 300px;
    }

    ul {
      flex-direction: column;
    }
  }
`

export const TextDescription = styled(TextComp)`
  line-height: 22px;
`
