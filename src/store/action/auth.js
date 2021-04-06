import { AUTH, SET_LOGOUT } from '../types'
import { setItem, removeItem } from '../../utils/localStorage'
import { signIn, signUp } from '../../api/auth'

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


export function setLogin(data, history, setError, setIsLoading) {
  return async dispatch => {
    const res = await signIn(data)
    if (res.status === 200) {
      dispatch(auth(res.data.data))
      setError('')
      setIsLoading(false)
      history.push('/')
    } else {
      setError(res.data.message)
      setIsLoading(false)
    }
  }
}

export function setRegistration(data, history, setError, setIsLoading) {
  return async dispatch => {
    const res = await signUp(data)
    if (res.status === 201) {
      dispatch(auth(res.data.data))
      setError('')
      setIsLoading(false)
      history.push('/')
    } else {
      setError(res.data.message)
      setIsLoading(false)
    }
  }
}
