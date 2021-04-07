import { Drawer, Form, Button, Col, Row, Radio, Input, Select} from 'antd'
import React, { Component } from 'react';

import {InfoCircleOutlined} from "@ant-design/icons"
const { Option } = Select;

class DealDrawer extends Component {


  renderVehicleSelect() {
    return(
      <Select
      showSearch
      style={{ width: '100%' }}
      placeholder="Search by COMM"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
      }
    >
      <Option value="1">Q12345</Option>
      <Option value="2">F98374</Option>
      <Option value="3">I38452</Option>
      <Option value="4">Q54321</Option>
    </Select>
    )
  }


  renderCustomerSelect() {
    return(
      <Select
      showSearch
      style={{ width: '100%' }}
      placeholder="Search customers"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
      }
    >
      <Option value="1">Harry McCoy</Option>
      <Option value="2">Dan Cavallo</Option>
      <Option value="3">Nancy Lin</Option>
      <Option value="4">Prashant Desai</Option>
    </Select>
    )
  }


  render() {
    return(
      <Drawer
        title="New deal"
        width={500}
        onClose={this.props.onClose}
        visible={this.props.visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button type="primary">
              Confirm
            </Button>
          </div>
        }
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="vin"
                label="Vehicle"
                rules={[{ required: true, message: 'VIN Required.' }]}
              >
                {this.renderVehicleSelect()}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
          <Col span={24}>
              <Form.Item
                name="customer"
                label="Customer"
                rules={[{ required: true, message: 'Please enter a customer' }]}
              >
                {this.renderCustomerSelect()}
                
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="tradein"
                label="Trade in?"
                rules={[{ required: true, message: 'Required.' }]}
                tooltip={{
                  title: 'Does the customer have a trade-in?',
                  icon: <InfoCircleOutlined />,
                }}
              >
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="financing"
                label="Payment"
                rules={[{ required: true, message: 'Required.' }]}
              >
                <Radio.Group>
                <Radio value={true}>Cash</Radio>
                <Radio value={false}>Financing</Radio>
              </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="note"
                label="Notes"
              >
                <Input.TextArea rows={4} placeholder="Add a note for this deal" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    )
  }
}

export default DealDrawer;