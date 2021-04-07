import React from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

import {
  DashboardOutlined,
  CarOutlined,
  UserOutlined,
  FolderOutlined,
  SwapOutlined,
  TeamOutlined,
  CalendarOutlined
} from "@ant-design/icons";
// TO-DO: App Sider Elements Should Reflect User's Role

const AppSider = () => {
  return (
    <Menu
      style={{ background: "white" }}
      theme="light"
      mode="inline"
      defaultSelectedKeys={["1"]}
    >
      <Menu.Item key="1" icon={<DashboardOutlined />}>
        <NavLink to="/">Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key="2" icon={<CarOutlined />}>
        <NavLink to="/inventory">Inventory</NavLink>
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        <NavLink to="/crm">CRM</NavLink>
      </Menu.Item>
      <Menu.Item key="4" icon={<FolderOutlined />}>
        Deals
      </Menu.Item>
      <Menu.Item key="5" icon={<SwapOutlined />}>
        <NavLink to="/trades">Trades</NavLink>
      </Menu.Item>
      <Menu.Item key="6" icon={<TeamOutlined />}>
        <NavLink to="/employees">Employees</NavLink>
      </Menu.Item>
      <Menu.Item key="7" icon={<CalendarOutlined />}>
        <NavLink to="/appointments">Appointments</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default AppSider;

/*<Layout style={{background:'white'}}>
<Sider
  style={{
    zIndex: "3",
    top:'85px',
    overflow: "auto",
    height: "100vh",
    background: 'white',
    position: "fixed",
    left: 0,
  }}
>
  <div className="logo" />
  
</Sider>
<Layout className="site-layout" style={{ marginLeft: 200 }}>
    <div
      className="site-layout-background"
      style={{background: 'white'}}
    >
      <Switch>
        <PrivateRoute exact path="/" component={Dashboard}/>
        <Route path="/register" component={DealershipSetupPage}></Route>
        <PrivateRoute path="/inventory" component={InventoryPage}/>
        <PrivateRoute path="/crm" component={CRMPage}/>
        <PrivateRoute path="/trades" component={TradesPage}/>
        <PrivateRoute path="/employees" component={EmployeePage}/>
        <PrivateRoute path="/appointments" component={EmployeePage}/>
      </Switch>
    </div>
</Layout>
</Layout>*/

/*
<div className="app-header">
              <div className="logo-container">
                <Link to="/">
                  <img className="logo" src={logo} alt="Khyber Logo" />
                </Link>
              </div>
              <div className="header-content">
                <AutoComplete />
              </div>
              <div className="dropdown-container">
                <Dropdown overlay={profileMenu}>
                  <Button>
                    Jack Jester <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
            */
