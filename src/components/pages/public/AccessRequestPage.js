import React from "react";
import AppHeader from "../../App/AppHeader";
import "../../../styles/pages/AccessRequestPage.css";
import RegisterStep from "../../pages/public/dealerSetup/steps/RegisterStep";
import { Input, Form, Select, Row, Col, Button, Divider } from "antd";
import CenterX from "../../layout/CenterX"
import { useMediaQuery } from "react-responsive";

const AccessRequestPage = () => {
  
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const renderForm = () => {
    return(
    <Form layout="vertical">
      <Form.Item label="Manufacturer">
        <Select size={(isMobile) ? 'large' : 'middle'} placeholder="Select manufacturer">
          <Select.Option key="audi">Audi</Select.Option>
          <Select.Option key="bmw">BMW</Select.Option>
          <Select.Option key="honda">Honda</Select.Option>
          <Select.Option key="subaru">Subaru</Select.Option>
          <Select.Option key="volkswagen">Volkswagen</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Dealership name">
        <Input size={(isMobile) ? 'large' : 'middle'} placeholder="ex. Audi of Denver"></Input>
      </Form.Item>
      <Divider />
      <Row gutter={16}>
        <Col span={(isMobile) ? 24 : 12}>
          <Form.Item label="First name">
            <Input size={(isMobile) ? 'large' : 'middle'} placeholder="Enter first name"></Input>
          </Form.Item>
        </Col>
        <Col span={(isMobile) ? 24 : 12}>
          <Form.Item label="Last name">
            <Input size={(isMobile) ? 'large' : 'middle'} placeholder="Enter last name"></Input>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item label="Email">
        <Input size={(isMobile) ? 'large' : 'middle'} placeholder="ex. speed@racer.com"></Input>
      </Form.Item>
      <Button
        type="primary"
        style={{ width: "100%", marginTop: "15px", height: "40px" }}
      >
        Submit
      </Button>
    </Form>
    )
  };


  const renderPrompt = () => {
    return (
      <div className="gutter-prompt__wrapper">
        <p className="gutter-prompt__text">
          Khyber F1 is currently limited to select dealerships and manufacturers.
        </p>
      </div>
    )
  };
  
  return (
    <div className="responsive-page__flex-wrapper">
      <div className="responsive-page__flex-item__left-gutter">
        <div>
          {renderPrompt()}
        </div>
      </div>
      <div className="responsive-page__flex-item__center">

        <CenterX>
          <div className="content-wrapper">
            <div className="form-container">
              <RegisterStep
                title="Request access"
                subtitle="If your dealership is eligible, you'll receive an access code for a 3-month free trial."
              >
                {renderForm()}
              </RegisterStep>
            </div>
          </div>
        </CenterX>
        
      </div>  
      <div className="responsive-page__flex-item__right-gutter collapsing-gutter"></div>
    </div>
  );
};


export default AccessRequestPage;
