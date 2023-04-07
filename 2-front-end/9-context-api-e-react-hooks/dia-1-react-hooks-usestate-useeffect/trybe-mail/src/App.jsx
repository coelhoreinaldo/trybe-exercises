import { useState } from 'react';

import './App.css'
import Emails from './components/Emails'
import emailsList from "./data/emailsList";

function App() {
  const [messages, setMessages] = useState(emailsList)

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updatedMessages);
  };

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>

      <Emails
        emailsList={messages}
        setMessageStatus={setMessageStatus}
      />
    </div>
  )
}

export default App
