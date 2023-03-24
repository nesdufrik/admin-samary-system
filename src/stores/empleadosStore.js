import { defineStore } from 'pinia'

export const useEmpleadosStore = defineStore('empleados', {
    state: () => {
        return {
            empleadosArr: [],
            empleadoForm: {},
            actionState: false,
            errorApi: {},
        }
    },
    actions: {
        loadEmpleados(data) {
            this.empleadosArr = data.data
        },
        addEmpleado(data) {
            if (!data.success) {
                this.errorApi.show = true
                this.errorApi.message = data.data.message
                return
            }
            this.empleadosArr.push({
                ...data.data,
            })
        },
        deleteEmpleado(id) {
            this.empleadosArr = this.empleadosArr.filter(el => el._id !== id)
        },
        editEmpleado(id) {
            this.empleadoForm = {
                ...this.empleadosArr.find(el => el._id == id),
            }
        },
        updtEmpleado(data) {
            const indiceEl = this.empleadosArr.findIndex(
                el => el._id == data.data._id
            )
            this.empleadosArr[indiceEl] = data.data
        },
    },
})
