<template>
	<Suspense>
		<template #default>
			<Home />
		</template>
		<template #fallback>
			<LoadingPage />
		</template>
	</Suspense>
</template>

<script setup>
import Home from './Home.vue'
import LoadingPage from './LoadingPage.vue'
</script>

<style scoped></style>
