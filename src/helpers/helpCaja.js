import axios from 'axios'

export const getAllCajas = async (id, query) => {
	return await axios
		.get(`/cajas/sucursal/${id}?desde=${query.desde}&hasta=${query.hasta}`)
		.then((res) => res.data)
		.catch((err) => err.response.data)
}

export const getOrdenesTerminadas = async (caja) => {
	return axios
		.get(`/ordenes/ordenesCaja?caja=${caja}`)
		.then((res) => res.data)
		.catch((err) => err.response.data)
}

export const putCaja = async (payload, cajaId) => {
	return await axios
		.put(`/cajas/${cajaId}`, payload)
		.then((res) => res.data)
		.catch((err) => err.response.data)
}
