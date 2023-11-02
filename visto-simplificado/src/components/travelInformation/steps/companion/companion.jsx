import React, { useEffect, useState } from "react"
import './companion.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService";
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Companion () {
    const getStates = async () =>{        
        const response = await statesBrazilianService.getStates();
        setStates(response);        
    }

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("Sim, estou viajando com outra(s) pessoa(s)");    

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
                        <span className="title-header">Viagem</span>
                    </div>
                    <div>
                        <span className="title-header-1">Acompanhantes</span>
                    </div>
                </div>
                <hr className="hr-color"/>                
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Você está viajanddo com mais alguém?<span style={{color:'red'}}>*</span></span>
                </div>
                <div className="padding-radio-marital">
                    <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Não, estou viajando sozinho"
                    name="radio-buttons-group"
                    className="subTitle-div-2"
                    value={selectedState}
                    onChange={handleChangeSelect}                                                    
                    >
                        <FormControlLabel value="Não, estou viajando sozinho" control={<Radio />} label="Não, estou viajando sozinho" />
                        <FormControlLabel value="Sim, estou viajando com outra(s) pessoa(s)" control={<Radio />} label="Sim, estou viajando com outra(s) pessoa(s)" />
                        <FormControlLabel value="Sim, estou viajando com um grupo/empresa" control={<Radio />} label="Sim, estou viajando com um grupo/empresa" />                                 
                    </RadioGroup>
                </div>                         
            </div>
            {selectedState === "Sim, estou viajando com outra(s) pessoa(s)" ?(
                <div className="div-marital-padding">
                <div className="div-2-inputs-work">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Nome da pessoa que está viajando junto com você<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Digite o sobrenome da pessoa que está viajando com você<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                </div>
                <div className="input-companion">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Qual a sua relação com esta pessoa?<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-input-1" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                </div>
            </div>
            ): null}

            {selectedState === "Sim, estou viajando com um grupo/empresa" ? (
            <div>
                <div className="padding-bottom">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                    <span className="title-header">Grupo/Empresa</span>
                    </div>
                </div>
                <hr className="hr-color" />
                </div>
                <div className="div-marital-padding">
                <div className="div-2-inputs-work">
                    <div>
                    <div style={{ paddingBottom: '0.4rem' }}>
                        <span className="span-state">Qual o nome do grupo/empresa?<span style={{ color: 'red' }}>*</span></span>
                    </div>
                    <div className="padding-bottom-1">
                        <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                    </div>
                    </div>
                    <div>
                    <div style={{ paddingBottom: '0.4rem' }}>
                        <span className="span-state">Cargo<span style={{ color: 'red' }}>*</span></span>
                    </div>
                    <div className="padding-bottom-1">
                        <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            ) : null}
        </div>    
  )
}

export default Companion
