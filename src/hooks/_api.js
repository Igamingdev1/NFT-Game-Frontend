import Axios from "./_axios";
// ** Declare Auth API
export const getCurrentPrice = async (coinId, vsCurrency) => {
    const { data } = await Axios({
        endpoint: `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=${vsCurrency}`,
        method: "GET",
    });
    if (data) {
        return data;
    } else {
        return 0;
    }
};
export const getMarketData = (coinId, vsCurrency, days, interval, cb) => {
    Axios({
        endpoint: `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${vsCurrency}&days=${days}&interval=${interval}`,
        method: "GET",
        callback: ({ data }) => {
            if (data) {
                cb(data);
            } else {
                cb({});
            }
        },
    });
};
export const getCoinsList = (isPlatform, cb) => {
    Axios({
        endpoint: `https://api.coingecko.com/api/v3/coins/list?include_platform=${isPlatform}`,
        method: "GET",
        callback: ({ data }) => {
            if (data) {
                cb(data);
            } else {
                cb([]);
            }
        },
    });
};
export const getCoinsMarkets = (
    vsCurrency,
    ids,
    order,
    perPage,
    page,
    sparkline,
    cb
) => {
    Axios({
        endpoint: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vsCurrency}&ids=${ids}&order=${order}&per_page=${perPage}&page=${page}&sparkline=${sparkline}`,
        method: "GET",
        callback: ({ data }) => {
            if (data) {
                cb(data);
            } else {
                cb([]);
            }
        },
    });
};
export const getCoinData = (coinId, cb) => {
    Axios({
        endpoint: `https://api.coingecko.com/api/v3/coins/${coinId}`,
        method: "GET",
        callback: ({ data }) => {
            if (data) {
                cb(data);
            } else {
                cb([]);
            }
        },
    });
};
