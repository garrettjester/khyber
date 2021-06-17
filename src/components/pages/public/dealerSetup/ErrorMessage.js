import React from 'react';
import { WarningOutlined } from '@ant-design/icons';
import {Typography} from 'antd';
const { Text } = Typography;

const ErrorMessage = (props) => {
  console.log(props.error)
  if (props.error) {
    return (
      <div style={{ marginBottom: "12px" }}>
        <WarningOutlined style={{ color: "red" }} />
        <Text style={{ marginLeft: "8px" }} type="danger">
          {props.error.message}
        </Text>
      </div>
    );
  } else {
    return null;
  }
};

export default ErrorMessage;