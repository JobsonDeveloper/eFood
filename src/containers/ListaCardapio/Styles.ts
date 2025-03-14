import styled from "styled-components";

export const CardapioListComp = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 56px 0 120px 0;
    gap: 32px;

    @media (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }
`