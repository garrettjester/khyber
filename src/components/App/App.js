import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../../styles/App.less";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo/ApolloClient";
import LoginPage from "../pages/public/LoginPage";
import DealerSetupPage from "../pages/public/dealerSetup/DealerSetupPage";

import {
  Dashboard,
  InventoryPage,
  CRMPage,
  DealListPage,
  TradesListPage,
  EmployeeListPage,
  DealershipPage,
} from "../pages/private";

import SiteWrapper from "./SiteWrapper";
import { connect } from "react-redux";




class App extends Component {

 
  render() {
    console.log('APP PROPS', this.props)
    return (
      <div className={`container ${(this.props.darkMode) ? 'app-dark-mode' : ''}`}>
        <ApolloProvider client={client}>
        <Switch>
            <Route path="/home" component={SiteWrapper}/>
            <Route path="/products" component={SiteWrapper}/> 
            <Route path="/request-access" component={SiteWrapper}/> 
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


const mapStateToProps = state => {
  return {darkMode: state.darkMode.dark_mode}
}

export default connect(mapStateToProps)(App);
