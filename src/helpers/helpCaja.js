import axios from 'axios'

export const getAllCajas = async (id, query) => {
    return await axios
        .get(`/cajas/sucursal/${id}?desde=${query.desde}&hasta=${query.hasta}`)
        .then(res => res.data)
        .catch(err => err.response.data)
}
