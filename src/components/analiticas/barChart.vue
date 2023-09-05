<template>
	<apexchart height="300" :options="options" :series="series"></apexchart>
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
				text: 'Ganado (en Bs.)',
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
