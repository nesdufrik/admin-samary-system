<template>
    <div>
        <apexchart
            height="260"
            type="pie"
            :options="options"
            :series="series"
        ></apexchart>
    </div>
</template>

<script setup>
const options = {
    chart: {},
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
}
const series = [44, 55, 41, 17, 15]
</script>

<style lang="scss" scoped></style>
