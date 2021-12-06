import { StocksRes } from "../types";
import { buildStockUrl } from "../helpers/getPaths";
import { ApiDataResponse, useGetApiData } from "./useApiGetData";

export function useStocksSearch(query: string): ApiDataResponse<StocksRes> {
    const response = useGetApiData<StocksRes>({
        path: buildStockUrl(query),
    });

    return response;
}
