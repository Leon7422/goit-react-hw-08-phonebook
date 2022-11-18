import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContactApi, deleteContactApi } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { value: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.value = action.payload;
    },
    [fetchContacts.error]: handleRejected,
    [addContactApi.pending]: handlePending,
    [addContactApi.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.value.push(action.payload);
    },
    [addContactApi.rejected]: handleRejected,
    [deleteContactApi.pending]: handlePending,
    [deleteContactApi.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.value.findIndex(
        contact => contact.id === action.payload.id
      );
      state.value.splice(index, 1);
    },
    [deleteContactApi.rejected]: handleRejected,
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
