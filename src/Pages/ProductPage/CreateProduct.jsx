import {useState}  from 'react';
import {useNavigate}  from 'react-router-dom';
import * as productServices  from '../../API Services/productServices'; 


function CreateProductPage() {
    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [stockQuantity, setStockQuantity] = useState(0);
    const [supplierId, setSupplierId] = useState('');
    const navigate = useNavigate();
  
    async function handleSubmit(event) {
      event.preventDefault();
      productServices.createProduct({ itemName, description, stockQuantity, supplier: supplierId })
      setTimeout(() => navigate('/'), 500);
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
            <label>Supplier ID:</label>
            <input
              type="text"
              value={supplierId}
              onChange={(e) => setSupplierId(e.target.value)}
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  }
  
  export default CreateProductPage;