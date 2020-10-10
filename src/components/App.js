import './App.css';
import React from 'react';
import {BrowserRouter, Route,Switch, Link} from 'react-router-dom'
import Home from './screens/home'
import Form from './screens/form'
import Counter from './screens/counter'


class App extends React.Component() {
  constructor(pros){
    super(pros)
    this.state = { screens:"home"}
  }

  render(){
    return(
      <BrowserRouter>
        <div className="App">
            <Home Link to='Home'/>
           <Counter Link to ='Counter'/>
            <Route path='Home'/>
            <Route path='Counter'/>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
