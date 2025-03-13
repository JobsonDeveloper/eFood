import styled from "styled-components"
import { colors } from "../../Styles"

export const HeroComp = styled.article`
  display: flex;
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
