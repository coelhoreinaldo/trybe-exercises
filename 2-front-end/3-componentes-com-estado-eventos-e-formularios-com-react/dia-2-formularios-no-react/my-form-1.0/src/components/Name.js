import React from "react";

export default class Name extends React.Component {
  render() {
    const { handleChange, name } = this.props;
    return (
      <label htmlFor="name" value={name} onChange={handleChange}>Qual seu nome?
        <input type="text" name="name" id="name" />
        {!name ? 'O nome precisa ser preenchido' : ''}
        {name.length <= 1 ? 'Insira mais caracteres' : ''}
      </label>
    )
  }
}
