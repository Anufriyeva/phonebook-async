import React, { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import {AppContainer} from './App.styles';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'store/selectors';
import { fetchContacts } from 'store/thunk';


const App = () => {
  const dispatch = useDispatch();
  // const { isLoading, error } = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <b>Please wait...</b>}
      {error && <b>{error}</b>}
      <ContactList />
    </AppContainer>
  );
};

export default App;