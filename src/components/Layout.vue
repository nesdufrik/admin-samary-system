<template>
	<header class="headerView">
		<slot name="header"></slot>
	</header>
	<div class="contenedor d-flex align-items-start flex-column">
		<main class="mainView container-xl">
			<slot name="main"></slot>
		</main>
		<footer class="footerView">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>
<style scoped>
.contenedor {
	height: 90vh;
}
.mainView {
	margin-bottom: auto;
}
.headerView {
	height: 10vh;
}
.footerView {
	width: 100%;
	display: flex;
	justify-content: end;
	padding-right: 10px;
	margin-top: 10px;
}
</style>
