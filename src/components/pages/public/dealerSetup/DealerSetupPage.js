import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Typography, Button, Row, Col, Input, Form, Select } from "antd";
import setuplogo from "../../../../setup-logo.svg";
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

const { Text } = Typography;


const DealerSetupPage = () => {
  const [createDealer, { loading }] = useMutation(CREATE_DEALER, {
    onCompleted(data) {
      
    }
  });

  const [state, setState] = useState({
    form: {},
    currentStep: 1,
  });

  const updateForm = (key, value) => {
    const { form } = state;
    form[key] = value;
    console.log('Form updated', state)
    console.log('email', state.form.email)
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
      address
     } = state.form

    createDealer({ 
      variables: {
        user: { firstName, lastName, email, password },
        dealer: { manufacturer, name, dealerCode },
        address
      }
    });
  }

  const renderForm = () => {
    return (
      <div style={{width: '600px'}}>
            <div className="wizard-header">
              <Text style={{fontSize: '16px'}} type="secondary" level={5}>
                Dealership setup
              </Text>
              <Text type="secondary">{`Step ${state.currentStep} of 4`}</Text>
            </div>
            <div className="wizard-step-container">
              <StepWizard isHashEnabled={true} onStepChange={onStepChange} initialStep={'root-user'}>
                <RootUserStep hashKey={'root-user'} update={updateForm} email={state.form.email} />
                <ConfirmStep hashKey={'confirm-email'} update={updateForm} sentTo={state.form.email} />
                <DealershipStep hashKey={'dealership-info'} update={updateForm} />
                <BillingStep hashKey={'billing-info'} update={updateForm} onComplete={onComplete}/>
              </StepWizard>
            </div>
        </div>
    )
  }


  const renderLoader = () => {
    return(
      <div style={{ width: "600px", marginTop: '200px'}}>
      <LoadingOutlined style={{fontSize: '30px', marginBottom: '15px'}} spin={true}/>
      <br/>
      <Text style={{fontSize: '16px'}} type="secondary">Creating your dealership...</Text>
    </div>
    )
  }

  
  return (
    <div className="dealership-setup-wrapper">
      <img className="setup-logo" src={setuplogo} />
      <div className="centered-wrapper">
        <div className="wizard-wrapper">
          {(loading) ? renderLoader() : renderForm() }
        </div>
      </div>
    </div>
  )
};


export default DealerSetupPage;
