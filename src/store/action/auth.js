import { SET_AUTH_ERROR, AUTH, SET_LOGOUT } from '../types'
import { setItem, removeItem } from '../../utils/localStorage'
import { signIn } from '../../api/index'

export const auth = (profile) => {
  setItem('profile', JSON.stringify(profile))
  return {
    type: AUTH,
    payload: profile,
  }
}

export const logout = () => {
  removeItem('profile')
  return {
    type: SET_LOGOUT,
  }
}

export function setAuthError(message) {
  return {
    type: SET_AUTH_ERROR,
    payload: message,
  }
}

export function setLogin(data, history, setError, setIsLoading) {
  return async dispatch => {
    const res = await signIn(data)
    if (res.status === 200) {
      dispatch(auth(res.data))
      setError('')
      setIsLoading(false)
      history.push('/')
    } else {
      setError(res.data.message)
      setIsLoading(false)
    }
  }
}

// export function setRegistration(data) {
//   return async dispatch => {
//     const res = await registration(data)
//     if (res.status === 200) {
//       dispatch(setLogin(data))
//     } else {
//       dispatch(setAuthError(authResponseMapping(res.data)))
//     }
//   }
// }
