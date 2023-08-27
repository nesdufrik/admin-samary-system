import { storeToRefs } from 'pinia'
import {
	deleteEmpresa,
	getEmpresa,
	getEmpresas,
	postEmpresa,
	putEmpresa,
} from '../helpers/helpEmpresas'
import { useEmpresasStore } from '../stores/empresasStore'

export const useEmpresas = () => {
	const empresasStore = useEmpresasStore()
	const { empresaData, empresasArr, empresaForm, actionState, loadedEmpresas } =
		storeToRefs(empresasStore)

	const listEmpresas = async () => {
		empresasStore.loadEmpresas(await getEmpresas())
		loadedEmpresas.value = true
	}

	const newEmpresa = async () => {
		actionState.value = true
		empresasStore.addEmpresa(await postEmpresa(empresaForm.value))
		empresaForm.value = {}
		actionState.value = false
	}

	const editarEmpresa = () => {
		empresasStore.editEmpresa()
	}

	const updateEmpresa = async (id) => {
		actionState.value = true
		empresasStore.updtEmpresa(await putEmpresa(empresaForm.value, id))
		actionState.value = false
	}

	const delEmpresa = async (id) => {
		actionState.value = true
		await deleteEmpresa(id)
		empresasStore.deleteEmpresa(id)
		actionState.value = false
	}

	const loadEmpresa = async (id) => {
		if (!loadedEmpresas.value) {
			empresasStore.loadEmpresaData(await getEmpresa(id))
			loadedEmpresas.value = true
			return
		}
		empresasStore.findEmpresaData(id)
	}

	const cleanForm = () => {
		empresaForm.value = {}
	}

	const cleanAndRedirect = () => {
		empresasStore.redirect()
	}

	return {
		//! propiedades
		empresaData,
		empresasArr,
		empresaForm,
		actionState,

		//! metodos
		listEmpresas,
		newEmpresa,
		editarEmpresa,
		updateEmpresa,
		delEmpresa,
		loadEmpresa,
		cleanForm,
		cleanAndRedirect,
	}
}
