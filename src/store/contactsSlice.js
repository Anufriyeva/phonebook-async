import { createSlice, nanoid } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(formData) {
        return {
          payload: {
            ...formData,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const { payload } = action;
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;