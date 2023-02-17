import { storeToRefs } from 'pinia'
import { listAllSucursales } from '../helpers/helpSucursales'
import { useSucursalesStore } from '../stores/sucursalesStore'

export const useSucursales = () => {
    const sucursalesStore = useSucursalesStore()
    const { sucursalesArr } = storeToRefs(sucursalesStore)

    const listSucursales = async id => {
        sucursalesStore.loadSucursales(await listAllSucursales(id))
    }

    return {
        //! propiedades
        sucursalesArr,

        //! metodos
        listSucursales,
    }
}
