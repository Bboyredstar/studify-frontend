import { API } from './index.js'


export const signIn = async formData => {
  try {
    const response = await API({
      method: 'post',
      url: '/api/auth/signin',
      data: formData
    })
    console.log(response);
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
      data: formData
    })
    return response
  } catch (error) {
    return error?.response
  }
}
