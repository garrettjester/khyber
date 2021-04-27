import React, { useEffect, useState } from "react";
import {Button} from "antd";
import DealDrawer from "../../drawers/DealDrawer";

import PageHeader from "../../App/PageHeader"
import { FolderAddOutlined, UserAddOutlined } from "@ant-design/icons";
import "../../../styles/pages/Dashboard.css";
import { useQuery, useLazyQuery } from "@apollo/client";
import DashboardGrid from "./DashboardGrid";
import { CURRENT_USER, REFRESH_ACCESS_TOKEN } from "../../../apollo/queries/AuthQueries";
import privateRoute from "../../App/privateRoute"

const Dashboard = props => {

  const [newDealVisible, setNewDealVisible] = useState(false);
  const [greeting, setGreeting] = useState('');
  const {data} = useQuery(CURRENT_USER);
  const [attemptTokenRefresh, {data: refreshData}] = useLazyQuery(REFRESH_ACCESS_TOKEN);

  if (refreshData) {
    console.log(refreshData)
  }

  useEffect(() => {
    const currentTime = new Date().getHours()
    if (currentTime < 10) { setGreeting('morning')}
    else if (currentTime < 18) { setGreeting('afternoon')}
    else { setGreeting('evening')}
  }, [])


  return (
    <div className="page-wrapper">
      <DealDrawer
        visible={newDealVisible}
        onClose={() => setNewDealVisible(false)}
      />
      <PageHeader title={(data) ? `Good ${greeting}, ${data.currentUser.firstName}`: ''}>
        <Button
          onClick={() => setNewDealVisible(true)}
          icon={<FolderAddOutlined />}
        >
          Start Deal
        </Button>
        <Button 
        onClick={attemptTokenRefresh}
        icon={<UserAddOutlined />}>Add Customer</Button>
      </PageHeader>
      <DashboardGrid />
    </div>
  );
};

export default privateRoute(Dashboard, 'home');
