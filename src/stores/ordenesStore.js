import { defineStore } from 'pinia'

export const useOrdenesStore = defineStore('ordenes', {
	state: () => {
		return {
			ordenSelected: {},
			actionState: false,
			errorApi: {},
		}
	},
	actions: {
		selectOrden(data) {
			const {
				_id,
				cliente,
				mesa,
				pedido,
				desc,
				propina,
				subtotal,
				total,
				payMetodo,
			} = data.data
			this.ordenSelected = {
				_id,
				cliente: cliente ?? {},
				mesa,
				pedido,
				desc,
				propina,
				subtotal,
				total,
				payMetodo,
			}
		},
		sanearOrden(data) {
			if (!data.success) {
				this.errorApi.show = true
				this.errorApi.message = data.data.message
				return
			}
			this.errorApi.show = false
			this.errorApi.message = 'El proceso se realizo ¡Correctamente!'
		},
	},
})
