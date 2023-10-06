<template>
	<div class="card text-bg-light tarjeta h-100">
		<div class="card-body">
			<div>
				<h4 class="fw-semibold">
					{{ nombreCategoria }}
				</h4>
			</div>
			<slot></slot>
		</div>
		<slot name="buttons"></slot>
	</div>
</template>

<script setup>
defineProps({
	nombreCategoria: String,
})
</script>
