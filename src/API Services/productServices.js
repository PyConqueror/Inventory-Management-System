import axios from 'axios';
const API_BASE_URL = 'http://localhost:3001'; 

function getProducts() {
    return axios.get(`${API_BASE_URL}/inventories`);
}
  
  function createProduct(productData) {
    return axios.post(`${API_BASE_URL}/add-inventory`, productData);
}
  
  function updateProduct(id, updateData) {
    return axios.put(`${API_BASE_URL}/update-inventory/${id}`, updateData);
}
  
  function deleteProduct(id) {
    return axios.delete(`${API_BASE_URL}/delete-inventory/${id}`);
}
  
export { getProducts, createProduct, updateProduct, deleteProduct };