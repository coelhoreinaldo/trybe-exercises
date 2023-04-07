import './App.css'
import Emails from './components/Emails'
import emailsList from "./data/emailsList";
import { useState } from 'react';

function App() {
  const setMessageStatus = (emailId, newStatus) => {
    const updatedMessages = emailsList.map((currEmail) => {
      if (currEmail.id === emailId) {
        return { ...currEmail, status: newStatus };
      }
      return currEmail;
    });

    setMessages(updatedMessages);
  }

  const [messages, setMessages] = useState(emailsList)
  return (
    <div className="App">
      <h1>TrybeMail</h1>
      <Emails
        emailsList={messages}
         />
    </div>
  )
}

export default App
