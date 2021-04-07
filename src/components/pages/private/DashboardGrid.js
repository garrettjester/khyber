import { useQuery } from "@apollo/client";
import React from "react";
import {Row, Col} from "antd";
import SalesDashCard from "../../cards/SalesCard";
import "../../../styles/pages/DashboardGrid.css"
import { CURRENT_USER } from "../../../apollo/queries/AuthQueries";

const DashboardGrid = () => {

  const {loading, data} = useQuery(CURRENT_USER);

  if (loading) return null

  if (data.currentUser.role === 'root') {
    return (
      <div className="Dashboard-Grid-Wrapper">
        <Row gutter={16}>
          <Col span={6}>
            
            <SalesDashCard />
          </Col>
          <Col span={12}>

          </Col>
        </Row>
      </div>
    )
  }
}

export default DashboardGrid;