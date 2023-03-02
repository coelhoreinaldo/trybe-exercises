import React from "react";
import './App.css';
import Name from "./Name";

export default class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      food: 'pizza',
      name: '',
      color: '',
      hobby: '',
      study: false,
      formularioComErros: true,
    };

    this.fileInput = React.createRef();
  }

  handleError(){
    const { name } = this.state;

    const errorCases = [
      !name,
      !name.length,
    ]

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      // Armazenamos o valor inverso no nosso estado
      // para sabermos se o formulário possui erros
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleError);
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
              <option value="hamburgue  r">hamburguer</option>
            </select>
          </label>
          <Name handleChange={this.handleChange} name={this.state.name}/>
          <label htmlFor="color" value={this.state.color} onChange={this.handleChange}>Qual sua cor favorita?
            <input type="color" name="color" id="color" />
          </label>

          <label htmlFor="hobby" value={this.state.hobby} onChange={this.handleChange}>Qual seu hobby favorito?
            <textarea name="hobby" id="hobby" cols="30" rows="10"></textarea>
          </label>

          <label htmlFor="study" value={this.state.study} onChange={this.handleChange}>Conseguirá estudar todas as manhãs?
            <input type='checkbox' name="study" id="study"></input>
          </label>

          <label>Uma fotinha do seu pet
            <input type='file' ref={this.fileInput}></input>
          </label>
        </form>
      </div>
    )
  }
}