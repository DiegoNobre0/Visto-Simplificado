import React, { useEffect, useState } from "react"
import './contactPoint.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function ContactPoint() {
    const getStates = async () => {
        const response = await statesBrazilianService.getStates();
        setStates(response);
    }

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("Hotel");    

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
                        <span className="title-header">Informações sobre o ponto de contato</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Qual será o seu ponto de contato nos EUA?<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-radio-marital">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Hotel"
                        name="radio-buttons-group"
                        className="subTitle-div-2"
                        row
                        value={selectedState}
                        onChange={handleChangeSelect}
                    >
                        <FormControlLabel value="Hotel" control={<Radio />} label="Hotel" />
                        <FormControlLabel value="Conhecido" control={<Radio />} label="Conhecido" />
                    </RadioGroup>
                </div>
            </div>

            {selectedState === "Hotel" ? (
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Informação sobre o Hotel</span>
                </div>
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Nome do hotel<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Cidade do hotel<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Estado do hotel<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Endereço do hotel<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
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
                                {() => <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />}
                            </InputMask>

                        </div>
                    </div>
                </div>
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Telefone do hotel<span style={{ color: 'red' }}>*</span></span>
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
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Email do hotel<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                        </div>
                    </div>
                </div>
            </div>

            ):(

            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Informação sobre o conhecido</span>
                </div>
                <div className="div-1-inputs-contact">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Nome do contato<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-contact" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Sobrenome do contato<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-contact" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Relação com o contato<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-contact" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Cidade do contato<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Estado do contato<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Endereço do contato<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
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
                                {() => <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />}
                            </InputMask>

                        </div>
                    </div>
                </div>
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Telefone do hotel<span style={{ color: 'red' }}>*</span></span>
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
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Email do hotel<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default ContactPoint
