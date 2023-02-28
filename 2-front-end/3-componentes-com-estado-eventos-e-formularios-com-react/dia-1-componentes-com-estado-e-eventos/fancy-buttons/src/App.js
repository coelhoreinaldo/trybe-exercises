import './App.css';
import React from 'react';

class App extends React.Component {
   handleClick () {
    console.log(Math.round(Math.random() * 10));
  };
  render(){

    return (
      <div className="App">
        <button onClick={this.handleClick}>onClick</button>
        <button onMouseOver={this.handleClick}>onMouseOver</button>
        <button onMouseLeave={this.handleClick}>onMouseLeave</button>
      </div>
    );
  }
}

export default App;
