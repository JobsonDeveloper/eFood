import { Link } from 'react-router'
import styled from 'styled-components'
import { colors } from '../../Styles'

export const HeaderComp = styled.header`
  min-height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ListComp = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 64px 0;
  align-items: center;

  li {
    display: flex;
    justify-content: center;
  }

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
`

export const TitleComp = styled.h1`
  color: ${colors.pink};
  font-weight: 900;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
`

export const HeroComp = styled.article`
  display: flex;
  height: 280px;
  align-items: end;
  justify-content: center;
`

export const HeroRestaurantComp = styled.div`
  background-size: cover;
  height: 280px;
  width: 100%;
  background-position: center;
  position: relative;
`

export const HeroDataComp = styled.article`
  padding: 24px 0 32px 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
    .typeOfFood,
  .restaurantName {
    font-weight: 100;
    font-size: 32px;
    color: ${colors.white};
  }

  .restaurantName {
    font-weight: 900;
  }
  }
`
