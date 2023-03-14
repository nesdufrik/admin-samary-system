import { defineStore } from 'pinia'

export const useNavBarStore = defineStore('navbar', {
    state: () => {
        return {
            showNavBar: false,
            itemsNavBar: [],
        }
    },
    actions: {
        loadNavBar(data) {
            this.itemsNavBar = data
        },
    },
})
