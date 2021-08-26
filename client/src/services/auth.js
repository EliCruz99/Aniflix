import api from "./api-config";

export const loginUser = async (loginData) => {
  try {
    const res = await api.post('/auth/login', { authentication: loginData })
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data.user
  } catch (e) {
    throw e
  }
}

export const registerUser = async (registerData) => {
  try {
    const res = await api.post('/users', { user: registerData })
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.authorization = `Beara ${res.data.token}`
    return res.data
  } catch (e) {
    throw e
  }
}

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem('authToken')
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const res = await api.getItem('/auth/verify')
      return res.data
    }
  } catch (e) {
    throw e
  }
}

export const removeToken = async () => {
  api.defaults.headers.common.authorization = null
}