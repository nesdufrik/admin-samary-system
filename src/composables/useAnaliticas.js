import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { getOrdenesByItem, getOrdenesByTotal } from '../helpers/helpAnaliticas'
import { useAnaliticsStore } from '../stores/analiticasStore'

export const useAnalitics = () => {
    const analiticsStore = useAnaliticsStore()
    const { ordenesTotales, ordenesItems } = storeToRefs(analiticsStore)

    const loadAnalitics = async sucursalId => {
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

        analiticsStore.loadOrdenesTotales(
            await getOrdenesByTotal(sucursalId, query)
        )
        analiticsStore.loadOrdenesItems(
            await getOrdenesByItem(sucursalId, query)
        )
    }

    const loadAnaliticsSpecific = async (sucursalId, mes) => {
        const actual = new Date()
        const year = actual.getFullYear()
        const month = mes

        const actualDateDesde = new Date(year, month, 1, 0, 0, 0)
        const actualDateHasta = new Date(year, month + 1, 0, 23, 59, 59)

        const actualDateDesdeUTC = actualDateDesde.toISOString()
        const actualDateHastaUTC = actualDateHasta.toISOString()

        const query = {
            desde: actualDateDesdeUTC,
            hasta: actualDateHastaUTC,
        }

        analiticsStore.loadOrdenesTotales(
            await getOrdenesByTotal(sucursalId, query)
        )
        analiticsStore.loadOrdenesItems(
            await getOrdenesByItem(sucursalId, query)
        )
    }

    const chartTotales = computed(() => totalDelDia())
    const chartItems = computed(() => totalItems())

    function totalDelDia() {
        const format = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            timeZoneName: undefined,
        }

        // Convertir fechas a fecha local
        ordenesTotales.value.forEach(obj => {
            const date = new Date(obj.createdAt)
            obj.localDate = date.toLocaleString('es-ES', format)
        })

        // Obtener totales por día
        const totalsByDay = ordenesTotales.value.reduce((acc, obj) => {
            const date = obj.localDate.slice(0, 2)
            acc[date] = parseFloat(((acc[date] || 0) + obj.total).toFixed(1))
            return acc
        }, {})

        // Ordenar el array y quitar los 0 que estan el los dias 01 -> 1
        const ordenado = Object.entries(totalsByDay).sort(([a], [b]) => a - b)
        const objeto = ordenado.reduce((obj, [clave, valor]) => {
            const nuevaClave = clave.replace(/^0+/, '')
            obj[nuevaClave] = valor
            return obj
        }, {})

        return objeto
    }

    function totalItems() {
        let groupedData = {}
        ordenesItems.value.forEach(d => {
            if (groupedData[d.name]) {
                groupedData[d.name] += d.cantidad
            } else {
                groupedData[d.name] = d.cantidad
            }
        })
        return groupedData
    }

    return {
        //!propiedades
        ordenesItems,
        ordenesTotales,

        chartTotales,
        chartItems,

        //!metodos
        loadAnalitics,
        loadAnaliticsSpecific,
    }
}
