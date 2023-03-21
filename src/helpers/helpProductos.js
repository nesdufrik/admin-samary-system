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

export const getProductos = async sucursalId => {
    return await axios
        .get(`/items/sucursal/${sucursalId}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const getProducto = async itemId => {
    return await axios
        .get(`/items/${itemId}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const postProducto = async (payload, sucursalId) => {
    return axios
        .post(`/items/sucursal/${sucursalId}`, payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const putProducto = async (payload, itemId) => {
    return await axios
        .put(`/items/${itemId}`, payload)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}

export const deleteProducto = async itemId => {
    return await axios
        .delete(`/items/${itemId}`)
        .then(res => res.data.data)
        .catch(err => err.response.data)
}
