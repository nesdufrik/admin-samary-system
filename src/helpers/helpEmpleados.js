import axios from 'axios'

export const getEmpleados = async sucursalId => {
    return await axios
        .get(`/empleados/sucursal/${sucursalId}`)
        .then(res => res.data)
        .catch(err => err.response.data)
}

export const getEmpleado = async empleadoId => {
    return await axios
        .get(`/empleados/${empleadoId}`)
        .then(res => res.data)
        .catch(err => err.response.data)
}

export const postEmpleado = async (payload, sucursalId) => {
    return axios
        .post(`/empleados/sucursal/${sucursalId}`, payload)
        .then(res => res.data)
        .catch(err => err.response.data)
}

export const putEmpleado = async (payload, empleadoId) => {
    return axios
        .put(`/empleados/${empleadoId}`, payload)
        .then(res => res.data)
        .catch(err => err.response.data)
}

export const deleteEmpleado = async empleadoId => {
    return await axios
        .delete(`/empleados/${empleadoId}`)
        .then(res => res.data)
        .catch(err => err.response.data)
}
