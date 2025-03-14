import styled from 'styled-components'
import { colors } from '../../Styles'

export const AsideContainerComp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const SideBarComp = styled.aside`
  @keyframes showAside {
    from {
      right: -360px;
    }
    to {
      right: 0;
    }
  }

  display: flex;
  flex-direction: column;
  padding: 32px 8px;
  background-color: ${colors.pink};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  animation: showAside 0.3s linear;
`

export const TitleComp = styled.h3`
  font-weight: 900;
  font-size: 24px;
  color: ${colors.lightPink};
  width: 100%;
  text-align: center;
  margin: 8px 0 24px;
`

export const AreaCloseSideBarComp = styled.div`
  background-color: ${colors.shadow};
  width: 100%;
  height: 100vh;
  cursor: pointer;
`