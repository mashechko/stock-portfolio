import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Stock } from "../../types";
import { getInfoPath } from "../../helpers/getPaths";
import { RootState, useAppDispatch } from "../../store/store";
import { removeStock } from "../../actions/stockPortfolioActions";

import { H4 } from "../../common/lib-components/Typography";
import { Button } from "../../common/lib-components/Button";
import ScrollableTable, {
    TableHeader,
    TableRow,
} from "../../common/lib-components/Table";

const Heading = styled(H4)`
    margin-bottom: 12px;
`;

const RemoveButton = styled(Button)`
    padding: 0 8px;
    font-size: 14px;
`;

const Portfolio = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const data: Stock[] = useSelector(
        (state: RootState) => state.stocksPortfolio.stocks
    );

    const onRemoveClick = (stockKey: string): void => {
        dispatch(removeStock({ stockKey }));
    };

    const headings: TableHeader[] = [
        { key: "name", content: "Company Name" },
        { key: "symbol", content: "Symbol" },
        { key: "actions", content: "Actions" },
    ];

    const makeRow = (rowData: Stock): TableRow => {
        const { symbol, name } = rowData;

        const removeButton = (
            <RemoveButton onClick={() => onRemoveClick(symbol)}>
                Remove
            </RemoveButton>
        );

        const infoLink = getInfoPath(symbol);

        return {
            key: symbol,
            cells: [
                { key: "name", content: name, link: infoLink },
                { key: "symbol", content: symbol, link: infoLink },
                { key: "actions", content: removeButton },
            ],
        };
    };

    const rows: TableRow[] = (data || []).map(makeRow);

    return (
        <>
            <Heading>Portfolio</Heading>
            <ScrollableTable rows={rows} headings={headings} />
        </>
    );
};

export default Portfolio;
