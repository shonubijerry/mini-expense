import axios from 'axios';

const baseURL = 'http://localhost:8300/api/v1';

export default {
  signIn(data) {
    return axios.post(`${baseURL}/auth/signin`, data)
      .catch(error => error.response);
  },

  signUp(data) {
    return axios.post(`${baseURL}/auth/signup`, data);
  },
};
