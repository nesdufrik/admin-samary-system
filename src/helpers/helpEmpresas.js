import axios from 'axios'

export const getEmpresas = async () => {
    return await axios
        .get('/empresas')
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const postEmpresa = async payload => {
    return await axios
        .post('/empresas', payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const getEmpresa = async id => {
    return await axios
        .get(`/empresas/${id}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
    t
}

export const putEmpresa = async (payload, id) => {
    return await axios
        .put(`/empresas/${id}`, payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const deleteEmpresa = async id => {
    return await axios
        .delete(`/empresas/${id}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}
