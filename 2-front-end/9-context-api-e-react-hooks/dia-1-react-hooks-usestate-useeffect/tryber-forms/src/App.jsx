import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState();

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
        <input
          type="text"
          placeholder="Nome completo"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
        <input
          type="number"
          placeholder="Idade"
          value={ age }
          onChange={ ({ target }) => setAge(target.value) }
        />
        <input
          type="text"
          placeholder="Cidade"
          value={ city }
          onChange={ ({ target }) => setCity(target.value) }
        />
        <label htmlFor="module">
          <h2>Módulo</h2>
          <input
            type="radio"
            id="fundaments"
            name="module"
            value="fundaments"
            checked={ module === 'fundaments' }
            onChange={ ({ target }) => setModule(target.value) }
          />
          <label htmlFor="fundaments">Fundamentos</label>
          <input
            type="radio"
            id="frontend"
            name="module"
            value="frontend"
            checked={ module === 'frontend' }
            onChange={ ({ target }) => setModule(target.value) }
          />
          <label htmlFor="frontend">Frontend</label>
          <input
            type="radio"
            id="backend"
            name="module"
            value="backend"
            checked={ module === 'backend' }
            onChange={ ({ target }) => setModule(target.value) }
          />
          <label htmlFor="backend">Backend</label>
          <input
            type="radio"
            id="science"
            name="module"
            value="science"
            checked={ module === 'science' }
            onChange={ ({ target }) => setModule(target.value) }
          />
          <label htmlFor="science">Ciência da Computação</label>
        </label>
        <button type="button">Enviar</button>
      </form>
    </div>
  );
}

export default App;
