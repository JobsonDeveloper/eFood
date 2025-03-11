import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  lightPink: '#FFEBD9',
  white: '#FFFFFF',
  whiteTow: '#FFF8F2'
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

  .content {
    background-color: ${colors.whiteTow};
  }
`

export default GlobalStyle

export const LogoComp = styled.img`
  width: 125px;
  height: 58px;
`

export const DestaqueComp = styled.span`
  background-color: ${colors.pink};
  color: ${colors.white};
  font-weight: 700;
  font-size: 12px;
  padding: 6px 4px;
`

type TextsProps = {
  color?: string
  fontSize?: number
  lineHeight?: string
}

export const TitleComp = styled.h4<TextsProps>`
  font-weight: 700px;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '18px')};
  color: ${(props) => (props.color === 'white' ? colors.white : colors.pink)};
`

export const TextComp = styled.h4<TextsProps>`
  font-weight: 400px;
  font-size: ${(props) => (props.lineHeight ? props.lineHeight + 'px' : 'normal')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  margin: 16px 0;
  color: ${(props) => (props.color === 'white' ? colors.white : colors.pink)};
`
