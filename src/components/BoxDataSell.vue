<template>
	<div
		class="bg-light rounded-3 border-start border-secondary-subtle border-4 p-3 mt-0 mb-0 d-flex justify-content-between fw-bold"
	>
		<div class="align-self-center">
			<img :src="urlImg" width="60" :alt="textAlt" />
		</div>
		<div class="align-self-center text-end">
			<h3 class="m-0 fw-bold">{{ total }}</h3>
			<small>{{ titulo }}</small>
		</div>
	</div>
</template>
<script setup>
defineProps({
	urlImg: String,
	textAlt: String,
	total: Number,
	titulo: String,
})
</script>
