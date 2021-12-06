import styled from "styled-components";
import { colors } from "../globalStyle";

export const Button = styled.button`
    height: 32px;
    border-radius: 8px;
    background-color: ${colors.uiPurple};
    color: ${colors.uiLight};
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;

    :hover {
        background-color: ${colors.uiLightPurple};
        color: ${colors.uiPurple};
    }
`;
