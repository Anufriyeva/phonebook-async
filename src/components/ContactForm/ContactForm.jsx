import React, { useState } from 'react';
import {ContactFormContainer, Form, Label, Input, SubmitButton} from './ContactForm.styles'
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'store/thunk';
import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'store/selectors';
import { addContacts } from 'store/thunk';


const INITIAL_STATE = {
    name: '',
    phone: '',
  };

  const ContactForm = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const { contacts } = useSelector(getContacts);

    const nameId = nanoid();
  const phoneId = nanoid();
    
    const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingContact = contacts.find(
      contact => contact.name === formData.name
    );
    if (existingContact) {
      return alert(`${formData.name} is already in contacts`);
    }

    dispatch(addContacts(formData));
    setFormData(INITIAL_STATE);
  };

  return (
    <ContactFormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            id={nameId}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </Label>
        <Label>
          Phone Number:
          <Input
            type="tel"
            name="phone"
            id={phoneId}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </Label>
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;