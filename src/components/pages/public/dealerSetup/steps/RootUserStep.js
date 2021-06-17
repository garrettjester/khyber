import React, { useState } from "react";
import RegisterStep from "./RegisterStep";
import { Form, Row, Col, Input, Typography, Popover } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const RootUserStep = (props) => {
  
  const update = (e) => {
    props.update(e.target.name, e.target.value);
  };

  const onUserFormFinish = (values) => {
    props.goToStep('dealership-info')
  };

  console.log(props.currentStep);

  return (
    <RegisterStep
      onComplete={onUserFormFinish}
      formLayout="vertical"
      previousStep={props.previousStep}
      submitButtonTitle="Next"
      title="Create root user"
      subtitle="This should be the dealership owner or general manager"
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="firstName"
            style={{ marginBottom: "15px", padding: 0 }}
            label="First name"
            rules={[{ required: true, message: "Required." }]}
          >
            <Input 
            onChange={update}
            name="firstName" 
            placeholder="Enter first name" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="lastName"
            style={{ marginBottom: "18px", padding: 0 }}
            label="Last name"
            rules={[{ required: true, message: "Required." }]}
          >
            <Input
            onChange={update} 
            name="lastName" 
            placeholder="Enter last name" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="email"
        style={{ marginBottom: "18px", padding: 0 }}
        label="Email"
        onChange={update}
        tooltip="We'll send a 6-digit code to this email."
        rules={[
          {
            type: "email",
            required: true,
            message: "Required.",
          },
        ]}
      >
        <Input 
        onChange={update}
        name="email" 
        placeholder="ex. johndoe@gmail.com" />
      </Form.Item>
      <Popover
        title="Requirements:"
        placement="bottomLeft"
        content={
          <div style={{ color: "gray", fontSize: "13px", lineHeight: "13px" }}>
            <p>- At least 8 characters</p>
            <p>- 1 number</p>
            <p>- 1 uppercase letter</p>
            <p>- 1 lowercase letter</p>
            <p>- 1 special character</p>
          </div>
        }
      >
        <Form.Item
          name="password"
          style={{ padding: 0, marginBottom: "39px" }}
          label="Password"
          rules={[
            {
              required: true,
              pattern:
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
              message: "Password does not meet requirements.",
            },
          ]}
        >
          <Input.Password
            onChange={update}
            placeholder="Create password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            name="password"
          />
        </Form.Item>
      </Popover>
    </RegisterStep>
  );
};

export default RootUserStep;
