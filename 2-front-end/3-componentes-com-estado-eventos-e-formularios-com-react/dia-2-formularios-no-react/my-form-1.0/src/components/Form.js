import React from "react";
import './App.css';

export default class Form extends React.Component {

  render() {
    return (
      <div>
        <h2>My form 1.0</h2>
        <form className="form" action="">

          <label htmlFor="food">Qual a sua besteira favorita?
            <select name="food" id="food">
              <option value="pizza">pizza</option>
              <option value="hot-dog">hot-dog</option>
              <option value="milkshake">milkshake</option>
              <option value="hamburguer">hamburguer</option>
            </select>
          </label>
          <label htmlFor="name">Qual seu nome?
            <input type="text" name="name" id="name"/>
          </label>
          <label htmlFor="color">Qual sua cor favorita?
          <input type="color" name="color" id="color" />
          </label>
          <label htmlFor="hobby">Qual seu hobby favorito?
          <textarea name="" id="hobby" cols="30" rows="10"></textarea>
          </label>
        </form>
      </div>
    )
  }
}