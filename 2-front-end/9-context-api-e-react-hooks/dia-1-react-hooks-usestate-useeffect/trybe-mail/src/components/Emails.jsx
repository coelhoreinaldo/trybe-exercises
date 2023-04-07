import { READ, UNREAD } from "../constants";

const Emails = ({ emailsList, setMessageStatus }) => {
  return (
    <ul>
      {emailsList.map((message) => {

        const messageClass = message.status === READ ? 'message-read' : 'message-unread';

        return (
          <li key={message.id}>
            <h3 className={messageClass}>{message.title}</h3>
            <div>
              <button 
              type="button"
              onClick={ () => setMessageStatus(message.id, READ)}>Marcar como lido</button>
              
              <button
              type="button"
              onClick={ () => setMessageStatus(message.id, UNREAD)}>Marcar como não lido</button>
            </div>
          </li>
        )
      }
      )}
    </ul>
  )
}

export default Emails;