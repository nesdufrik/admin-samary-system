import { storeToRefs } from 'pinia'
import { useEmpleadosStore } from '../stores/empleadosStore'
import { getEmpleados, postEmpleado } from '../helpers/helpEmpleados'

export const useEmpleados = () => {
    const empleadosStore = useEmpleadosStore()

    const { empleadosArr, empleadoForm, actionState, errorApi } =
        storeToRefs(empleadosStore)

    const listEmpleados = async sucursalId => {
        empleadosStore.loadEmpleados(await getEmpleados(sucursalId))
    }

    const newEmpleado = async sucursalId => {
        actionState.value = true
        empleadosStore.addEmpleado(
            await postEmpleado(empleadoForm.value, sucursalId)
        )
        empleadoForm.value = {}
        actionState.value = false
    }

    const editarEmpleado = empleadoId => {
        empleadosStore.editEmpleado(empleadoId)
    }

    const updateEmpleado = async empleadoId => {
        errorApi.show.value = false
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
    }
}
