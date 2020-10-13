import './index.css'
import React from 'react'
import Home from '../index'
import Form from '../../form'
import Counter from '../../counter'
import {BrowserRouter, Route,Switch, Link} from 'react-router-dom'
function header (){
  
  return(
    
   <BrowserRouter>
      <div className='header'>
          <ul>
            <li><Link to='home'>Home</Link></li>
            <li><Link to='form'>Formulario</Link></li>
            <li><Link to='counter'>Counter</Link></li>
          </ul>
      </div>
      <Route path='home'><Home/></Route>
      <Route path='form'><Form/></Route>
      <Route path='counter'><Counter/></Route>
   </BrowserRouter>
     
  )
  
}
export default header;