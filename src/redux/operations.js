import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const books = await axios.get(
        `https://6374b0f248dfab73a4e5d274.mockapi.io/contacts`
      );
      return books.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContactApi = createAsyncThunk(
  'contacts/addContact',
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://6374b0f248dfab73a4e5d274.mockapi.io/contacts',
        { userInfo }
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContactApi = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://6374b0f248dfab73a4e5d274.mockapi.io/contacts/${taskId}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
