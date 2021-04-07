import React from "react";
import { PageHeader, Button, Descriptions, Steps, Divider } from "antd";
import "../../../styles/pages/DealPage.css"

const { Step } = Steps;

const DealListPage = () => {
  return (
    <div className="page-wrapper">
      <di className="dealpage-container">
        <PageHeader
          className="site-page-header"
          onBack={() => window.history.back()}
          title="Dan Lee"
          subTitle="#Q184359"
          extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
              Primary
            </Button>,
          ]}
        >
          <Descriptions size="small" column={1}>
            <Descriptions.Item label="Sales Rep">Lily Hemler</Descriptions.Item>
            <Descriptions.Item label="Creation Time">
              2017-01-10
            </Descriptions.Item>

            <Descriptions.Item label="Remarks">
              Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <Divider />
        <Steps style={{padding: '60px'}} size="small" current={1}>
          <Step title="Created" description="Deal started." />
          <Step
            title="F&I approval"
            description="Pending."
          />
          <Step 
            title="Trade request" 
            description="Pending." />
        </Steps>
        <br />
      </di>
    </div>
  );
};

export default DealListPage;
