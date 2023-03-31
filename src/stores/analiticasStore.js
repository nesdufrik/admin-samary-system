import { defineStore } from 'pinia'

export const useAnaliticsStore = defineStore('analitics', {
    state: () => {
        return {
            ordenesTotales: [],
            ordenesItems: [],
        }
    },
    actions: {
        loadOrdenesTotales(data) {
            this.ordenesTotales = data.data
        },
        loadOrdenesItems(data) {
            this.ordenesItems = data.data
        },
    },
})
