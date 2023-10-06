<template>
	<!-- #Titulo -->
	<BoxTitle titulo="Fechas:">
		<input
			type="date"
			class="form-control border-0 bg-light fw-bold fs-6 me-2"
			v-model="dateFrom"
			name=""
			id=""
			@change="loadCajasDate(sucursalData._id, fetchDateFrom, fetchDateTo)"
		/>
		<input
			type="date"
			class="form-control border-0 bg-light fw-bold fs-6"
			v-model="dateTo"
			name=""
			id=""
			@change="loadCajasDate(sucursalData._id, fetchDateFrom, fetchDateTo)"
		/>
	</BoxTitle>

	<!-- ##Contenido -->
	<div id="reporteDiaParaImprimir" class="bg-light rounded-3 p-2">
		<div class="p-3">
			<div class="text-center">
				<h2 class="fw-bold">Reporte de Cajas</h2>
			</div>
			<div class="table-responsive">
				<table class="table table-light table-hover">
					<thead>
						<tr>
							<th class="text-center">Nº</th>
							<th>Detalle</th>
							<th class="text-end">Total</th>
							<th class="text-end"></th>
						</tr>
					</thead>
					<tbody>
						<template v-for="(caja, index) in cajasArr" :key="caja._id">
							<tr>
								<td class="align-middle text-center">
									<strong>{{ index + 1 }}</strong>
								</td>
								<td class="align-middle">
									<small class="text-secondary fw-light">{{
										dateFormated(caja.createdAt)
									}}</small>
									<br />
									<div
										class="d-inline-flex p-0 mb-1 mb-md-0 border-bottom border-3 border-success-subtle me-2"
										v-for="metodo in caja.reporte"
									>
										<span
											>{{ metodo.payMetodo }}:
											<span class="text-success">
												{{ currencyFormat(metodo.total) }}</span
											></span
										>
									</div>
								</td>
								<td class="align-middle fw-bold text-end fs-6">
									<span v-if="caja.total === 0"> Sin actividad </span>
									<span v-else> {{ currencyFormat(caja.total) }}</span>
								</td>
								<td class="align-middle text-end">
									<span
										v-if="caja.total !== 0"
										role="button"
										class="material-icons-round text-secondary"
										>search</span
									>
									<span v-else></span>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
			<div class="mt-3 fs-4 fw-bold">
				Total:
				{{ currencyFormat(totalCajasDates) }}
			</div>
			<div class="fs-5" v-for="(total, name) in totalCajasDatesMetodos">
				Total de
				<span class="fw-bold text-success">"{{ name }}"</span>:
				<span class="fw-bold">{{ currencyFormat(total) }}</span>
			</div>
		</div>
	</div>
</template>

<script setup>
import BoxTitle from '@/components/BoxTitle.vue'
import { ref, computed, watch } from 'vue'
import { useCaja } from '@/composables/useCaja'
import { useSucursales } from '@/composables/useSucursales'
const { sucursalData } = useSucursales()
const {
	cajasArr,
	totalCajasDates,
	totalCajasDatesMetodos,
	dateFormated,
	loadCajasDate,
} = useCaja()

const actualDate = new Date()
const actualYear = actualDate.toLocaleString('default', { year: 'numeric' })
const actualMonth = actualDate.toLocaleString('default', { month: '2-digit' })
const actualDay = actualDate.toLocaleString('default', { day: '2-digit' })

const dateFrom = ref(`${actualYear}-${actualMonth}-01`)
const dateTo = ref(`${actualYear}-${actualMonth}-${actualDay}`)

const fetchDateFrom = computed(() => new Date(`${dateFrom.value}T00:00:00`))
const fetchDateTo = computed(() => new Date(`${dateTo.value}T23:59:59`))

function currencyFormat(mount) {
	return new Intl.NumberFormat('es-BO', {
		style: 'currency',
		currency: 'BOB',
	}).format(mount)
}

watch(sucursalData, async () => {
	await loadCajasDate(
		sucursalData.value._id,
		fetchDateFrom.value,
		fetchDateTo.value
	)
})

await loadCajasDate(
	sucursalData.value._id,
	fetchDateFrom.value,
	fetchDateTo.value
)
</script>
