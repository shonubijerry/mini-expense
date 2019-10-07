import axios from 'axios';
// import { store } from '../store';

const baseURL = '/api/v1';

export default {
  fetchExpenses(token) {
    const headers = {
      Authorization: token,
    };
    return axios.get(`${baseURL}/expenses`, { headers });
  },
};
