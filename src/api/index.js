import axios from 'axios'
import { getItem, removeItem, setItem } from '../utils/localStorage'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { refresh } from '../api/auth'

export const API = axios.create({
  baseURL: 'http://localhost:3000',
})

API.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
    }
    const tokens = getItem('tokens')
    if (tokens) {
      config.headers['Authorization'] = `Bearer ${tokens.access_token}`
    }
    return config
  },
  error => {
    console.log('error on request', error)
    return Promise.reject(error)
  }
)

const refreshLogic = async failedRequest => {
  if (failedRequest.response.data.message !== 'Token expired') {
    const tokens = await refresh()
    console.dir(tokens)
    if (tokens) {
      setItem('tokens', tokens)
      failedRequest.headers['Authorization'] = 'Bearer ' + tokens.access_token
    }
    return Promise.resolve()
  }
  if (failedRequest.response.data.message === 'Token expired') {
    removeItem('tokens')
    removeItem('profile')
    return Promise.reject()
  }
  return Promise.reject()
}

createAuthRefreshInterceptor(API, refreshLogic)
