import { useState, useEffect } from 'react';
import * as productServices from '../API Services/productServices';
import { Link } from 'react-router-dom';

function ProductTable() {
  const [products, setProducts] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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

function sortProducts(key) {
  setSortConfig({
    key,
    direction:
      sortConfig.key === key && sortConfig.direction === 'ascending' ? 'descending' : 'ascending',
  });
}

function sortData(data) {
  if (!sortConfig.key) return data;

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key === 'supplierName') {
      const supplierNameA = a.supplier ? a.supplier.name : '';
      const supplierNameB = b.supplier ? b.supplier.name : '';
      if (supplierNameA < supplierNameB) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (supplierNameA > supplierNameB) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    }
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  return sortedData;
}

const sortedProducts = sortData(products);


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
          <th>
            <button onClick={() => sortProducts('itemName')}>Item Name</button>
          </th>
          <th>Description</th>
          <th>
            <button onClick={() => sortProducts('stockQuantity')}>Stock Quantity</button>
          </th>
          <th>
            <button onClick={() => sortProducts('supplierName')}>Supplier Name</button>
          </th>
        </tr>
      </thead>
      <tbody>
          {sortedProducts.map(product => (
            <tr key={product._id}>
              <td>
                <Link to={`/product-info/${product._id}`}>{product.itemName}</Link>
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