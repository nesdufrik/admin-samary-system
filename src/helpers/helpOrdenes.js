import axios from 'axios'

export const getOrden = async (ordenId) => {
	return axios
		.get(`/ordenes/id/${ordenId}`)
		.then((res) => res.data)
		.catch((err) => err.response.data)
}

export const putOrden = async (ordenId, payload) => {
	return axios
		.put(`/ordenes/id/${ordenId}`, payload)
		.then((res) => res.data)
		.catch((err) => err.response.data)
}
