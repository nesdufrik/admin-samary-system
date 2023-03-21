import { storeToRefs } from 'pinia'
import {
    deleteSucursal,
    getSucursal,
    getSucursales,
    postSucursal,
    putSucursal,
} from '../helpers/helpSucursales'
import { useSucursalesStore } from '../stores/sucursalesStore'

export const useSucursales = () => {
    const sucursalesStore = useSucursalesStore()
    const {
        sucursalData,
        sucursalesArr,
        sucursalForm,
        actionSucursal,
        loadedSucursales,
    } = storeToRefs(sucursalesStore)

    const listSucursales = async id => {
        sucursalesStore.loadSucursales(await getSucursales(id))
        loadedSucursales.value = true
    }

    const newSucursal = async id => {
        actionSucursal.value = true
        sucursalesStore.addSucursal(await postSucursal(sucursalForm.value, id))
        sucursalForm.value = {}
        actionSucursal.value = false
    }

    const editarSucursal = () => {
        sucursalesStore.editSucursal()
    }

    const updateSucursal = async id => {
        actionSucursal.value = true
        sucursalesStore.updtSucursal(await putSucursal(sucursalForm.value, id))
        actionSucursal.value = false
    }

    const delSucursal = async id => {
        actionSucursal.value = true
        await deleteSucursal(id)
        sucursalesStore.deleleSucursal(id)
        actionSucursal.value = false
    }

    const loadSucursal = async id => {
        if (!loadedSucursales.value) {
            sucursalesStore.loadSucursalData(await getSucursal(id))
            loadedSucursales.value = true
            return
        }
        sucursalesStore.findSucursalData(id)
    }

    const cleanForm = () => {
        sucursalForm.value = {}
    }

    const cleanAndRedirect = dir => {
        sucursalesStore.redirect(dir)
    }

    return {
        //! propiedades
        sucursalData,
        sucursalesArr,
        sucursalForm,
        actionSucursal,

        //! metodos
        listSucursales,
        newSucursal,
        editarSucursal,
        updateSucursal,
        delSucursal,
        loadSucursal,
        cleanForm,
        cleanAndRedirect,
    }
}
