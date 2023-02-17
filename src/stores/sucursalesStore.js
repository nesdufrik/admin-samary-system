import { defineStore } from 'pinia'

export const useSucursalesStore = defineStore('sucursales', {
    state: () => {
        return {
            sucursalesArr: [],
        }
    },
    actions: {
        loadSucursales(data) {
            this.sucursalesArr = data
        },
    },
})
