import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{Typeid: 1, description: 'product 1', price: 1, route: '/'},
               {Typeid: 1, description: 'product 2', price: 2, route: '/'},
               {Typeid: 2, description: 'product 3', price: 3, route: 'ProductType2'},
               {Typeid: 2, description: 'product 4', price: 4, route: 'ProductType2'},
               {Typeid: 3, description: 'product 5', price: 5, route: 'ProductType3'},
               {Typeid: 3, description: 'product 6', price: 6, route: 'ProductType3'},
               {Typeid: 4, description: 'product 7', price: 7, route: 'ProductType4'},
               {Typeid: 4, description: 'product 8', price: 8, route: 'ProductType4'}],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
