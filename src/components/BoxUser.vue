<template>
	<div class="user-card h-100">
		<div class="user-image">
			<img :src="urlAvatar" :alt="nombreCompleto" />
		</div>
		<div class="d-flex flex-column text-start text-sm-center flex-wrap">
			<h2 class="fw-bold fs-3">
				{{ nombreCompleto }}
			</h2>
			<span class="fs-5">{{ cargo }}</span>
			<small class="text-secondary">{{ email }}</small>
		</div>
	</div>
	<slot></slot>
</template>
<script setup>
defineProps({
	urlAvatar: String,
	nombreCompleto: String,
	cargo: String,
	email: String,
})
</script>
<style scoped>
.user-card {
	background-color: #f8f9fa;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	border: 1px solid #ccc;
	border-radius: 10px;
}

.user-image {
	width: 100px;
	height: 100px;
	overflow: hidden;
	margin-bottom: 15px;
}

.user-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media only screen and (max-width: 767px) {
	.user-card {
		justify-content: flex-start;
		text-align: left;
		flex-direction: row;
	}

	.user-image {
		width: 80px;
		height: 80px;
		margin-right: 8px;
		margin-bottom: 0;
	}

	.user-description {
		text-align: left;
		margin-right: 10px;
		max-width: calc(100% - 120px);
		flex-wrap: wrap;
	}

	.user-name {
		font-size: 20px;
	}

	.user-job,
	.user-username {
		font-size: 16px;
		margin: 0;
	}
}
</style>
