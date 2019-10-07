import axios from 'axios';
import { BASE_URL } from '../../config/constants';

export default {
  signIn(data) {
    return axios.post(`${BASE_URL}/auth/signin`, data)
      .catch(error => error.response);
  },

  signUp(data) {
    return axios.post(`${BASE_URL}/auth/signup`, data)
      .catch(error => error.response);
  },
};
