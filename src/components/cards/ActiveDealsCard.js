import {Typography, List, Avatar} from "antd";
import React from "react";
import {FolderOutlined} from "@ant-design/icons"
import "../../styles/cards/ActiveDealsCard.css"
const {Title} = Typography;


const ActiveDealsCard = () => {


  //const {loading, error, data} = useQuery(ACTIVE_DEALS);

  const data = [
    {
      title: 'Rebecca Cooper: Q5 Hybrid',
    },
    {
      title: 'Dan Lee: A5 Sportback',
    }
  ];


  return (
    <div className="card-wrapper">
      <div className="title">
        <Title level={4}>My pending deals</Title>
      </div>
      <div className="card-list">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar size={40}shape="square" icon={<FolderOutlined />}/>
              }
              title={item.title}
              description="F&I Pending"
            />
          </List.Item>
        )}
      />
      </div>
      ,
    </div>
  );
};


export default ActiveDealsCard;
