import { defineStore } from 'pinia'

export const useProductosStore = defineStore('productos', {
    state: () => {
        return {
            categoriasArr: [],
            categoriaForm: {},
            categoriaEdit: {},
            productosArr: [],
            productoForm: {},
            actionState: false,
        }
    },
    actions: {
        loadCategorias(items) {
            this.categoriasArr = items
        },
        addCategoria(item) {
            this.categoriasArr.push({
                ...item,
            })
        },
        deleteCategoria(id) {
            this.categoriasArr = this.categoriasArr.filter(el => el._id !== id)
        },
        editCategoria(id) {
            const { _id, name, etiquetas } = this.categoriasArr.find(
                el => el._id == id
            )
            this.categoriaEdit = { _id, name, etiquetas: [...etiquetas] }
        },
        updtCategoria(item) {
            const indiceEl = this.categoriasArr.findIndex(
                el => el._id == item._id
            )
            this.categoriasArr[indiceEl] = item
        },
        loadProductos(items) {
            this.productosArr = items
        },
        addProducto(item) {
            this.productosArr.push({
                ...item,
            })
        },
        deleteProducto(id) {
            this.productosArr = this.productosArr.filter(el => el._id !== id)
        },
        editProducto(id) {
            this.productoForm = {
                ...this.productosArr.find(el => el._id == id),
            }
        },
        updtProducto(item) {
            const indiceEl = this.productosArr.findIndex(
                el => el._id == item._id
            )
            this.productosArr[indiceEl] = item
        },
    },
})
