<template>
	<div id="ordenDataClient" class="text-start d-flex flex-column">
		<div class="mb-2">
			<div v-if="ordenSelected.cliente?.name">
				<span>Cliente: </span>
				<span class="fw-bold">{{ ordenSelected.cliente?.name }}</span>
			</div>
			<div>
				<span>Mesa: </span>
				<span class="fw-bold">{{ ordenSelected.mesa }}</span>
			</div>
			<div v-if="ordenSelected.cliente?.nota">
				<span>Habitación: </span>
				<span class="fw-bold">
					{{ ordenSelected.cliente?.nota }}
				</span>
			</div>
		</div>
		<div class="d-flex mb-2" v-for="(item, index) in ordenSelected.pedido">
			<span class="me-3">{{ item.cantidad }}</span>
			<span>{{ ordenCompleta(item) }}</span>
			<span class="ms-auto fw-bold">{{ item.importe }}</span>
		</div>
	</div>
</template>

<script setup>
defineProps({
	ordenSelected: {
		type: Object,
		default: {
			cliente: {},
			mesa: '0',
			pedido: [],
		},
	},
})

function ordenCompleta(item) {
	if (item.nota) {
		return `${item.name} [${item.nota}]`
	}
	return item.name
}
</script>
