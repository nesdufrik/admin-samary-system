import { defineStore } from 'pinia'

export const useCajaStore = defineStore('cajas', {
    state: () => {
        return {
            cajasArr: [],
            actionState: false,
            errorApi: {},
        }
    },
    actions: {
        addCajas(data) {
            this.cajasArr = data.data
        },
    },
})
