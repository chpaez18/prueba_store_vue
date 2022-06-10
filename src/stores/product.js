import { defineStore, acceptHMRUpdate } from 'pinia';
import {generateID, sleep} from './../utils'
export const useProductStore = defineStore({
  id: 'product',
  state: () => ({
    products: [],
    transactions: [],
    invoice: {},
  }),
  persist: true,
  getters: {
    getProducts: (state) => state.products,
    getTransactions: (state) => state.transactions,
  },
  actions: {
    //creamos las acciones correspondientes
    async addProduct(data){
      this.products.push(data);
      await sleep(1000);
      
    },
    async deleteProduct(id){
      this.products = this.products.filter((product) => product.id !== id);
      await sleep(1000);
    },

    async buyProduct(id){
      const product = this.products.find((product) => product.id === id);
      product.stock = product.stock - 1
      let today = new Date().toLocaleDateString()

      var data = {
        id: generateID(),
        type: "buy",
        amount: product.precio - product.precio_descuento,
        status: "ok",
        date: today,
        currency: "USD",
        product: product
      }
      this.transactions.push(data)
      await sleep(1000);
    }

  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}