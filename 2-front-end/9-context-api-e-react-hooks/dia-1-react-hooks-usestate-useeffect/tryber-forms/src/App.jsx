import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <forms>
        <input type="text" placeholder="Nome completo" />
        <input type="number" placeholder="Idade" />
        <input type="text" placeholder="Cidade" />
        <label htmlFor="module">
          Módulo
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
      </forms>
    </div>
  );
}

export default App;
