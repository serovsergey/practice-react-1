import cartReducer from "./cart/cart.slice";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cart: cartReducer,
})

export default rootReducer;
