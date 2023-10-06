<template>
	<div
		class="modal fade"
		:id="idModal"
		tabindex="-1"
		data-bs-backdrop="static"
		data-bs-keyboard="false"
		role="dialog"
	>
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-body text-center">
					<h2 class="modal-title fw-bold mb-4" id="exampleModalLabel">
						{{ titulo }}
					</h2>
					<slot></slot>
				</div>
				<div class="modal-footer p-0 mt-3">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	idModal: String,
	titulo: String,
})
</script>
<style scoped></style>
