import { connect } from 'react-redux';
import './App.css'

import React, { Component } from 'react';

class App extends Component {
  state = {
    input: '',
  }
  render() {
    const { input } = this.state;
    const { dispatch, characterName } = this.props;
    return (
      <div className="App">
        <h1>Game of Thunks</h1>
        <input
          onChange={({ target }) => this.setState({ input: target.value })}
          placeholder='Nome e sobrenome' />
        <button type='button' onClick={() => dispatch(fetchGotCharacter(input))}>Encontrar</button>
        <section>
          <h2>{`Nome: ${characterName}`}</h2>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  characterName: state.characterName
})

export default connect(mapStateToProps)(App);

