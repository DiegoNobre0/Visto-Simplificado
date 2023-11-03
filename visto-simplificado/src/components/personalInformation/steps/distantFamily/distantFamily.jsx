import React, { useEffect, useState } from "react"
import './distantFamily.css'
import { MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";


const statusArray = [
    { key: "Agricultura", valor: "Agricultura" },
    { key: "Artista", valor: "Artista" },
    { key: "Empresário", valor: "Empresário" },
    { key: "Comunicação", valor: "Comunicação" },
    { key: "Outro", valor: "Outro" },
];

function DistantFamily() {
    const getStates = async () => {
        const response = await statesBrazilianService.getStates();
        setStates(response);
    }

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [radioRequester, setRadioRequester] = useState("Sim");
    const [radioOcupation, setRadioOcupation] = useState("Empregado");

    const handleChangeSelect = (event) => {
        setSelectedState(event.target.value);
    };

    const handleChangeRequester = (event) => {
        setRadioRequester(event.target.value);
    };

    const handleChangeRadioOcupation = (event) => {
        setRadioOcupation(event.target.value);
    };

    useEffect(() => {
        getStates();
    }, []);

    return (
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span className="title-header">Infomações complementares</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-distant-padding">
                <div className="padding-bottom-distant">
                    <span className="title-header-2">Você possui algum outro familiar mais DISTANTE nos Estados Unidos?(Ex: TIO;PRIMO;SOBRINHO)<span style={{ color: 'red' }}>*</span></span>
                </div>
                <div className="padding-bottom-distant">
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Sim"
                        name="radio-buttons-group"
                        // className="subTitle-div-2"
                        row
                        value={radioRequester}
                        onChange={handleChangeRequester}
                    >
                        <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                        <FormControlLabel value="Não" control={<Radio />} label="Não" />
                    </RadioGroup>
                </div>
            </div>
            {radioRequester === "Sim" ? (
                <div>
                    <div className="div-distant-padding">
                        <div className="padding-bottom-distant">
                            <span className="title-header-2">Qual é a sua principal ocupação?<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-distant">
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Empregado"
                                name="radio-buttons-group"
                                className="subTitle-div-2"
                                row
                                value={radioOcupation}
                                onChange={handleChangeRadioOcupation}
                            >
                                <FormControlLabel value="Estudante" control={<Radio />} label="Estudante" />
                                <FormControlLabel value="Empregado" control={<Radio />} label="Empregado" />
                                <FormControlLabel value="Aposentado" control={<Radio />} label="Aposentado" />
                            </RadioGroup>
                        </div>
                    </div>
                    {radioOcupation === "Empregado" ? (
                        <div>
                            <div className="padding-bottom">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div>
                                        <span className="title-header">Dados da ocupação</span>
                                    </div>
                                </div>
                                <hr className="hr-color" />
                            </div>
                            <div className="div-distant-padding">
                                <div >
                                    <div className="div-grid-inputs-distant">
                                        <div>
                                            <div style={{ paddingBottom: '0.4rem' }} className="padding-bottom-distant">
                                                <span className="span-state">Área de ocupação<span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div className="padding-bottom-distant">
                                            <Select
                                                    className="input-style-distant"
                                                    labelId="select-state"
                                                    id="select-state"
                                                    value={selectedState}
                                                    onChange={handleChangeSelect}
                                                >
                                                    {statusArray.map((state) => (
                                                        <MenuItem key={state.key} value={state.valor}>
                                                            {state.valor}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>
                                        <div>
                                            <div style={{ paddingBottom: '0.4rem' }} >
                                                <span className="span-state">Nome da instituição/empresa<span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div>
                                                <TextField id="outlined-basic" className="input-style-distant" placeholder="Escreva o nome da instituição/empresa" variant="outlined" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-grid-inputs-distant-2">
                                        <div >
                                            <div style={{ paddingBottom: '0.4rem' }} >
                                                <span className="span-state">Endereço da instituição/empresa<span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div >
                                                <TextField id="outlined-basic" className="input-style-distant" placeholder="Escreva o endereço" variant="outlined" />
                                            </div>
                                        </div>
                                        <div >
                                            <div style={{ paddingBottom: '0.4rem' }} >
                                                <span className="span-state">Cidade da instituição/empresa<span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div >
                                                <Select
                                                    className="input-style-distant"
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
                                            <div style={{ paddingBottom: '0.4rem' }} >
                                                <span className="span-state">Estado da instituição/empresa<span style={{ color: 'red' }}>*</span></span>
                                            </div>
                                            <div >
                                                <Select
                                                    className="input-style-distant"
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

                        </div>
                    ) : null}
                </div>
            ) : null}
        </div>
    )
}

export default DistantFamily
