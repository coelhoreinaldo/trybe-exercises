import React from "react";

export default class RenderizePerson extends React.Component {
  constructor() {
    super()

    this.state = {
      randomPerson: [],
      loading: true,
    }


  }

  async componentDidMount() {
    this.setState({ loading: true }, async () => {

      const fetchApi = await fetch('https://api.randomuser.me/');
      const response = await fetchApi.json();
      this.setState({ randomPerson: response.results, loading: false })
    }
    )
  }

  render() {
    const { loading, randomPerson } = this.state;
    return (
      <div>
        {
          loading ? <span>Loading...</span> : randomPerson.map(({ name, login }) => {
          return (<p key={login.uuid}>Nome: {name.title} {name.first} {name.last}</p>)
        })
        }
      </div>
    )
  }
}