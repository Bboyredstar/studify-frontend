import { API } from './index.js'

export const updateUser = async data => {
  try {
    const response = await API({
      method: 'patch',
      url: '/api/users/update',
      data: data,
    })
    return response
  } catch (error) {
    console.dir(error)
    return error?.response
  }
}
