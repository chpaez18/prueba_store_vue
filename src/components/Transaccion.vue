<template>
    <div class="container">
        

        <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
        <tr class="text-left border-b-2 border-gray-300">
            <th class="px-4 py-3">Tipo</th>
            <th class="px-4 py-3">Monto</th>
            <th class="px-4 py-3">Moneda</th>
            <th class="px-4 py-3">Fecha</th>
            <th class="px-4 py-3">Estatus</th>
            <th class="px-4 py-3">Acciones</th>
        </tr>
        
        <!-- each row -->
        <tr v-for="transaccion in transacciones" :key="transaccion.id" class="bg-gray-100 border-b border-gray-200">
            <td class="px-4 py-3"> {{transaccion.type}} </td>
            <td class="px-4 py-3"> {{transaccion.amount}} </td>
            <td class="px-4 py-3"> {{transaccion.currency}} </td>
            <td class="px-4 py-3"> {{transaccion.date}} </td>
            <td class="px-4 py-3"> {{transaccion.status}} </td>
            <td>
                <div class="btn-group" role="group" aria-label="">
                    <button type="button" v-on:click="viewInvoice(transaccion.id)" class="bg-blue-500 text-gray-100 p-1 text-lg rounded-lg focus:border-4 border-blue-300">Ver Factura</button>
                </div>
            </td>
        </tr> 

        </table>  

        <br>

        <div class="md:rounded-b-md  bg-white" v-if="factura != null">
            <div class="p-9 border-b border-gray-200">
                
                <div class="space-y-6">
                    <div class="flex justify-between items-top">
                        <div class="space-y-4">
                            <div>
                            <p class="font-bold text-lg"> Factura </p>
                            <p> Prueba Tecnica </p>
                            </div>
                            <div>
                            <p class="font-medium text-sm text-gray-400"> Factura N° </p>
                            <p> {{ factura.id }} </p>
                            </div>

                            <div>
                            <p class="font-medium text-sm text-gray-400"> Fecha </p>
                            <p> {{ factura.date }} </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            
            <table class="w-full divide-y divide-gray-200 text-sm">
            <thead>
                <tr>
                <th scope="col" class="px-9 py-4 text-left font-semibold text-gray-400"> Producto </th>
                <th scope="col" class="py-3 text-left font-semibold text-gray-400"> Precio </th>
                <th scope="col" class="py-3 text-left font-semibold text-gray-400"> Descuento </th>
                <th scope="col" class="py-3 text-left font-semibold text-gray-400"> Cantidad </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr>
                <td class="px-9 py-5 whitespace-nowrap space-x-1 flex items-center">
                    <div>
                    <p> {{ factura.product.nombre_producto }} </p>
                    <p class="text-sm text-gray-400"> {{ factura.product.descripcion }} </p>
                    </div>
                </td>
                <td class="whitespace-nowrap text-gray-600 truncate">{{ factura.product.precio }}.00$</td>
                <td class="whitespace-nowrap text-gray-600 truncate"> {{ factura.product.precio_descuento }}.00$ </td>
                <td class="whitespace-nowrap text-gray-600 truncate"> 1 </td>
                </tr>
            </tbody>
            </table>
            <div class="p-9 border-b border-gray-200">
                <div class="space-y-3">
                    <div class="flex justify-between">
                        <div>
                            <p class="text-gray-500 text-sm"> Total </p>
                        </div>
                        <p class="text-gray-500 text-sm"> {{ factura.amount }}.00$ </p>
                    </div>
                </div>
            </div>
            <div class="p-9 border-b border-gray-200">
                    <p class="font-medium text-sm text-gray-400"> Nota </p>
                    <p class="text-sm"> Gracias por su compra!. </p>
            </div>
        </div>
    </div>


</template>

<script>
import { useProductStore } from '../stores/product'
export default {
    
    data(){

        return {
            transacciones: [],
            factura: null
        }
    },
    setup(){
        const productStore = useProductStore()

        return {
            productStore
        }
    },
    created:function(){

        this.getTransactions();

    },

    methods:{

        //Retorna el listado de transacciones desde la store
        getTransactions(){
            const productStore = useProductStore()
           this.transacciones = productStore.getTransactions
        },

        viewInvoice(id){
            const productStore = useProductStore()
           this.factura = productStore.getTransactions
           this.factura = this.factura.find((transaction) => transaction.id === id)
        }
        

    }
}
</script>