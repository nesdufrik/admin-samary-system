import axios from 'axios'

export const getEmpresas = async () => {
    return await axios
        .get('/empresas')
        .then(res => res.data.data)
        .catch(err => err.response.data.data)
}

export const postEmpresa = async payload => {
    return await axios
        .post('/empresas', payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}
