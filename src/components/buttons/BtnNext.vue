<template>
	<button
		type="submit"
		:form="formId"
		class="btn-modal btn-modal-right btn-modal-primary col-6 fw-bold m-0"
		:data-bs-target="`#${target}`"
		data-bs-toggle="modal"
	>
		{{ name }}
	</button>
</template>
<script setup>
defineProps({
	name: {
		type: String,
		default: 'Siguiente',
	},
	formId: String,
	target: String,
})
</script>
