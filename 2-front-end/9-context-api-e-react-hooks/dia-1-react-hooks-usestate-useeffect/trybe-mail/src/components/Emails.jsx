const Emails = ({ emailsList }) => {
  return (
    <ul>
      {emailsList.map((email) =>
        <li>
          <h3>{email.title}</h3>
          <div>
            <button>Marcar como lido</button>
            <button>Marcar como não lido</button>
          </div>
        </li>
      )}
    </ul>
  )
}

export default Emails;