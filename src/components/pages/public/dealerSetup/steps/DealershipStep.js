import React from "react";
import RegisterStep from "./RegisterStep";
import { Form, Select, Input, Row, Col } from "antd";
import PlacesSearchInput from "../PlacesSearchInput";

const { Option } = Select;
const { Search } = Input;


const DealershipStep = (props) => {
  
  const update = (e) => {
    props.update(e.target.name, e.target.value);
  };

  console.log(props.currentStep)

  return (
    <RegisterStep
      onComplete={props.onFinish}
      formLayout="vertical"
      subtitle="Add your dealership to our network"
      title="Create dealership"
      previousStep={props.previousStep}
      submitButtonTitle="Finish"
    >
      <Form.Item 
      label="Manufacturer"
      rules={[{required: true, message: 'Required.'}]}
      >
        <Select
          name="manufacturer"
          onChange={(v) => {
            update({ target: { name: "manufacturer", value: v } });
          }}
          placeholder="Select manufacturer"
        >
          <Option key="audi">Audi</Option>
          <Option key="bmw">BMW</Option>
          <Option key="volkswagen">Volkswagen</Option>
        </Select>
      </Form.Item>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item 
          rules={[{required: true, message: 'Required.'}]}
          label="Dealership name">
            <Input
              name="name"
              onChange={update}
              placeholder="ex. Nissan of Cleveland"
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item 
          rules={[{required: true, message: 'Required.'}]}
          tooltip="From your manufacturer."
          label="Dealer code">
            <Input
              name="dealerCode"
              onChange={update}
              placeholder="Enter dealer code"
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item 
      rules={[{required: true, message: 'Required.'}]}
      label="Primary address">
        <PlacesSearchInput
          onSelect={(address) => {
            update({ target: { name: "address", value: address } });
          }}
        />
      </Form.Item>
    </RegisterStep>
  );
};

export default DealershipStep;
