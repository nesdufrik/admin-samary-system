import { storeToRefs } from 'pinia'
import { getSucursales, postSucursal } from '../helpers/helpSucursales'
import { useSucursalesStore } from '../stores/sucursalesStore'

export const useSucursales = () => {
    const sucursalesStore = useSucursalesStore()
    const { sucursalesArr, sucursalForm, actionSucursal, loadedSucursal } =
        storeToRefs(sucursalesStore)

    const listSucursales = async id => {
        sucursalesStore.loadSucursales(await getSucursales(id))
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

    return {
        //! propiedades
        sucursalesArr,
        sucursalForm,
        actionSucursal,

        //! metodos
        listSucursales,
        newSucursal,
    }
}
