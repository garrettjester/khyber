import React, { Component } from "react";
import {Divider, Typography} from "antd";
const {Title, Text} = Typography



class RegisterStep extends Component {

  renderSubtitle() {
    if (this.props.subtitle) {
      return <Text type="secondary">{this.props.subtitle}</Text>
    } else {
      return null
    }
  }

  render() {
    return (
      <div style={{textAlign: 'left'}}>
        <Title style={{margin: 0}} level={4}>{this.props.title}</Title>
        {this.renderSubtitle()}
        <div style={{marginTop: '20px'}}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default RegisterStep;