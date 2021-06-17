import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { Typography, Divider } from "antd";
import Div100vh from "react-div-100vh";
import StepWizard from "react-step-wizard";
import { CREATE_DEALER } from "../../../../apollo/queries/DealerQueries";
import "../../../../styles/pages/DealershipSetupPage.css";
import StaticLogo from "@khyberlabs/khyberkit.static-logo";
import BoxElement from "@khyberlabs/khyberkit.box-element";

import {
  RootUserStep,
  DealershipStep,
  VerifyCodeStep,
} from "./steps";
import history from "../../../../utils/history";
import AppLoader from "@khyberlabs/khyberkit.app-loader";

const { Text } = Typography;


const DealerSetupPage = () => {

  const [state, setState] = useState({
    form: {},
    currentStep: 1,
  });

  // If the page is refreshed, we want to make sure
  // we've held on to values.
  useEffect(() => {
    if (window.location.hash !== "#access-code" && 
      !state.form.code) {
        console.log('here')
      history.push('/register/#access-code')
    }
  }, [state.form.code])


  const [createDealer, { loading }] = useMutation(CREATE_DEALER, {
    onCompleted(data) {
      
    },
  });


  const updateForm = (key, value) => {
    const { form } = state;
    form[key] = value;
  };

  const onStepChange = (stats) => {
    let { currentStep } = state;
    currentStep = stats.activeStep;
    setState({ ...state, currentStep });
  };


  const onFinishClicked = () => {
    console.log('ON FINISH CLICKED')
    const {
      firstName,
      lastName,
      email,
      password,
      manufacturer,
      name,
      dealerCode,
      address,
      code
    } = state.form;

    createDealer({
      variables: {
        input: {
          code,
          user: { firstName, lastName, email, password },
          dealer: { manufacturer, name, dealerCode },
          address
        }
      },
    });
  }

  const renderForm = () => {
    return (
      <div style={{ width: "100%" }}>
        <div className="wizard-header">
          <Text style={{ fontSize: "16px" }} type="secondary" level={5}>
            Dealership setup
          </Text>
          <Text type="secondary">{`Step ${state.currentStep} of 3`}</Text>
          
        </div>
        <Divider style={{marginTop: '10px'}}/>
        <BoxElement>
          <div className="wizard-container">
            <StepWizard
              isHashEnabled={true}
              onStepChange={onStepChange}
              initialStep={"access-code"}
            >
              <VerifyCodeStep
                hashKey={"access-code"}
                update={updateForm}
              />
              <RootUserStep
                hashKey={"root-user"}
                update={updateForm}
                email={state.form.email}
              />
              <DealershipStep
              onFinish={onFinishClicked} 
              hashKey={"dealership-info"} 
              update={updateForm} />
            </StepWizard>
          </div>
        </BoxElement>
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
            {loading ? <AppLoader message="Loading..."/> : renderForm()}
          </div>
        </div>
        <div className="responsive-page__flex-item__right-gutter"></div>
      </div>
    </Div100vh>
  );
};

export default DealerSetupPage;
