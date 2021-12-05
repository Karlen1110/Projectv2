import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, {useState} from 'react'
import './regform.css'
import { ValidEmailCode } from './constants'

function validateEmail(email) {
  return ValidEmailCode.test(String(email).toLowerCase());
}

const RegForm = () =>{

  const [email, SetEmail] = useState('');
  const [ValidateEmail, SetValidateEmail] = useState(false);

  function OnChangeEmail(e) {
    const { value } = e.target;
    if (ValidateEmail) {
      SetValidateEmail(false);
    }
    SetEmail(value);
  }

  return(
    <div class="Container">
      <div class="RegForm__inner">
        <div class="RegForm__title">
          <h1 class = "Text__Reg">Регистрация</h1>
        </div>
        <div class="Container__form">
          <div class="RegForm__texfields">
            <div class="InputBlockEmail">
              <h3 class="EmailText">
                Эл. адрес
              </h3>
              <div class="RegForm__textfield">
                <TextField
                error={ValidateEmail}
                onChange={OnChangeEmail}
                size='large' 
                id="outlined-basic" 
                variant="outlined"
                helperText={ValidateEmail ? "Введите корректный email" : ""}
                 />
              </div>
            </div>
            <div class="InputBlock">
              <h3 class="LoginText">
                Логин
              </h3>
              <div class="RegForm__textfield">
                <TextField size='large' id="outlined-basic" variant="outlined" />
              </div>
            </div>
            <div class="InputBlock">
              <h3 class="PasswordText">
                Пароль
              </h3>
              <div class="RegForm__textfield">
                <TextField size='large' id="outlined-basic" variant="outlined" />
              </div>
            </div>
          </div>
          <div class="ButtonReg">
            <Button
            onClick={() => {
              if (!validateEmail(email)) {
                SetValidateEmail(true);
              }
            }}
            disabled={email.length >= 0 && ValidateEmail}
            color='success' variant="contained">Зарегистироваться</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegForm;