import React from 'react';
import {Typography, List, Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons'
const {Title} = Typography;


const data = [
  {
    title: 'Abrahams, McKenzie',
  },
  {
    title: 'Malkins, Christopher',
  }
];


const LeadsCard = () => {
  return (
    <div className="card-wrapper">
      <div className="title">
        <Title level={4}>Recent leads</Title>
      </div>
      <div className="card-list">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar icon={<UserOutlined />} />
              }
              title={item.title}
              description="Store Visit"
            />
          </List.Item>
        )}
      />
      </div>
    </div>
  );
}


export default LeadsCard;