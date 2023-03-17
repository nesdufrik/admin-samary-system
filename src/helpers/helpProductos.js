import axios from 'axios'

export const getCategorias = async sucursalId => {
    return await axios
        .get(`/categorias/sucursal/${sucursalId}`)
        .then(res => res.data.data)
        .catch(err => err.response.data.data)
}

export const getCategoria = async categoriaId => {
    return await axios
        .get(`/categorias/${categoriaId}`)
        .then(res => res.data.data)
        .catch(err => err.response.data.data)
}

export const postCategoria = async (payload, sucursalId) => {
    return await axios
        .get(`/categorias/sucursal/${sucursalId}`, payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const putCategoria = async (payload, categoriaId) => {
    return await axios
        .get(`/categorias/${categoriaId}`, payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const deleteCategoria = async categoriaId => {
    return await axios
        .get(`/categorias/${categoriaId}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}
