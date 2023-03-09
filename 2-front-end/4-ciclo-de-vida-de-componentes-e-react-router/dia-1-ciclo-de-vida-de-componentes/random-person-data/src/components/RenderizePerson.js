import React from "react";

export default class RenderizePerson extends React.Component {
  constructor(){
    super()

    this.state = {
      randomPerson: []
    }


  }

  async componentDidMount(){
    const fetchApi = await fetch('https://api.randomuser.me/');
    const response = await fetchApi.json();
    this.setState({ randomPerson: response.results})
  }

  render(){
    const { randomPerson } = this.state;
    console.log(randomPerson);
    return (
      <div>
        { randomPerson.map(({ name, login }) => {
        return(<p key={login.uuid}>Nome: {name.title} {name.first} {name.last}</p>)})}
      </div>
    )
  }
}