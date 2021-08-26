import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? 'deploy goes here' : 'http://localhost:3000'


const api = axis.create({
  baseURL: baseURL
})

export default api