import axios from 'axios';
const API_BASE_URL = '/api/supplier'; 

async function getSuppliers() {
    return axios.get(`${API_BASE_URL}/suppliers`);
}

export {getSuppliers}