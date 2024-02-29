import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import ProductTable from '../../Components/ProductsTable';

function ProductPage() {
    function handleCLick() {
        Navigate()
        
    }
  return (
    <div>
      <h1>Products Page</h1>
      <ProductTable />
    </div>
  );
}

export default ProductPage;
