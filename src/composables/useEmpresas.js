import { storeToRefs } from 'pinia'
import { getEmpresa, getEmpresas, postEmpresa } from '../helpers/helpEmpresas'
import { useEmpresasStore } from '../stores/empresasStore'

export const useEmpresas = () => {
    const empresasStore = useEmpresasStore()
    const {
        empresaData,
        empresasArr,
        empresaForm,
        actionEmpresa,
        loadedEmpresas,
    } = storeToRefs(empresasStore)

    const listEmpresas = async () => {
        empresasStore.loadEmpresas(await getEmpresas())
        loadedEmpresas.value = true
    }

    const newEmpresa = async () => {
        actionEmpresa.value = true
        empresasStore.addEmpresa(await postEmpresa(empresaForm.value))
        empresaForm.value = {
            name: '',
        }
        actionEmpresa.value = false
    }

    const loadEmpresa = async id => {
        if (!loadedEmpresas.value) {
            empresasStore.loadEmpresaData(await getEmpresa(id))
            loadedEmpresas.value = true
            return
        }
        empresasStore.findEmpresaData(id)
    }

    return {
        //! propiedades
        empresaData,
        empresasArr,
        empresaForm,
        actionEmpresa,

        //! metodos
        listEmpresas,
        newEmpresa,
        loadEmpresa,
    }
}
