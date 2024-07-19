import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const Web3 = ({ children }) => {
    function getLibrary(provider) {
        const library = new Web3Provider(provider);
        library.pollingInterval = 8000;
        return library;
    }
    return (
        <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
    );
};

export default Web3;
