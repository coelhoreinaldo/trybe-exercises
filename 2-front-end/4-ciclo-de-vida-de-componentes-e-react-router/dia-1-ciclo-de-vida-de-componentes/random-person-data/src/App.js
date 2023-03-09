import './App.css';
import React from 'react';
import RenderizePerson from './components/RenderizePerson';

export default class App extends React.Component {
  render(){

    return (
      <div className="App">
      <RenderizePerson />
    </div>
  );
}
}

