import './style.css'
import React from 'react'
import {BrowserRouter, Route,Switch, Link} from 'react-router-dom'
import Header from './hearder'
import Form from '../form'
function home(){
    return(
        <BrowserRouter>
            <div className="container">
                <Header/> 
                <Form/>
            </div>
            <Route path='Header'/>
        </BrowserRouter>    
    );
}

export default home;