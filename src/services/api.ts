import axios from "axios"

const APPLICATION_BFF_URL = "http://localhost:3000/api" 

export const request = axios.create({
    baseURL: APPLICATION_BFF_URL,
    timeout: 30000,
  });