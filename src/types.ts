export type Stock = {
    symbol: string;
    name: string;
};

export type DefaultResponse = {
    Note?: string;
};

export type StocksResItem = {
    "1. symbol": string;
    "2. name": string;
};

export type StocksRes = {
    bestMatches: StocksResItem[];
} & DefaultResponse;

export type StockInfoRes = {
    Name: string;
    Description: string;
    Address: string;
    MarketCapitalization: number;
} & DefaultResponse;
