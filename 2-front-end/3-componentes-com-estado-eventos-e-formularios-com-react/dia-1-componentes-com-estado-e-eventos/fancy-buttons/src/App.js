import './App.css';
import React from 'react';

class App extends React.Component {
  render(){
    const handleClick = () => {
      console.log(Math.round(Math.random() * 10));
    };

    return (
      <div className="App">
        <button onClick={handleClick}>onClick</button>
        <button onMouseOver={handleClick}>onMouseOver</button>
        <button onMouseLeave={handleClick}>onMouseLeave</button>
      </div>
    );
  }
}

export default App;
