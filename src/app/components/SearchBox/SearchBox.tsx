import React, { useState } from "react";
import styled from "styled-components";

import SearchResult from "./SearchResult";
import { Stock, StocksResItem } from "../../../types";
import { useDebounce } from "../../../hooks/useDebounce";
import { useStocksSearch } from "../../../hooks/useStocksSearch";

import TextInput from "../../../common/lib-components/TextInput";
import { H4, Paragraph } from "../../../common/lib-components/Typography";

const Heading = styled(H4)`
    margin-bottom: 12px;
`;

const LoaderWrapper = styled.div`
    padding-top: 24px;
`;

const SearchBox = (): JSX.Element => {
    const [searchValue, setSearchValue] = useState<string>("");
    const debouncedQuery = useDebounce<string>(searchValue, 1000);
    const { data, loading } = useStocksSearch(debouncedQuery);

    const onInputChange = (value: string): void => {
        setSearchValue(value);
    };

    const mapStock = (stock: StocksResItem): Stock => {
        return {
            symbol: stock["1. symbol"],
            name: stock["2. name"],
        };
    };

    const stocks = (data?.bestMatches || []).map(mapStock);

    return (
        <>
            <Heading>Company Name</Heading>
            <TextInput
                name="searchInput"
                value={searchValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    onInputChange(event.target.value);
                }}
                placeholder="type here to search"
            />
            {loading && (
                <LoaderWrapper>
                    <H4>Loading ...</H4>
                </LoaderWrapper>
            )}
            {!loading &&
                (data.Note ? (
                    <Paragraph>{data.Note}</Paragraph>
                ) : (
                    <SearchResult stocks={stocks} />
                ))}
        </>
    );
};

export default SearchBox;
