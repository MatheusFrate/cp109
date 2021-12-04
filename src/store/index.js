import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{Id:1, Typeid: 1, name: 'produto 1', price: 1, amount: 5,bought:2, route: '/'},
               {Id:2, Typeid: 1, name: 'produto 2', price: 2, amount: 4,bought:7,  route: '/'},
               {Id:3, Typeid: 2, name: 'produto 3', price: 3, amount: 7,bought:8,  route: 'ProductType2'},
               {Id:4, Typeid: 2, name: 'produto 4', price: 4, amount: 1,bought:4,  route: 'ProductType2'},
               {Id:5, Typeid: 2, name: 'produto 5', price: 5, amount: 3,bought:5,  route: 'ProductType3'},
               {Id:6, Typeid: 3, name: 'produto 6', price: 6, amount: 4,bought:1,  route: 'ProductType3'},
               {Id:7, Typeid: 3, name: 'produto 7', price: 7, amount: 6,bought:3,  route: 'ProductType4'},
               {Id:8, Typeid: 3, name: 'produto 8', price: 8, amount: 2,bought:6,  route: 'ProductType4'}],
    outOfStock: [],
  },
  mutations: {
    ReduceAmount(state, id){
      state.products[id-1].amount--;
      state.products[id-1].bought++;
      return state.products[id-1]
    },
    SetOutOfStock(state, products) {
      state.outOfStock = products
  }
  },
  actions: {
    getPosts({ commit }) {
      axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow&price_less_than=7')
          .then(response => {
              commit('SetOutOfStock', response.data)
          }).catch(err => {
            console.log(err);
          })
  }
  },
  getters: {
    getProductbyType: (state) => (id) => {
      const productslowAmount = [];
      state.products.forEach((r) => {
        if(r.Typeid == id){
          productslowAmount.push(r);
        }
      })      
      return productslowAmount;
    },
    getMostBought(state){
      let MostBoughtProduct ;
      state.products.forEach((r) => {
        if (!MostBoughtProduct){
          MostBoughtProduct = r
        }
        if(r.bought > MostBoughtProduct.bought){
          MostBoughtProduct = r;
        }
      })      
      return MostBoughtProduct;
    }
  },
  modules: {
  }
})
