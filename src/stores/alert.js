import { defineStore } from 'pinia'
import { notification } from 'ant-design-vue';

export const defaultAlertState = {
    isOpen: false,
    message: "",
}
export const useAlertStore = defineStore('alert', {
    state: () => {
        return {
            ...defaultAlertState
        }
    },
    actions: {
        handleAlert({ isOpen, message }) {
            console.log('handleAlert')
            try {
                this.isOpen = isOpen
                this.message = message
            } catch (error) {
                // xử lý login fail
                console.log(error)
            }



        },
    }
})
