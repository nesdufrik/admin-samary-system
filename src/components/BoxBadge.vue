<template>
	<div
		class="d-inline-flex mb-1 me-1 p-1 fw-semibold text-success bg-success-subtle border border-success-subtle rounded-4"
	>
		<span class="align-middle">
			{{ nombreEtiqueta }}
		</span>
	</div>
</template>

<script setup>
const props = defineProps({
	nombreEtiqueta: String,
})
</script>
