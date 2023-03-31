<template>
    <div
        class="rounded-2 bd-callout bd-callout-left bd-callout-secondary p-3 mt-0 mb-0 h-100"
    >
        <h2 class="fw-bold">Ganancias del Mes</h2>
        <apexchart
            height="300"
            type="bar"
            :options="options"
            :series="series"
        ></apexchart>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    chartTotalArray: Object,
})

const options = computed(() => {
    return {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        yaxis: {
            title: {
                text: 'Ganado (en BO)',
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return 'Bs. ' + val
                },
            },
        },
        chart: {
            type: 'bar',
            id: 'vuechart-example',
            fontFamily: 'Nunito',
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: Object.keys(props.chartTotalArray),
        },
    }
})

const series = computed(() => {
    return [
        {
            name: 'Estadistica',
            data: Object.values(props.chartTotalArray),
        },
    ]
})
</script>

<style lang="scss" scoped></style>
