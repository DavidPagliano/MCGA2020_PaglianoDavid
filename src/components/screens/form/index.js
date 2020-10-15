import './index.css'
import React from 'react'
import {BrowserRouter, Route,Switch, Link} from 'react-router-dom'
import Counter from '../counter'
import Dateform from '../form/edit-date/index'
class form extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Name:"David",
      Password:"hola1234"   
  };
  console.log(this.state);
  }

  render(){
    return(
      <BrowserRouter>
        <div className='container-form'>
            <form className='form'>
              <div className='info-date'>
                  <label>Usuario: </label>
                  <input type='text' className='Name' id='Usuario' name='User_name'/>
                  <label>Password: </label>
                  <input type='text' className='Password' id='Contraseña' name='Password'/>
              </div>
              <div className='button'>
              <button id='Counters' name='counter' value='Contador' >
                <Link to='Counter'>Contador</Link></button>
                <button id='Save' name='save_date' value='Guadar datos' onClick={this.handleClick}>Guardar datos</button>
              </div>
            </form>
        </div>
        <Route path='Counter'><Counter/></Route>
      </BrowserRouter>
    )
  }
}

export default form;