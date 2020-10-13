import './index.css'
import React from 'react'
import {BrowserRouter, Route,Switch, Link} from 'react-router-dom'

class form extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <BrowserRouter>
        <div className='Form'>
          <form>
            <ul>
              <li>
                <label for="name">Nombre: </label>
                <input type="text" id="textbox" name="user_name"/>
              </li>
            </ul>
            <ul>
              <li>
              <label for="name">Nombre: </label>
                <input type="text" id="textbox" name="user_name"/>
              </li>
            </ul>
            <li>
            <button type="submit">Agregar contador</button>
            </li>
            <li>
            <button type="submit">Guardar datos</button>
            </li>
          </form>
        </div>
      </BrowserRouter>
    )
  }
}

export default form;