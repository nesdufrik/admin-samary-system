<template>
	<BoxTitle :titulo="monthYear">
		<select
			class="form-select border-0 fw-bold bg-light fs-5"
			v-model="fechaFormateada"
			@change="loadAnaliticsSpecific(sucursalData._id, fechaFormateada)"
		>
			<option v-for="(el, index) in month" :value="index">
				{{ el }}
			</option>
		</select>
	</BoxTitle>
	<div class="row row-cols-1 row-cols-md-2 g-3 mb-3">
		<div class="col">
			<BoxDashboard titulo="Ventas del Mes">
				<barChart :chartTotalArray="chartTotales" />
			</BoxDashboard>
		</div>
		<div class="col">
			<BoxDashboard titulo="Productos Vendidos">
				<pieChart :chartItemArray="chartItems" />
			</BoxDashboard>
		</div>
	</div>
	<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
		<div class="col">
			<BoxDataSell
				titulo="Menús"
				:url-img="menu"
				text-alt="menus_vendidos"
				:total="ordenesTotales.length"
			/>
		</div>
		<div class="col">
			<BoxDataSell
				titulo="Beneficios"
				:url-img="money"
				text-alt="menus_vendidos"
				:total="totalProfits"
			/>
		</div>
		<div class="col">
			<BoxDataSell
				titulo="Productos"
				:url-img="food"
				text-alt="menus_vendidos"
				:total="totalItems"
			/>
		</div>
		<div class="col">
			<BoxDataSell
				titulo="Ordenes"
				:url-img="toDo"
				text-alt="menus_vendidos"
				:total="ordenesTotales.length"
			/>
		</div>
	</div>
</template>

<script setup>
import money from '../assets/icons/money.png'
import menu from '../assets/icons/menu.png'
import food from '../assets/icons/food.png'
import toDo from '../assets/icons/to-do-list.png'
import BoxDashboard from '../components/BoxDashboard.vue'
import BoxDataSell from '../components/BoxDataSell.vue'
import BoxTitle from '../components/BoxTitle.vue'
import barChart from '../components/analiticas/barChart.vue'
import pieChart from '../components/analiticas/pieChart.vue'
import { ref, computed, watch } from 'vue'
import { useAnalitics } from '@/composables/useAnaliticas'
import { useSucursales } from '@/composables/useSucursales'

const {
	loadAnalitics,
	loadAnaliticsSpecific,
	chartTotales,
	chartItems,
	ordenesTotales,
} = useAnalitics()

const { sucursalData } = useSucursales()

const month = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiempre',
	'Octubre',
	'Noviembre',
	'Diciembre',
]
const actualDate = new Date()
const fechaFormateada = ref(actualDate.getMonth())
const monthYear = computed(() => {
	return `${month[fechaFormateada.value]} ${actualDate.getFullYear()}`
})

const totalProfits = computed(() =>
	Object.values(chartTotales.value).reduce((acc, val) => acc + val, 0)
)

const totalItems = computed(() =>
	Object.values(chartItems.value).reduce((acc, val) => acc + val, 0)
)

watch(sucursalData, async () => {
	await loadAnalitics(sucursalData.value._id)
})

await loadAnalitics(sucursalData.value._id)
</script>

<style scoped></style>
