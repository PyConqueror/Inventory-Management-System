import { useState, useEffect } from 'react';
import * as productServices from '../API Services/productServices';

function ProductTable() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

async function fetchProducts() {
const response = await productServices.getProducts();
setProducts(response.data)
}
if (products === null) {
  return <div>Loading...</div>;
}

else return (
  
  <div>
    <h2>Product Inventory</h2>
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
            <td>{product.itemName}</td>
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