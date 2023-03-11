import { createApp, markRaw } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue'
import pinia from './stores'
import router from './router'

import './axios'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'material-icons/iconfont/material-icons.css'

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

const app = createApp(App)

app.use(VueApexCharts)
app.use(pinia)
app.use(router)
app.use(BootstrapVue3)

app.mount('#app')
