import './App.css';
import Image from './Image';
import cat from './img/cat.jpg'

function App() {
    return (
      <main>
        <Image source={ cat } alternativeText="Cute cat staring" />
      </main>
    )
}

export default App;
