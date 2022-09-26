// dispatch({ type: ADD_TO_CART, payload: item })
import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction('cart/add')
export const deleteCart = createAction('cart/delete')
