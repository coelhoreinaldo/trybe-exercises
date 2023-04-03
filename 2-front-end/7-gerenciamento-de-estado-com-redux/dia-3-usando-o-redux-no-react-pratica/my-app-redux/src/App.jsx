import React from 'react'
import './App.css'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <h1>Hahahaha</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.exampleReducer.email
})

export default connect(mapStateToProps)(App);
