import React, { useState } from 'react';
import {ContactFormContainer, Form, Label, Input, SubmitButton} from './ContactForm.styles'
import { useDispatch } from 'react-redux';
import { addContact } from 'store/contactsSlice';
import { nanoid } from '@reduxjs/toolkit';


const INITIAL_STATE = {
    name: '',
    number: '',
  };

  const ContactForm = () => {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const nameId = nanoid();
  const numberId = nanoid();
    
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
    dispatch(addContact(formData));
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
            name="number"
            id={numberId}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={formData.number}
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