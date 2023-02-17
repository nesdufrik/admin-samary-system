import axios from 'axios'

export const listAllEmpresas = async () => {
    return await axios
        .get('/empresas')
        .then(res => res.data.data)
        .catch(err => err.response.data.data)
}
