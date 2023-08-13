<template>
	<div
		class="bg-light rounded-3 border-start border-secondary-subtle border-4 p-3 mt-0 mb-0 h-100"
	>
		<h2 class="fw-bold">{{ titulo }}</h2>
		<slot></slot>
	</div>
</template>
<script setup>
defineProps({
	titulo: String,
})
</script>
