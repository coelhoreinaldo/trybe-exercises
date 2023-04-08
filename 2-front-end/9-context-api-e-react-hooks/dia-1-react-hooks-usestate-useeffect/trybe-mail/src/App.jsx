import { useEffect, useState } from 'react';

import './App.css'
import Emails from './components/Emails'
import emailsList from "./data/emailsList";
import { READ, UNREAD } from './constants';
import AllButtons from './components/AllButtons';

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

  const markAllAsRead = () => {
    const allAsRead = messages.map((message) => ({ ...message, status: READ }))
    setMessages(allAsRead);
  }

  const markAllAsUnread = () => {
    const allAsUnread = messages.map((message) => ({ ...message, status: UNREAD }))
    setMessages(allAsUnread);
  }

  useEffect(() => {
    const isAllRead = messages.every((message) => message.status === READ)

    if(isAllRead) alert('Parabéns! Você leu todas suas mensagens!')
}, [messages]);

return (
  <div className="App">
    <header>
      <h1>TrybeMail</h1>
    </header>
    <AllButtons markAllAsRead={markAllAsRead} markAllAsUnread={markAllAsUnread} />
    <Emails
      emailsList={messages}
      setMessageStatus={setMessageStatus}
    />
  </div>
)
}

export default App
