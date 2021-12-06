import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Stock } from "../../../types";
import { RootState, useAppDispatch } from "../../../store/store";
import { addStock } from "../../../actions/stockPortfolioActions";

import { colors } from "../../../common/globalStyle";
import { Button } from "../../../common/lib-components/Button";
import { H4, Paragraph } from "../../../common/lib-components/Typography";

const Wrapper = styled.div`
    padding-top: 24px;
`;

const ResultWrapper = styled.div`
    padding: 12px;
    border-radius: 8px;
    border: 1px solid ${colors.uiLightGray};
`;

const Heading = styled(H4)`
    margin-bottom: 12px;
`;

const AddButton = styled(Button)`
    width: 32px;
`;

const ItemWrapper = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
`;

const StockItem = (props: {
    stock: Stock;
    addNewStock: (stock: Stock) => void;
}): JSX.Element => {
    const { stock, addNewStock } = props;
    return (
        <ItemWrapper>
            <Paragraph>
                {stock.symbol} -{" "}
                {stock.name.length > 25
                    ? `${stock.name.substring(0, 25)}...`
                    : stock.name}
            </Paragraph>
            <AddButton onClick={() => addNewStock(stock)}>+</AddButton>
        </ItemWrapper>
    );
};

const SearchResult = (props: { stocks: Stock[] }): JSX.Element => {
    const { stocks } = props;

    const dispatch = useAppDispatch();
    const userStocks = useSelector(
        (state: RootState) => state.stocksPortfolio.stocks
    );

    const addNewStock = (stock: Stock): void => {
        if (userStocks.find((userStock) => userStock.symbol === stock.symbol)) {
            return;
        }
        dispatch(addStock({ stock }));
    };

    return (
        <Wrapper>
            <Heading>Search Results</Heading>
            {!!stocks.length && (
                <ResultWrapper>
                    {stocks.map((stock) => {
                        return (
                            <StockItem
                                key={stock.symbol}
                                stock={stock}
                                addNewStock={addNewStock}
                            />
                        );
                    })}
                </ResultWrapper>
            )}
            {!stocks.length && <Paragraph>Nothing to display</Paragraph>}
        </Wrapper>
    );
};

export default SearchResult;
