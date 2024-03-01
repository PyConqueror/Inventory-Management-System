import axiosSendRequest from "./axiosSendRequest";
const API_BASE_URL = '/api/supplier'; 

async function getSuppliers() {
    return axiosSendRequest(`${API_BASE_URL}/suppliers`);
}

export { getSuppliers }