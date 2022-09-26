import React from 'react';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';

// import s from './cartPage.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from 'redux/cart/selectors.cart';
import { deleteFromCart, fetchCart } from '../../redux/cart/operations.cart';

const CartPage = props => {

  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch])

  const onDelete = id => {
    dispatch(deleteFromCart(id));
  };

  const elements = cart.map(({ id, name }) => (
    <li key={id}>
      <button type="button" onClick={() => onDelete(id)}>
        delete
      </button>
      <p>{name}</p>
    </li>
  ));

  return (
    <div>
      Cart content:
      <ul>{elements}</ul>
    </div>
  );
};

// CartPage.propTypes = {};

export default CartPage;
