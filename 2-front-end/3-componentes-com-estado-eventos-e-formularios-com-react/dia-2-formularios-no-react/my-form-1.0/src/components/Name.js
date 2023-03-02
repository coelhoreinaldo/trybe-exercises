import React from "react";

export default class Name extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="name" value={ value } onChange={handleChange}>Qual seu nome?
        <input type="text" name="name" id="name" />
      </label>
    )
  }
}
