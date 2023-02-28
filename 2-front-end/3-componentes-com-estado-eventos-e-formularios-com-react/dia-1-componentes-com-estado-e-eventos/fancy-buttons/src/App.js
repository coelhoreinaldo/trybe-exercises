import './App.css';
import React from 'react';

class App extends React.Component {
  // constructor() {
  //   super();
  //   // this.handleClick = this.handleClick.bind(this)
  // }

  //não precisa do constructor pois foi usada a sintaxe de arrow function

  state = {
    button1ClicksCount: 0,
    button2ClicksCount: 0,
    button3ClicksCount: 0,
  }

  
  handleClick1 = () => {
    this.setState((previousState, _props) => ({
      button1ClicksCount: previousState.button1ClicksCount + 1,
    }));
  };

   handleClick2 = () => {
    this.setState((previousState, _props) => ({
      button2ClicksCount: previousState.button2ClicksCount + 1,
    }));
  };
  
   handleClick3 = () => {
    this.setState((previousState, _props) => ({
      button3ClicksCount: previousState.button3ClicksCount + 1,
    }));
  };

  buttonColor = (num) => num % 2 === 0 ? 'green' : 'white';

  render(){
    const { button1ClicksCount, button2ClicksCount, button3ClicksCount } = this.state;  
    return (
      <div className="App">
        <button onClick={this.handleClick1} style={{backgroundColor: this.buttonColor(button1ClicksCount)}}>{`Número de cliques: ${button1ClicksCount}`}</button>
        <button onClick={this.handleClick2} style={{backgroundColor: this.buttonColor(button2ClicksCount)}}>{`Número de cliques: ${button2ClicksCount}`}</button>
        <button onClick={this.handleClick3} style={{backgroundColor: this.buttonColor(button3ClicksCount)}}>{`Número de cliques: ${button3ClicksCount}`}</button>
      </div>
    );
  }
}

export default App;
