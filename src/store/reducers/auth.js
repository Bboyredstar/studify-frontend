import { AUTH, SET_LOGOUT } from '../types'

const initialState = {
  profile: null,
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
    default: {
      return state
    }
  }
}

export default reducer
