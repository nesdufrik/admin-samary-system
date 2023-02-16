import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return {
            islogIn: false,
            logInForm: {
                email: '',
                password: '',
            },
            logInData: {
                message: '',
                show: false,
            },
            loading: true,
        }
    },
    actions: {
        loginAuth(path) {
            this.islogIn = true
            this.router.push(`/${path}`)
        },
        logoutAuth() {
            this.islogIn = false
            this.logInForm = {
                username: '',
                password: '',
            }
            window.location.assign('/')
        },
        async verifyJwt() {
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${localStorage.getItem('token')}`
            const res = await axios
                .get('/auth/jwt')
                .then(res => {
                    return res.data
                })
                .catch(err => {
                    return err.response.data.data
                })

            return res
        },
    },
})
