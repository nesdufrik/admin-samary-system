<template>
	<!-- #Titulo -->
	<BoxTitle titulo="Fechas:">
		<input
			type="date"
			class="form-control border-0 bg-light fw-bold fs-6 me-2"
			v-model="fechaFormateadaDesde"
			name=""
			id=""
			@change="loadCajasDate($route.params.id, fechaDesdeSend, fechaHastaSend)"
		/>
		<input
			type="date"
			class="form-control border-0 bg-light fw-bold fs-6"
			v-model="fechaFormateadaHasta"
			name=""
			id=""
			@change="loadCajasDate($route.params.id, fechaDesdeSend, fechaHastaSend)"
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
									<small class="text-secondary">{{
										dateFormated(caja.createdAt)
									}}</small>
									<br />
									<div
										class="d-inline-flex mb-1 px-1 py-1 fw-bold bg-secondary bg-opacity-10 border border-dark border-opacity-10 rounded-2 me-1"
										v-for="metodo in caja.reporte"
									>
										{{ metodo.payMetodo }}:&nbsp;
										<span class="text-success">{{ metodo.total }} Bs.</span>
									</div>
								</td>
								<td class="align-middle text-end fs-5">
									<span v-if="caja.total === 0"> Vacío </span>
									<span v-else class="fw-bold"> {{ caja.total }} Bs. </span>
								</td>
								<td class="align-middle text-end">
									<span
										v-if="caja.total !== 0"
										class="material-icons-round text-secondary"
										>search</span
									>
									<span v-else class="material-icons-round text-danger"
										>delete</span
									>
								</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
			<div class="mt-3 fs-4 fw-bold">Total: {{ totalCajasDates }} Bs.</div>
			<div class="fs-5" v-for="(total, name) in totalCajasDatesMetodos">
				Total de
				<span class="fw-bold text-success">"{{ name }}"</span>:
				<span class="fw-bold">{{ total }}</span> Bs.
			</div>
		</div>
	</div>
</template>

<script setup>
import BoxTitle from '../components/BoxTitle.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCaja } from '../composables/useCaja'
const router = useRoute()
const {
	cajasArr,
	loadCajas,
	loadCajasDate,
	totalCajasDates,
	totalCajasDatesMetodos,
	dateFormated,
} = useCaja()

const fecha = new Date()

const fechaFormateadaDesde = ref(
	`${fecha.getFullYear()}-${(fecha.getMonth() + 1)
		.toString()
		.padStart(2, '0')}-01`
)
const fechaFormateadaHasta = ref(
	`${fecha.getFullYear()}-${(fecha.getMonth() + 1)
		.toString()
		.padStart(2, '0')}-${fecha.getDate().toString().padStart(2, '0')}`
)

const fechaDesdeSend = computed(() => {
	const fechaArray = fechaFormateadaDesde.value.split('-')
	const fechaSend = new Date(
		fechaArray[0],
		fechaArray[1] - 1,
		fechaArray[2],
		0,
		0,
		0
	)
	return fechaSend
})

const fechaHastaSend = computed(() => {
	const fechaArray = fechaFormateadaHasta.value.split('-')
	const fechaSend = new Date(
		fechaArray[0],
		fechaArray[1] - 1,
		fechaArray[2],
		23,
		59,
		59
	)
	return fechaSend
})

loadCajas(router.params.id)
</script>
<style scoped>
.tarjeta {
	position: relative;
}

.tarjeta__button {
	user-select: none;
	background-color: transparent;
	border: none;
	cursor: pointer;
	font-size: 1.4rem;
	position: absolute;
	right: 0.5rem;
	top: 0.5rem;
}

.tarjeta__link {
	user-select: none;
	background-color: transparent;
	border: none;
	cursor: pointer;
}

.tarjeta__button--edit {
	margin-right: 2rem;
}

.tarjeta__button--edit2 {
	margin-right: 4rem;
}
</style>
