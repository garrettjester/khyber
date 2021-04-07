import React, { useEffect, useRef, useState } from "react";
import { Button, Divider, Table } from "antd";
import PageHeader from "../../App/PageHeader"
import EmployeeModal from "../../drawers/EmployeeModal"
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_EMPLOYEES } from "../../../apollo/queries/DealerQueries";
import { CURRENT_USER } from "../../../apollo/queries/AuthQueries";


const EmployeeListPage = () => {

  const client = useApolloClient();
  const{currentUser} = client.readQuery({query: CURRENT_USER});
  const [modalVisible, setModalVisible] = useState(false);
 
  const {loading, error, data, refetch} = useQuery(GET_EMPLOYEES, {
    variables: {id: currentUser.dealer.id}
  });


  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      render: text => <a>{text}</a>
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },

    {
      title: "Role/Dept.",
      dataIndex: "role",
      key: "role",
    }
  ]


  const tableData = () => {
    if (data) {
      return data.getDealer.employees.map(employee => {
        return {
          key: employee.id, 
          name: `${employee.firstName} ${employee.lastName}`,
          email: employee.email,
          role: employee.role.charAt(0).toUpperCase() + employee.role.slice(1)
        }
      })
    }
  }

  
  const onClose = () => {
    console.log("ON CLOSE")
    setModalVisible(false)
  }

  const onCreatedNewEmployee = () => {
    setModalVisible(false)
    refetch()
  }

  return (
    <div className="page-wrapper">
      <EmployeeModal 
      visible={modalVisible} 
      onClose={onClose} 
      onSuccess={onCreatedNewEmployee}/>
      <PageHeader title="Employees">
        <Button
        onClick={()=>{setModalVisible(true)}}
        type="primary">
          Add Employee
        </Button>
      </PageHeader>
      <Divider style={{ marginTop: "8px", marginBottom: "0px" }} />
      <Table columns={columns} dataSource={tableData()}></Table>
    </div>
  );
};

export default EmployeeListPage;
