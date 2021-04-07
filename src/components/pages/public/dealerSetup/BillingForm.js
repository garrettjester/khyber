import React from 'react';
import {Form, Select, Col, Row, Input} from "antd";
import {CreditCardOutlined, UserOutlined} from "@ant-design/icons";
const {Option} = Select;

const BillingForm = () => {
  return (
    <div style={{fontWeight: 500}}>
      <Form>
        <Row gutter={16}>
          <Col 
          xs={{span: 24}}
          md={{span: 12}}
          >
            <Form.Item
              name="nameOnCard"
              label="Name on card"
            >
              <Input
              prefix={<UserOutlined/>} 
              placeholder="Cardholder name"/>
            </Form.Item>
          </Col>
          <Col 
          xs={{span: 24}}
          md={{span: 12}}
          >
             <Form.Item
              name="cardNumber"
              label="Card number"
            >
              <Input
              prefix={<CreditCardOutlined/>} 
              placeholder="Enter card number"/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col>
          <Form.Item
              name="manufacturer"
              label="Manufacturer"
              rules={[{required: true, message: "Required."}]}
            >
              <Select placeholder="Select Manufacturer">
                <Option value="audi">Audi</Option>
              </Select>
            </Form.Item> 
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BillingForm;