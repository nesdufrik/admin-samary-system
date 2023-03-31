import axios from 'axios'

export const getOrdenesByItem = async (sucursalId, query) => {
    return await axios
        .get(
            `/ordenes/sucursal/${sucursalId}/item?desde=${query.desde}&hasta=${query.hasta}`
        )
        .then(res => res.data)
        .catch(err => err.response.data)
}

export const getOrdenesByTotal = async (sucursalId, query) => {
    return await axios
        .get(
            `/ordenes/sucursal/${sucursalId}/total?desde=${query.desde}&hasta=${query.hasta}`
        )
        .then(res => res.data)
        .catch(err => err.response.data)
}
