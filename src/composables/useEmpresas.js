import { storeToRefs } from 'pinia'
import { getEmpresas, postEmpresa } from '../helpers/helpEmpresas'
import { useEmpresasStore } from '../stores/empresasStore'

export const useEmpresas = () => {
    const empresasStore = useEmpresasStore()
    const { empresasArr, empresaForm, actionEmpresa, loadedEmpresa } =
        storeToRefs(empresasStore)

    const listEmpresas = async () => {
        empresasStore.loadEmpresas(await getEmpresas())
    }

    const newEmpresa = async () => {
        actionEmpresa.value = true
        empresasStore.addEmpresa(await postEmpresa(empresaForm.value))
        empresaForm.value = {
            name: '',
        }
        actionEmpresa.value = false
    }

    return {
        //! propiedades
        empresasArr,
        empresaForm,
        actionEmpresa,

        //! metodos
        listEmpresas,
        newEmpresa,
    }
}
