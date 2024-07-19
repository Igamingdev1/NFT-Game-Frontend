import React, { useEffect } from "react";
import { useSnackbar } from "notistack";

// ** Declare Notification Provider
const NotificationProvider = ({ children }) => {
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        const alert = (message, variant) => {
            enqueueSnackbar(message, { variant: variant });
        };
        window.alert = alert;
    }, [enqueueSnackbar]);
    return <>{children}</>;
};

export default NotificationProvider;