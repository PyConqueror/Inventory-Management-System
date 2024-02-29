import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as productServices from '../../API Services/productServices'; 
import { getSuppliers } from '../../API Services/supplierServices';

function EditProductPage() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [stockQuantity, setStockQuantity] = useState(0);
  const [suppliers, setSuppliers] = useState([]);
  const [supplierID, setSupplierID] = useState('');
  const { productID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  async function fetchProduct() {
      const response = await productServices.getProductInfo(productID);
      const product = response.data;
      const suppliersResponse = await getSuppliers();
      setItemName(product.itemName);
      setDescription(product.description);
      setStockQuantity(product.stockQuantity);
      setSupplierID(product.supplier);
      setSuppliers(suppliersResponse.data);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const editedProduct = { itemName, description, stockQuantity, supplier: supplierID };
    productServices.updateProduct(productID, editedProduct);
    setTimeout(() => navigate(`/product-info/${productID}`), 500)
}

async function handleDelete() {
    const isConfirmed = window.confirm('Confirm Product Deletion?');
    
    if (isConfirmed) {
        productServices.deleteProduct(productID);
        alert('Product successfully deleted.');
        setTimeout(() => navigate('/'), 300)
    }
}

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Stock Quantity:</label>
          <input
            type="number"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Supplier:</label>
          <select
            value={supplierID}
            onChange={(e) => setSupplierID(e.target.value)}
            required
          >
            <option defaultValue={supplierID}>Select Supplier</option>
            {suppliers.map(supplier => (
              <option key={supplier._id} value={supplier._id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
            Delete Product
        </button>
      </form>
    </div>
  );
            }

export default EditProductPage;
