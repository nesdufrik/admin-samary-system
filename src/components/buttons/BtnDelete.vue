<template>
	<button
		class="btn-modal btn-modal-right btn-modal-danger col-6 fw-bold m-0"
		:data-bs-target="`#${target}`"
		data-bs-toggle="modal"
		@click="$emit('actionDelete')"
	>
		Eliminar
	</button>
</template>
<script setup>
defineProps({
	target: String,
})
</script>
