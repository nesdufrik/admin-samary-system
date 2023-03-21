import axios from 'axios'

export const getSucursales = async id => {
    return await axios
        .get(`/empresas/${id}/sucursal`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const postSucursal = async (payload, id) => {
    return await axios
        .post(`/empresas/${id}/sucursal`, payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const getSucursal = async id => {
    return await axios
        .get(`/empresas/sucursal/${id}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const putSucursal = async (payload, id) => {
    return await axios
        .put(`/empresas/sucursal/${id}`, payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const deleteSucursal = async id => {
    return await axios
        .delete(`/empresas/sucursal/${id}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}
