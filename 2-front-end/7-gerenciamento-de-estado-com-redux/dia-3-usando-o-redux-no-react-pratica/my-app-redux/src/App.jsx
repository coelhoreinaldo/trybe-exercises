import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { addEmail } from './redux/actions';

class App extends React.Component {
  render() {
    const { email, dispatch } = this.props;
    return (
      <div className="App">
        <label>Email <input
          type="email"
          onChange={({target}) => dispatch(addEmail(target.value))} />
        </label>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.exampleReducer.email
})

export default connect(mapStateToProps)(App);
