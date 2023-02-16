import axios from 'axios'

//direccion de la api
axios.defaults.baseURL = 'http://localhost:3003'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
    'token'
)}`
