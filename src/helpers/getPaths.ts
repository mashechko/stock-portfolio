import { API_KEY } from "../consts";

export const buildStockUrl = (query: string): string => {
    return `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`;
};

export const buildStockInfoUrl = (stockSymbol: string): string => {
    return `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockSymbol}&apikey=${API_KEY}`;
};

export const getInfoPath = (stockSymbol: string): string => {
    return `/info/${stockSymbol}`;
};
