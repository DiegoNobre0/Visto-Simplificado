import React, { useEffect, useState } from "react";
import './initialInformation.css';
import { MenuItem, Select, TextField } from "@mui/material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputMask from 'react-input-mask';
import MaritalStatus from "../../../../datas/marital_status";
import { useData } from '../../../../dataContext/dataContext';

function InitialInformation(props) {
    const { data, updateData } = useData();

    // Estados para campos de entrada
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [gender, setGender] = useState("F");
    const [birthdate, setBirthdate] = useState(null);
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [secondaryPhone, setSecondaryPhone] = useState("");
    const [primaryEmail, setPrimaryEmail] = useState("");
    const [secondaryEmail, setSecondaryEmail] = useState("");

    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);

        updateData({
            name: {
                given_name: event.target.value,
            }
        });
    };

    const handleChangeLastName = (event) => {
        setLastName(event.target.value);

        let fullName = firstName + " " + lastName;

        updateData({
            name: {
                surname: event.target.value,
                full_name: fullName
            }
        });;
    };

    const handleChangeMaritalStatus = (event) => {
        setMaritalStatus(event.target.value);

        props.onStatusChange(event.target.value);
        
        updateData({ marital_status: event.target.value });
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
        updateData({ gender: event.target.value });
    };

    const handleChangeBirthdate = (date) => {
        setBirthdate(date);
        // updateData({ birthdate: date });
    };

    const handleChangeCpf = (event) => {
        setCpf(event.target.value);
        // updateData({ cpf: event.target.value });
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
        updateData({ primary_phone_number: event.target.value });
    };

    const handleChangeSecondaryPhone = (event) => {
        setSecondaryPhone(event.target.value);
        updateData({ secondary_phone_number: event.target.value });
    };

    const handleChangePrimaryEmail = (event) => {
        setPrimaryEmail(event.target.value);
        updateData({ primary_email: event.target.value });
    };

    const handleChangeSecondaryEmail = (event) => {
        setSecondaryEmail(event.target.value);
        updateData({ secondary_email: event.target.value });
    };

    useEffect(() => {
        // Lógica de efeito colateral, se necessário
    }, []);

    return (
        <div className="div-margin">
            <div className="padding-bottom">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <span className="title-header">Informações Pessoais</span>
                    </div>
                    <div>
                        <span className="title-header-1">Dados pessoais</span>
                    </div>
                </div>
                <hr className="hr-color" />
            </div>
            <div className="div-initial-padding">
                <div className="div-grid-initial-inputs">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Nome<span><span style={{ color: 'red' }}>*</span></span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField
                                id="outlined-basic"
                                className="input-style-initial"
                                placeholder="Escreva o seu primeiro nome"
                                variant="outlined"
                                value={firstName}
                                onChange={handleChangeFirstName}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Sobrenome<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField
                                id="outlined-basic"
                                className="input-style-initial"
                                placeholder="Escreva o seu sobrenome"
                                variant="outlined"
                                value={lastName}
                                onChange={handleChangeLastName}
                            />
                        </div>
                    </div>
                </div>
                <div className="div-grid-initial-inputs">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Estado Civil<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <Select
                                className="style-select-initial input-style-initial"
                                value={maritalStatus}
                                onChange={handleChangeMaritalStatus}
                            >
                                {MaritalStatus.map((status) => (
                                    <MenuItem key={status.key} value={status.key}>
                                        {status.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Gênero<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="F"
                                name="radio-buttons-group"
                                className="subTitle-div-2"
                                row
                                value={gender}
                                onChange={handleChangeGender}
                            >
                                <FormControlLabel value="F" control={<Radio />} label="Feminino" />
                                <FormControlLabel value="M" control={<Radio />} label="Masculino" />
                            </RadioGroup>
                        </div>
                    </div>
                </div>
                <div className="div-grid-initial-inputs">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Data de nascimento<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    format="DD/MM/YYYY"
                                    className="custom-date-picker-initial"
                                    value={birthdate}
                                    onChange={handleChangeBirthdate}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">CPF<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <InputMask
                                mask="999.999.999-99"
                                maskChar=""
                                value={cpf}
                                onChange={handleChangeCpf}
                            >
                                {() => (
                                    <TextField
                                        id="outlined-basic"
                                        className="input-style-initial"
                                        type="text"
                                        placeholder="000.000.000-00"
                                        variant="outlined"

                                    />
                                )}
                            </InputMask>
                        </div>
                    </div>
                </div>
                <div className="div-grid-initial-inputs">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Telefone<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <InputMask
                                mask="55+ (99) 99999-9999"
                                maskChar=""
                                value={phone}
                                onChange={handleChangePhone}>
                                {() => (
                                    <TextField
                                        id="outlined-basic"
                                        className="input-style-initial"
                                        type="text"
                                        placeholder="55+ (00) 00000-0000"
                                        variant="outlined"
                                    />
                                )}
                            </InputMask>
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Telefone secundário<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <InputMask
                                mask="55+ (99) 99999-9999"
                                maskChar=""
                                value={secondaryPhone}
                                onChange={handleChangeSecondaryPhone}>
                                {() => (
                                    <TextField
                                        id="outlined-basic"
                                        className="input-style-initial"
                                        type="text"
                                        placeholder="55+ (00) 00000-0000"
                                        variant="outlined"
                                    />
                                )}
                            </InputMask>
                        </div>
                    </div>
                </div>
                <div className="div-grid-initial-inputs">
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Email principal<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField
                                id="outlined-basic"
                                className="input-style-initial"
                                placeholder="email@exemplo.com"
                                type="email"
                                variant="outlined"
                                value={primaryEmail}
                                onChange={handleChangePrimaryEmail}
                            />
                        </div>
                    </div>
                    <div>
                        <div style={{ paddingBottom: '0.4rem' }}>
                            <span className="span-state">Email secundário<span style={{ color: 'red' }}>*</span></span>
                        </div>
                        <div className="padding-bottom-1">
                            <TextField
                                id="outlined-basic"
                                className="input-style-initial"
                                placeholder="email@exemplo.com"
                                type="email"
                                variant="outlined"
                                value={secondaryEmail}
                                onChange={handleChangeSecondaryEmail}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InitialInformation;
