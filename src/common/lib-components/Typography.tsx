import styled from "styled-components";
import { colors } from "../globalStyle";

const { uiBlack, uiPurple } = colors;

export const H3 = styled.h3`
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    color: ${uiPurple};
`;

export const H4 = styled.h4`
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.5px;
    color: ${uiPurple};
`;

export const H6 = styled.h6`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: ${uiBlack};
`;

export const Paragraph = styled.p`
    font-size: 18px;
    line-height: 32px;
    color: ${uiBlack};
`;

export const Link = styled.a`
    font-size: 14px;
    line-height: 32px;
    color: ${uiBlack};
`;
