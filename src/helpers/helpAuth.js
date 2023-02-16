import axios from 'axios'

export const loginApi = async payload => {
    return await axios
        .post('/auth/login', payload)
        .then(res => {
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${res.data.data.token}`
            return res.data
        })
        .catch(err => {
            return err.response.data.data
        })
}
