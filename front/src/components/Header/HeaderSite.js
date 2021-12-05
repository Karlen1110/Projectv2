import React, {useState} from 'react'
import './HeaderSite.css'
import Button from '@mui/material/Button';

import logoSite from '../../images/icon.svg'
import {
  Link,
  useLocation
} from "react-router-dom";

const HeaderSite = () =>{
  const { pathname: location } = useLocation();

  if (location === '/login') {
    localStorage.setItem('isReg', false);
    localStorage.setItem('isLogin', true);
  }
  else if (location === '/registration') {
    localStorage.setItem('isReg', true);
    localStorage.setItem('isLogin', false);
  }
  else if (location === '/') {
    localStorage.setItem('isReg', true);
    localStorage.setItem('isLogin', true);
  }

  let isRegLocal = localStorage.getItem('isReg');
  let isLoginLocal = localStorage.getItem('isLogin');

  const [isReg, SetReg] = useState((/true/i).test(isRegLocal));
  const [isLogin, SetLogin] = useState((/true/i).test(isLoginLocal));

  return(
      <header class="header__all">
        <div class="header__inner">
          <div class="header__tittle">
            <img class = "header__img" src={logoSite} alt=""/>
            <h2 class="header__text">
            <Link onClick={() => {
              SetReg(true);
              localStorage.setItem('isReg', true);
              SetLogin(true);
              localStorage.setItem('isLogin', true);
            }} className="LinkRedirect" to="/">CHAT</Link>
            </h2>
          </div>
          <div className="Button__reg">
            {isLogin && (<Button className = "ButtonReg" onClick={() => {
              SetReg(true);
              localStorage.setItem('isReg', true);
              SetLogin(false);
              localStorage.setItem('isLogin', false);
            }}
              color='success' variant="contained"><Link className="LinkRedirect" to="/registration">Регистрация</Link></Button>)}
            {isReg && (<Button style = {{
              marginLeft: 20
            }} onClick={() => {
              SetReg(false);
              localStorage.setItem('isReg', false);
              SetLogin(true);
              localStorage.setItem('isLogin', true);
            }}
              color='success' variant="contained"><Link className="LinkRedirect" to="/login">Вход</Link></Button>)}
          </div>
        </div>
      </header>
  )
}
export default HeaderSite;