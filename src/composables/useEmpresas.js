import { storeToRefs } from 'pinia'
import { listAllEmpresas } from '../helpers/helpEmpresas'
import { useEmpresasStore } from '../stores/empresasStore'

export const useEmpresas = () => {
    const empresasStore = useEmpresasStore()
    const { empresasArr } = storeToRefs(empresasStore)

    const listEmpresas = async () => {
        empresasStore.loadEmpresas(await listAllEmpresas())
    }

    return {
        //! propiedades
        empresasArr,

        //! metodos
        listEmpresas,
    }
}
