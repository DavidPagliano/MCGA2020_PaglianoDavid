import './App.css';
import React from 'react';
import {BrowserRouter, Route,Switch, Link} from 'react-router-dom'
import Home from './screens/home'
import Counter from './screens/counter'


class App extends React.Component {
  constructor(pros){
    super(pros)
    this.state = { screens:"home"}
  }

  render(){
    return(
      <BrowserRouter>
        <div className="App">
            <Home/>
        </div>
        <Route path='home'><Home/></Route>
        <Route path='counter'><Counter/></Route>
      </BrowserRouter>
    );
  }

}

export default App;
