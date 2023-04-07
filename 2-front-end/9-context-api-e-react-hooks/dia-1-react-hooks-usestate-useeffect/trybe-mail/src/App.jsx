import './App.css'
import Emails from './components/Emails'
import emailsList from "./data/emailsList";

function App() {
  return (
    <div className="App">
      <h1>TrybeMail</h1>
      <Emails emailsList={emailsList}/>
    </div>
  )
}

export default App
