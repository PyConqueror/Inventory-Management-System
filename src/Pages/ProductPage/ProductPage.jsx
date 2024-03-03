import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductTable from '../../Components/ProductsTable';
import { Button } from '@mui/material';

function ProductPage({user}) {
  const navigate = useNavigate()

  function handleClick() {
      navigate('/add-product')
  }

  return (
    <div className='product-page'>
      <h1>Products Page</h1>
      {user.accountType === 'admin' && (
        <button className='add-product-btn' onClick={handleClick}>
          Add New Product
        </button>
      )}
      <ProductTable />
    </div>
  );
}

export default ProductPage;
