import axios from 'axios';

const api = axios.create({
  baseURL: 'https://who-am-i-avatar.herokuapp.com/',
});
export default api;
