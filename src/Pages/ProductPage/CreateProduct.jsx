import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as productServices from '../../API Services/productServices'; 
import { getSuppliers } from '../../API Services/supplierServices'; 

function CreateProductPage() {
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [stockQuantity, setStockQuantity] = useState(0);
    const [suppliers, setSuppliers] = useState([]);
    const [supplierId, setSupplierId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchSupplier();
    }, []);

    async function fetchSupplier() {
        const response = await getSuppliers();
        setSuppliers(response.data);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        productServices.createProduct({ itemName, description, stockQuantity, supplier: supplierId });
        setTimeout(() => navigate('/'), 300);
      }

    return (
        <div>
            <h1>Add New Product</h1>
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
                      value={supplierId}
                      onChange={(e) => setSupplierId(e.target.value)}
                      required>

                      <option value="">Select Supplier</option>
                      {suppliers.map(supplier => (
                          <option key={supplier._id} value={supplier._id}>
                              {supplier.name}
                          </option>
                      ))}
                  </select>
              </div>
              <button type="submit">Add Product</button>
          </form>
      </div>
  );
}

export default CreateProductPage;

