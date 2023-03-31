<template>
    <div
        class="rounded-2 bd-callout bd-callout-left bd-callout-secondary p-3 mt-0 mb-0 h-100"
    >
        <h2 class="fw-bold">Productos Vendidos</h2>
        <apexchart
            height="300"
            type="donut"
            :options="options"
            :series="series"
        ></apexchart>
    </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
    chartItemArray: Object,
})

const options = computed(() => {
    return {
        plotOptions: {
            pie: {
                expandOnClick: false,
                donut: {
                    size: '70%',
                    labels: {
                        show: true,
                        value: {
                            show: true,
                            fontSize: '18px',
                            fontWeight: 600,
                        },
                        total: {
                            show: true,
                            fontSize: '22px',
                            fontWeight: 600,
                            color: '#373d3f',
                        },
                    },
                },
            },
        },
        dataLabels: {
            enabled: false,
            dropShadow: {
                enabled: false,
            },
        },
        legend: {
            show: false,
            position: 'bottom',
        },
        chart: {
            fontFamily: 'Nunito',
        },
        labels: Object.keys(props.chartItemArray),
    }
})

const series = computed(() => {
    return Object.values(props.chartItemArray)
})
</script>

<style lang="scss" scoped></style>
