<template>
	<div id="inputsClientesData" class="mt-4 row g-1">
		<div class="form-floating col-6">
			<input
				:value="ordenSelected.cliente?.name"
				type="text"
				class="form-control form-control-sm fw-bold"
				id="nameClient"
				disabled
			/>
			<label for="nameClient"><small>Nombre Completo</small></label>
		</div>
		<div class="form-floating col-6">
			<input
				:value="ordenSelected.cliente?.nit"
				type="text"
				class="form-control form-control-sm fw-bold"
				id="nitClient"
				disabled
			/>
			<label for="nitClient"><small>Numero de NIT</small></label>
		</div>
		<div class="form-floating col-3">
			<input
				:value="ordenSelected.desc"
				type="number"
				class="form-control form-control-sm fw-bold"
				id="descOrden"
				disabled
			/>
			<label for="descOrden"><small>Descuento</small></label>
		</div>
		<div class="form-floating col-3">
			<input
				:value="ordenSelected.propina"
				type="number"
				class="form-control form-control-sm fw-bold"
				id="propinaEmpleado"
				disabled
			/>
			<label for="propinaEmpleado"><small>Propina</small></label>
		</div>
		<div class="form-floating col-6">
			<select
				class="form-select fw-bold"
				style="font-size: 0.9rem"
				id="metodoOrden"
				v-model="ordenSelected.payMetodo"
				@change="resetMoneyClient"
			>
				<option value="" selected></option>
				<option v-for="metodo in sucursalData.metodosPago" :value="metodo">
					{{ metodo }}
				</option>
			</select>
			<label for="metodoOrden"><small>Metodo de pago</small></label>
		</div>
		<div class="col-6 d-flex flex-column justify-content-center p-1">
			<div class="d-flex fw-bold">
				<span><small>SUBTOTAL</small></span>
				<span class="ms-auto">{{ ordenSelected.subtotal }}</span>
			</div>
			<div class="d-flex text-danger">
				<span><small>DESC.</small></span>
				<span class="ms-auto"
					>-
					{{ ordenSelected.desc }}
				</span>
			</div>
		</div>
		<div class="form-floating col-6">
			<input
				v-model="ordenSelected.moneyClient"
				type="number"
				class="form-control form-control-sm fw-bold"
				id="pagoClient"
				:disabled="ordenSelected.payMetodo !== 'Efectivo'"
			/>
			<label for="pagoClient"><small>Pago en efectivo</small></label>
		</div>
		<div class="d-flex mt-4">
			<span><small>PROPINA</small></span>
			<span class="ms-auto">
				{{ ordenSelected.propina }}
			</span>
		</div>
		<div class="d-flex fw-bold">
			<span>TOTAL <small class="fw-normal">+ PROPINA</small></span>
			<span class="ms-auto">
				{{ montoPagar + ordenSelected.propina }}
			</span>
		</div>
		<div
			class="d-flex text-success fw-bold"
			v-if="ordenSelected.moneyClient && ordenSelected.payMetodo === 'Efectivo'"
		>
			<span><small>CAMBIO</small></span>
			<span class="ms-auto">{{
				ordenSelected.moneyClient - montoPagar - ordenSelected.propina
			}}</span>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useOrdenes } from '@/composables/useOrdenes'
import { useSucursales } from '@/composables/useSucursales'

const { ordenSelected } = useOrdenes()
const { sucursalData } = useSucursales()

const montoPagar = computed(() => {
	const monto =
		parseFloat(ordenSelected.value.subtotal) -
		parseFloat(ordenSelected.value.desc)

	ordenSelected.value.total = monto

	return monto
})

function resetMoneyClient() {
	if (ordenSelected.value.moneyClient) delete ordenSelected.value.moneyClient
}
</script>
