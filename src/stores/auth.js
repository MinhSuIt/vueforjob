import { defineStore } from 'pinia'
import { login } from './../services/authService'
import { useLoadingStore } from './loading'
export const useAuthStore = defineStore('auth', {
    persist: true,
    state: () => {
        return {
            access_token: '',
            refresh_token: '',
            expires_in: '',
            user: {},
        }
    },
    getters: {
        getAccessToken: (state) => state.access_token,
        getRefreshToken: (state) => state.refresh_token,
        getUser: (state) => state.user,
    },
    actions: {
        async loginAction({ email, password }) {
            const loading = useLoadingStore()
            try {
                loading.handleLoading(true);
                const loginInfo = await login({ email, password })
                this.access_token = loginInfo.access_token
                this.refresh_token = loginInfo.refresh_token
                this.expires_in = loginInfo.expires_in
                this.user = loginInfo?.user
                loading.handleLoading(false);
                

                //ngoài cách set thẳng bên trên còn có thể dùng counter.$patch/$reset : counter.$patch({ count: counter.count + 1 })
            } catch (error) {
                // xử lý login fail, có thể handle ở axios.interceptor hay hơn
                loading.handleLoading(false);
                console.log(error)
            }
        },
        logoutAction: () => {

        },
    }
})
