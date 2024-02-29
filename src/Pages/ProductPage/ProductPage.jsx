import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductTable from '../../Components/ProductsTable';

function ProductPage() {
  const navigate = useNavigate()

  function handleClick() {
      navigate('/add-product')
  }

  return (
    <div>
      <h1>Products Page</h1>
      <button onClick={handleClick}>Add New Product</button>
      <ProductTable />
    </div>
  );
}

export default ProductPage;
