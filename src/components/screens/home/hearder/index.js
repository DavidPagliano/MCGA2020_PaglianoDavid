import './index.css'
import React from 'react'
import Home from '../index'
import Counter from '../../counter'
import {BrowserRouter, Route,Switch, Link} from 'react-router-dom'
function header (){
  
  return(
    
   <BrowserRouter>
      <div className='header'>
          <nav>
            <div className='home-header'><a id='buttons'><Link to='home'>Home</Link></a></div>
            <div className='counter-header'><a id='buttons'><Link to='counter'>Counter</Link></a></div>  
          </nav>
      </div>
      <Route path='home'><Home/></Route>
      <Route path='counter'><Counter/></Route>
   </BrowserRouter>
     
  )
  
}
export default header;