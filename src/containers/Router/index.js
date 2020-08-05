import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import App from "../../components/App"

export const routes = {
    root: "/",
  };

  function Router(props) {
      return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={App} />
            </Switch>
      </ConnectedRouter>
      )
  }
  export default Router;