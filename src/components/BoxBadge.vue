<template>
	<div
		class="d-inline-flex mb-1 me-1 px-2 py-1 fw-semibold text-success bg-success-subtle border border-success-subtle rounded-3"
	>
		<div class="d-flex align-items-center">
			<span class="align-middle">{{ nombreEtiqueta }}</span>
			<slot></slot>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	nombreEtiqueta: String,
})
</script>
