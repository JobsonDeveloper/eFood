import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: Roboto, sans-serif;
    }
`

export default GlobalStyle

export const Container = styled.article`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

export const colors = {
  pink: '#E66767',
  lightOrange: '#FFEBD9',
  white: '#FFFFFF',
  whiteTow: '#FFF8F2'
}
