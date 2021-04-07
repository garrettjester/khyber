import React from "react";
import { Typography, Space } from "antd";
import "../../styles/cards/PageHeader.css";


const { Title } = Typography;

const PageHeader = (props) => {
  return (
    <div className="pageheader-title">
       <Title style={{transform: "translateY(33%)"}} level={3}>{props.title}</Title>
      <div className="rightactions">
        <Space>{props.children}</Space>
      </div>
    </div>
  );
};

export default PageHeader;
