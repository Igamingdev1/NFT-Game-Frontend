import React, { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
import Layout from "./components/Layout";

// ** Import Route Providers
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const Home = lazy(() => import("./pages/Home"));

const history = createBrowserHistory({
    basename: "",
    forceRefresh: false,
});

const AppRouter = () => {
    return (
        <Router history={history}>
            <Suspense fallback={<Spinner />}>
                <Switch>
                    <Layout>
                        <Route path="/" exact component={Home} />
                    </Layout>
                </Switch>
            </Suspense>
        </Router>
    )
}

export default AppRouter;