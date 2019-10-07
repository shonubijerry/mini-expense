import axios from 'axios';
import { BASE_URL } from '../../config/constants';
// import { store } from '../store';

export default {
  fetchExpenses(token) {
    const headers = {
      Authorization: token,
    };
    return axios.get(`${BASE_URL}/expenses`, { headers });
  },

  postExpense(token, data) {
    const headers = {
      Authorization: token,
    };
    return axios.post(`${BASE_URL}/expenses`, data, { headers })
      .catch(error => error.response);
  },
};
