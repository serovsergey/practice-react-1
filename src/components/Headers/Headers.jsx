import React from 'react';
// import PropTypes from 'prop-types';

import s from './headers.module.scss';
import headerMenu from './header-menu';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const Headers = () => {
  const cart = useSelector(store => store.cart);


  const elements = headerMenu.map(({ name, to }) => (
    <NavLink key={name} to={to} end>{name}</NavLink>
  ))

  return (
    <>
      <div className={s.links}>
        {elements}
      </div>
      <p>Products in cart: {cart.length} </p>
    </>
  )
};

// Headers.propTypes = {};

export default Headers;
