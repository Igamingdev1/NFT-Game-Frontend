import React from "react";

import { CssBaseline } from "@material-ui/core";

// ** Declare Style Provider
const MuiStyleProvider = ({ children }) => {
    return (
        <>
            {children}
            <CssBaseline />
        </>
    );
};

export default MuiStyleProvider;