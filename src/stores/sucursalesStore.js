import { defineStore } from 'pinia'

export const useSucursalesStore = defineStore('sucursales', {
    state: () => {
        return {
            sucursalData: {},
            sucursalesArr: [],
            sucursalForm: {},
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
        deleleSucursal(id) {
            if (this.sucursalesArr.length > 0) {
                this.sucursalesArr = this.sucursalesArr.filter(
                    sucursal => sucursal._id !== id
                )
            }
            this.sucursalData = {}
        },
        editSucursal() {
            this.sucursalForm = {
                ...this.sucursalData,
            }
        },
        updtSucursal(item) {
            if (this.sucursalesArr.length === 0) {
                this.sucursalData = item
            } else {
                const indiceEl = this.sucursalesArr.findIndex(
                    el => el._id == item._id
                )
                this.sucursalesArr[indiceEl] = item
                this.sucursalData = item
            }
        },
        findSucursalData(id) {
            this.sucursalData = this.sucursalesArr.find(
                element => element._id == id
            )
        },
        loadSucursalData(data) {
            this.sucursalData = data
        },
        redirect(dir) {
            this.sucursalForm = {}
            this.router.push(`/admin/empresa/${dir}`)
        },
    },
})
