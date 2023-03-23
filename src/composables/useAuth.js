import { storeToRefs } from 'pinia'
import { loginApi } from '../helpers/helpAuth'
import { useAuthStore } from '../stores/authStore'

export const useAuth = () => {
    const authStore = useAuthStore()
    const { islogIn, logInForm, logInData, actionState, appLoading } =
        storeToRefs(authStore)

    const login = async () => {
        logInData.value.show = false
        if (!logInForm.value.email || !logInForm.value.password) {
            logInData.value.message = 'Por favor llene todos los campos'
            logInData.value.show = true
            return
        }
        actionState.value = true
        await loginApi(logInForm.value).then(res => {
            actionState.value = false
            if (res.success) {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('name', res.data.name)
                localStorage.setItem('avatar', res.data.avatar)
                authStore.loginAuth(res.data.path)
            } else {
                logInData.value.message = res.data.message
                logInData.value.show = true
            }
        })
    }

    const logout = () => {
        localStorage.removeItem('name')
        localStorage.removeItem('token')
        localStorage.removeItem('avatar')
        authStore.logoutAuth()
    }

    return {
        //! propiedades
        islogIn,
        logInForm,
        logInData,
        actionState,
        appLoading,

        //! computadas

        //! metodos
        login,
        logout,
    }
}
