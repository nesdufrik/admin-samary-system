import { defineStore } from 'pinia'

export const useEmpresasStore = defineStore('empresas', {
    state: () => {
        return {
            empresasArr: [],
            empresaEdit: {},
            empresaForm: {
                name: '',
            },
            loadedEmpresa: false,
            actionEmpresa: false,
        }
    },
    actions: {
        loadEmpresas(data) {
            this.empresasArr = data
        },
        addEmpresa(data) {
            this.empresasArr.push({
                ...data,
            })
        },
        delEmpresa(id) {
            this.empresasArr = this.empresasArr.filter(
                empresa => empresa._id !== id
            )
        },
    },
})
