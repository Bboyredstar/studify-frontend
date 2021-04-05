import { SET_AUTH_ERROR, AUTH, SET_LOGOUT } from '../types'

const initialState = {
  profile: null,
  authError: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        profile: action.payload,
      }
    }
    case SET_LOGOUT: {
      return {
        ...state,
        profile: null,
      }
    }
    case SET_AUTH_ERROR: {
      return {
        ...state,
        authError: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
