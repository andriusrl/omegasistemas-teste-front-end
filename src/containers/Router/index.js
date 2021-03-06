import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SelectCityPage from "../../containers/SelectCityPage"
import ResultPage from "../../containers/ResultPage"
import LoadingPage from "../../containers/LoadingPage"
import ErrorPage from "../../containers/ErrorPage"


export const routes = {
    root: "/",
    result: "/resultado",
    loading: "/loading",
    error: "/error"
  };

  function Router(props) {
      return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={SelectCityPage} />
                <Route exact path={routes.result} component={ResultPage} />
                <Route exact path={routes.loading} component={LoadingPage} />
                <Route exact path={routes.error} component={ErrorPage} />

            </Switch>
        </ConnectedRouter>
      )
  }
  export default Router;