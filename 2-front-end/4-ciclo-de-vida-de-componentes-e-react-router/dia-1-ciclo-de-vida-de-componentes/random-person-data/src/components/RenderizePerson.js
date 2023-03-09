import React from "react";

export default class RenderizePerson extends React.Component {
  constructor() {
    super()

    this.state = {
      randomPerson: [],
      loading: true,
    }


  }

  fetchApi = async () => {
    const API_URL = 'https://api.randomuser.me/';
    const fetchApi = await fetch(API_URL);
    const response = await fetchApi.json();
    this.setState({ randomPerson: response.results, loading: false })
  }

  async componentDidMount() {
    // Isso deu erro porque no primeiro log, o should update dá undefined
    // const API_URL = 'https://api.randomuser.me/';
    // this.setState(async () => {

    //   const fetchApi = await fetch(API_URL);
    //   const response = await fetchApi.json();
    //   this.setState({ randomPerson: response.results, loading: false })
    // })
    this.fetchApi();
    // Segunda forma de fazer, com o then    
    // fetch(API_URL)
    // .then((response) => response.json())
    // .then((data) => {
    //   this.setState({
    //     loading: false,
    //     randomPerson: data.results,
    //   })
    // })
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState.randomPerson[0]);
    const AGE = 50;
    if (nextState.randomPerson[0].dob.age > AGE) {
      return false;
    }
    return true
  }

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
                <img src={picture.large} alt="foto" />
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