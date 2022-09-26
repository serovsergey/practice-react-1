import axios from "axios";

const instance = axios.create({
  baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/carts',
  params: {
  }
})

export const fetchCart = async () => {
  return await instance.get('');
}

export const addToCart = async (item) => {
  return await instance.post('', item);
}

export const deleteFromCart = async id => await instance.delete(`/${id}`)
