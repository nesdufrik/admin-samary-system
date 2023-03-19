import { defineStore } from 'pinia'

export const useEmpresasStore = defineStore('empresas', {
    state: () => {
        return {
            empresaData: {},
            empresasArr: [],
            empresaEdit: {},
            empresaForm: {
                name: '',
            },
            loadedEmpresas: false,
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
        findEmpresaData(id) {
            this.empresaData = this.empresasArr.find(
                element => element._id == id
            )
        },
        loadEmpresaData(data) {
            this.empresaData = data
        },
    },
})
