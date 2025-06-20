import axios from 'axios'
import { env } from '../config'

const api = axios.create({
  baseURL: env.server,
})

api.defaults.headers.post['Content-Type'] = 'application/json'

export default api
