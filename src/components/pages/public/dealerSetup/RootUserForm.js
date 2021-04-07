import React, { useState } from 'react';
import {useMutation} from '@apollo/client';
import {Form, Row, Col, Input, message} from "antd"
import {CONFIRM_ROOT_EMAIL, VERIFY_ROOT_EMAIL} from "../../../../apollo/queries/DealerQueries"
const {Search} = Input; 


const RootUserForm = () => {

  var [verifyRootEmail, {loading, error, data}] = useMutation(VERIFY_ROOT_EMAIL);
  const [confirmRootEmail, {confirmData}] = useMutation(CONFIRM_ROOT_EMAIL);
  const [codeSent, setCodeSent] = useState(false)
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  //const [confirmedEmail]

  if (error) message.error(error.message);
  

  const onSendCode = value => {
    verifyRootEmail({variables: { email: email}})
  }

  const onConfirmCode = value => {
    confirmRootEmail({variables: {email: email, to: code}})
  }

  return (
    <div style={{paddingTop: '10px',fontWeight: 400}}>
      <Form>
        <Row gutter={16}>
          <Col xs={{span: 24}} md={{span: 12}}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: "Required." }]}
            >
              <Input placeholder="First name" />
            </Form.Item>
          </Col>
          <Col 
          xs={{span: 24}}
          md={{span: 12}}
          >
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: "Required." }]}
            >
              <Input placeholder="Last name" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={14}>
          <Form.Item
            name="email"
            label="Email"
            >
            <Search
            onSearch={onSendCode}
            onChange={e=>{
              error = null
              setEmail(e.target.value)
            }}
            placeholder="john@doe.com" 
            enterButton="Send Code"
            loading={loading}
            />
          </Form.Item>
          </Col>
          <Col span={10}>
          <Form.Item
            name="code"
            label="Code"
            >
            <Search
            placeholder="6-Digit Code" 
            enterButton="Verify"
            disabled={(!codeSent)}
            />
          </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default RootUserForm;