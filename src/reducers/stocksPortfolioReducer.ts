import { Stock } from "../types";
import {
    StockPortfolioAction,
    StockPortfolioActions,
} from "../actions/stockPortfolioActions";

interface InitialState {
    stocks: Stock[];
}

const initialState: InitialState = {
    stocks: [],
};

const stocksPortfolioReducer = (
    state = initialState,
    action: StockPortfolioAction
) => {
    switch (action.type) {
        case StockPortfolioActions.SP_ADD_STOCK:
            return {
                ...state,
                stocks: [...state.stocks, action.stock],
            };
        case StockPortfolioActions.SP_REMOVE_STOCK:
            return {
                ...state,
                stocks: state.stocks.filter(
                    (stock) => stock.symbol !== action.stockKey
                ),
            };
        default:
            return state;
    }

    return state;
};

export default stocksPortfolioReducer;
