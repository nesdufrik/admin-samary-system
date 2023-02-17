import axios from 'axios'

export const listAllSucursales = async id => {
    return await axios
        .get(`/empresas/${id}/sucursal`)
        .then(res => res.data.data)
        .catch(err => err.response.data.data)
}
