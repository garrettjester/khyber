import React from 'react'
import { Layout} from "antd";
import AppSider from "./AppSider";
import AppHeader from "./AppHeader"
import "../../styles/AppContainer.css"

const {Sider} = Layout

const AppContainer = () => {
  return (
    <div className="app-container">
      <AppHeader/>
      <Layout style={{background:"white"}} className="app-container__layout">
        <Sider style={{background: "white", marginTop: "10px"}}>
          <AppSider/>
        </Sider>
        <Layout style={{background:"white"}}className="layout__content">
          <div
            className="site-layout-background"
            style={{ background: "white" }}
          >
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default AppContainer;
