import axios from 'axios';

export default class QueryFunctions {

  /*
    login
  */
  login(username, password) {
    return axios.post('/api/users/login', {
      email: username,
      password: password
    })
    .then(function (response) {
      localStorage.setItem('jwt-token', response.data.token);
      return Promise.resolve(response);
    });
  }

  /*
    getDhtData
  */
  getDhtData(token, interval, intervalformat) {
    return axios.get('/api/devicedata/get/dht', {
      params: {
        interval: interval,
        intervalformat: intervalformat
      },
      headers: {
        token: `${token}`
      }
    })
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      console.error(error);
      return Promise.reject(error);
    })
  }

  /*
    getSensorDataBetweenTwoDays
  */
  getSensorDataBetweenTwoDays(token, startDate, endDate) {
    return axios.get('/api/devicedata/get/sensorDataBetweenTwoDays', {
      params: {
        startDate: startDate,
        endDate: endDate
      },
      headers: {
        token: `${token}`
      }
    })
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      console.error(error);
      return Promise.reject(error);
    })
  }

  /*
    getCurrentSensordata
  */
  getCurrentSensordata(token) {
    return axios.get('/api/devicedata/get/currentsensordata', {
      headers: {
        token: `${token}`
      }
    })
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      console.error(error);
      return Promise.reject(error);
    })
  }

  /*
    getWeatherForecast
  */

  getWeatherForecast() {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?id=654047&&units=metric&APPID=cb00db7a6e3bddca1986870cb15a0dfe')
    .then(function (response) {
      return Promise.resolve(response);
    })
    .catch(function (error) {
      console.error(error);
    })
  }

}
