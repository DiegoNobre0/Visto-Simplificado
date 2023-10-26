import React, { useEffect, useState } from "react"
import './initial-information.css'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import statesBrazilianService from "../../service/statesBrazilianService";


const InitialInformation = () => {

    const getStates = async () =>{
        debugger
        const response = await statesBrazilianService.getStates();
        setStates(response);        
    }

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState("");

    const handleChangeSelect = (event) => {
        setSelectedState(event.target.value);
    };

    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: false,
      });


    const handleChangeCheck = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

      const { gilad, jason, antoine } = state;  


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
                <hr className="hr-color"/>
                <span className="subTitle-header">O formulário DS-160 é um formulário obrigatório para preenchimento por todos os solicitantes do visto americano de não imigrante. Nesta categoria, estão diversos tipos de visto, como turismo, estudos, negócios, entre outros.</span>
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
                            <MenuItem key={state.id} value={state.id}>
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
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Sim, sou solicitante principal" />
                                <FormControlLabel value="male" control={<Radio />} label="Não sou o solicidade principal" />
                                <FormControlLabel value="other" control={<Radio />} label="Estou realizando o meu visto sozinho" />
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className="style-observation font-style-observation">
                <span>* Caso esteja solicitando o visto sozinho, selecione <b>“ESTOU REALIZANDO O MEU VISTO SOZINHO”</b>.</span><br/>
                <span>* Deve haver apenas um solicitante principal por família.</span><br/>
                <span>* Caso já tenha selecionado um solicitante principal em outro formulário, selecione <b>NÃO SOU O SOLICITANTE PRINCIPAL</b> para este formulário</span>
            </div>
        </div>
    </div>
  )
}

export default InitialInformation
