import { useState } from 'react';

import './App.css'
import Emails from './components/Emails'
import emailsList from "./data/emailsList";

function App() {
  const [messages, setMessages] = useState(emailsList)

  // const setMessageStatus = (emailId, newStatus) => {
  //   const updatedMessages = emailsList.map((currEmail) => {
  //     if (currEmail.id === emailId) {
  //       return { ...currEmail, status: newStatus };
  //     }
  //     return currEmail;
  //   });

  //   setMessages(updatedMessages);
  // }

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>

      <Emails
        emailsList={messages}
      />
    </div>
  )
}

export default App
