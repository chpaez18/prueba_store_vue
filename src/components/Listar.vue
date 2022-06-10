<template>
    <div class="container">
        

        <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
        <tr class="text-left border-b-2 border-gray-300">
            <th class="px-4 py-3">Nombre del Producto</th>
            <th class="px-4 py-3">Descripcion</th>
            <th class="px-4 py-3">Tipo</th>
            <th class="px-4 py-3">Imagen</th>
            <th class="px-4 py-3">Precio</th>
            <th class="px-4 py-3">Cant. Stock</th>
            <th class="px-4 py-3">Acciones</th>
        </tr>
        
        <!-- each row -->
        <tr v-for="producto in productos" :key="producto.id" class="bg-gray-100 border-b border-gray-200">
            <td class="px-4 py-3"> {{producto.nombre_producto}} </td>
            <td class="px-4 py-3"> {{producto.descripcion}} </td>
            <td class="px-4 py-3"> {{producto.tipo}} </td>
            <td class="px-4 py-3"> {{producto.imagen}} </td>
            <td class="px-4 py-3"> {{producto.precio}} </td>
            <td class="px-4 py-3"> {{producto.stock}} </td>
            <td>
                <div class="btn-group" role="group" aria-label="" v-if="producto.stock != 0">
                    <button type="button" v-on:click="comprarProducto(producto.id)" class="bg-blue-500 text-gray-100 p-1 text-lg rounded-lg focus:border-4 border-blue-300">Comprar</button>
                </div>
                <div v-else >
                    Sin Stock!
                </div>
            </td>
        </tr> 

        </table>  
    </div>


</template>

<script>
import { useProductStore } from '../stores/product'
export default {
    
    data(){

        return {
            productos: []
        }
    },
    setup(){
        const productStore = useProductStore()

        return {
            productStore
        }
    },
    created:function(){

        this.getProducts();

    },

    methods:{

        //Retorna el listado de productos desde la store
        getProducts(){
            const productStore = useProductStore()
           this.productos = productStore.getProducts
        },

        comprarProducto(id){
           const productStore = useProductStore()
           productStore.buyProduct(id)
           this.getProducts()
        },

        

    }
}
</script>