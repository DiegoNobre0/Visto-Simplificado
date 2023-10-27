import React, { useEffect, useState } from "react"
import './personalInformation.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { Link } from "react-router-dom";
import statesBrazilianService from "../../services/statesBrazilianService";


function PersonalInformation () {
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
                <span className="title-header">Informações Pessoais</span><br />
                <hr className="hr-color"/>                
            </div>
            <div className="div-2-padding ">
                <div className="padding-bottom-1">
                    <span className="title-header-2">Consulado de preferência para adicionar ao DS-160</span>
                </div>
                <div>
                    <div style={{paddingBottom:'0.4rem'}}>
                        <span className="span-state">Selecione o estado</span>
                    </div>
                    <div className="padding-bottom-1">
                        <Select
                        className="style-select"
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
                    <div >
                        <div className="padding-bottom-1">
                            <div className="padding-bottom-1">
                                <span className="title-header-2">Você é o solicitante principal?</span>
                            </div>
                            <span className="subTitle-div-2">Caso você esteja realizando o visto com a família, o solicitante principal é a pessoa que está responsável por seu visto e de seus familiares, haverá apenas uma conta que estará no nome do solicitante principal e seu familiares estarão ligados à essa conta.</span>
                        </div>
                        <div>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                className="subTitle-div-2"
                                value={radioRequester}
                                onChange={handleChangeRequester}
                            >
                                <FormControlLabel value="Sim, sou solicitante principal" control={<Radio />} label="Sim, sou solicitante principal" />
                                <FormControlLabel value="Não sou o solicidade principal" control={<Radio />} label="Não sou o solicidade principal" />
                                <FormControlLabel value="Estou realizando o meu visto sozinho" control={<Radio />} label="Estou realizando o meu visto sozinho" />
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
  )
}

export default PersonalInformation
