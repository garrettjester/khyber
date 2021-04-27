import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Typography, Divider } from "antd";
import Div100vh from "react-div-100vh";
import StepWizard from "react-step-wizard";
import { CREATE_DEALER } from "../../../../apollo/queries/DealerQueries";
import { LoadingOutlined } from "@ant-design/icons";

import {
  RootUserStep,
  ConfirmStep,
  DealershipStep,
  BillingStep,
} from "./steps";

import "../../../../styles/pages/DealershipSetupPage.css";
import StaticLogo from "../../../App/StaticLogo";
import BoxElement from "../../../App/BoxElement";
import { useMediaQuery } from "react-responsive";

const { Text } = Typography;

const DealerSetupPage = () => {
  const [createDealer, { loading }] = useMutation(CREATE_DEALER, {
    onCompleted(data) {},
  });

  const [state, setState] = useState({
    form: {},
    currentStep: 1,
  });

  const updateForm = (key, value) => {
    const { form } = state;
    form[key] = value;
    console.log("Form updated", state);
    console.log("email", state.form.email);
  };

  const onStepChange = (stats) => {
    let { currentStep } = state;
    currentStep = stats.activeStep;
    setState({ ...state, currentStep });
  };

  const onComplete = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      manufacturer,
      name,
      dealerCode,
      address,
    } = state.form;

    createDealer({
      variables: {
        user: { firstName, lastName, email, password },
        dealer: { manufacturer, name, dealerCode },
        address,
      },
    });
  };

  const isMobile = useMediaQuery({maxWidth: 800})


  

  const renderForm = () => {
    return (
      <div style={{ width: "100%" }}>
        <div className="wizard-header">
          <Text style={{ fontSize: "16px" }} type="secondary" level={5}>
            Dealership setup
          </Text>
          <Text type="secondary">{`Step ${state.currentStep} of 4`}</Text>
          
        </div>
        <Divider style={{marginTop: '10px'}}/>
        <BoxElement>
          <div className="wizard-container">
            <StepWizard
              isHashEnabled={true}
              onStepChange={onStepChange}
              initialStep={"billing-info"}
            >
              <BillingStep
                hashKey={"billing-info"}
                update={updateForm}
                onComplete={onComplete}
              />
              <RootUserStep
                hashKey={"root-user"}
                update={updateForm}
                email={state.form.email}
              />
              <ConfirmStep
                hashKey={"confirm-email"}
                update={updateForm}
                sentTo={state.form.email}
              />
              <DealershipStep hashKey={"dealership-info"} update={updateForm} />
            </StepWizard>
          </div>
        </BoxElement>
      </div>
    );
  };

  const renderLoader = () => {
    return (
      <div style={{ width: "600px", marginTop: "200px" }}>
        <LoadingOutlined
          style={{ fontSize: "30px", marginBottom: "15px" }}
          spin={true}
        />
        <br />
        <Text style={{ fontSize: "16px" }} type="secondary">
          Creating your dealership...
        </Text>
      </div>
    );
  };

  return (
    <Div100vh>
      <StaticLogo />
      <div className="responsive-page__flex-wrapper">
        <div className="responsive-page__flex-item__left-gutter"></div>
        <div className="responsive-page__flex-item__center">
          <div className="wizard-wrapper">
            {loading ? renderLoader() : renderForm()}
          </div>
        </div>
        <div className="responsive-page__flex-item__right-gutter"></div>
      </div>
    </Div100vh>
  );
};

export default DealerSetupPage;
