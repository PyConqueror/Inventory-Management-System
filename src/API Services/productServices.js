import axios from 'axios';
const API_BASE_URL = '/api/inventory'; 

async function getProducts(searchTerm = '') {
  const params = searchTerm ? { search: searchTerm } : {}; //if no search params then
  return axios.get(`${API_BASE_URL}/inventories`, { params });
}
  
async function createProduct(productData) {
  return axios.post(`${API_BASE_URL}/add-inventory`, productData);
}
  
async function updateProduct(id, updateData) {
  return axios.put(`${API_BASE_URL}/update-inventory/${id}`, updateData);
}
  
async function deleteProduct(id) {
  return axios.delete(`${API_BASE_URL}/delete-inventory/${id}`);
}

async function getProductInfo(id) {
  return axios.get(`${API_BASE_URL}/${id}`)
}
export { getProducts, createProduct, updateProduct, deleteProduct, getProductInfo };