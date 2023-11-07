import React, { useEffect, useState } from "react"
import './maritalStatus.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Countries from "../../../../datas/countries";
import InputMask from 'react-input-mask';

function StableUnion() {
    const [nationality, setNationality] = useState("");
    const [countryBirth, setCountryBirth] = useState("");
    const [partnerAdress, setPartnerAdress] = useState("Sim");

    const handleChangeSelectNationality = (event) => {
        setNationality(event.target.value);
    };
    const handleChangeSelectCountryBirth = (event) => {
        setCountryBirth(event.target.value);
    };
    const handleChangeSelectPartnerAdress = (event) => {
        setPartnerAdress(event.target.value);
    };

    useEffect(() => {
    }, []);

    return (
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span className="title-header">Informações Pessoais</span>
                    </div>
                    <div>
                        <span className="title-header-1">União estável</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Dados do companheiro(a)</span>
                </div>
                <div className="div-1-inputs-marital">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Nome do companheiro<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-marital" placeholder="Escreva o primeiro nome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Sobrenome do companheiro<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-marital" placeholder="Escreva o sobrenome" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Data de nascimento do companheiro(a)<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial" />
                            </LocalizationProvider>
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
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Nacionalidade do companheiro(a)<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="style-select-marital"
                                labelId="select-state"
                                id="select-state"
                                value={nationality}
                                onChange={handleChangeSelectNationality}
                            >
                                {Countries.map((state) => (
                                    <MenuItem key={state.key} value={state.key}>
                                        {state.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">País de nascimento do companheiro(a)<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="style-select-marital"
                                labelId="select-state"
                                id="select-state"
                                value={countryBirth}
                                onChange={handleChangeSelectCountryBirth}
                            >
                                {Countries.map((state) => (
                                    <MenuItem key={state.key} value={state.key}>
                                        {state.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Seu companheiro(a) mora no mesmo endereço que você?<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-radio-marital">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Sim"
                        name="radio-buttons-group"
                        className="subTitle-div-2"
                        row
                        value={partnerAdress}
                        onChange={handleChangeSelectPartnerAdress}
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
            </div>
            {partnerAdress === "Sim" ? (
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Endereço do companheiro<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="div-2-inputs-marital">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Endereço do companheiro(a)<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-marital" placeholder="Rua, bairro, número" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Complemento do companheiro(a)<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-select-marital" placeholder="Preencha um complemento" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className="div-3-inputs-marital">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Cidade do companheiro(a)<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="style-select-marital"
                                labelId="select-state"
                                id="select-state"                               
                            >
                                {Countries.map((state) => (
                                    <MenuItem key={state.key} value={state.key}>
                                        {state.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Estado do companheiro(a)<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="style-select-marital"
                                labelId="select-state"
                                id="select-state"                                
                            >
                                {Countries.map((state) => (
                                    <MenuItem key={state.key} value={state.key}>
                                        {state.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">CEP do companheiro(a)<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                        <InputMask
                                mask="99999-999"
                                maskChar=""

                            >
                                {() => <TextField id="outlined-basic" className="style-input-1-marital" placeholder="00000-000" variant="outlined" />}
                            </InputMask>
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">País do companheiro(a)<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="style-select-marital"
                                labelId="select-state"
                                id="select-state"                                
                            >
                                {Countries.map((state) => (
                                    <MenuItem key={state.key} value={state.key}>
                                        {state.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
            ) : null}
        </div>
    )
}

export default StableUnion
