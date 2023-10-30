import React, { useEffect, useState } from "react"
import './motherInformation.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";

function MotherInformation () {
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
                <span className="title-header">Informação adicionais da sua mãe</span>
            </div>                    
        </div>
        <hr className="hr-color"/>                
    </div>
    <div className="div-2-padding">
        <div className="padding-bottom-1">
            <span className="title-header-2">Você tem informações básica sobre sua mãe?*</span>
        </div>
        <div className="padding-bottom-1">
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
    <div className="div-2-padding">
    <div className="div-flex-inputs">
        <div>
            <div style={{paddingBottom:'0.4rem'}}>
                <span className="span-state">Nome da sua mãe*</span>
            </div>
            <div className="padding-bottom-1">
                <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
            </div>
        </div>
        <div>
            <div style={{paddingBottom:'0.4rem'}}>
                <span className="span-state">Sobrenome da sua mãe*</span>
            </div>
            <div className="padding-bottom-1">
                <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
            </div>
        </div>
    </div>
    </div>
    <div className="div-2-padding">
        <div>
            <div style={{paddingBottom:'0.4rem'}}>
                <span className="span-state">Qual a data de nascimento da sua mãe*</span>
            </div>
            <div className="padding-bottom-1">
                <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
            </div>
        </div>  
    </div>
    <div className="div-2-padding">
        <div>
            <div className="padding-bottom-1">
                <span className="title-header-2">Sua mãe está nos Estados Unidos?*</span>
            </div>
            <div className="padding-bottom-1">
                <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
            </div>
        </div>  
    </div>
    <div className="div-2-padding">
        <div>
            <div style={{paddingBottom:'0.4rem'}}>
                <span className="span-state">Qual a situação da sua mãe nos Estados Unidos*</span>
            </div>
            <div className="padding-bottom-1">
                <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
            </div>
        </div>  
    </div>
</div>      
  )
}

export default MotherInformation
