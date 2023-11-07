import React, { useEffect, useState } from "react"
import './travelInformations.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputMask from 'react-input-mask';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function TravelInformations() {
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
                        <span className="title-header">Informações da viagem</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>

            <div className="div-marital-padding">
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Data estimada da viagem<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker format="DD/MM/YYYY" className="custom-date-picker-initial" />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Duração da viagem <span style={{ color: '#2F5FE3' }}>(em dias)</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="style-input-2-travelinfo" placeholder="Ex: 5" variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className="div-1-inputs-marital">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Endereço da possível hospedagem<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style-work" placeholder="Bairro, rua e número" variant="outlined" />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Estado da possível hospedagem<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="input-style-work"
                                labelId="select-state"
                                id="select-state"
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
                            <span className="span-state">Cidade da possível hospedagem<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="input-style-work"
                                labelId="select-state"
                                id="select-state"

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
                <div className="div-2-inputs-work">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">CEP<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <InputMask
                                mask="99999-999"
                                maskChar=""

                            >
                                {() => <TextField id="outlined-basic" className="style-select-work" placeholder="00000-000" variant="outlined" />}
                            </InputMask>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TravelInformations
