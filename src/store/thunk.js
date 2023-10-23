import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { addContact, deleteContact, fetchAll } from "services/contactsApi";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts', 
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await addContact(name, phone);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts', 
  async (contactId, thunkAPI) => {
    try {
      const response = await deleteContact(contactId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);