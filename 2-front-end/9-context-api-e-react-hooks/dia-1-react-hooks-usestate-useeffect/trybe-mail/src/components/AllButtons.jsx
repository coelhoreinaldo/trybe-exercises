import React from 'react';

function AllButtons({markAllAsRead, markAllAsUnread}) {
  return (
    <section>
      <button onClick={() => markAllAsRead() }>Marcar todas como lidas</button>
      <button onClick={() => markAllAsUnread() }>Marcar todas como não lidas</button>
    </section>
  );
}

export default AllButtons;