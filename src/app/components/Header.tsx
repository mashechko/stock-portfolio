import React from "react";
import styled from "styled-components";

import { H3 } from "../../common/lib-components/Typography";
import { breakpoints, colors } from "../../common/globalStyle";

const Wrapper = styled.div`
    height: 72px;
    padding: 12px 0 12px 24px;
    box-shadow: 0 2px 4px 0 ${colors.uiLightGray};
`;

const Heading = styled(H3)`
    @media (min-width: ${breakpoints.tablet.min}) and (max-width: ${breakpoints
            .tablet.max}) {
        font-size: 32px;
        line-height: 40px;
    }
    @media (max-width: ${breakpoints.mobile.max}) {
        font-size: 24px;
        line-height: 28px;
    }
`;

const Header = (): JSX.Element => {
    return (
        <Wrapper>
            <Heading>SDH Frontend Homework</Heading>
        </Wrapper>
    );
};

export default Header;
