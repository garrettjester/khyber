import React from "react"
import {Tabs, Typography} from 'antd';
//import { useParams } from 'react-router-dom';
import privateRoute from "../../App/privateRoute"
const {Title} = Typography;
const {TabPane} = Tabs;


const DealershipPage = props => {

  //const {dealerId} = useParams();
  //const {data} = useQuery(GET_DEALER);

  console.log("ATTEMPTING TO LOAD DEALERHIP PAGE")
  return (
    <div className="page-wrapper" >
      <Title level={4}>Audi West Chester</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="General" key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab="Billing" key="2">
          Content of Tab 2
        </TabPane>
      </Tabs>
    </div>
  )
}

export default privateRoute(DealershipPage);