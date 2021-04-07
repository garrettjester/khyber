import React from 'react';
import {Progress, Typography, Statistic} from 'antd'
import "../../styles/cards/GoalsCard.css"
import {TrophyOutlined} from "@ant-design/icons"

const {Title} = Typography

const GoalsCard = () => {
  
  return (
    <div className="card-wrapper">
      <div className="title">
        <Title level={4}>This month</Title>
      </div>
      <div className="statistics">
        <Statistic className="item" title="Units Sold" value={75}/>
        <Statistic className="item" title="Sales Goal" value={100}/>
        <Statistic className="item" title="Sales leader" value={'Lori S.'} prefix={<TrophyOutlined />} />
      </div>
      <div className="progress">
        <Progress strokeColor="red" percent={75} status="active" />
      </div>
    </div>
  )
}

export default GoalsCard;