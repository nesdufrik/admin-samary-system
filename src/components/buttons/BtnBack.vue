<template>
	<button
		type="button"
		class="btn-modal btn-modal-left btn-modal-secondary col-6 fw-bold m-0"
		data-bs-dismiss="modal"
		@click="actionBack"
	>
		Cerrar
	</button>
</template>
<script setup>
const emits = defineEmits(['actionBack'])
const actionBack = () => emits('actionBack')
</script>
