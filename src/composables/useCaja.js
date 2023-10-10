import { storeToRefs } from 'pinia'
import { useCajaStore } from '../stores/cajaStore'
import { getAllCajas, getOrdenesTerminadas, putCaja } from '../helpers/helpCaja'
import { computed } from 'vue'

export const useCaja = () => {
	const cajaStore = useCajaStore()

	const { cajasArr, cajaOrdenesArr, cajaSelected, actionState, errorApi } =
		storeToRefs(cajaStore)

	const loadCajasDate = async (sucursalId, desde, hasta) => {
		const actualDateDesde = desde
		const actualDateHasta = hasta

		const actualDateDesdeUTC = actualDateDesde.toISOString()
		const actualDateHastaUTC = actualDateHasta.toISOString()

		const query = {
			desde: actualDateDesdeUTC,
			hasta: actualDateHastaUTC,
		}

		cajaStore.addCajas(await getAllCajas(sucursalId, query))
	}

	const loadOrdenesOfCaja = async (cajaId) => {
		actionState.value = true
		const res = await getOrdenesTerminadas(cajaId)
		cajaStore.addOrdenesCaja(res)
		actionState.value = false
	}

	const selectCaja = (cajaId) => {
		cajaSelected.value = cajasArr.value.find((el) => el._id === cajaId)
	}

	const saveCaja = async (id) => {
		actionState.value = true
		const payload = {
			reporte: arrayTotales.value,
			total: totalCaja.value,
		}
		const res = await putCaja(payload, id)
		cajaStore.saveCaja(res)
		actionState.value = false
	}

	const totalCajasDates = computed(() => {
		return cajasArr.value.reduce((acc, el) => {
			const elTotal = el.total ? el.total : 0
			const total = acc + elTotal
			return total
		}, 0)
	})

	const totalCajasDatesMetodos = computed(() => {
		return cajasArr.value.reduce((obj, el) => {
			el.reporte.forEach((r) => {
				if (obj[r.payMetodo]) {
					obj[r.payMetodo] += r.total
				} else {
					obj[r.payMetodo] = r.total
				}
			})
			return obj
		}, {})
	})

	const dateFormated = computed(() => (fecha) => {
		const isoDate = new Date(fecha)
		const localDate = isoDate.toLocaleString('es-BO', {
			dateStyle: 'medium',
			timeStyle: 'short',
		})

		return localDate
	})

	const totalCaja = computed(() => {
		return cajaOrdenesArr.value.reduce((acc, el) => acc + el.total, 0)
	})

	const arrayTotales = computed(() => {
		const result = []
		cajaOrdenesArr.value.forEach((item) => {
			const payMetodo = item.payMetodo.toLowerCase()
			const index = result.findIndex((x) => x.payMetodo === payMetodo)
			if (index === -1) {
				result.push({
					payMetodo,
					total: item.total,
				})
			} else {
				result[index].total += item.total
			}
		})
		const propinaTotal = cajaOrdenesArr.value.reduce(
			(total, item) => total + item.propina,
			0
		)
		result.push({ payMetodo: 'propina', total: propinaTotal })
		const descuentoTotal = cajaOrdenesArr.value.reduce(
			(total, item) => total + item.desc,
			0
		)
		result.push({ payMetodo: 'desc', total: descuentoTotal })
		return result
	})

	return {
		cajasArr,
		cajaOrdenesArr,
		cajaSelected,
		actionState,
		errorApi,
		totalCajasDates,
		totalCajasDatesMetodos,
		totalCaja,
		dateFormated,
		arrayTotales,
		loadCajasDate,
		loadOrdenesOfCaja,
		selectCaja,
		saveCaja,
	}
}
