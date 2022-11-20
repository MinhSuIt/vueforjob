import axios from 'axios'
import { useAlertStore } from './../stores/alert'
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json', //require
        'Accept': 'application/json', //require
    }
});

// axiosInstance.interceptors.request.use(
//     async function (config) {
//         return config
//     },
//     function (error) {
//         return Promise.reject(error)
//     }
// )

axiosInstance.interceptors.response.use(
    function (response) {
        console.log(response)
        return response?.data
    },
    function (error) {
        //handle chung cho tất cả các lỗi từ api trả về để tạo alert cho người dùng
        // if(error?.response?.status === 401){
            const alert = useAlertStore()
            if(error?.response?.data?.message) {
                alert.handleAlert({ isOpen: true, message: error?.response?.data?.message })
                console.log(alert.message)
            }
        // }
        console.log(error)
        // return Promise.reject(error)
    }
)

// tích hợp axios-mock-adapter để ko cần phụ thuộc api, chỉ cần biết cấu trúc dữ liệu trả về
export default axiosInstance
