import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

import { StockInfoRes } from "../../types";
import { useGetApiData } from "../../hooks/useApiGetData";
import { formatNumber } from "../../helpers/numberFormat";
import { buildStockInfoUrl } from "../../helpers/getPaths";

import { Button } from "../../common/lib-components/Button";
import { GutterContainer } from "../../common/lib-components/Layout";
import { H3, H4, H6, Paragraph } from "../../common/lib-components/Typography";

const Wrapper = styled(GutterContainer)`
    padding-top: 24px;
`;

const LoaderWrapper = styled.div`
    padding-top: 24px;
`;

const Heading = styled(H3)`
    margin-bottom: 12px;
`;

const GoBackButton = styled(Button)`
    width: 160px;
    height: 40px;
`;

const MainInfoWrapper = styled.div`
    padding: 24px 0;
`;

const InfoItemWrapper = styled.div`
    display: flex;
    padding: 4px 0;
    align-items: baseline;
`;

const InfoItemText = styled(Paragraph)`
    font-size: 16px;
    line-height: 20px;
    margin-left: 4px;
`;

const Info = (): JSX.Element => {
    const { id: stockKey } = useParams<{ id: string }>();

    const { loading, data } = useGetApiData<StockInfoRes>({
        path: buildStockInfoUrl(stockKey),
    });

    return (
        <Wrapper>
            <Link to="/home">
                <GoBackButton>Go Back</GoBackButton>
            </Link>
            {loading && (
                <LoaderWrapper>
                    <H4>Loading ...</H4>
                </LoaderWrapper>
            )}
            {!loading &&
                (data.Name ? (
                    <>
                        <MainInfoWrapper>
                            <Heading>{data.Name}</Heading>
                            <InfoItemWrapper>
                                <H6>Address: </H6>
                                <InfoItemText>{data.Address}</InfoItemText>
                            </InfoItemWrapper>
                            <InfoItemWrapper>
                                <H6>Market Capitalization: </H6>
                                <InfoItemText>
                                    {formatNumber(data.MarketCapitalization)}
                                </InfoItemText>
                            </InfoItemWrapper>
                        </MainInfoWrapper>
                        <Paragraph>{data.Description}</Paragraph>
                    </>
                ) : data.Note ? (
                    <Paragraph>{data.Note}</Paragraph>
                ) : (
                    <H4>Nothing to display</H4>
                ))}
        </Wrapper>
    );
};

export default Info;
