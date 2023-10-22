import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchAll } from "services/contactsApi";

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchAll()
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  ({ name, phone }) => addContact(name, phone)
);

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', id =>
  deleteContact(id)
);