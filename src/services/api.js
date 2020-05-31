import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

// export function setAuthorization(id = null) {
//     const AuthorizationCode = id || null

//     if (AuthorizationCode)
//         api.defaults.headers.common.Authorization = AuthorizationCode
// }

export default api
