import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  lightPink: '#FFEBD9',
  white: '#FFFFFF',
  whiteTow: '#FFF8F2',
  shadow: 'rgba(0, 0, 0, 0.69)'
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

  .btnCloseAside {
    margin-top: 8px;

    @media (min-width: 576px) {
      display: none;
    }
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
  fontWeight?: string
}

export const TitleComp = styled.h4<TextsProps>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '18px')};
  color: ${(props) => (props.color === 'lightPink' ? colors.lightPink : colors.pink)};
`


export const TextComp = styled.p<TextsProps>`
  font-weight: 400px;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight + 'px' : 'normal')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  margin: 16px 0;
  color: ${(props) => (props.color === 'lightPink' ? colors.lightPink : colors.pink)};
`

export const ButtonCardapioComp = styled.button`
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

export const SidebarContainerButtonsComp = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    row-gap: 8px;
`

export const SidebarInputsComp = styled.input`
  width: 100%;
  background-color: ${colors.lightPink};
  outline: none;
  color: #4B4B4B;
  padding: 8px;
  border: none;
  font-size: 700;
  font-size: 14px;
`

export const SidebarFormComp = styled.form`
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
`