import axios from "axios"
import { BASE_URL } from './'


export const register = (payload) => {
  return axios.post(`${BASE_URL}/api/auth/register`, payload)
}

export const login = (payload) => {
  return axios.post(`${BASE_URL}/api/auth/login`, payload)
}

export const logout = (payload) => {
  return axios.post(`${BASE_URL}/api/auth/logout`, payload)
}