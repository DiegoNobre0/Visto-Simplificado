import React, { useEffect, useState } from "react"
import './documents.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Documents () {
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
                        <span className="title-header">Documentos</span>
                    </div>
                    <div>
                        <span className="title-header-1">Passaporte</span>
                    </div>
                </div>
                <hr className="hr-color"/>                
            </div>       
            <div className="div-marital-padding">    
            <div className="padding-bottom-title-input">
                    <span className="title-header-2">Passaporte<span style={{color:'red'}}>*</span></span>
                </div>            
                <div className="div-2-inputs-work">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Qual o seu tipo de passaporte<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Número do passaporte<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                </div>
                <div className="div-1-inputs-marital">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Cidade onde o passaporte foi emitido<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="input-style-documents" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Estado onde o passaporte foi emitido<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="input-style-documents" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">País de emissão do passaporte<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="input-style-documents" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                </div>
                <div className="div-2-inputs-work">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Data de expiração do passaporte<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial"/>
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Data de emissão do passaporte<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial"/>
                                </LocalizationProvider>
                            </div>
                        </div>
                </div>
                <div className="padding-documents">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Caso tenha selecionado outro como o seu tipo de passaporte, digite abaixo o tipo de seu passaporte<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-input-doc" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                            </div>
                        </div>                 
                </div>
                <div className="padding-documents">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Já teve algum passaporte perdido ou roubado?<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                            <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Não tive meu passaporte perdido ou roubado"
                    name="radio-buttons-group"
                    className="subTitle-div"
                    row                                
                    >
                        <FormControlLabel value="Não tive meu passaporte perdido ou roubado" control={<Radio />} label="Não tive meu passaporte perdido ou roubado" />
                        <FormControlLabel value="Perdido" control={<Radio />} label="Perdido" />
                        <FormControlLabel value="Roubado" control={<Radio />} label="Roubado" />                                           
                    </RadioGroup>
                            </div>
                        </div>                 
                </div>
            </div>

            <div className="div-marital-padding">    
            <div className="padding-bottom-title-input">
                    <span className="title-header-2">Passaporte perdido ou roubado<span style={{color:'red'}}>*</span></span>
                </div>            
                <div className="div-2-inputs-work">
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">Número do passaporte<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{paddingBottom:'0.4rem'}}>
                                <span className="span-state">País de passaporte<span style={{color:'red'}}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                </div>
            </div>
        </div>    
  )
}

export default Documents
