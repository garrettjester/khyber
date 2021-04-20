import React, { useState } from "react";
import {useMutation} from "@apollo/client";
import RegisterStep from "./RegisterStep";
import {Form, Row, Col, Input, Button, Typography} from "antd";
import {VERIFY_ROOT_EMAIL} from "../../../../../apollo/queries/DealerQueries";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";

const {Text} = Typography;

const RootUserStep = (props) => {

  const [error, setError] = useState(null)
  const [email, setEmail] = useState('')
  const [sendCode, {loading}] = useMutation(VERIFY_ROOT_EMAIL, {
    
    variables: {email},
    
    onCompleted(data) {
      if (data) {
        props.goToStep('confirm-email');
      }
    },

    onError(err) {
      setError(err);
    }
  });

  const renderError = () => {
    if (error) {
      <Text type="danger">Error</Text>
    }
  }


  const handleSendCode = () => {
    sendCode({email: props.email});
  };

  const update = (e) => {
    if (e.target.name === "email") {setEmail(e.target.value)}
    props.update(e.target.name, e.target.value);
  };

  return (
    
    <RegisterStep
      title="Create root user"
      subtitle="This should be the dealership owner or general manager"
    >
      <Form 
      onFinish={handleSendCode}
      
      layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              style={{ marginBottom: "15px", padding: 0 }}
              label="First name"
              rules={[{ required: true, message: 'Required.' }]}
            >
              <Input
                name="firstName"
                onChange={update}
                placeholder="Enter first name"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              style={{ marginBottom: "18px", padding: 0 }}
              label="Last name"
              rules={[{ required: true, message: 'Required.' }]}
            >
              <Input
                name="lastName"
                onChange={update}
                placeholder="Enter last name"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          style={{ marginBottom: "18px", padding: 0 }}
          label="Email"
          tooltip="We'll send a 6-digit code to this email."
          rules={[{ required: true, message: 'Required.' }]}
        >
          <Input
            name="email"
            value={email}
            onChange={update}
            
            placeholder="ex. johndoe@gmail.com"
          />
        </Form.Item>

        <Form.Item
          style={{padding: 0, marginBottom: '39px'}}
          label="Password"
          tooltip="Must be at least 8 characters, and contain a number, uppercase letter, and lowercase letter."
          rules={[{required: true, message: 'Required.'}]}
        >

          <Input.Password
            placeholder="Create password"
            iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
            name="password"
          />

        </Form.Item>

        {renderError()}


        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          style={{ width: "100%", height: "40px" }}
        >
          Send Code
        </Button>
      </Form>
    </RegisterStep>
  );
};

export default RootUserStep;