import { defineStore } from 'pinia'

export const useCajaStore = defineStore('cajas', {
	state: () => {
		return {
			cajasArr: [],
			cajaOrdenesArr: [],
			cajaSelected: {},
			actionState: false,
			errorApi: {},
		}
	},
	actions: {
		addCajas(data) {
			this.cajasArr = data.data
		},
		addOrdenesCaja(data) {
			this.cajaOrdenesArr = data.data
		},
		saveCaja(data) {
			if (!data.success) {
				this.errorApi.show = true
				this.errorApi.message = data.data.message
				return
			}
			this.errorApi.show = false
			this.errorApi.message = 'El proceso se realizo ¡Correctamente!'
			const indiceEl = this.cajasArr.findIndex((el) => el._id === data.data._id)
			this.cajasArr[indiceEl] = data.data
		},
	},
})
