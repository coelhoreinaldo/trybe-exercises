import { connect } from 'react-redux';
import './App.css'
import { fetchGotCharacter } from './redux/actions';
import React, { Component } from 'react';

class App extends Component {
  state = {
    input: '',
  }
  render() {
    const { input } = this.state;
    const { dispatch, characterInfo, errorMessage } = this.props;
    const { name, titles } = characterInfo;
    return (
      <div className="App">
        <h1>Game of Thunks</h1>
        <input
          onChange={({ target }) => this.setState({ input: target.value })}
          placeholder='Nome e sobrenome' />
        <button type='button' onClick={() => dispatch(fetchGotCharacter(input))}>Encontrar</button>
        <section>
          <h2>{`Nome: ${name}`}</h2>
          <h3>Títulos: {titles.map((title, index) => index !== titles.length -1 ? title + ', ' : title + '.')}</h3>
        </section>
        <p>{errorMessage}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.characterReducer.isFetching,
  characterInfo: state.characterReducer.characterInfo,
  errorMessage: state.characterReducer.errorMessage,
})

export default connect(mapStateToProps)(App);

