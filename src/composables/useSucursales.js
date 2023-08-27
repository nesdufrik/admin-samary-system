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
		actionState,
		loadedSucursales,
		errorApi,
	} = storeToRefs(sucursalesStore)

	const listSucursales = async (id) => {
		sucursalesStore.loadSucursales(await getSucursales(id))
		loadedSucursales.value = true
	}

	const newSucursal = async (id) => {
		actionState.value = true
		sucursalesStore.addSucursal(await postSucursal(sucursalForm.value, id))
		actionState.value = false
	}

	const editarSucursal = () => {
		sucursalesStore.editSucursal()
	}

	const updateSucursal = async (id) => {
		actionState.value = true
		sucursalesStore.updtSucursal(await putSucursal(sucursalForm.value, id))
		actionState.value = false
	}

	const delSucursal = async (id) => {
		actionState.value = true
		await deleteSucursal(id)
		sucursalesStore.deleleSucursal(id)
		actionState.value = false
	}

	const loadSucursal = async (id) => {
		if (!loadedSucursales.value) {
			sucursalesStore.loadSucursalData(await getSucursal(id))
			loadedSucursales.value = true
			return
		}
		sucursalesStore.findSucursalData(id)
	}

	const cleanForm = () => {
		sucursalForm.value = {}
		errorApi.value = {}
	}

	const cleanAndRedirect = (empresaId) => {
		sucursalesStore.redirect(empresaId)
	}

	return {
		//! propiedades
		sucursalData,
		sucursalesArr,
		sucursalForm,
		actionState,
		errorApi,

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
