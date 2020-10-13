import './index.css'
import React from 'react'
import Home from '../index'
import Form from '../../form'
import {BrowserRouter, Route,Switch, Link} from 'react-router-dom'
function header (){
  
  return(
  <BrowserRouter>
    <div className="header">
      <ul>
        <li Link to='home'>Home <Home/></li>
        <li Link to='form'>Formulario <Form/></li>
        <li>Contacto</li>
      </ul>
    </div>
    <Route path='home'/>
    <Route path='form'/>
  </BrowserRouter>
   
     
  )
  
}
export default header;