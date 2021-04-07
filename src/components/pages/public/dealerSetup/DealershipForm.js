import React from 'react';
import {Form, Select, Col, Row, Input} from "antd";
const {Option} = Select;

const DealershipForm = () => {
  return (
    <div style={{fontWeight: 400}}>
      <Form>
        <Row gutter={16}>
          <Col 
          xs={{span: 24}}
          md={{span: 12}}
          >
            <Form.Item
              name="dealershipName"
              label="Dealership Name"
              rules={[{ required: true, message: "Required." }]}
            >
              <Input placeholder="ex. Toyota of Malibu" />
            </Form.Item>
          </Col>
          <Col 
          xs={{span: 24}}
          md={{span: 12}}
          >
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

export default DealershipForm;