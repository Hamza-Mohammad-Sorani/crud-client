import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3305/api/',
})

export default instance;