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
	const { sucursalData, sucursalesArr, sucursalForm, actionState, errorApi } =
		storeToRefs(sucursalesStore)

	const listSucursales = async (id) => {
		sucursalesStore.loadSucursales(await getSucursales(id))
	}

	const newSucursal = async (id) => {
		actionState.value = true
		sucursalesStore.addSucursal(await postSucursal(sucursalForm.value, id))
		actionState.value = false
	}

	const editarSucursal = (id) => {
		sucursalForm.value = JSON.parse(
			JSON.stringify(sucursalesArr.value.find((el) => el._id === id))
		)
		// sucursalesStore.editSucursal()
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
		const { data } = await getSucursal(id)
		sucursalData.value = data
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
