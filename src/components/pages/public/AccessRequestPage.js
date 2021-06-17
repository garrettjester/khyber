import React from "react";
import "../../../styles/pages/AccessRequestPage.css";
import RegisterStep from "../../pages/public/dealerSetup/steps/RegisterStep";
import { Input, Form, Select, Row, Col, Button, Divider, Result } from "antd";
import CenterX from "@khyberlabs/khyberkit.center-x";
import CenterY from "@khyberlabs/khyberkit.center-y";
import { useMediaQuery } from "react-responsive";
import { REQUEST_ACCESS_GRANT } from "../../../apollo/queries/AccessQueries";
import { useMutation } from "@apollo/client";

const AccessRequestPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const [requestAccess, { loading, data }] = useMutation(REQUEST_ACCESS_GRANT);

  const onFinish = (values) => {
    requestAccess({
      variables: {
        input: { ...values },
      },
    });
  };

  const renderForm = () => {
    if (data && data.requestAccessGrant.success) {
      return (
        <div style={{ height: "100%", width: "100%" }}>
          <Result
            status="success"
            title="Success"
            subTitle="Your access request was successfully submitted. "
          ></Result>
        </div>
      );
    }

    return (
      <div className="form-container">
        <RegisterStep
          footerHidden={true}
          title="Request access"
          subtitle="If your dealership is eligible, you'll receive an access code for a 3-month free trial."
        >
          <Form requiredMark={false} onFinish={onFinish} layout="vertical">
            <Form.Item
              name="manufacturer"
              rules={[{ required: true, message: "Required." }]}
              label="Manufacturer"
            >
              <Select
                name="manufacturer"
                size={isMobile ? "large" : "middle"}
                placeholder="Select manufacturer"
              >
                <Select.Option value="audi" key="1">
                  Audi
                </Select.Option>
                <Select.Option value="acura" key="2">
                  Acura
                </Select.Option>
                <Select.Option value="bmw" key="3">
                  BMW
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="dealershipName"
              rules={[{ required: true, message: "Required." }]}
              label="Dealership name"
            >
              <Input
                name="dealershipName"
                size={isMobile ? "large" : "middle"}
                placeholder="ex. Audi of Denver"
              ></Input>
            </Form.Item>
            <Divider />
            <Row gutter={16}>
              <Col span={isMobile ? 24 : 12}>
                <Form.Item
                  name="contactFirstName"
                  rules={[{ required: true, message: "Required." }]}
                  label="First name"
                >
                  <Input
                    name="contactFirstName"
                    size={isMobile ? "large" : "middle"}
                    placeholder="Enter first name"
                  ></Input>
                </Form.Item>
              </Col>
              <Col span={isMobile ? 24 : 12}>
                <Form.Item
                  name="contactLastName"
                  rules={[{ required: true, message: "Required." }]}
                  label="Last name"
                >
                  <Input
                    name="contactLastName"
                    size={isMobile ? "large" : "middle"}
                    placeholder="Enter last name"
                  ></Input>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              rules={[{ required: true, message: "Required." }]}
              name="contactEmail"
              label="Email"
            >
              <Input
                name="contactEmail"
                size={isMobile ? "large" : "middle"}
                placeholder="ex. speed@racer.com"
              ></Input>
            </Form.Item>
            <Form.Item>
              <Button
                loading={loading}
                type="primary"
                style={{ width: "100%", marginTop: "15px", height: "40px" }}
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </RegisterStep>
      </div>
    );
  };

  const renderPrompt = () => {
    return (
      <div className="gutter-prompt__wrapper">
        <p className="gutter-prompt__text">
          Khyber F1 is currently limited to select dealerships and
          manufacturers.
        </p>
      </div>
    );
  };

  return (
    <div className="responsive-page__flex-wrapper">
      <div className="responsive-page__flex-item__left-gutter">
        <div>{renderPrompt()}</div>
      </div>
      <div className="responsive-page__flex-item__center">
        <CenterX>
          <div className="content-wrapper">{renderForm()}</div>
        </CenterX>
      </div>
      <div className="responsive-page__flex-item__right-gutter collapsing-gutter"></div>
    </div>
  );
};

export default AccessRequestPage;
