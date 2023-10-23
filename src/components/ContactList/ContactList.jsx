import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'store/selectors';
import { ContactListContainer } from './ContactList.styles';


const ContactList = () => {
  const {contacts} = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = (filter, contacts) => {
  if (!filter) return contacts;

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
  const visibleContacts = filteredContacts(filter, contacts);


  return (
    <ContactListContainer>
      {(visibleContacts ?? contacts).map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
        />
      ))}
    </ContactListContainer>
  );
};

export default ContactList;