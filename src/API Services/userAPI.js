import sendRequest from './sendRequest';
const API_BASE_URL = '/api/users';

function signUp(userData) {
  return sendRequest(API_BASE_URL, 'POST', userData);
}

function login(credentials) {
  return sendRequest(`${API_BASE_URL}/login`, 'POST', credentials);
}

function checkToken() {
  return sendRequest(`${API_BASE_URL}/check-token`);
}

export { signUp, login, checkToken }