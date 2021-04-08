import axios from 'axios'
import { getItem, removeItem, setItem } from '../utils/localStorage'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { refresh } from '../api/auth'

export const API = axios.create({
  baseURL: 'http://localhost:3000',
})

let _retry = false

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
  console.log('asdsad')
  if (!_retry) {
    _retry = true
    const tokens = await refresh()
    console.log(tokens)
    if (tokens) {
      setItem('tokens', tokens)
      failedRequest.headers['Authorization'] = 'Bearer ' + tokens.access_token
    }
    return Promise.resolve()
  } else {
    removeItem('tokens')
    return Promise.reject()
  }
}

createAuthRefreshInterceptor(API, refreshLogic)
