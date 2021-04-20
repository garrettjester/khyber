import { useQuery } from "@apollo/client";
import React from "react";
import {Row, Col} from "antd";
import SalesDashCard from "../../cards/SalesCard";
import "../../../styles/pages/DashboardGrid.css"
import { CURRENT_USER } from "../../../apollo/queries/AuthQueries";

const DashboardGrid = () => {

  const {loading, data, error} = useQuery(CURRENT_USER);

  if (loading) {return null}
  if (error) {return <div>There was a fat error</div>}
  if (data) {
    console.log(data)
    const {role} = data.currentUser
    if (role === 'root') {
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
    } else {
      return (<div>Hello</div>)
    }
  }
}

export default DashboardGrid;