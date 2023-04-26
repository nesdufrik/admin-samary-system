<template>
    <div class="col">
        <div
            class="rounded-2 bd-callout bd-callout-left bd-callout-secondary p-3 mt-0 mb-0 d-flex justify-content-between fw-bold"
        >
            <div class="align-self-center">
                <img
                    src="../../assets/icons/menu.png"
                    width="60"
                    alt="menus_vendidos"
                />
            </div>
            <div class="align-self-center text-end">
                <h3 class="m-0 fw-bold">{{ totalOrdenes }}</h3>
                <small>Menús</small>
            </div>
        </div>
    </div>
    <div class="col">
        <div
            class="rounded-2 bd-callout bd-callout-left bd-callout-secondary p-3 mt-0 mb-0 d-flex justify-content-between fw-bold"
        >
            <div class="align-self-center">
                <img
                    src="../../assets/icons/money.png"
                    width="60"
                    alt="menus_vendidos"
                />
            </div>
            <div class="align-self-center text-end">
                <h3 class="m-0 fw-bold">{{ totalProfits }}</h3>
                <small>Beneficios</small>
            </div>
        </div>
    </div>
    <div class="col">
        <div
            class="rounded-2 bd-callout bd-callout-left bd-callout-secondary p-3 mt-0 mb-0 d-flex justify-content-between fw-bold"
        >
            <div class="align-self-center">
                <img
                    src="../../assets/icons/food.png"
                    width="60"
                    alt="menus_vendidos"
                />
            </div>
            <div class="align-self-center text-end">
                <h3 class="m-0 fw-bold">{{ totalItems }}</h3>
                <small>Productos</small>
            </div>
        </div>
    </div>
    <div class="col">
        <div
            class="rounded-2 bd-callout bd-callout-left bd-callout-secondary p-3 mt-0 mb-0 d-flex justify-content-between fw-bold"
        >
            <div class="align-self-center">
                <img
                    src="../../assets/icons/to-do-list.png"
                    width="60"
                    alt="menus_vendidos"
                />
            </div>
            <div class="align-self-center text-end">
                <h3 class="m-0 fw-bold">{{ totalOrdenes }}</h3>
                <small>Ordenes</small>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useAnalitics } from '../../composables/useAnaliticas'

const { chartTotales, chartItems, ordenesTotales } = useAnalitics()

const totalProfits = computed(() =>
    Object.values(chartTotales.value).reduce((acc, val) => acc + val, 0)
)

const totalItems = computed(() =>
    Object.values(chartItems.value).reduce((acc, val) => acc + val, 0)
)

const totalOrdenes = computed(() => ordenesTotales.value.length)
</script>

<style lang="scss" scoped></style>
