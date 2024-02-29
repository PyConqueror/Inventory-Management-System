import { useState, useEffect } from 'react';
import * as productServices from '../API Services/productServices';

function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

async function fetchProducts() {
const data = await productServices.getProducts();
setProducts(data)
}

return (
<div>
    <h2>Products Inventory</h2>
    <table>
    <thead>
        <tr>
        <th>Item Name</th>
        <th>Description</th>
        <th>Stock Quantity</th>
        <th>Supplier ID</th>
        </tr>
    </thead>
    <tbody>
        {products.map(product => (
        <tr key={product._id}>
            <td>{product.itemName}</td>
            <td>{product.description || 'N/A'}</td>
            <td>{product.stockQuantity}</td>
            <td>{product.supplier || 'N/A'}</td>
        </tr>
        ))}
    </tbody>
    </table>
</div>
);
}

export default ProductTable;