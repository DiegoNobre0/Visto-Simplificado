import React, { useEffect, useState } from "react"
import './maritalStatus.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";

function StableUnion () {
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
                        <span className="title-header-1">União estável</span>
                    </div>
                </div>
                <hr className="hr-color"/>                
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Dados do companheiro(a)</span>
                </div>
                <div className="div-1-inputs-marital">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Nome do companheiro<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="input-style-marital" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Sobrenome do companheiro<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="input-style-marital" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Data de nascimento do companheiro(a)<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="input-style-marital" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                </div>
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Nacionalidade do companheiro</span>
                </div>
                <div className="div-2-inputs-marital">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Nacionalidade do companheiro(a)<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                            className="style-select-marital"
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
                            <span className="span-state">País de nascimento do companheiro(a)<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                            className="style-select-marital"
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
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Seu companheiro(a) mora no mesmo endereço que você?<span style={{color:'red'}}>*</span></span>
                </div>
                <div className="padding-radio-marital">
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
            <div className="div-marital-padding">              
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Endereço do companheiro<span style={{color:'red'}}>*</span></span>
                </div>                
                <div className="div-2-inputs-marital">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Endereço do companheiro(a)<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-marital" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Complemento do companheiro(a)<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-marital" placeholder="Escreva o seu sobrenome" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className="div-3-inputs-marital">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Cidade do companheiro(a)<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                        <Select
                            className="style-input-2-marital"
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
                            <span className="span-state">Estado do companheiro(a)<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                        <Select
                            className="style-input-2-marital"
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
                            <span className="span-state">CEP do companheiro(a)<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-input-2-marital" placeholder="Escreva o seu sobrenome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">País do companheiro(a)<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                        <Select
                            className="style-input-2-marital"
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
            </div>
        </div>    
  )
}

export default StableUnion
