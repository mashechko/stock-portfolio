import React from "react";
import styled from "styled-components";

import SearchBox from "./SearchBox/SearchBox";
import Portfolio from "./Portfolio";

import { breakpoints } from "../../common/globalStyle";
import { GutterContainer } from "../../common/lib-components/Layout";

const Wrapper = styled(GutterContainer)`
    padding-top: 24px;
    @media (min-width: ${breakpoints.desktop.min}) {
        display: flex;
    }
`;

const BlockWrapper = styled.div`
    padding: 24px 12px;
    @media (min-width: ${breakpoints.desktop.min}) {
        width: 50%;
    }
`;

const HomePage = () => {
    return (
        <Wrapper>
            <BlockWrapper>
                <SearchBox />
            </BlockWrapper>
            <BlockWrapper>
                <Portfolio />
            </BlockWrapper>
        </Wrapper>
    );
};

export default HomePage;
