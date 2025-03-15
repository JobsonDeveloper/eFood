import styled from "styled-components";
import { colors } from "../../Styles";

export const LoadingContainerComp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`

export const LoadingComp = styled.ul`
    display: flex;
    column-gap: 10px;
    height: 60px;
    width: 60px;
    position: relative;

    @keyframes moveItemLoading {
        from {
            top: 0;
        }
        50% {
            top: 50px;
            background-color: ${colors.pink};
        }
        to {
            top: 0;
        }
    }

    li {
        width: 8px;
        height: 8px;
        border-radius: 100%;
        position: absolute;
        animation: moveItemLoading 1.5s linear infinite;
        background-color: transparent;
        
        &:nth-child(1) {
            left: 0px;
        }
        &:nth-child(2) {
            left: 20px;
            animation-delay: .3s;
        }
        &:nth-child(3) {
            left: 40px;
            animation-delay: .6s;
        }
    }

`