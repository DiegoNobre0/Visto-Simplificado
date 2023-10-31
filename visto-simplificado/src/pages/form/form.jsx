import React, { useState } from "react"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PersonalInformation from "../../components/personalInformation/personalInformation";
import AdditionalInformation from "../../components/additionalInformation/additionalInformation";

const steps = ['Informações pessoais', 'Informações adicionais'];

function Form() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set()); 

  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {    
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };  

    const allComponents = [
        <PersonalInformation key="personalInfo" onPersonalChange={handleNext}/>,
        <AdditionalInformation key="additionalInfo"/>,
    ];

  return (
    <div className='div-flex'>
      <div className='div-width'>
        <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};             
                  if (isStepSkipped(index)) {
                  stepProps.completed = false;
                  }
                  return (
                  <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                  );
              })}
        </Stepper>
      </div>
      <div className="div-margin" style={{width:'100%'}}>
          <div >
              {allComponents[activeStep]}    
          </div>
      </div>
    </div>
  )
}

export default Form