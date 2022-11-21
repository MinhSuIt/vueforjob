import axios from 'axios'
import { useAlertStore } from './../stores/alert'
import { notification } from 'ant-design-vue';

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
        const alert = useAlertStore()
        let messages = []
        //handle chung cho tất cả các lỗi từ api trả về để tạo alert cho người dùng
        if (error?.response?.status === 401) {
            //dùng cho custom notification component
            if (error?.response?.data?.message) {
                messages = messages.push(error?.response?.data?.message)
                alert.handleAlert({ isOpen: true, message: messages.join() })
                console.log(alert.message)
            }
            //với ant design vue ko cần khai báo component notification 
            //với mui react cần khai báo component notification nên đoạn if bên trên vẫn có giá trị
            notification.open({
                message: "Trang này yêu cầu đăng nhập",
                description: alert.message,
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        }
        if (error?.response?.status === 422) {
            const errors = error?.response?.data?.errors
            const errorValues = Object.values(errors)
            if (errors) {
                //dùng cho custom notification component
                console.log(typeof errs)
                messages = errorValues.map((err) => {
                    return err[0]
                })
                alert.handleAlert({ isOpen: true, message: messages.join('') })
                console.log(alert.message)
                //với ant design vue ko cần khai báo component notification 
                //với mui react cần khai báo component notification nên đoạn if bên trên vẫn có giá trị
                notification.open({
                    message: "Dữ liệu nhập vào không hợp lệ",
                    description: alert.message,
                    onClick: () => {
                        console.log('Notification Clicked!');
                    },
                });
            }
        }
        if (error?.response?.status === 400) {
            //
        }
        console.log(error)
        // return Promise.reject(error)
    }
)

// tích hợp axios-mock-adapter để ko cần phụ thuộc api, chỉ cần biết cấu trúc dữ liệu trả về
export default axiosInstance
