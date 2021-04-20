import React from "react";
import RegisterStep from "./RegisterStep";
import {Form, Select, Input, Button, Row, Col} from "antd";
import PlacesSearchInput from "../PlacesSearchInput";

const {Option} = Select;
const {Search} = Input;

const DealershipStep = (props) => {

  const update = (e) => {
    props.update(e.target.name, e.target.value);
  }

  const handleOnFinish = () => {
    props.goToStep('billing-info')
  }


  return (
    <RegisterStep 
    subtitle="Add your dealership to our network"
    title="Register dealership">
      <Form onFinish={handleOnFinish} layout="vertical">
        <Form.Item label="Manufacturer">
          <Select 
          name="manufacturer"
          onChange={(v) => {update({target: {name: 'manufacturer', value: v}})}} 
          placeholder="Select manufacturer">
            <Option key="audi">Audi</Option>
            <Option key="bmw">BMW</Option>
            <Option key="volkswagen">Volkswagen</Option>
          </Select>
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
          <Form.Item label="Dealership name">
          <Input
          name="name"
          onChange={update} 
          placeholder="ex. Nissan of Cleveland" />
        </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Dealer code">
            <Input
            name="dealerCode"
            onChange={update} 
            placeholder="Enter dealer code" />
          </Form.Item>
          </Col>
        </Row>
        
        <Form.Item label="Primary address">
          <PlacesSearchInput onSelect={(address) => {update({target: {name: 'address', value: address}})}}/>
        </Form.Item>
        <Button htmlType="submit" style={{width: "100%"}}type="primary">Next</Button>
      </Form>
    </RegisterStep>
  );
};


export default DealershipStep;