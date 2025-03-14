import styled from "styled-components"
import { SidebarInputsComp } from "../../Styles"

export const InputCvvComp = styled(SidebarInputsComp)`
    width: 88px;
`

export const InputCartaoComp = styled(SidebarInputsComp)`
    width: 257px;

    @media (max-width: 576px) {
        width: 182px;
    }
`