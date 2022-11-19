import axios from './../utils/axios'
export const register = 'auth/register'
export const token = 'auth/token'
export const refreshToken = 'auth/refreshToken'

export const regist = async ({ email, password }) => {
    return axios.post(register, {
        email,
        password,
    })
}
export const login = async ({ email, password }) => {
    const result = await axios.post(token, {
        email,
        password,
    })

    return result;
}
export const refresh = async ({ token }) => {
    return await axios.post(refreshToken, {
        token,
    })
}
// export default {
//     login,
//     regist,
//     refresh,
// }