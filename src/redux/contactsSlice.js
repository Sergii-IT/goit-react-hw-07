import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        const { id, name, number } = action.payload;
    
        if (typeof name === 'string' && typeof number === 'string' && typeof id === 'string') {
          state.items.push({ id, name, number });
        } else {
          console.error('Invalid contact format:', action.payload);
        }
      },
      prepare(contact) {
     
        return { payload: contact };
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
