import axios from 'axios'

export const getSucursales = async id => {
    return await axios
        .get(`/empresas/${id}/sucursal`)
        .then(res => res.data.data)
        .catch(err => err.response.data.data)
}

export const postSucursal = async (payload, id) => {
    return await axios
        .post(`/empresas/${id}/sucursal`, payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}
