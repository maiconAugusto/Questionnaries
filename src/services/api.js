import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-food-v1.herokuapp.com/',
});
export default api;
