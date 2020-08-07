import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import SelectCityPage from "../../containers/SelectCityPage"
import ResultPage from "../../containers/ResultPage"
import LoadingPage from "../../containers/LoadingPage"

export const routes = {
    root: "/",
    result: "/resultado",
    loading: "/loading",
  };

  function Router(props) {
      return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={SelectCityPage} />
                <Route exact path={routes.result} component={ResultPage} />
                <Route exact path={routes.loading} component={LoadingPage} />

            </Switch>
        </ConnectedRouter>
      )
  }
  export default Router;