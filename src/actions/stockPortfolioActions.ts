import { Stock } from "../types";

export enum StockPortfolioActions {
    SP_ADD_STOCK = "SP_ADD_STOCK",
    SP_REMOVE_STOCK = "SP_REMOVE_STOCK",
}

interface AddStocksAction {
    type: StockPortfolioActions.SP_ADD_STOCK;
    stock: Stock;
}

interface RemoveStockAction {
    type: StockPortfolioActions.SP_REMOVE_STOCK;
    stockKey: string;
}

export type StockPortfolioAction = AddStocksAction | RemoveStockAction;

export const addStock = ({ stock }: { stock: Stock }): AddStocksAction => ({
    type: StockPortfolioActions.SP_ADD_STOCK,
    stock,
});

export const removeStock = ({
    stockKey,
}: {
    stockKey: string;
}): RemoveStockAction => ({
    type: StockPortfolioActions.SP_REMOVE_STOCK,
    stockKey,
});
