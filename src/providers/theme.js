import React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

import "../assets/scss/index.scss";

// ** Declare Theme Provider
const MaterialThemeProvider = ({ children }) => {
    const theme = createTheme();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default MaterialThemeProvider;
