import React, { useEffect, useState } from "react"
import './distantFamily.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";

function DistantFamily () {
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
                <span className="title-header">Infomações complementares</span>
            </div>                    
        </div>
        <hr className="hr-color"/>                
    </div>
    <div className="div-2-padding">
        <div className="padding-bottom-1">
            <span className="title-header-2">Você possui algum outro familiar direto nos Estados Unidos?(Ex: TIO;PRIMO;SOBRINHO)*</span>
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
        <div className="padding-bottom-1">
            <span className="title-header-2">Qual é a sua principal ocupação?*</span>
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
                <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />                                 
            </RadioGroup>
        </div>
    </div>

    <div className="padding-bottom">
        <div style={{display:'flex', justifyContent: 'space-between'}}>
            <div>
                <span className="title-header">Dados da ocupação</span>
            </div>                    
        </div>
        <hr className="hr-color"/>                
    </div>
    <div className="div-2-padding">
    <div >
        <div className="div-flex-inputs">
            <div>
                <div style={{paddingBottom:'0.4rem'}}>
                    <span className="span-state">Área de ocupação*</span>
                </div>
                <div className="padding-bottom-1">
                    <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                </div>
            </div>
            <div>
                <div style={{paddingBottom:'0.4rem'}}>
                    <span className="span-state">Nome da instituição/empresa*</span>
                </div>
                <div className="padding-bottom-1">
                    <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                </div>
            </div>
        </div>
        <div className="div-flex-inputs">
            <div>
                <div style={{paddingBottom:'0.4rem'}}>
                    <span className="span-state">Endereço da instituição/empresa*</span>
                </div>
                <div className="padding-bottom-1">
                    <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                </div>
            </div>
            <div>
                <div style={{paddingBottom:'0.4rem'}}>
                    <span className="span-state">Cidade da instituição/empresa*</span>
                </div>
                <div className="padding-bottom-1">
                    <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                </div>
            </div>
            <div>
                <div style={{paddingBottom:'0.4rem'}}>
                    <span className="span-state">Estado da instituição/empresa*</span>
                </div>
                <div className="padding-bottom-1">
                    <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                </div>
            </div>
        </div>
    </div>
    </div>
    
</div>   
  )
}

export default DistantFamily
