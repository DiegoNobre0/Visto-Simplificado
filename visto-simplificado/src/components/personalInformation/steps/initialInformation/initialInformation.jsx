import React, { useEffect, useState } from "react";
import './initialInformation.css';
import {MenuItem, Select, TextField } from "@mui/material";
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputMask from 'react-input-mask';
import MaritalStatus from "../../../../datas/marital_status"


function InitialInformation (props) {
    const [maritalStatus, setMaritalStatus] = useState("");
    const [gender, setGender] = useState("F");

    const handleChangeSelect = (event) => {         
        setMaritalStatus(event.target.value);
        props.onStatusChange(event.target.value);
    };

    const handleChangeRadio = (event) => { 
        setGender(event.target.value);        
    };
    
    useEffect(() => {    
    }, []);

  return (        
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                    <div>
                        <span className="title-header">Informações Pessoais</span>
                    </div>
                    <div>
                        <span className="title-header-1">Dados pessoais</span>
                    </div>
                </div>
                <hr className="hr-color"/>                
            </div>
            <div className="div-initial-padding">
                <div className="div-grid-initial-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Nome<span><span style={{color:'red'}}>*</span></span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-initial" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Sobrenome<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-initial" placeholder="Escreva o seu sobrenome" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className="div-grid-initial-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Estado Civil<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                        
                        <Select
                        className="style-select-initial input-style-initial"                        
                        value={maritalStatus}
                        onChange={handleChangeSelect}
                        >
                            
                          {MaritalStatus.map((status) => (
                            <MenuItem key={status.key} value={status.key}>
                            {status.value}
                            </MenuItem>
                            ))}
                        </Select>
                    </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Gênero<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                        <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="F"
                                name="radio-buttons-group"
                                className="subTitle-div-2"
                                row     
                                value={gender}  
                                onChange={handleChangeRadio}                         
                            >
                                <FormControlLabel value="F" control={<Radio />} label="Feminino" />
                                <FormControlLabel value="M" control={<Radio />} label="Masculino" />                                
                        </RadioGroup>
                        </div>
                    </div>
                </div>
                <div className="div-grid-initial-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Data de nascimento<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial"/>
                        </LocalizationProvider>
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">CPF<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <InputMask
                                mask="999.999.999-99"
                                maskChar=""
                                
                            >
                            {() => <TextField id="outlined-basic" className="input-style-initial" type="text" placeholder="000.000.000-00" variant="outlined" />}
                            </InputMask>
                        </div>
                    </div>
                </div>
                <div className="div-grid-initial-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Telefone<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <InputMask
                                mask="55+ (99) 99999-9999"
                                maskChar=""
                                
                            >
                            {() => <TextField id="outlined-basic" className="input-style-initial" type="text" placeholder="55+ (00) 00000-0000" variant="outlined" />}
                            </InputMask>
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Telefone secundário<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <InputMask
                                mask="55+ (99) 99999-9999"
                                maskChar=""
                                
                            >
                            {() => <TextField id="outlined-basic" className="input-style-initial" type="text" placeholder="55+ (00) 00000-0000" variant="outlined" />}
                            </InputMask>
                        </div>
                    </div>
                </div>
                <div className="div-grid-initial-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Email principal<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-initial" placeholder="email@exemplo.com" type="email" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Email secundário<span style={{color:'red'}}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-initial" placeholder="email@exemplo.com" type="email" variant="outlined" />
                        </div>
                    </div>
                </div>
            </div>
        </div>    
  )
}

export default InitialInformation
