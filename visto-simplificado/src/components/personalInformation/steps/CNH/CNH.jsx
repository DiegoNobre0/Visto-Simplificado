import React, { useEffect, useState } from "react"
import './CNH.css'
import {MenuItem, Select, TextField } from "@mui/material";
import statesBrazilianService from "../../../../services/statesBrazilianService"
import {FormControlLabel, Radio, RadioGroup } from "@mui/material";

function CNH () {
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
                <div style={{display:'flex', justifyContent: 'space-between'}}>
                    <div>
                        <span className="title-header">Carteira de motorista</span>
                    </div>                  
                </div>
                <hr className="hr-color"/>                
            </div>
            <div className="div-2-padding">
                <div className="div-flex-inputs">
                    <div>
                        <div className="padding-bottom-1">
                            <span className="title-header-2">Já teve ou tem carteira de motorista nos Estados Unidos?*</span>
                        </div>
                        <div className="padding-bottom-1">
                        <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Feminino"
                                name="radio-buttons-group"
                                className="subTitle-div-2"
                                row                                
                            >
                                <FormControlLabel value="Feminino" control={<Radio />} label="Feminino" />
                                <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />                                
                        </RadioGroup>
                        </div>
                    </div>           
                </div>
            </div>   
            <div className="div-2-padding"> 
                <div className="div-flex-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Qual o número da carteira nos Estados Unidos?*</span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField id="outlined-basic" className="input-style" placeholder="Escreva o seu primeiro nome" variant="outlined" />
                        </div>
                    </div>          
                </div>
            </div>
            <div className="div-2-padding"> 
                <div className="div-flex-inputs">
                    <div>
                        <div style={{paddingBottom:'0.4rem'}}>
                            <span className="span-state">Selecione o estado em que tirou a carteira*</span>
                        </div>
                        <div className="padding-bottom-1">
                        <Select
                        className="style-select input-style"
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

export default CNH
