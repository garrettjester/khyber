import React, {useState} from "react";
import RegisterStep from "./RegisterStep"
import {Button, Divider, Input, Typography, Row, Col} from "antd";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CLAIM_ACCESS_CODE } from "../../../../../apollo/queries/DealerQueries";
import {WarningOutlined} from "@ant-design/icons";
import {useMediaQuery} from "react-responsive";

const {Text} = Typography;

const BillingStep = props => {

  const isMobile = useMediaQuery({maxWidth: 800})
  const [accessCode, setAccessCode] = useState('')
  const [validAccessCode, setValidAccessCode] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = () => {
    claimAccessCode()
  }

  const submit = e => props.onSubmit(e);
  
  const [claimAccessCode, {loading}] = useMutation(CLAIM_ACCESS_CODE, {
    variables: {code: accessCode},

    onCompleted(data) {
      if (data) {
        props.onComplete()
      }
    },

    onError(err) {
      setError(err.message);
    }
  });
  

  const handleOnChange = e => {
    setError(null)
    if (e.target.name === "accessCode") {
      setAccessCode(e.target.value)
      setValidAccessCode(e.target.value.length < 5)
    }
  }

  const renderError = () => {
    if (error) {
      return (
        <div>
          <WarningOutlined style={{color: 'red'}}/>
          <Text style={{marginLeft: '8px'}} type="danger">{error}</Text>
        </div>
      )
    } else {
      return null
    }
  }

 


  return (
  <RegisterStep 
  title="Enter access code" 
  subtitle="Use an access code to launch your dealership">
    <Row style={{alignItems: 'center', width: '100%'}}>
      <Col span={(isMobile) ? 24: 16}>
        <Input 
        size={(isMobile) ? 'large': 'middle'}
        name="accessCode"
        onChange={handleOnChange}
        style={{marginBottom: '5px'}}
        placeholder="Access code" />
      </Col>
      <Col span={(isMobile) ? 24: 8}>
        <Button style={{
          height: (isMobile) ? '40px': '',
          marginBottom: '5px',
          width: '100%'}}
          loading={loading}
          onClick={handleSubmit}
          disabled={validAccessCode}
          type="primary">Use Code</Button>
      </Col>
    </Row>
    {renderError()}
    <Divider/>
    <Text type="secondary">Don't have an access code?</Text>
    <Link to="/request-access" style={{marginLeft: '6px'}}>Request access.</Link>
  </RegisterStep>
  );
};

export default BillingStep;