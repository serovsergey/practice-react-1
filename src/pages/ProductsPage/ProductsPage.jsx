import React from 'react';

// import s from './productsPage.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { getProducts } from 'services/productsApi';
import { useDispatch, } from 'react-redux';
// import { ADD_TO_CART } from 'redux/cart/cart.constants';
import { addToCart } from '../../redux/cart/operations.cart';
import { fetchCart } from 'redux/cart/operations.cart';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await getProducts();
        if (data.length) {
          setProducts(data);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch])

  const handleBuy = item => {
    // if (cart.some(({ id }) => id === item.id)) {
    //   alert(`Duplicate product ${item.name}`);
    //   return;
    // }
    dispatch(addToCart(item));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const elements = products.map(({ id, name }) => (
    <li key={id}>
      <p>{name}</p>
      <button type="button" onClick={() => handleBuy({ id, name })}>
        Buy
      </button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default ProductsPage;
