import { storeToRefs } from 'pinia'
import { useCajaStore } from '../stores/cajaStore'
import { getAllCajas } from '../helpers/helpCaja'
import { computed } from 'vue'

export const useCaja = () => {
    const cajaStore = useCajaStore()

    const { cajasArr, actionState, errorApi } = storeToRefs(cajaStore)

    const loadCajas = async sucursalId => {
        const actual = new Date()
        const year = actual.getFullYear()
        const month = actual.getMonth()

        const actualDateDesde = new Date(year, month, 1, 0, 0, 0)
        const actualDateHasta = new Date(year, month + 1, 0, 23, 59, 59)

        const actualDateDesdeUTC = actualDateDesde.toISOString()
        const actualDateHastaUTC = actualDateHasta.toISOString()

        const query = {
            desde: actualDateDesdeUTC,
            hasta: actualDateHastaUTC,
        }

        cajaStore.addCajas(await getAllCajas(sucursalId, query))
    }

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

    const totalCajasDates = computed(() => opTotalCajasDates())
    const totalCajasDatesMetodos = computed(() => opTotalCajasDatesMetodos())
    const dateFormated = computed(() => {
        return fecha => dateConvert(fecha)
    })

    function opTotalCajasDates() {
        return cajasArr.value.reduce((acc, el) => acc + el.total || 0, 0)
    }

    function dateConvert(fecha) {
        const isoDate = new Date(fecha)
        const localDate = isoDate.toLocaleString()
        return localDate
    }

    function opTotalCajasDatesMetodos() {
        const resultado = cajasArr.value.reduce((obj, item) => {
            item.reporte.forEach(r => {
                if (obj[r.payMetodo]) {
                    obj[r.payMetodo] += r.total
                } else {
                    obj[r.payMetodo] = r.total
                }
            })
            return obj
        }, {})

        return resultado
    }

    return {
        cajasArr,
        actionState,
        errorApi,

        totalCajasDates,
        totalCajasDatesMetodos,
        dateFormated,

        loadCajas,
        loadCajasDate,
    }
}
