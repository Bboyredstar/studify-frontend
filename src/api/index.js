import axios from 'axios'


const API = axios.create({ baseURL: "http://localhost:3000" })


export const signIn = async formData => {
  try {
    const { response } = await API({
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