import axios from 'axios'
import { apiKey } from '../utils/config'

const api = axios.create({
  baseURL:'https://newsapi.org/v2'
}) 

export const endpoints = {
  topHeadlines: `/top-headlines?country=br&apiKey=${apiKey}`
}

export default api;