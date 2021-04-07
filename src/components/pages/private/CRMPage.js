import React, { useState } from "react";
import { Button, Divider, Table } from "antd";
import CustomerDrawer from "../../drawers/NewCustomerDrawer";
import PageHeader from "../../App/PageHeader";
import { useApolloClient, useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../../../apollo/queries/DealerQueries";
import { CURRENT_USER } from "../../../apollo/queries/AuthQueries";

const CRMPage = () => {
  const client = useApolloClient();
  const [modalVisible, setModalVisible] = useState(false);
  const { currentUser } = client.readQuery({ query: CURRENT_USER });
  const { data, refetch } = useQuery(GET_CUSTOMERS, {
    variables: { id: currentUser.dealer.id },
  });

  const onCreatedNewCustomer = () => {
    setModalVisible(false);
    refetch();
  };

  const tableData = () => {
    if (data) {
      return data.getDealer.customers.map((customer) => {
        return {
          key: customer.id,
          firstName: customer.firstName,
          lastName: customer.lastName,
          email: customer.email,
        };
      });
    }
  };

  const columns = [
    {
      title: "Last name",
      key: "lastName",
      dataIndex: "lastName",
    },
    {
      title: "First name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Flags",
      dataIndex: "flags",
      key: "flags",
    },
  ];

  return (
    <div className="page-wrapper">
      <CustomerDrawer
        onSuccess={onCreatedNewCustomer}
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        }}
      />
      <PageHeader title="Customers">
        <Button onClick={setModalVisible} type="primary">
          Add Customer
        </Button>
      </PageHeader>
      <Divider style={{ marginTop: "8px", marginBottom: "0px" }} />
      <Table columns={columns} dataSource={tableData()}></Table>
    </div>
  );
};

export default CRMPage;
