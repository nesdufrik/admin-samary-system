import { storeToRefs } from 'pinia'
import { loginApi } from '../helpers/helpAuth'
import { useAuthStore } from '../stores/authStore'

export const useAuth = () => {
    const authStore = useAuthStore()
    const { islogIn, logInForm, logInData, loading, cargando } =
        storeToRefs(authStore)

    const login = async () => {
        logInData.value.show = false
        if (!logInForm.value.email || !logInForm.value.password) {
            logInData.value.message = 'Por favor llene todos los campos'
            logInData.value.show = true
            return
        }
        loading.value = false
        await loginApi(logInForm.value).then(res => {
            loading.value = true
            if (res.success) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', res.data.name)
                authStore.loginAuth(res.data.path)
            } else {
                logInData.value.message = res.message
                logInData.value.show = true
            }
        })
    }

    const logout = () => {
        localStorage.removeItem('name')
        localStorage.removeItem('token')
        authStore.logoutAuth()
    }

    return {
        //! propiedades
        islogIn,
        logInForm,
        logInData,
        loading,
        cargando,

        //! computadas

        //! metodos
        login,
        logout,
    }
}
