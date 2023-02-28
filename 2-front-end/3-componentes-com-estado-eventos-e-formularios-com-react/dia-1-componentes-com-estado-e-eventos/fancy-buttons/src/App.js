import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
    this.buttonColor = this.buttonColor.bind(this)
  }

  //não precisa do constructor pois foi usada a sintaxe de arrow function

  state = {
    button1ClicksCount: 0,
    button2ClicksCount: 0,
    button3ClicksCount: 0,
  }

  handleClick1() {
    const { button1ClicksCount } = this.state;
    this.setState((previousState, _props) => ({
      button1ClicksCount: previousState.button1ClicksCount + 1,
    }), () => {
      console.log(`Botão 1 ${this.buttonColor(button1ClicksCount)}`)
    });
  };

  handleClick2() {
    const { button2ClicksCount } = this.state;
    this.setState((previousState, _props) => ({
      button2ClicksCount: previousState.button2ClicksCount + 1,
    }), () => {
      console.log(`Botão 2 ${this.buttonColor(button2ClicksCount)}`)
    });
  };

  handleClick3() {
    const { button3ClicksCount } = this.state;
    this.setState((previousState, _props) => ({
      button3ClicksCount: previousState.button3ClicksCount + 1,
    }), () => {
      console.log(`Botão 3 ${this.buttonColor(button3ClicksCount)}`)
    });
  };

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'white'
  };

  render() {
    const { button1ClicksCount, button2ClicksCount, button3ClicksCount } = this.state;
    return (
      <div className="App">
        <button onClick={this.handleClick1} style={{ backgroundColor: this.buttonColor(button1ClicksCount) }}>{`Número de cliques: ${button1ClicksCount}`}</button>
        <button onClick={this.handleClick2} style={{ backgroundColor: this.buttonColor(button2ClicksCount) }}>{`Número de cliques: ${button2ClicksCount}`}</button>
        <button onClick={this.handleClick3} style={{ backgroundColor: this.buttonColor(button3ClicksCount) }}>{`Número de cliques: ${button3ClicksCount}`}</button>
      </div>
    );
  }
}

export default App;
