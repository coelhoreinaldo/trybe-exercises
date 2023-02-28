import './App.css';
import React from 'react';

class App extends React.Component {
  // constructor() {
  //   super();
  //   // this.handleClick = this.handleClick.bind(this)
  // }

  //não precisa do constructor pois foi usada a sintaxe de arrow function

  state = {
    clicksCount: 0,
  }

   handleClick = () => {
    this.setState((previousState, _props) => ({
      clicksCount: previousState.clicksCount + 1,
    }));
    console.log(Math.round(Math.random() * 10));
    console.log(this);
  };
  render(){

    return (
      <div className="App">
        <button key={1} onClick={this.handleClick}>Botão 1</button>
        <button key={2} onClick={this.handleClick}>Botão 2</button>
        <button key={3} onClick={this.handleClick}>Botão 3</button>
      </div>
    );
  }
}

export default App;
