import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../../styles/App.less";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo/ApolloClient";
import LoginPage from "../pages/public/LoginPage";
import DealerSetupPage from "../pages/public/dealerSetup/DealerSetupPage";
import HomePage from "../pages/public/HomePage";

import {
  Dashboard,
  InventoryPage,
  CRMPage,
  DealListPage,
  TradesListPage,
  EmployeeListPage,
  DealershipPage,
} from "../pages/private";
import ProductsPage from "../pages/public/ProductsPage";
import AccessRequestPage from "../pages/public/AccessRequestPage";




class App extends Component {
  render() {
    return (
      <div className="container">
        <ApolloProvider client={client}>
          <Switch>
            <Route path="/home" component={HomePage}/>
            <Route path="/products" component={ProductsPage}/> 
            <Route path="/request-access" component={AccessRequestPage}/> 
            <Route exact path="/" component={Dashboard} />
            <Route path="/register" component={DealerSetupPage}/>
            <Route path="/auth" component={LoginPage} />
            <Route path="/mydealership" component={DealershipPage} />
            <Route path="/inventory" component={InventoryPage} />
            <Route path="/crm" component={CRMPage} />
            <Route path="/deals" component={DealListPage} />
            <Route path="/trades" component={TradesListPage} />
            <Route path="/employees" component={EmployeeListPage} />
            <Route path="/appointments" component={EmployeeListPage} />
          </Switch>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
