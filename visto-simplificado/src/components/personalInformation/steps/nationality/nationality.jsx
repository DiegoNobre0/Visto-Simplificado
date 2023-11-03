import React, { useEffect, useState } from "react"
import './nationality.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";

function Nationality () {
    const getStates = async () =>{        
        const response = await statesBrazilianService.getStates();
        setStates(response);        
    }

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [radioRequester, setRadioRequester] = useState("Não");

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
                        <span className="title-header">Nacionalidade</span>
                    </div>
                </div>
                <hr className="hr-color"/>                
            </div>
            <div className="div-nationality-padding">
                <div className="padding-bottom-nationality">
                    <span className="title-header-2">Nacionalidade<span style={{color:'red'}}>*</span></span>
                </div>
                <div className="div-grid-nationality-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Pais natal<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                            className="style-select-nationality"
                            labelId="select-state"
                            id="select-state"
                            value={selectedState}
                            onChange={handleChangeSelect}
                            >
                                {states.map((state) => (
                                <MenuItem key={state.id} value={state.nome}>
                                    {state.nome}
                                </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Cidade natal<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                            className="style-select-nationality"
                            labelId="select-state"
                            id="select-state"
                            value={selectedState}
                            onChange={handleChangeSelect}
                            >
                                {states.map((state) => (
                                <MenuItem key={state.id} value={state.nome}>
                                    {state.nome}
                                </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Estado natal<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                            className="style-select-nationality"
                            labelId="select-state"
                            id="select-state"
                            value={selectedState}
                            onChange={handleChangeSelect}
                            >
                                {states.map((state) => (
                                <MenuItem key={state.id} value={state.nome}>
                                    {state.nome}
                                </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="div-grid-nationality-inputs-1">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Nacionaliadade</span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                            className="style-select-nationality-1"
                            labelId="select-state"
                            id="select-state"
                            value={selectedState}
                            onChange={handleChangeSelect}
                            >
                                {states.map((state) => (
                                <MenuItem key={state.id} value={state.nome}>
                                    {state.nome}
                                </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'1rem'}}>
                            <span className="span-state">Você possui outra nacionalidade?<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                        <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Sim"
                                name="radio-buttons-group"
                                className="subTitle-div-2"
                                row         
                                value={radioRequester}   
                                onChange={handleChangeRequester}                    
                            >
                                <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                                <FormControlLabel value="Não" control={<Radio />} label="Não" />                                
                        </RadioGroup>
                        </div>
                    </div>                
                </div>
            </div>
            {radioRequester === "Sim" ? (
            <div className="div-nationality-padding">
                <div className="padding-bottom-nationality">
                    <span className="title-header-2">Outras nacionalidades</span><br />
                    <span className="subtitle-header">Caso possua outra nacionalidade ou cidadania, escolha o pais da mesma</span>
                </div>
                <div className="div-grid-nationality-inputs-1">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Nacionalidade<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                            className="style-select-nationality-1"
                            labelId="select-state"
                            id="select-state"
                            value={selectedState}
                            onChange={handleChangeSelect}
                            >
                                {states.map((state) => (
                                <MenuItem key={state.id} value={state.nome}>
                                    {state.nome}
                                </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Número do passaporte<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-nationality-1" placeholder="Escreva o seu número do passaporte" variant="outlined" />
                        </div>
                    </div>
                </div>
            </div>
            ) : null}
        </div>    
  )
}

export default Nationality
