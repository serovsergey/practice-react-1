// import { ADD_TO_CART, REMOVE_FROM_CART } from "./cart.constants"
import { createSlice } from '@reduxjs/toolkit';
import initialState from './initinal-state.cart';
import { fetchCart, addToCart, deleteFromCart } from './operations.cart';

// export const cartReducer = createReducer([], {
//   [addToCart]: (state, {payload}) => [...state, payload],
//   [deleteCart]: (state, {payload}) => state.filter(item => item.id !== payload)
// })

export const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  extraReducers: {
    [fetchCart.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addToCart.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addToCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    },
    [addToCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteFromCart.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteFromCart.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload);
    },
    [deleteFromCart.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  }
})

// const cartReducer = (state = [], { payload }) => {
//   switch (type) {
//     case (ADD_TO_CART):
//       return [...state, payload];
//     case (REMOVE_FROM_CART):
//       return state.filter(item => item.id !== payload)
//     default:
//       return state;
//   }
// }

export default cartSlice.reducer;
// export default cartReducer;
