import React from "react";
import {Typography, Statistic, Progress} from "antd"
import "../../styles/cards/SalesDashCard.css"
const {Title} = Typography;

const SalesDashCard = () => {
  return (
    <div className="card-wrapper">
      <Title level={4}>This month</Title>
      <div className="sales-metrics-container">
        <Statistic title="Units sold" value={0}/>
        <Statistic title="Goal" value={30}/>
        <Progress percent={20} width={80} type="dashboard" />
      </div>
    </div>
  )
}

export default SalesDashCard;