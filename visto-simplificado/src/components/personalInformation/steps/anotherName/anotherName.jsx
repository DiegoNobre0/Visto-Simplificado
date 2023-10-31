import React, { useEffect, useState } from "react"
import './anotherName.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";

function AnotherName () {
    const getStates = async () =>{        
        const response = await statesBrazilianService.getStates();
        setStates(response);        
    }

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [radioRequester, setRadioRequester] = useState("");

    const handleChangeSelect = (event) => {
        setSelectedState(event.target.value);
    };

    const handleChangeRequester = (event) => {
        setRadioRequester(event.target.value);
    };
    
    useEffect(() => {
        getStates();
    }, []);

  return (        
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                    <div>
                        <span className="title-header">Informações Pessoais</span>
                    </div>
                    <div>
                        <span className="title-header-1">Outro nome</span>
                    </div>
                </div>
                <hr className="hr-color"/>                
            </div>
            <div className="div-name-padding">
            <div>
                <div className="div-another-padding" style={{paddingBottom:'0.4rem'}}>
                    <span className="span-state">Já teve outro nome?*</span>
                </div>
                <div className="div-another-padding">
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Feminino"
                name="radio-buttons-group"
                className="subTitle-div-2"
                row                                
                >
                    <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                    <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />                                
                </RadioGroup>
                </div>
            </div> 
            </div>
            <div className="div-name-padding">              
                <div className="padding-bottom-1 div-another-padding">
                    <span className="title-header-2">Outro nome(a)*</span>
                </div>
                <div className="div-grid-another-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Digite seu antigo primeiro nome*</span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-another" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Digite seu antigo sobrenome*</span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-another" placeholder="Escreva o seu sobrenome" variant="outlined" />
                        </div>
                    </div>
                </div>
            </div>
        </div>    
  )
}

export default AnotherName
