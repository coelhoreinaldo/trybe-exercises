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

  // shouldComponentUpdate(){
  //   const { randomPerson } = this.state
  //   if(randomPerson[0].dob.age > 50){
  //     return false
  //   }
  //   return true;
  // }

  render() {
    const { loading, randomPerson } = this.state;
    return (
      <div>
        {
          loading ? <span>Loading...</span> : randomPerson.map(({
             name, login, picture, email, dob 
            }) => {
            return (
              <div key={login.uuid}>
                <img src={picture.large} alt="foto"/>
                <p>Nome: {name.title} {name.first} {name.last}</p>
                <p>Email: {email}</p>
                <p>Idade: {dob.age}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}