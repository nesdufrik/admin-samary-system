import { defineStore } from 'pinia'

export const useSucursalesStore = defineStore('sucursales', {
    state: () => {
        return {
            sucursalesArr: [],
            sucursalEdit: {},
            sucursalForm: {
                name: '',
                direccion: '',
                telefono: '',
            },
            loadedSucursal: false,
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
    },
})
