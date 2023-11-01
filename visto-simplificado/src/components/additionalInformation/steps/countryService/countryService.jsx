import React, { useEffect, useState } from "react"
import './countryService.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function CountryService () {
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
                <span className="title-header-1">Serviços ao país</span>
            </div>
        </div>
        <hr className="hr-color"/>                
    </div>
    <div className="div-country-padding">
        <div className="padding-bottom-title-input-country">
            <span className="title-header-2">Já serviu?<span style={{color:'red'}}>*</span></span>
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
    <div className="div-country-padding">
        <div className="div-2-inputs-work">
                <div>
                    <div style={{paddingBottom:'0.4rem'}}>
                        <span className="span-state">País que serviu ao exercito<span style={{color:'red'}}>*</span></span>
                    </div>
                    <div className="padding-bottom-1">
                        <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                    </div>
                </div>
                <div>
                    <div style={{paddingBottom:'0.4rem'}}>
                        <span className="span-state">Ramo de serviço que serviu ao exercito<span style={{color:'red'}}>*</span></span>
                    </div>
                    <div className="padding-bottom-1">
                        <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                    </div>
                </div>
        </div>                        
    </div>
    <div className="div-country-padding">
        <div className="div-2-inputs-work">
                <div>
                    <div style={{paddingBottom:'0.4rem'}}>
                        <span className="span-state">Patente<span style={{color:'red'}}>*</span></span>
                    </div>
                    <div className="padding-bottom-1">
                        <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                    </div>
                </div>
                <div>
                    <div style={{paddingBottom:'0.4rem'}}>
                        <span className="span-state">Especialidade<span style={{color:'red'}}>*</span></span>
                    </div>
                    <div className="padding-bottom-1">
                        <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                    </div>
                </div>
        </div>                        
    </div>
    <div className="div-country-padding">
        <div className="div-2-inputs-work">
                <div>
                    <div style={{paddingBottom:'0.4rem'}}>
                        <span className="span-state">Patente<span style={{color:'red'}}>*</span></span>
                    </div>
                    <div className="padding-bottom-1">
                        <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                    </div>
                </div>
                <div>
                    <div style={{paddingBottom:'0.4rem'}}>
                        <span className="span-state">Especialidade<span style={{color:'red'}}>*</span></span>
                    </div>
                    <div className="padding-bottom-1">
                        <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                    </div>
                </div>
        </div>                        
    </div>
    <div className="div-country-padding">                    
        <div className="div-2-inputs-work">
        <div>
                    <div style={{paddingBottom:'0.4rem'}}>
                        <span className="span-state">Data de inicio no exercito<span style={{color:'red'}}>*</span></span>
                    </div>
                    <div className="padding-bottom-1">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial"/>
                    </LocalizationProvider>
                    </div>
                </div>
                <div>
                    <div style={{paddingBottom:'0.4rem'}}>
                        <span className="span-state">Data de termino no exercito<span style={{color:'red'}}>*</span></span>
                    </div>
                    <div className="padding-bottom-1">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial"/>
                        </LocalizationProvider>
                    </div>
                </div>
        </div>      
    </div>
</div>    
  )
}

export default CountryService
