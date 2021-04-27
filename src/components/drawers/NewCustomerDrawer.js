import { useMutation } from "@apollo/client";
import { Drawer, Form, Button, Row, Col, Select, Input } from "antd";
import React, {useState} from "react";
import { CREATE_CUSTOMER } from "../../apollo/queries/CustomerQueries";

const {Option} = Select;


const NewCustomerDrawer = ({ visible, onClose, onSuccess }) => {
  
  const [asyncLoading, setAsyncLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [origin, setOrigin] = useState('');
  const [note, setNote] = useState('');



  const [createCustomer] = useMutation(CREATE_CUSTOMER, {
    onCompleted({data}) {
      setAsyncLoading(false)
      console.log(data)
      onSuccess()
    }
  });


  const startProcess = () => {
    setAsyncLoading(true)
    createCustomer({variables: {input:{firstName, lastName, email, phoneNumber}}})
  }

  return (
    <Drawer
      title="New customer"
      width={720}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: "right",
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button 
          loading={asyncLoading}
          onClick={startProcess} type="primary">
            Create
          </Button>
        </div>
      }
    >
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label="First name"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input 
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
              placeholder="Enter first name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label="Last name"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                style={{ width: "100%" }}
                placeholder="Enter last name"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="phoneNumber"
              label="Phone"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input
              value={phoneNumber}
              onChange={(e)=>setPhoneNumber(e.target.value)} 
              addonBefore="+1"
              placeholder="000-000-0000" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="Email"
              label="Email"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                style={{ width: "100%" }}
                placeholder="Enter email address"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="owner"
              label="Source"
              rules={[{ required: true, message: "Please select a source." }]}
            >
              <Select 
              onSelect={(value)=>setOrigin(value)}
              value={origin}
              placeholder="Customer source">
                <Option value="walkin">Store Visit</Option>
                <Option value="phone">Phone Call</Option>
                <Option value="email">Email</Option>
                <Option value="website">Website</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="notes"
              label="Note"
            >
              <Input.TextArea
                onChange={(e)=>setNote(e.target.value)}
                value={note}
                rows={4}
                placeholder="Write a note..."
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

export default NewCustomerDrawer;
