import React from "react";
import './App.css';

export default class Form extends React.Component {
  constructor(){
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      food: 'pizza',
    };
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h2>My form 1.0</h2>
        <form className="form" action="">

          <label htmlFor="food" value={this.state.food} onChange={this.handleChange}>Qual a sua besteira favorita?
            <select name="food" id="food">
              <option value="pizza">pizza</option>
              <option value="hot-dog">hot-dog</option>
              <option value="milkshake">milkshake</option>
              <option value="hamburguer">hamburguer</option>
            </select>
          </label>

          <label htmlFor="name" value={this.state.name} onChange={this.handleChange}>Qual seu nome?
            <input type="text" name="name" id="name"/>
          </label> 
          <label htmlFor="color" value={this.state.color} onChange={this.handleChange}>Qual sua cor favorita?
          <input type="color" name="color" id="color" />
          </label>
          
          <label htmlFor="hobby" value={this.state.hobby} onChange={this.handleChange}>Qual seu hobby favorito?
          <textarea name="hobby" id="hobby" cols="30" rows="10"></textarea>
          </label>
        </form>
      </div>
    )
  }
}