import './index.css'
import React from 'react'
import {BrowserRouter, Route,Switch, Link} from 'react-router-dom'


class counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contador : 0 }; 
    this.state = {date: new Date()}

    componentDidMount(); {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() ;{
      clearInterval(this.timerID);
    }
  
    tick() ;{
      this.setState({
        date: new Date()
      });
    }
  
    render(); {
      return (
        <div>
          <h1>Hello, world!</h1>
          <FormattedDate date={this.state.date} />
        </div>
      );
    }
  }
  
  onClickHandler(){
    this.setState({
       contador : this.state.contador-1,
       contador : this.state.contador+1
    });
  }
  render(){
    
    return (
      <div>
         <Button label="Menos" onClick={()=>this.onClickHandler()} /> 
        <Contador valor={this.state.contador}/>
        <Button label="Mas" onClick={()=>this.onClickHandler()} />
        <Button label='Creado'/>
      </div>
    )
  }
}
const Contador = props => {
  return(
    <div>
      <h1>{props.valor}</h1>
    </div>
  );
};
const Button = props => {
    return (
      <button onClick={()=>props.onClick()}> {props.label}</button>
    );
};


export default counter;