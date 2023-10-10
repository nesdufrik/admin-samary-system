<template>
	<button
		type="submit"
		:form="formId"
		:class="[`btn-modal btn-modal-right btn-modal-${color} col-6 fw-bold m-0`]"
		:data-bs-target="`#${target}`"
		data-bs-toggle="modal"
		@click="$emit('actionNext')"
	>
		{{ name }}
	</button>
</template>
<script setup>
defineEmits(['actionNext'])
defineProps({
	name: {
		type: String,
		default: 'Siguiente',
	},
	color: {
		type: String,
		default: 'primary',
	},
	formId: String,
	target: String,
})
</script>
