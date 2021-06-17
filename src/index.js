import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Route, Router, Switch } from "react-router-dom";
import Root from "./components/Root";
import history from "./utils/history"
import { ApolloProvider } from "@apollo/client";
import SiteWrapper from "./components/App/SiteWrapper";
import DealerSetupPage from "./components/pages/public/dealerSetup/DealerSetupPage";
import LoginPage from "./components/pages/public/LoginPage";
import { client } from "./apollo/ApolloClient";

ReactDOM.render(
  <Root>
    <ApolloProvider client={client}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/home" component={SiteWrapper}/>
          <Route path="/request-access" component={SiteWrapper}/>
          <Route path="/register" component={DealerSetupPage}/>
          <Route path="/products" component={SiteWrapper}/>
          <Route path="/auth" component={LoginPage}/>
        </Switch>
       </Router>
      </ApolloProvider>
  </Root>,
  document.querySelector("#root")
);
