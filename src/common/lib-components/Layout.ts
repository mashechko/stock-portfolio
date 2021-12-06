import styled, { css } from "styled-components";
import { breakpoints } from "../globalStyle";

export const responsiveGutterPadding = css`
    padding-left: 24px;
    padding-right: 24px;

    @media (min-width: ${breakpoints.tablet.min}) {
        padding-left: 4%;
        padding-right: 4%;
    }
    @media (min-width: ${breakpoints.desktop.min}) {
        padding-left: 8%;
        padding-right: 8%;
    }
`;

export const GutterContainer = styled.div.attrs({ left: true, right: true })`
    box-sizing: border-box;
    ${responsiveGutterPadding}
`;
