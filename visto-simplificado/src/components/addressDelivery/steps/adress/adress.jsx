import React, { useEffect, useState } from "react"
import './adress.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService";
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


function Adress () {
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <span className="title-header">Endereço de entrega</span>
            </div>
        </div>
        <hr className="hr-color" />
    </div>

    <div className="div-marital-padding">
        <div className="div-2-inputs-work">
            <div>
                <div style={{ paddingBottom: '0.4rem' }}>
                    <span className="span-state">Endereço de entrega<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-bottom-1">
                    <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                </div>
            </div>
            <div>
                <div style={{ paddingBottom: '0.4rem' }}>
                    <span className="span-state">Complemento<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-bottom-1">
                    <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                </div>
            </div>
        </div>
        <div className="div-1-inputs-residence">
            <div>
                <div style={{ paddingBottom: '0.4rem' }}>
                    <span className="span-state">País do endereço de entrega<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-bottom-1">
                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                </div>
            </div>
            <div>
                <div style={{ paddingBottom: '0.4rem' }}>
                    <span className="span-state">CEP<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-bottom-1">
                    <InputMask
                        mask="99999-999"
                        maskChar=""
                    >
                        {() => <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />}
                    </InputMask>
                </div>
            </div>
            <div>
                <div style={{ paddingBottom: '0.4rem' }}>
                    <span className="span-state">Cidade do endereço de entrega<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-bottom-1">
                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                </div>
            </div>
        </div>
        <div className="div-2-inputs-work">
            <div>
                <div style={{ paddingBottom: '0.4rem' }}>
                    <span className="span-state">Estado do endereço de entrega<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-bottom-1">
                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                </div>
            </div>        
        </div>
    </div> 
</div>
  )
}

export default Adress
