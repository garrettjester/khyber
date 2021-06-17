import React from "react";
import { Layout } from "antd";
import AppSider from "./AppSider";
import AppHeader from "./AppHeader";
import "../../styles/AppContainer.css";
import { Switch, Route, Router } from "react-router-dom";
import Div100vh from "react-div-100vh";
import { Dashboard, InventoryPage } from "../pages/private";

const { Sider } = Layout;

const AppContainer = () => {
  return (
    <Div100vh>
      <div className="app-container__wrapper">
        <AppHeader />
        <Layout
          style={{ background: "white" }}
          className="app-container__layout-wrapper"
        >
          <Sider style={{ background: "white", marginTop: "10px" }}>
            <AppSider />
          </Sider>
        </Layout>
        <div className="app-container__content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/inventory" component={InventoryPage} />
          </Switch>
        </div>
      </div>
    </Div100vh>
  );
};

export default AppContainer;
