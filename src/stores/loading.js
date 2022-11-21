import { defineStore } from 'pinia'
export const defaultLoadingState = {
    isLoading: false,
    message: '',
}
export const useLoadingStore = defineStore('loading', {
    state: () => {
        return {
            ...defaultLoadingState
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
