import { storeToRefs } from 'pinia'
import {
    getSucursal,
    getSucursales,
    postSucursal,
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
        sucursalForm.value = {
            name: '',
            direccion: '',
            telefono: '',
        }
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

    return {
        //! propiedades
        sucursalData,
        sucursalesArr,
        sucursalForm,
        actionSucursal,

        //! metodos
        listSucursales,
        newSucursal,
        loadSucursal,
    }
}
