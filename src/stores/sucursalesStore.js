import { defineStore } from 'pinia'

export const useSucursalesStore = defineStore('sucursales', {
	state: () => {
		return {
			sucursalData: {},
			sucursalesArr: [],
			sucursalForm: {},
			loadedSucursales: false,
			actionState: false,
			errorApi: {},
		}
	},
	actions: {
		loadSucursales(data) {
			this.sucursalesArr = data.data
		},
		addSucursal(data) {
			if (!data.success) {
				this.errorApi.show = true
				this.errorApi.message = data.data.message
				return
			}
			this.errorApi.show = false
			this.errorApi.message = 'La sucursal se creo ¡Correctamente!'
			this.sucursalesArr.push({
				...data.data,
			})
		},
		deleleSucursal(id) {
			if (this.sucursalesArr.length > 0) {
				this.sucursalesArr = this.sucursalesArr.filter(
					(sucursal) => sucursal._id !== id
				)
			}
			this.sucursalData = {}
			this.errorApi.show = false
			this.errorApi.message = 'Se eliminaron los elementos ¡Correctamente!'
		},
		editSucursal() {
			this.sucursalForm = JSON.parse(JSON.stringify(this.sucursalData))
		},
		updtSucursal(data) {
			if (!data.success) {
				this.errorApi.show = true
				this.errorApi.message = data.data.message
				return
			}
			this.errorApi.show = false
			this.errorApi.message = 'Se actualizo ¡Correctamente!'
			if (this.sucursalesArr.length === 0) {
				this.sucursalData = data.data
			} else {
				const indiceEl = this.sucursalesArr.findIndex(
					(el) => el._id === data.data._id
				)
				this.sucursalesArr[indiceEl] = data.data
				this.sucursalData = data.data
			}
		},
		findSucursalData(id) {
			this.sucursalData = this.sucursalesArr.find(
				(element) => element._id === id
			)
		},
		loadSucursalData(data) {
			this.sucursalData = data.data
		},
		redirect(dir) {
			this.sucursalForm = {}
			this.sucursalesArr = []
			this.router.push(`/empresa/${dir}`)
		},
	},
})
