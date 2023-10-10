<template>
	<BoxTitle :titulo="dateFormated(cajaSelected.createdAt)">
		<button
			class="text-success d-flex align-items-center bg-light border-0 gap-1"
		>
			<span class="material-icons-round">check_circle</span>
			<span class="fw-bold" @click="saveCajaModal.show()"
				><small>Guardar</small></span
			>
		</button>
		<button
			class="text-danger d-flex align-items-center bg-light border-0 gap-1"
			@click="cancelCajaOrden"
		>
			<span class="material-icons-round">cancel</span>
			<span class="fw-bold"><small>Cancelar</small></span>
		</button>
	</BoxTitle>

	<!-- ##Table Reporte Ordenes Realizadas -->
	<div id="reporteDiaParaImprimir" class="bg-light rounded-3 p-2">
		<div class="p-3">
			<div class="mt-4 table-responsive">
				<table class="table table-hover">
					<thead>
						<tr>
							<th>Nº</th>
							<th>Método</th>
							<th>Propina</th>
							<th>Subtotal</th>
							<th>Desc.</th>
							<th class="text-end">Total</th>
							<th class="text-end">Action</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="(orden, index) in cajaOrdenesArr" :key="orden._id">
							<tr>
								<td class="align-middle">
									{{ index + 1 }}
								</td>
								<td class="align-middle">
									{{ orden.payMetodo }} <br />
									<small class="text-secondary">{{
										dateFormated(orden.updatedAt)
									}}</small>
								</td>
								<td class="align-middle">
									<span class="text-secondary">{{
										currencyFormat(orden.propina)
									}}</span>
								</td>
								<td class="align-middle">
									<span class="text-secondary">{{
										currencyFormat(orden.subtotal)
									}}</span>
								</td>
								<td class="align-middle">
									<span class="text-secondary">{{
										currencyFormat(orden.desc)
									}}</span>
								</td>
								<td class="align-middle fw-semibold text-end">
									{{ currencyFormat(orden.total) }}
								</td>
								<td class="align-middle fw-semibold text-end">
									<span role="button" @click="actionEditar(orden._id)"
										>📝 <small>Editar</small></span
									>
								</td>
							</tr>
						</template>
						<tr class="bg-success bg-opacity-25">
							<td colspan="5" class="align-middle fw-bold">TOTAL</td>
							<td class="align-middle fw-bold text-end">
								{{ currencyFormat(totalCaja) }}
							</td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="mt-4 table-responsive-sm col-md-4">
				<table class="table table-hover">
					<thead>
						<tr>
							<th class="py-0">Detalle</th>
							<th class="text-end py-0">Total</th>
						</tr>
					</thead>
					<tbody>
						<template v-for="metodo in arrayTotales">
							<tr>
								<td class="py-0 text-success">
									{{ metodo.payMetodo }}
								</td>
								<td class="text-end py-0">
									{{ currencyFormat(metodo.total) }}
								</td>
							</tr>
						</template>
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<Teleport to="#modal">
		<SanearOrden />
		<SaveCaja />
	</Teleport>
</template>

<script setup>
import BoxTitle from '@/components/BoxTitle.vue'
import SanearOrden from '@/components/modalsOrden/SanearOrden.vue'
import { useCaja } from '../composables/useCaja'
import { useRoute, useRouter } from 'vue-router'
import { useOrdenes } from '@/composables/useOrdenes'
import { onMounted } from 'vue'
import { Modal } from 'bootstrap'
import SaveCaja from '@/components/modalsOrden/SaveCaja.vue'

const {
	cajaSelected,
	dateFormated,
	cajaOrdenesArr,
	arrayTotales,
	totalCaja,
	loadOrdenesOfCaja,
} = useCaja()

const { loadOrden } = useOrdenes()

const route = useRoute()
const router = useRouter()

let sanearOrdenModal
let saveCajaModal

onMounted(() => {
	sanearOrdenModal = new Modal('#sanearOrden')
	saveCajaModal = new Modal('#saveCaja')
})

function currencyFormat(mount) {
	return new Intl.NumberFormat('es-BO', {
		style: 'currency',
		currency: 'BOB',
	}).format(mount)
}

function cancelCajaOrden() {
	cajaSelected.value = {}
	router.back()
}

function actionEditar(id) {
	loadOrden(id)
	sanearOrdenModal.show()
}

await loadOrdenesOfCaja(route.params.id)
</script>
