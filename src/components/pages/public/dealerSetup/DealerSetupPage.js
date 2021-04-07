import React from "react";
import {useMutation } from '@apollo/client';
import { CheckCircleFilled } from "@ant-design/icons";
import { Typography, Divider, Collapse, Form, Input, Row, Col, Button, Select } from "antd";
import RootUserForm from "./RootUserForm";
import DealershipForm from "./DealershipForm";
import setuplogo from "../../../../setup-logo.svg"
import BillingForm from "./BillingForm";
import {CREATE_DEALER} from "../../../../apollo/queries/DealerQueries";
const { Title } = Typography;
const { Panel } = Collapse;



const DealerSetupPage = () => {

  const [createDealer, { data }] = useMutation(CREATE_DEALER);

  const genExtra = () => (
    <CheckCircleFilled
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  const callback = () => {};

  return (
    <div style={{ background: "#fff", height: "100%" }}>
      <img style={{marginLeft: '15px', padding: '20px',width: '230px'}} src={setuplogo}/>
      <Divider style={{margin: 0}}/>
      <Row>
        <Col 
        xs={{ span: 24, offset: 0}}
        md={{ span: 24, offset: 0}}
        lg={{ span: 24, offset: 0}}
        xl={{ span: 16, offset: 4}}
        >
          <Title 
          style={{
            paddingTop: '40px', 
            paddingLeft: '40px', 
            marginBottom: '20px'}}
          level={3}>
            Let's configure your dealership.
          </Title>
          <div
            style={{
              margin: "0 40px",
              borderRadius: "6px",
              padding: "10px",
              background: "white",
              border: "solid #eee",
              borderWidth: "1px",
              boxShadow: "0px 3px 10px 2px rgba(0, 0, 0, .05)",
            }}
          >
            <Collapse bordered={false}style={{border: 'none'}} defaultActiveKey={["1"]} onChange={callback}>
              <Panel style={{background: 'white', fontWeight: 700}}header="Root User Information" key="1" extra={genExtra()}>
                <RootUserForm/>
              </Panel>
              <Panel 
              disabled={true}
              style={{background: 'white', fontWeight: 700}} 
              header="Dealership Information" key="2" 
              extra={genExtra()}>
                <DealershipForm/>
              </Panel>
              <Panel
              disabled={true} 
              style={{background: 'white', fontWeight: 700}} 
              header="Billing Information" key="3" extra={genExtra()}>
                <BillingForm />
              </Panel>
            </Collapse>
          </div>
        </Col>
      </Row>
    </div>
  );
};


export default DealerSetupPage;
