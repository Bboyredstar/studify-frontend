import { getItem } from '../utils/localStorage.js'
import { API } from './index.js'

export const signIn = async formData => {
  try {
    const response = await API({
      method: 'post',
      url: '/api/auth/signin',
      data: formData,
    })
    return response
  } catch (error) {
    return error?.response
  }
}

export const signUp = async formData => {
  try {
    const response = await API({
      method: 'post',
      url: '/api/auth/register',
      data: formData,
    })
    return response
  } catch (error) {
    return error?.response
  }
}

export const refresh = async () => {
  try {
    const { refresh_token } = getItem('tokens')
    const response = await API({
      method: 'post',
      url: '/api/auth/refresh',
      data: { refreshToken: refresh_token },
    })
    return response.data
  } catch (error) {
    return error?.response
  }
}
