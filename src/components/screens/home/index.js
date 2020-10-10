import 'style.css'
import React from 'react'
import {BrowserRouter, Route,Switch, Link} from 'react-router-dom'
import Header from './hearder'
import Main from './main'
import Footer from './footer'
class home extends React.Component(){
    constructor(pros){
        super(pros)
        
    }

    render(){
        return(
            <BrowserRouter>
                <div className="container">
                    <div className='header' >
                        <Header Link to='Header'/> 
                        <Route path='Header'/>
                    </div>
                    <div className='main'>
                        <Main Link to='Main'/>
                        <Route path='Main'/>
                    </div>
                    <div className='footer'>
                        <Footer Link to='Footer'/> 
                        <Route path='Footer'/>
                    </div>
                </div>
            </BrowserRouter>    
        );
    }
}

export default home;