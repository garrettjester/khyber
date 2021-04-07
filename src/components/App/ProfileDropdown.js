import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { Redirect } from "react-router";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  UserOutlined,
  ExportOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { CURRENT_USER } from "../../apollo/queries/AuthQueries";



const ProfileDropdown = () => {
  
  /*const [logOut, {error: logOutError}] = useMutation(LOG_OUT, {
    onCompleted(data) {
      if (data) {
        console.log("LOG OUT DATA", data)
        onLogout()
      }
    }
  })*/
  
  const { loading, error, data } = useQuery(CURRENT_USER);

  const profileMenu = () => {
    return (
      <Menu onClick={(e) => {
        if (e.key === "3") {
          //logOut()
        }
      }}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          My account
        </Menu.Item>
        {dealershipItem()}
        <Menu.Item key="3" icon={<ExportOutlined />}>
          Sign out
        </Menu.Item>
        
      </Menu>
    );
  };

  const dealershipItem = () => {
    if (data.currentUser.role == "root") {
      return (
        <Menu.Item key="2" icon={<HomeOutlined />}>
          <NavLink to="/mydealership">My dealership</NavLink>
        </Menu.Item>
      );
    } else {
      return null;
    }
  };

  if (loading) return null;
  if (error) return <Redirect to="/auth" />;
  if (data) {
    return (
      <Dropdown overlay={profileMenu}>
        <Button>
          {`${data.currentUser.firstName} ${data.currentUser.lastName}`}
          <DownOutlined />
        </Button>
      </Dropdown>
    );
  }
};

export default ProfileDropdown;
