import { combineReducers } from "redux";

import stocksPortfolio from "./stocksPortfolioReducer";

const rootReducer = combineReducers({
    stocksPortfolio,
});
export default rootReducer;
