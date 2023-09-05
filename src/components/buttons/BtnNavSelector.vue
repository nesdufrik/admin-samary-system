<template>
	<div class="d-flex flex-row">
		<div class="text-secondary">
			<small>{{ title }}:</small>
		</div>
		<div class="dropdown w-100">
			<button
				class="btn btn-outline-success d-flex align-items-center py-0 px-2 border-0"
				data-bs-toggle="dropdown"
				:disabled="!elements"
			>
				<span class="text-container fw-semibold fs-6">{{ name }}</span>
				<span class="material-icons-round"> arrow_drop_down </span>
			</button>
			<ul class="dropdown-menu">
				<li
					v-for="element in elements"
					:key="element._id"
					class="text-success fw-semibold"
				>
					<div class="d-flex">
						<span
							role="button"
							class="me-2 w-100"
							@click="selectElement(element._id, element.name)"
							>{{ element.name }}</span
						>
						<span
							role="button"
							class="material-icons-round text-secondary ms-auto"
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
				<li class="text-success">
					<div
						role="button"
						class="d-flex justify-content-start align-items-center fw-bold"
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
.text-container {
	max-width: 148px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

li {
	padding-inline: 0.5rem;
	min-width: 100%;
	white-space: nowrap;
}
li:hover {
	background-color: #d1e7dd;
}
li:active {
	color: #f8f9fa !important;
	background-color: #198754;
}
</style>
