import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{Id:1, Typeid: 1, name: 'produto 1', price: 1, amount: 5,bought:2, route: '/'},
               {Id:2, Typeid: 1, name: 'produto 2', price: 2, amount: 4,bought:7,  route: '/'},
               {Id:3, Typeid: 1, name: 'produto 3', price: 3, amount: 7,bought:8,  route: '/'},
               {Id:4, Typeid: 1, name: 'produto 4', price: 4, amount: 1,bought:4,  route: '/'},
               {Id:5, Typeid: 2, name: 'produto 5', price: 5, amount: 3,bought:5,  route: 'ProductType2'},
               {Id:6, Typeid: 2, name: 'produto 6', price: 6, amount: 4,bought:1,  route: 'ProductType2'},
               {Id:7, Typeid: 2, name: 'produto 7', price: 7, amount: 6,bought:3,  route: 'ProductType2'},
               {Id:8, Typeid: 2, name: 'produto 8', price: 8, amount: 2,bought:6,  route: 'ProductType2'}],
    moreProducts: [],
    created: false
  },
  mutations: {
    ReduceAmount(state, payload){
      const id = payload.id;
      const productType = payload.productType
      if(productType < 3){
        state.products[id-1].amount--;
        state.products[id-1].bought++;
        return state.products[id-1]
      } else {
        state.moreProducts.find((r, index) => {if (r.Id == id) {
          console.log(r.name);
          state.moreProducts[index].amount--;
          state.moreProducts[index].bought++;
          console.log(state.moreProducts[index].name);

          return state.moreProducts[index]
        }})
      }
    },
    SetmoreProducts(state, products) {
      products.forEach(product => {
        state.moreProducts.push({
          Id: product.id + 8,
          name: product.name,
          price: product.price,
          amount: 30,
          bought: 0
        })
      });
    },
    setCreated(state){
      state.created = true;
    }
  },
  actions: {
    getProducts({ commit }) {
      axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyebrow&price_less_than=7')
          .then(response => {
              commit('SetmoreProducts', response.data)
          }).catch(err => {
            console.log(err);
          })
  }
  },
  getters: {
    getProductbyType: (state) => (id) => {
      const products = [];
      if(id == 1 || id == 2 ){
        state.products.forEach((product) => {
          if(product.Typeid == id && product.amount > 0)
          products.push(product);
        })      
      } else if (id == 3) {
        state.moreProducts.forEach((product) => {
          if(product.amount > 0)
          products.push(product)
        })
      } else if (id == 4) {
        state.products.forEach((product) => {
          if(product.amount == 0)
            products.push(product)
        })
        state.moreProducts.forEach((product) => {
          if(product.amount == 0)
            products.push(product)
        })
      }
      return products;
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
      state.moreProducts.forEach((r) => {
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
