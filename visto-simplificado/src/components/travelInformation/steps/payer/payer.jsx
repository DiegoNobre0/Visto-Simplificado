import React, { useEffect, useState } from "react"
import './payer.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const statusArray = [
    { key: "Eu", valor: "Eu" },
    { key: "Empresa/Organização", valor: "Empresa/Organização" },
    { key: "Mãe", valor: "Mãe" },
    { key: "Pai", valor: "Pai" },
    { key: "Tio", valor: "Tio" },
    { key: "Irmã(o)", valor: "Irmã(o)" },
    { key: "Amigo", valor: "Amigo" },
    { key: "Chefe", valor: "Chefe" },
    { key: "Colega de trabalho", valor: "Colega de trabalho" }
];

function Payer() {
    const getStates = async () => {
        const response = await statesBrazilianService.getStates();
        setStates(response);
    }

    const [states, setStates] = useState([]);
    const [radioRequester, setRadioRequester] = useState("Eu");
    const [selectedPayer, setSelectedPayer] = useState("");

    const handleChangeSelect = (event) => {
        setSelectedPayer(event.target.value);
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
                        <span className="title-header">Informações adicionais sobre o pagador</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-marital-padding">
                <div className="padding-bottom-title-input">
                    <span className="title-header-2">Pessoa que está pagando pela viagem?<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-radio-marital">
                    <Select
                        className="style-select-initial input-style-initial"
                        value={selectedPayer}
                        onChange={handleChangeSelect}
                    >
                        {statusArray.map((status) => (
                            <MenuItem key={status.key} value={status.valor}>
                                {status.valor}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
            {selectedPayer != "Eu" && selectedPayer != "Empresa/Organização" ? (
                <div>
                    <div className="div-marital-padding">
                        <div className="div-2-inputs-work">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">O endereço da pessoa que está pagando é o mesmo que o seu?</span>
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
                    </div>
                    <div className="div-marital-padding">
                        <div className="padding-bottom-title-input">
                            <span className="title-header-2">Informação sobre a pessoa</span>
                        </div>
                        <div className="div-1-inputs-marital">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Nome da pessoa<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Sobrenome da pessoa<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Qual a sua relação com esta pessoa?<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                                </div>
                            </div>
                        </div>
                        <div className="div-1-inputs-marital">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Cidade da pessoa<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Estado da pessoa<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">País?<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                                </div>
                            </div>
                        </div>
                        <div className="div-2-inputs-work">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Endereço da pessoa<span style={{ color: 'red' }}>*</span></span>
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
                                    <span className="span-state">Telefone da pessoa<span style={{ color: 'red' }}>*</span></span>
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
                                    <span className="span-state">Email da pessoa<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {selectedPayer === "Empresa/Organização" ? (
                <div>
                    <div className="div-marital-padding">
                        <div className="padding-bottom-title-input">
                            <span className="title-header-2">Outra empresa/organização</span>
                        </div>
                        <div className="div-2-inputs-work">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Nome da companhia/organização<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                                </div>
                            </div>                          
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Qual a sua relação com esta companhia/organização?<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                                </div>
                            </div>
                        </div>
                        <div className="div-1-inputs-marital">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Cidade da companhia/organização<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Estado da companhia/organização<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                                </div>
                            </div>
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">País da companhia/organização?<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="input-style-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                                </div>
                            </div>
                        </div>
                        <div className="div-2-inputs-work">
                            <div>
                                <div style={{ paddingBottom: '0.4rem' }}>
                                    <span className="span-state">Endereço da companhia/organização<span style={{ color: 'red' }}>*</span></span>
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
                                    <span className="span-state">Telefone da companhia/organização<span style={{ color: 'red' }}>*</span></span>
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
                                    <span className="span-state">Email da companhia/organização<span style={{ color: 'red' }}>*</span></span>
                                </div>
                                <div className="padding-bottom-1">
                                    <TextField id="outlined-basic" className="style-select-work" placeholder="Escreva o seu sobrenome" variant="outlined" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Payer
