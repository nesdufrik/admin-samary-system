import { defineStore } from 'pinia'

export const useEmpresasStore = defineStore('empresas', {
    state: () => {
        return {
            empresaData: {},
            empresasArr: [],
            empresaForm: {},
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
        deleteEmpresa(id) {
            if (this.empresasArr.length > 0) {
                this.empresasArr = this.empresasArr.filter(el => el._id !== id)
            }
            this.empresaData = {}
        },
        editEmpresa() {
            this.empresaForm = {
                ...this.empresaData,
            }
        },
        updtEmpresa(item) {
            if (this.empresasArr.length === 0) {
                this.empresaData = item
            } else {
                const indiceEl = this.empresasArr.findIndex(
                    el => el._id == item._id
                )
                this.empresasArr[indiceEl] = item
                this.empresaData = item
            }
        },
        findEmpresaData(id) {
            this.empresaData = this.empresasArr.find(
                element => element._id == id
            )
        },
        loadEmpresaData(data) {
            this.empresaData = data
        },
        redirect() {
            this.empresaForm = {}
            this.router.push(`/admin`)
        },
    },
})
