import { getOrden, putOrden } from '@/helpers/helpOrdenes'
import { useOrdenesStore } from '@/stores/ordenesStore'
import { storeToRefs } from 'pinia'

export const useOrdenes = () => {
	const ordenesStore = useOrdenesStore()
	const { ordenSelected, actionState, errorApi } = storeToRefs(ordenesStore)

	const loadOrden = async (id) => {
		actionState.value = true
		ordenesStore.selectOrden(await getOrden(id))
		actionState.value = false
	}

	const sendOrden = async (payload) => {
		const { _id, ...contenido } = payload
		actionState.value = true
		ordenesStore.sanearOrden(await putOrden(_id, contenido))
		actionState.value = false
	}

	const cleanForm = () => {
		ordenSelected.value = {}
		errorApi.value = {}
	}

	return {
		ordenSelected,
		actionState,
		errorApi,

		loadOrden,
		sendOrden,
		cleanForm,
	}
}
