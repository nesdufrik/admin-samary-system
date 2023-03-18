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
            cargando: false,
        }
    },
    actions: {
        loginAuth(path) {
            this.islogIn = true
            this.cargando = true
            this.router.push(`/${path}`)
        },
        logoutAuth() {
            this.islogIn = false
            this.cargando = false
            this.logInForm = {
                username: '',
                password: '',
            }
            window.location.assign('/')
        },
        async verifyJwt() {
            this.cargando = false
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${localStorage.getItem('token')}`
            const res = await axios
                .get('/auth/jwt')
                .then(res => {
                    this.cargando = true
                    return res.data
                })
                .catch(err => {
                    return err.code
                })

            return res
        },
    },
})
