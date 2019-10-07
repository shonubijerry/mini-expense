import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const baseURL = '/api/v1';

// if (process.env.NODE_ENV === 'production') {
//   baseURL = 'http://localhost:8300/api/v1';
// } else {
//   baseURL = '/api/v1';
// }


export default {
  signIn(data) {
    return axios.post(`${baseURL}/auth/signin`, data)
      .catch(error => error.response);
  },

  signUp(data) {
    return axios.post(`${baseURL}/auth/signup`, data);
  },
};
