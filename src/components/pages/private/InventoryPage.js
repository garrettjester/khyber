import React from 'react';
import {Typography, Divider} from 'antd';
import InventorySearchCard from "../../cards/InventorySearchCard"
import "../../../styles/pages/InventoryPage.css";
import privateRoute from "../../App/privateRoute";
const {Title} = Typography;


const InventoryPage = () => {

  return (
    <div className="page-wrapper">
      <div className="inventory-header">
        <Title level={3}>Find a vehicle</Title>
        <div className="inventory-searchbox">
          <InventorySearchCard />
        </div>
      </div>
      <Divider/>
      <Title level={5}>Recent searches</Title>
    </div>
  )
}

export default privateRoute(InventoryPage);