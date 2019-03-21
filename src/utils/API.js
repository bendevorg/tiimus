import axios from 'axios';
import mock from './mock';

if (process.env.NODE_ENV === 'mock') {
  mock(axios);
}

export default axios.create({
  baseURL: process.env.BACKEND_HOST,
  withCredentials: true,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  }
});
