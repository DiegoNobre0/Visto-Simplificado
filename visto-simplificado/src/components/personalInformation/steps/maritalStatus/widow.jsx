import React, { useEffect, useState } from "react"
import './maritalStatus.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

function Widow() {
    const getStates = async () => {
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
                        <span className="title-header">Informações Pessoais</span>
                    </div>
                    <div>
                        <span className="title-header-1">Viúvo(a)</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-marital-padding">
                <div>
                    <div className="padding-bottom-title-input">
                        <span className="title-header-2">Viuvo(a)</span>
                    </div>
                    <div className="div-2-inputs-marital">
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Nome do ex-cônjugue<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-marital" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                            </div>
                        </div>
                        <div>
                            <div style={{ paddingBottom: '0.4rem' }}>
                                <span className="span-state">Sobrenome do ex-cônjugue<span style={{ color: 'red' }}>*</span></span>
                            </div>
                            <div className="padding-bottom-1">
                                <TextField id="outlined-basic" className="style-select-marital" placeholder="Escreva o seu sobrenome" variant="outlined" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-1-inputs-marital">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Cidade de nascimento do ex-cônjugue<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-marital" placeholder="Escreva a cidade" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">País do nascimento do ex-cônjugue<span style={{ color: 'red' }}>*</span></span>
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
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Nacionalidade do ex-cônjugue<span style={{ color: 'red' }}>*</span></span>
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

export default Widow
