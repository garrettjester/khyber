import React from "react";
import { Typography } from "antd";
import {useMediaQuery} from "react-responsive"
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


  return (
    <div style={{ textAlign: "left" }}>
      <Title style={{ margin: 0 }} level={4}>
        {props.title}
      </Title>
      {renderSubtitle()}
      <div style={{ marginTop: (isMobile) ? '40px' : '40px'}}>{props.children}</div>
    </div>
  );
};

export default RegisterStep;
