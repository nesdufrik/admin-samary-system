import { storeToRefs } from 'pinia'
import { useEmpleadosStore } from '../stores/empleadosStore'
import {
    deleteEmpleado,
    getEmpleados,
    postEmpleado,
    putEmpleado,
} from '../helpers/helpEmpleados'

export const useEmpleados = () => {
    const empleadosStore = useEmpleadosStore()

    const { empleadosArr, empleadoForm, actionState, errorApi } =
        storeToRefs(empleadosStore)

    const listEmpleados = async sucursalId => {
        empleadosStore.loadEmpleados(await getEmpleados(sucursalId))
    }

    const newEmpleado = async sucursalId => {
        errorApi.value.show = false
        actionState.value = true
        empleadosStore.addEmpleado(
            await postEmpleado(empleadoForm.value, sucursalId)
        )
        actionState.value = false
    }

    const editarEmpleado = empleadoId => {
        empleadosStore.editEmpleado(empleadoId)
    }

    const updateEmpleado = async empleadoId => {
        errorApi.value.show = false
        actionState.value = true
        empleadosStore.updtEmpleado(
            await putEmpleado(empleadoForm.value, empleadoId)
        )
        actionState.value = false
    }

    const delEmpleado = async empleadoId => {
        actionState.value = true
        await deleteEmpleado(empleadoId)
        empleadosStore.deleteEmpleado(empleadoId)
        actionState.value = false
    }

    const cleanForm = () => {
        empleadoForm.value = {}
    }

    const defaulAvatar = () => {
        empleadoForm.value.avatar = '/avatars/default.png'
    }

    return {
        //! propiedades
        empleadosArr,
        empleadoForm,
        actionState,
        errorApi,

        //! metodos
        listEmpleados,
        newEmpleado,
        editarEmpleado,
        updateEmpleado,
        delEmpleado,
        cleanForm,
        defaulAvatar,
    }
}
