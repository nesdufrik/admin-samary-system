import { defineStore } from 'pinia'

export const useEmpresasStore = defineStore('empresas', {
    state: () => {
        return {
            empresasArr: [],
        }
    },
    actions: {
        loadEmpresas(data) {
            this.empresasArr = data
        },
    },
})
