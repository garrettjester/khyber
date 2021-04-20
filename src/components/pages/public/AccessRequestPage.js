import React from "react";
import AppHeader from "../../App/AppHeader"
import "../../../styles/pages/AccessRequestPage.css"
import RegisterStep from "../../pages/public/dealerSetup/steps/RegisterStep"
import { Input, Form, Select, Row, Col, Button, Divider } from "antd";

const AccessRequestPage = () => {
  return (
    <div className="request-access-wrapper">
      <AppHeader/>
      <div className="centered-container">
        <div className="content-wrapper">
          <div style={{width: '600px'}}>
          <div className="form-container">
            <RegisterStep title="Request access" subtitle="If you're dealership is eligible, you'll receive an access code.">
              <Form layout="vertical">
                
                <Form.Item label="Manufacturer">
                <Select placeholder="Select manufacturer">
                  <Select.Option key="audi">Audi</Select.Option>
                  <Select.Option key="bmw">BMW</Select.Option>
                  <Select.Option key="honda">Honda</Select.Option>
                  <Select.Option key="subaru">Subaru</Select.Option>
                  <Select.Option key="volkswagen">Volkswagen</Select.Option>
                </Select>
                </Form.Item>
                <Form.Item label="Dealership name">
                  <Input placeholder="ex. Audi of Denver"></Input>
                </Form.Item>
                <Divider/>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item label="First name">
                      <Input placeholder="Enter first name"></Input>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Last name">
                      <Input placeholder="Enter last name"></Input>
                    </Form.Item>
                  </Col>
                </Row>
        
                <Form.Item label="Email">
                  <Input placeholder="ex. speed@racer.com"></Input>
                </Form.Item>
                <Button type="primary" style={{width: '100%', marginTop: '15px', height: '40px'}}>Submit</Button>
              </Form>
            </RegisterStep>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessRequestPage