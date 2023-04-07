import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
        <input
          name="name"
          value={ name }
          type="text"
          placeholder="Nome completo"
          onChange={ ({ target }) => setName(target.value) }
        />
        <input type="number" placeholder="Idade" />
        <input type="text" placeholder="Cidade" />
        <label htmlFor="module">
          <h2>Módulo</h2>
          <input type="radio" id="fundaments" name="module" value="fundaments" />
          <label htmlFor="fundaments">Fundamentos</label>
          <input type="radio" id="frontend" name="module" value="frontend" />
          <label htmlFor="frontend">Frontend</label>
          <input type="radio" id="backend" name="module" value="backend" />
          <label htmlFor="backend">Backend</label>
          <input type="radio" id="science" name="module" value="science" />
          <label htmlFor="science">Ciência da Computação</label>
        </label>
        <button type="button">Enviar</button>
      </form>
    </div>
  );
}

export default App;
