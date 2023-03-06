<template>
    <div>
        <apexchart
            height="260"
            type="bar"
            :options="options"
            :series="series"
        ></apexchart>
    </div>
</template>

<script setup>
const options = {
    chart: {
        width: '380',
        id: 'vuechart-example',
    },
    xaxis: {
        categories: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
        ],
    },
}
const series = [
    {
        name: 'Ventas',
        data: [40, 40, 79, 140, 49, 90, 70, 91, 50],
    },
]
</script>

<style lang="scss" scoped></style>
