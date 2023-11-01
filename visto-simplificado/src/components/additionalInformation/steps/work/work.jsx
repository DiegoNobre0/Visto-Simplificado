import React, { useEffect, useState } from "react"
import './work.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Work () {
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
                        <span className="title-header">Informações adicionais</span>
                    </div>
                    <div>
                        <span className="title-header-1">Trabalho</span>
                    </div>
                </div>
                <hr className="hr-color"/>                
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Já trabalhou em algum outro lugar?<span style={{color:'red'}}>*</span></span>
                </div>
                <div className="padding-radio-marital">
                    <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Sim"
                    name="radio-buttons-group"
                    className="subTitle-div-2"
                    row                                
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />                                
                    </RadioGroup>
                </div>                         
            </div>
            <div className="div-marital-padding">                
                <div className="div-2-inputs-work">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Nome da empresa que já trabalhou<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Cargo<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                </div>
                <div className="div-2-inputs-work">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Data de inicio<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial"/>
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Data de termino<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial"/>
                                </LocalizationProvider>
                            </div>
                        </div>
                </div>
                <div className="div-1-inputs-marital">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Cidade da empresa<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Estado da empresa<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Pais da empresa<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                </div>
                <div className="div-2-inputs-work">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Endereço da empresa<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">CEP<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                            <InputMask
                                mask="99999-999"
                                maskChar=""
                                
                            >
                            {() => <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />}
                            </InputMask>
                                
                            </div>
                        </div>                    
                </div>
                <div className="div-2-inputs-work">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Telefone da empresa<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                            <InputMask
                                mask="55+ (99) 99999-9999"
                                maskChar=""
                                
                            >
                            {() => <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />}
                            </InputMask>
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Email da empresa<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>                    
                </div>
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Já trabalhou em algum outro lugar?<span style={{color:'red'}}>*</span></span>
                </div>
                <div className="padding-radio-marital">
                    <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Sim"
                    name="radio-buttons-group"
                    className="subTitle-div-2"
                    row                                
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />                                
                    </RadioGroup>
                </div>                         
            </div>
        </div>    
  )
}

export default Work