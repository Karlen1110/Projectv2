import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './app.css';
import HeaderSite from './Header/HeaderSite'
import RegForm from './RegForm/regform';
import LoginForm from './LoginForm/loginform.js'
import MainPage from './MainPage/mainpage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () =>{
  return(
      <div>
        <Router>
          <HeaderSite />
          <Routes>
            <Route path = "/login" element = {<LoginForm/>}/>
            <Route path="/" element={<MainPage/>} />
            <Route path="/registration" element={<RegForm />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App;