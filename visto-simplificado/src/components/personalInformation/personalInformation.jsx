import './personalInformation.css'
import React, { useState } from "react"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import InitialInformation from './steps/initialInformation/initialInformation';
import StableUnion from './steps/maritalStatus/stableUnion';
import AnotherName from './steps/anotherName/anotherName';
import Nationality from './steps/nationality/nationality';
import FatherInformation from './steps/fatherInformation/fatherInformation';
import MotherInformation from './steps/motherInformation/motherInformation';
import USAFamily from './steps/USAFamily/USAFamily';
import DistantFamily from './steps/distantFamily/distantFamily';
import Group from './steps/group/group';
import CNH from './steps/CNH/CNH';



const steps = ['1','2','3','4','5','6','7','8','9'];

function PersonalInformation () {
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
        <InitialInformation  key="initialInformation"/>,
        <StableUnion key="stableUnion"/>,
        <AnotherName key="anotherName"/>,
        <Nationality key="nationality"/>,
        <FatherInformation key="fatherInformation"/>,
        <MotherInformation key="motherInformation"/>,
        <USAFamily key="USAFamily"/>,
        <DistantFamily key="distantFamily"/>,
        <Group key="group"/>,
        <CNH key="CNH"/>
    ];

  return (        
    <div className='div-flex'>   
    <div className="div-margin" style={{width:'100%'}}>
        <div >
            {allComponents[activeStep]}    
        </div>

        <div style={{display:'flex', justifyContent:'end'}}>
            <button 
            type='button'
            className='button-style'
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{display: activeStep === 0 ? 'none' : ''}}
            >
                <span className='font-button'>Voltar</span>
            </button>
            <button 
            type='button'
            className='button-style'
            onClick={handleNext}
            >
                <span className='font-button'>{activeStep === steps.length - 1 ? 'Finalizar' : 'Próxima'}</span>
            </button>                  
        </div>
    </div>
</div>    
  )
}

export default PersonalInformation
