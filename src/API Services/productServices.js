import axiosSendRequest from "./axiosSendRequest";
const API_BASE_URL = '/api/inventory'; 

async function getProducts(searchTerm = '') {
  const params = searchTerm ? { search: searchTerm } : {};
  console.log(params)
  return axiosSendRequest(`${API_BASE_URL}/inventories`, 'GET', null,  params );
}
  
async function createProduct(productData) {
  return axiosSendRequest(`${API_BASE_URL}/add-inventory`, 'POST', productData);
}
  
async function updateProduct(id, updateData) {
  return axiosSendRequest(`${API_BASE_URL}/update-inventory/${id}`, 'PUT', updateData);
}
  
async function deleteProduct(id) {
  return axiosSendRequest(`${API_BASE_URL}/delete-inventory/${id}`, 'DELETE');
}

async function getProductInfo(id) {
  return axiosSendRequest(`${API_BASE_URL}/${id}`)
}
export { getProducts, createProduct, updateProduct, deleteProduct, getProductInfo };