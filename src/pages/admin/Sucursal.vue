<template>
    <div class="container-fluid">
        <div>
            <h1>Empresa: <strong>name_empresa</strong></h1>
        </div>
        <div>Dashboard Sucursal: <strong>name_sucursal</strong></div>
        <RouterView />
    </div>
</template>

<script setup>
import { useNavBar } from '../../composables/useNavBar'

const { showNavBar, contentNavBar } = useNavBar()
showNavBar.value = true

contentNavBar()
</script>

<style scoped></style>
