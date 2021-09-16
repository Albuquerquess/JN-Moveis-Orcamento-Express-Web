import axios from 'axios'

console.log(process.env.REACT_APP_WEB_API)
const Api = axios.create(
    {
        baseURL: process.env.REACT_APP_WEB_API
    }
)

export default Api