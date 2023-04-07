const Emails = ({ emailsList, setMessageStatus }) => {
  return (
    <ul>
      {emailsList.map((email) =>
        <li key={email.id}>
          <h3>{email.title}</h3>
          {/* <div>
            <button onClick={}>Marcar como lido</button>
            <button onClick={}>Marcar como não lido</button>
          </div> */}
        </li>
      )}
    </ul>
  )
}

export default Emails;