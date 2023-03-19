import { defineStore } from 'pinia'

export const useSucursalesStore = defineStore('sucursales', {
    state: () => {
        return {
            sucursalData: {},
            sucursalesArr: [],
            sucursalEdit: {},
            sucursalForm: {
                name: '',
                direccion: '',
                telefono: '',
            },
            loadedSucursales: false,
            actionSucursal: false,
        }
    },
    actions: {
        loadSucursales(data) {
            this.sucursalesArr = data
        },
        addSucursal(data) {
            this.sucursalesArr.push({
                ...data,
            })
        },
        delSucursal(id) {
            this.sucursalesArr = this.sucursalesArr.filter(
                sucursal => sucursal._id !== id
            )
        },
        findSucursalData(id) {
            this.sucursalData = this.sucursalesArr.find(
                element => element._id == id
            )
        },
        loadSucursalData(data) {
            this.sucursalData = data
        },
    },
})
