import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import './loginform.css'


const LoginForm = () =>{
  const [email, SetEmail] = useState('');

  function OnChangeEmail(e){
    const {value} = e.target;
    SetEmail(value);
  }

  return(
    <div class="Container">
      <div class="RegForm__inner">
        <div class="RegForm__title">
          <h1 class = "Text__Reg">Вход</h1>
        </div>
        <div class="LogContainer__form">
          <div class="RegForm__texfields">
            <div class="InputBlock">
              <h3 class="LoginText">
                Email
              </h3>
              <div class="RegForm__textfield">
                <TextField 
                onChange={OnChangeEmail}
                size='large' 
                id="outlined-basic" 
                variant="outlined"
                />
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
            color='success' 
            variant="contained"
            >Войти</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;