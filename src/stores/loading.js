import { defineStore } from 'pinia'
export const useLoadingStore = defineStore('loading', {
    state: () => {
        return {
            isLoading: false,
        }
    },
    getters: {
        getIsLoading: (state) => state.isLoading,
    },
    actions: {
        handleLoading(isLoading) {
            try {
                this.isLoading = isLoading
            } catch (error) {
                // xử lý login fail
                console.log(error)
            }
        },
    }
})
