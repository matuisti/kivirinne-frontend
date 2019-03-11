import axios from 'axios';

export default class AuthService {

  login(username, password) {
    return axios.post('api/users/login', {
      email: username,
      password: password
    })
    .then((response) => {
      localStorage.setItem('jwt-token', response.data.token);
      return Promise.resolve(response);
    });
  }

  logOut() {
    this.removeToken();
  }

  getToken() {
    return localStorage.getItem('jwt-token');
  }

  removeToken() {
    localStorage.removeItem('jwt-token');
  }

  getUser(token) {
    return axios.get('api/users/getUsers', {
      headers: {
        token: `${token}`
      }
    })
    .then((response) => {
      return Promise.resolve(response);
    })
  }

}
