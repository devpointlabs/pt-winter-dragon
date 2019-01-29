import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, deleteContact }) => (
  <div>
    { contacts.map( contact =>
        <Contact
          key={todo.id}
          {...todo}
          deleteContact={deleteContact}
        />
      )
    }
  </div>
)

export default ContactList;
