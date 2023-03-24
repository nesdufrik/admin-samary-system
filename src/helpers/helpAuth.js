import axios from 'axios'

export const loginApi = async payload => {
    return await axios
        .post('/auth/login', payload)
        .then(res => {
            if (res.data.data.logInAdmin) {
                axios.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${res.data.data.token}`
            }
            return res.data
        })
        .catch(err => {
            if (err.response) return err.response.data
            return {
                success: false,
                data: {
                    message:
                        'Lo siento, parece que hemos perdido temporalmente la conexión con nuestra API. Estamos trabajando para solucionar el problema lo antes posible. Por favor, inténtelo de nuevo más tarde. Agradecemos su comprensión y paciencia.',
                },
            }
        })
}
