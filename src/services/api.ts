import axios from 'axios';

const ENVIRONMENT = 'EMULATOR';

const url =
  ENVIRONMENT === 'EMULATOR' ? 'http://10.0.2.2:3333' : 'http://localhost:3333';

const api = axios.create({
  baseURL: url,
});

export default api;
