import React, { useEffect, useState } from "react"
import './informationResidence.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


function InformationResidence(props) {
    const getStates = async () => {
        const response = await statesBrazilianService.getStates();
        setStates(response);
    }

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("Não");
    

    const handleChangeSelect = (event) => {        
        setSelectedState(event.target.value);
        props.onStatusChange(event.target.value);
    };  

    useEffect(() => {
        getStates();
    }, []);

    return (
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span className="title-header">Informações sobre a residência</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>

            <div className="div-marital-padding">
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Endereço da sua residência<span style={{ color: 'red' }}>*</span></span>
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
                            <span className="span-state">País da sua residência<span style={{ color: 'red' }}>*</span></span>
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
                            <span className="span-state">Cidade da sua residência<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Estado da sua residência<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Seu endereço de entrega é o mesmo que você reside?<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Sim"
                                name="radio-buttons-group"
                                className="subTitle-div-2"
                                row
                                value={selectedState}
                                onChange={handleChangeSelect}
                            >
                                <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                                <FormControlLabel value="Não" control={<Radio />} label="Não" />
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-marital-padding">
                <div className="div-2-inputs-work">
                    <div>
                        <div >
                            <span className="title-header-2">Seu endereço de entrega é o mesmo que você reside?<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
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

                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Paós da sua residencia<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-residence" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationResidence
