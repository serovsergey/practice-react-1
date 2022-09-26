import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';

const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const CartPage = lazy(() => import('./pages/CartPage'))

const ClientRoutes = () => {

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </Suspense>
  )
};

// ClientRoutes.propTypes = {};

export default ClientRoutes;
