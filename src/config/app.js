export const BuyTokenLink = "https://www.traderjoexyz.com/#/trade?inputCurrency=0xB147656604217a03Fe2c73c4838770DF8d9D21B8";
export const DocLink = "https://docs.blizzard.network";
export const TelegramLink = "https://t.me/BlizzardYield";
export const GithubLink = "https://github.com/Blizzard-AVAX/";
export const TwitterLink = "https://twitter.com/BlizzardAVAX?s=09";
export const MediumLink = "https://medium.com/@blizzardavalanche";

export const updateIntervalDuration = 12000;
export const netId = 43114;
export const erc20 = require("../config/abis/erc20.json");
export const joe = require("../config/abis/joe-token.json");
export const png = require("../config/abis/png-token.json");
export const mintRate = 50;
export const swapFee = 1 - 0.0025;

export const avax = {
    address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"
}

export const reward = {
    abi: {
        png: require("../config/abis/png-reward-pool.json"),
        pngSAS: require("../config/abis/png-sas-reward-pool.json"),
        joe: require("../config/abis/joe-reward-pool.json"),
        usdc: require("../config/abis/joe-reward-pool.json")
    },
    address: {
        png: "0x574d3245e36Cf8C9dc86430EaDb0fDB2F385F829",
        pngSAS: "0xD49B406A7A29D64e081164F6C3353C599A2EeAE9",
        joe: "0xd6a4F121CA35509aF06A0Be99093d08462f53052",
        usdc: "0xd6a4F121CA35509aF06A0Be99093d08462f53052"
    }
}

export const blizz = {
    abi: require("../config/abis/blizz.json"),
    address: "0xB147656604217a03Fe2c73c4838770DF8d9D21B8",
    price_address: "0xf72596354D0CFafc2891AFCDBB57995a9cf18AF0",
    price_abi: require("../config/abis/blizz-price.json")
}

export const networks = {   
    1: {
        chainId: 1,
        name: "Ethereum Mainnet"
    },
    3: {
        chainId: 3,
        name: "Ropsten Test Network"
    },
    4: {
        chainId: 4,
        name: "Rinkeby Test Network"
    },
    5: {
        chainId: 5,
        name: "Goerli Test Network"
    },
    42: {
        chainId: 42,
        name: "Kovan Test Network"
    },
    137: {
        chainId: 137,
        name: "Matic Network"
    },
    56: {
        chainId: 56,
        name: "Binance Smart Chain"
    },
    100: {
        chainId: 100,
        name: "xDai"
    },
    66: {
        chainId: 66,
        name: "OKEx"
    },
    1666600000: {
        chainId: 1666600000,
        name: "Harmony"
    },
    43114: {
        chainId: 43114,
        name: "Avalanche"
    },
}

export const Languages = [
    {
        id: "english",
        code: "us",
        name: "English"
    },
    {
        id: "russian",
        code: "ru",
        name: "Русский"
    },
    {
        id: "korean",
        code: "kr",
        name: "한국어"
    },
    {
        id: "japanese",
        code: "jp",
        name: "日本語"
    },
]
export const tokenList = [
    "blizz",
    "avalanche-2",
    "joe",
    "pangolin",
    "usd-coin"
];