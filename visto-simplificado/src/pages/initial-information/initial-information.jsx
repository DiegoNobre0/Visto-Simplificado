import React, { useEffect, useState } from "react"
import './initial-information.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import statesBrazilianService from "../../services/statesBrazilianService";
import { Link } from "react-router-dom";


function InitialInformation() {
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
        <div className='div-flex'>
            <div className='div-width'>

            </div>
            <div className="div-margin">
                <div className="padding-bottom">
                    <span className="title-header">Informações iniciais</span><br />
                    <hr className="hr-color" />
                    <span className="subTitle-header">O formulário DS-160 é um formulário obrigatório para preenchimento por todos os solicitantes do visto americano de não imigrante. Nesta categoria, estão diversos tipos de visto, como turismo, estudos, negócios, entre outros.</span>
                </div>
                <div className="div-home-padding ">
                    <div className="padding-bottom-1">
                        <span className="title-header-2">Consulado de preferência para adicionar ao DS-160</span>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
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
                                    <span className="title-header-2">Você está solicitando o visto apenas para você ou para a sua familia?</span>
                                </div>
                                <span className="subTitle-div-2">Por favor, selecione uma das opções abaixo para indicar se a solicitação de visto se aplica apenas a você como indivíduo ou se você está solicitando um visto para sua família também. Esta informação nos ajudará a direcionar sua solicitação de visto da maneira mais adequada.</span>
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
                                    <FormControlLabel value="Apenas para mim" control={<Radio />} label="Apenas para mim" />
                                    <FormControlLabel value="Para mim e minha familia" control={<Radio />} label="Para mim e minha familia" />
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="style-observation font-style-observation">
                    <span>* Caso esteja solicitando para você e sua família, a categoria "família" é reservada <b>APENAS PARA MEMBROS QUE RESIDEM NO MESMO ENDEREÇO QUE VOCÊ.</b> Se outros membros da sua família residem em endereços diferentes, eles devem apresentar solicitações de visto separadas.</span>                    
                </div>

                <div className='padding-top'>
                    <Link to="/form">
                        <button type='button' className='button-style' >
                            <span className='font-button'>Próxima</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InitialInformation
