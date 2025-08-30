import { environment } from '../../environments/environment';
export const BASE_URL = environment.BASE_URL;

// API Endpoints
export const API_ENDPOINTS = {
  USERS: {
    CREATE:`${BASE_URL}/users`,
    GET_ALL: `${BASE_URL}/users`,
    GET_BY_ID: (id: string | number) => `${BASE_URL}/users/${id}`,
    UPDATE: (id: string | number) => `${BASE_URL}/users/${id}`,
    DELETE: (id: string | number) => `${BASE_URL}/users/${id}`,
  },
  AUTH:{
    LOGIN:`${BASE_URL}/auth/login`
  }
};
