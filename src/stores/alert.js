import { defineStore } from 'pinia'
export const useAlertStore = defineStore('alert', {
    state: () => {
        return {
            isOpen: false,
            message: "",
        }
    },
    actions: {
        handleAlert({ isOpen, message }) {
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
