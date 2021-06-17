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
