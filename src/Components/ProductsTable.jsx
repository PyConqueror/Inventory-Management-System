import { useState, useEffect } from 'react';
import * as productServices from '../API Services/productServices';
import { Link } from 'react-router-dom';

function ProductTable() {
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

async function fetchProducts() {
const response = await productServices.getProducts(searchTerm);
setProducts(response.data)
}

function handleSearchChange(event) {
  setSearchTerm(event.target.value);
}

function handleSearch(event) {
  event.preventDefault();
  fetchProducts();
}

if (products === null) {
  return <div>Loading...</div>;
}


else return (
  
  <div>
    <h2>Product Inventory</h2>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={handleSearchChange}
      />
        <button type="submit">Search</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Description</th>
          <th>Stock Quantity</th>
          <th>Supplier Name</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product._id}>
            <td>
              <Link to={`/product-info/${product._id}`} >{product.itemName}</Link>
            </td>            
            <td>{product.description}</td>
            <td>{product.stockQuantity}</td>
            <td>{product.supplier.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default ProductTable;