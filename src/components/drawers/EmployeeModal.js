import React, {useState} from "react"
import {Modal, Form, Row, Col, Select, Input} from "antd"
import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../../apollo/queries/UserQueries"
const {Option} = Select;


const EmployeeModal = ({visible, onClose, onSuccess}) => {

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
 
  const [createEmployee] = useMutation(CREATE_USER, {
    onCompleted({data}) {
      setConfirmLoading(false)
      onSuccess()
    }
  });

  const handleOk = () => {
    setConfirmLoading(true);
    createEmployee({variables: {input:{firstName, lastName, role, phoneNumber, email}}});
  }

 

  return (
    <div>
      <Modal
        title="New employee"
        onOk={handleOk}
        visible={visible}
        onCancel={()=>{onClose()}}
        okButtonProps={{ disabled: false }}
        cancelButtonProps={{ disabled: false }}
        confirmLoading={confirmLoading}
      >
        <Form 
        onFinish={(values) => {createEmployee({variables: {...values}})}}
        layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: 'Required.' }]}
              >
                 <Input 
                 value={firstName}
                 onChange={(e)=>{setFirstName(e.target.value)}}
                 placeholder="First name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: 'Required.' }]}
              >
                 <Input
                 value={lastName} 
                 onChange={(e)=>{setLastName(e.target.value)}}
                 placeholder="Last name" />
              </Form.Item>
            </Col>
         </Row>
         <Row>
           <Col span={24}>
           <Form.Item
                name="role"
                label="Role"
                rules={[{ required: true, message: 'Required.' }]}
              >
                 <Select
                 valie={role}
                 onSelect={(value)=>{setRole(value)}}
                 placeholder="Select employee's role">
                  <Option value="sales">Sales</Option>
                  <Option value="trader">Trader</Option>
                  <Option value="finance_insurance">F&I</Option>
                  <Option value="admin">Admin</Option>
                  <Option value="service">Service</Option>
                 </Select>
              </Form.Item>
           </Col>
         </Row>
         <Row>
           <Col span={16}>
           <Form.Item
                
                name="phoneNumber"
                label="Phone"
                rules={[{ required: true, message: 'Required.' }]}
              >
                 <Input
                   value={phoneNumber}
                   onChange={(e)=>{setPhoneNumber(e.target.value)}}
                   prefix="+1"
                 ></Input>
              </Form.Item>
           </Col>
           <Col span={16}>
           <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Required.' }]}
              >
                 <Input
                   value={email}
                   onChange={(e)=>{setEmail(e.target.value)}}
                   prefix="@"
                 ></Input>
              </Form.Item>
           </Col>
         </Row>
         </Form>
      </Modal>
    </div>
  )
}

export default EmployeeModal;