import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../globalStyle";
import { Link } from "react-router-dom";

const borderStyles = css`
    border-top: 1px solid ${colors.uiLightGray};
`;

const ScrollableWrapper = styled.div`
    min-width: 100%;
    overflow-x: scroll;
    border-radius: 16px;
    border: 1px solid ${colors.uiLightGray};
`;

const Wrapper = styled.div`
    display: inline-block;
    min-width: 100%;
`;

const Table = styled.table`
    color: ${colors.uiBlack};
    background-color: ${colors.uiLight};
    min-width: 100%;
    border-radius: 16px 16px 0 0;
    border-collapse: separate;
`;

const THead = styled.thead``;

const Heading = styled.th`
    padding: 16px 24px;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    font-weight: 700;
    letter-spacing: -0.5px;
    color: ${colors.uiBlack};
`;

const HeadRow = styled.tr``;

const CellRow = styled.tr`
    cursor: ${({ onClick }) => (onClick ? "pointer" : "inherit")};
`;

const TBody = styled.tbody``;

const Cell = styled.td`
    padding: 12px 24px;
    font-size: 14px;
    line-height: 32px;
    vertical-align: top;
    ${borderStyles};
`;

export type TableHeader = {
    key: string;
    content: string;
};

type TableCell = {
    key: string;
    content: string | JSX.Element;
    link?: string;
};
export type TableRow = {
    key: string;
    cells: TableCell[];
};

const ScrollableTable = (props: {
    rows: TableRow[];
    headings: TableHeader[];
}) => {
    const { rows, headings } = props;
    return (
        <ScrollableWrapper>
            <Wrapper>
                <Table>
                    <THead>
                        <HeadRow>
                            {headings.map((head) => (
                                <Heading key={head.key}>{head.content}</Heading>
                            ))}
                        </HeadRow>
                    </THead>
                    <TBody>
                        {rows?.map((row) => (
                            <CellRow key={row.key}>
                                {row.cells.map((cell) => (
                                    <Cell key={cell.key}>
                                        {cell.link && (
                                            <Link to={cell.link}>
                                                {cell.content}
                                            </Link>
                                        )}
                                        {!cell.link && cell.content}
                                    </Cell>
                                ))}
                            </CellRow>
                        ))}
                    </TBody>
                </Table>
            </Wrapper>
        </ScrollableWrapper>
    );
};

export default ScrollableTable;
