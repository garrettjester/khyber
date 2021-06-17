import React from "react"
import {Tabs, Typography} from 'antd';
import privateRoute from "../../App/privateRoute";
const {Title} = Typography;
const {TabPane} = Tabs;


const DealershipPage = props => {

  
  //const {dealerId} = useParams();
  //const {data} = useQuery(GET_DEALER);

  return (
    <div className="page-wrapper" >
      <Title level={4}>Audi West Chester</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="General" key="1">
          General
        </TabPane>
        <TabPane tab="Billing" key="2">
          Billing
        </TabPane>
      </Tabs>
    </div>
  )
}

export default privateRoute(DealershipPage);