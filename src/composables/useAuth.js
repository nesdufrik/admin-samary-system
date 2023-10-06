/* eslint-disable no-undef */
import { storeToRefs } from 'pinia'
import { loginApi } from '../helpers/helpAuth'
import { useAuthStore } from '../stores/authStore'

export const useAuth = () => {
	const authStore = useAuthStore()
	const { islogIn, logInForm, logInData, actionState, appLoading } =
		storeToRefs(authStore)

	const login = async () => {
		localStorage.clear()
		logInData.value.show = false
		if (!logInForm.value.email || !logInForm.value.password) {
			logInData.value.message = 'Por favor llene todos los campos'
			logInData.value.show = true
			return
		}
		actionState.value = true
		await loginApi(logInForm.value).then((res) => {
			actionState.value = false
			if (res.success) {
				if (res.data.logInAdmin) {
					localStorage.setItem('token', res.data.token)
					localStorage.setItem(
						'person',
						JSON.stringify({ name: res.data.name, avatar: res.data.avatar })
					)
					authStore.loginAuth()
					return
				}
				const dirURL = `${import.meta.env.VITE_POS_URL}?token=${res.data.token}`
				window.location.href = dirURL
			} else {
				logInData.value.message = res.data.message
				logInData.value.show = true
			}
		})
	}

	const logout = () => {
		localStorage.clear()
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
