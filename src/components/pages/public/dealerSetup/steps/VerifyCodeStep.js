import React, { useState } from "react";
import RegisterStep from "./RegisterStep";
import { Button, Divider, Input, Typography, Row, Col, Form } from "antd";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { WarningOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { VERIFY_ACCESS_GRANT } from "../../../../../apollo/queries/AccessQueries";
import ErrorMessage from "../ErrorMessage";

const { Text } = Typography;

const VerifyCodeStep = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const [validAccessCode, setValidAccessCode] = useState(false);
  const [error, setError] = useState(null);

  const [verifyCode, { loading, data }] = useMutation(VERIFY_ACCESS_GRANT, {
  
    onCompleted(data) {
      props.goToStep('root-user')
    },

    onError(err) {
      setError(err);
    },
  });


  const onFormFinish = (values) => {
    console.log("FORM FINISHED", values);
    verifyCode({ variables: { ...values } });
  };

  const handleOnChange = (e) => {
    setError(null);
    props.update(e.target.name, e.target.value)
    if (e.target.name === "code") {
      setValidAccessCode(e.target.value.length > 5);
    }
  };


  return (
    <RegisterStep
      backHidden={true}
      title="Enter access code"
      subtitle="Use an access code to launch your dealership"
      onComplete={onFormFinish}
      submitButtonTitle="Next"
      disabled={!validAccessCode}
      loading={loading}
    >
      <Row>
        <Col span={isMobile ? 24 : 12}>
          <Form.Item
            style={{marginBottom: '10px'}}
            name="code"
          >
            <Input
           
              size={isMobile ? "large" : "middle"}
              name="code"
              onChange={handleOnChange}
              style={{ marginBottom: "0px"}}
              placeholder="Access code"
            />
          </Form.Item>
        </Col>
      </Row>
      <ErrorMessage error={error}/>
      <Text type="secondary">Don't have an access code?</Text>
      <Link to="/request-access" style={{ marginLeft: "6px" }}>
        Request access.
      </Link>
    </RegisterStep>
  );
};

export default VerifyCodeStep;
