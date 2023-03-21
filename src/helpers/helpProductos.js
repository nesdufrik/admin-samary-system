import axios from 'axios'

export const getCategorias = async sucursalId => {
    return await axios
        .get(`/categorias/sucursal/${sucursalId}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const getCategoria = async categoriaId => {
    return await axios
        .get(`/categorias/${categoriaId}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const postCategoria = async (payload, sucursalId) => {
    return await axios
        .post(`/categorias/sucursal/${sucursalId}`, payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const putCategoria = async (payload, categoriaId) => {
    return await axios
        .put(`/categorias/${categoriaId}`, payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const deleteCategoria = async categoriaId => {
    return await axios
        .delete(`/categorias/${categoriaId}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}
