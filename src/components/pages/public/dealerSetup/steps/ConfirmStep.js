import React, {useState} from "react"; 
import {useMutation} from "@apollo/client";
import {Button, Divider, Form, Input, message, Typography} from "antd";
import RegisterStep from "./RegisterStep";
import {CONFIRM_ROOT_EMAIL, VERIFY_ROOT_EMAIL} from "../../../../../apollo/queries/DealerQueries"
import { onError } from "apollo-link-error";

const {Text} = Typography;
const {Search} = Input;

const ConfirmStep = (props) => {
 
  const [error, setError] = useState(null)
  const [code, setCode] = useState('');

  const [confirmCode, {loading}] = useMutation(CONFIRM_ROOT_EMAIL, {
    variables: {code, email: props.sentTo},
    onCompleted(data) {
      if (data) {
        props.goToStep('dealership-info')
      }
    },
    onError(err) {
      setError(err)
    }
  });


  const [sendCode] = useMutation(VERIFY_ROOT_EMAIL, {
    variables: { email: props.sentTo},
    onCompleted(data) {
      if (data) {
        message.success({content: 'Sent!', key:'resendLoader', duration: 2})
      } 
    },
    onError(error) {
      message.error({content: 'Max resend attempts reached.', duration: 4})
    }
  })






  const renderError = () => {
    if (error) {
      return (<Text type="danger">The code you entered was incorrect.</Text>)
    }
  }

  const onChange = e => {
    setError(null)
    setCode(e.target.value)
  }

  const handleSubmit = () => {
    confirmCode({variables: code})
  }

  const handleResentClicked = () => {
    message.loading({content: 'Resending code...', key: 'resendLoader'});
    sendCode()
  }

  return (
    <RegisterStep
      title="Enter verification code"
      subtitle={`We sent your code to ${props.sentTo}`}
    >
      <Form layout="vertical" onSubmit={handleSubmit}>
        <Form.Item>
          <Search 
          maxLength="6"
          loading={loading}
          enterButton="Confirm"
          onChange={onChange}
          onSearch={handleSubmit}
          placeholder="6-digit code" />
        </Form.Item>
        {renderError()}
        <Divider />
        <Text type="secondary">Didn't get a code?</Text>
        <Button type="text" onClick={handleResentClicked} style={{marginLeft: '8px'}}>Resend.</Button>
      </Form>
    </RegisterStep>
  );
};

export default ConfirmStep;