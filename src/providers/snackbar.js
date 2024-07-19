import React from "react";
import { SnackbarProvider } from "notistack";

const MuiSnackbarProvider = ({children}) => {
    return(
        <SnackbarProvider preventDuplicate autoHideDuration={5000}>
            {children}
        </SnackbarProvider>
    )
}

export default MuiSnackbarProvider;