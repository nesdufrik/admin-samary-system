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
								<td class="align-middle fw-bold text-end">
									<span>{{ dataText(caja.total) }}</span>
								</td>
								<td class="align-middle text-end">
									<span
										role="button"
										@click="
											selectCaja(caja._id), $router.push(`/caja/${caja._id}`)
										"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="24"
											viewBox="0 -960 960 960"
											width="24"
											:style="[caja.active ? 'fill: #20c997' : 'fill: #495057']"
										>
											<path
												d="M680-320q25 0 42.5-17t17.5-43q0-25-17.5-42.5T680-440q-26 0-43 17.5T620-380q0 26 17 43t43 17ZM80-600l136-136q11-11 25.5-17.5T273-760h413q17 0 31.5 6.5T743-736l137 136H80Zm80 400q-34 0-57-23t-23-57v-240h800v240q0 34-23.5 57T800-200H160Z"
											/>
										</svg>
									</span>
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
	selectCaja,
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

function dataText(data) {
	if (data !== undefined) {
		return data === 0 ? '💤 Sin actividad' : `💲 ${currencyFormat(data)}`
	}
	return '🟢 Caja activa'
}

await loadCajasDate(
	sucursalData.value._id,
	fetchDateFrom.value,
	fetchDateTo.value
)
</script>
