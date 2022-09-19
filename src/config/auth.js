import axios from 'axios'
import { token } from '../global'

axios.get(`http://localhost:8080/oauth/token`).then(
  res => {
   token = res.data.access_token
  })
  export default token