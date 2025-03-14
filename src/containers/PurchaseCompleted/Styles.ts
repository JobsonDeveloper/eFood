import styled from "styled-components";
import { colors } from "../../Styles";

export const TextComp = styled.p`
    width: 344px;
    color: ${colors.lightPink};
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;

    @media (max-width: 576px) {
        width: 304px;
    }
`

