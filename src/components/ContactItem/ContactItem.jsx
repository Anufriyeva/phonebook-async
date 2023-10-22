import React from 'react';
import {ContactItemContainer, ContactInfo, ContactName, DeleteButton, ContactNumber} from './ContactItem.styles';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';

const ContactItem = ({ contact }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
  dispatch(deleteContact(contact.id));
};

  return (
    <ContactItemContainer>
      <ContactInfo>
        <ContactName>Name: {contact.name}</ContactName>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </ContactInfo>
      <ContactNumber>Phone: {contact.number}</ContactNumber>
    </ContactItemContainer>
  );
};

export default ContactItem;