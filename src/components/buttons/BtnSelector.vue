<template>
	<div class="d-flex flex-column">
		<div class="fs-5 fw-bold mb-2">{{ title }}:</div>
		<div class="dropdown bg-success-subtle rounded-3">
			<button
				type="button"
				class="button_select btn btn-outline-success btn-lg"
				data-bs-toggle="dropdown"
				:disabled="!elements"
			>
				<div class="d-flex align-items-center justify-content-center">
					<span class="fw-bold fs-4">{{ name }}</span>
					<span class="material-icons-round fs-1"> arrow_drop_down </span>
				</div>
			</button>
			<ul class="menuDrop dropdown-menu">
				<li v-for="element in elements" :key="element._id">
					<div class="dropdown-item d-flex fw-semibold me-5 align-items-center">
						<span
							role="button"
							class="w-100 me-1"
							@click="selectElement(element._id, element.name)"
							>{{ element.name }}</span
						>
						<span
							role="button"
							class="material-icons-round text-secondary me-1"
							data-bs-toggle="modal"
							:data-bs-target="`#${targetEdit}`"
							@click="editElement(element._id)"
							>build_circle</span
						>
						<span
							role="button"
							class="material-icons-round text-danger"
							data-bs-toggle="modal"
							:data-bs-target="`#${targetDelete}`"
							@click="editElement(element._id)"
							>remove_circle</span
						>
					</div>
				</li>
				<li><hr class="dropdown-divider" /></li>
				<li>
					<div
						role="button"
						class="dropdown-item d-flex justify-content-start align-items-center fw-bold text-success"
						data-bs-toggle="modal"
						:data-bs-target="`#${targetCreate}`"
					>
						<span class="material-icons-round me-1">add_circle</span>
						<span>Agregar</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	title: String,
	targetCreate: String,
	targetEdit: String,
	targetDelete: String,
	elements: Array,
	name: {
		type: String,
		default: 'Seleccionar',
	},
})

const emits = defineEmits(['select', 'edit'])

const editElement = (id) => emits('edit', id)
const selectElement = (id, name) => emits('select', id, name)
</script>
<style scoped>
.button_select {
	height: 110px;
	width: 250px;
}

.menuDrop {
	min-width: 100%;
}
</style>
