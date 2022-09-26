import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import * as API from '../../services/cartApi';

export const fetchCart = createAsyncThunk('cart/get', async (_, { rejectWithValue }) => {
  try {
    const { data } = await API.fetchCart()
    return data;
  } catch (error) {
    return rejectWithValue({ message: error.message, status: error.response.status });
  }
})

export const addToCart = createAsyncThunk('cart/add', async (item, { rejectWithValue }) => {
  try {
    const { data } = await API.addToCart(item)
    return data;
  } catch (error) {
    return rejectWithValue({ message: error.message, status: error.response.status });
  }
}, {
  condition: (data, { getState }) => {
    const { cart } = getState();
    console.log(cart, data)
    const isDuplicate = cart.items.find(item => item.id === data.id);
    console.log(isDuplicate);
    if (isDuplicate) {
      toast.warning('Duplicate product in the cart!');
      return false
    }
  }
})

export const deleteFromCart = createAsyncThunk('cart/delete', async (id, { rejectWithValue }) => {
  try {
    await API.deleteFromCart(id)
    return id;
  } catch (error) {
    return rejectWithValue({ message: error.message, status: error.response.status });
  }
})
