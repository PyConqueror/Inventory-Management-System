import * as usersAPI from "./userAPI"

async function signUp(userData) {
    const token = await usersAPI.signUp(userData);
    localStorage.setItem('token', token);
    return getUser();
  }

function logOut() {
  localStorage.removeItem('token');
}

function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return null;
  }
  return token;
  }

function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

async function login(creds) {
  const token = await usersAPI.login(creds);
  localStorage.setItem('token', token);
  return getUser();
}

async function checkToken() {
  return usersAPI.checkToken()
  .then(dateStr => new Date(dateStr));
}

export { signUp, logOut, getToken, getUser, login, checkToken }