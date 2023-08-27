<template>
	<button
		v-if="!show"
		type="button"
		class="btn-modal btn-modal-block col fw-bold m-0"
		data-bs-dismiss="modal"
		:class="[action ? 'btn-modal-disabled' : 'btn-modal-secondary']"
		:disabled="action"
		@click="close"
	>
		Cerrar
	</button>
	<button
		v-else
		type="button"
		class="btn-modal btn-modal-block btn-modal-danger col fw-bold m-0"
		:data-bs-target="`#${target}`"
		data-bs-toggle="modal"
	>
		Regresar
	</button>
</template>
<script setup>
const props = defineProps({
	action: Boolean,
	target: String,
	show: {
		type: Boolean,
		default: false,
	},
})

const emits = defineEmits(['close'])
const close = () => emits('close')
</script>
