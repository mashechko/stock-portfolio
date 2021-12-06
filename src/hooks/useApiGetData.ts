import { useEffect, useState } from "react";

export type ApiDataResponse<T> = {
    data: T;
    error: Error;
    loading: boolean;
};

type ApiDataParams = {
    path: string;
};

export function useGetApiData<T>({ path }: ApiDataParams): ApiDataResponse<T> {
    const defaultLoading = true;
    const defaultError: any = null;
    const defaultData: T = null;

    const [loading, setLoading] = useState(defaultLoading);
    const [error, setError] = useState(defaultError);
    const [data, setData] = useState(defaultData);

    const load = async (): Promise<void> => {
        setLoading(true);
        setData(null);
        setError("");
        let requestData;

        try {
            requestData = await fetch(path);
        } catch (e) {
            console.error(e);

            return;
        }

        let dataJson;
        try {
            dataJson = await requestData.json();
        } catch (e) {
            console.error(e);
        }

        setData(dataJson);
        setError("");
        setLoading(false);
    };

    useEffect(() => {
        load();
    }, [path]);

    return {
        loading,
        error,
        data,
    };
}
