import React from "react";
import { Divider, Typography, Form, Button } from "antd";
import {useMediaQuery} from "react-responsive";
import {ArrowLeftOutlined} from "@ant-design/icons";
const { Title, Text } = Typography;

const RegisterStep = (props) => {

  const isMobile = useMediaQuery({maxWidth: '800px'})

  const renderSubtitle = () => {
    if (props.subtitle) {
      return <Text type="secondary">{props.subtitle}</Text>;
    } else {
      return null;
    }
  };


  const StepFooter = () => {
    if (props.footerHidden) {
      return null
    } else {
      return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <Button
            onClick={props.previousStep} 
            hidden={props.backHidden}>
              <ArrowLeftOutlined/>
              Back</Button>
          </div>
          <Button
          style={{float: 'right'}}
          disabled={props.disabled}
          type="primary" 
          loading={props.loading} 
          htmlType="submit">{props.submitButtonTitle}</Button>
        </div>
      )
    }
  };


  return (
    <div style={{ textAlign: "left" }}>
      <Title style={{ margin: 0 }} level={4}>
        {props.title}
      </Title>
      {renderSubtitle()}
      <div style={{ marginTop: (isMobile) ? '40px' : '40px'}}>
        <Form
    
        layout={props.formLayout}
        onFinish={props.onComplete}>
          {props.children}
          <Divider/>
        <StepFooter/>
        </Form>
      </div>
      
    </div>
  );
};

export default RegisterStep;
