<template>
  <div>
    <v-card min-height="81vh" height="100vh">
      <navigation />
      <v-container fill-height="10vh">
        <v-card class="mx-auto" max-width="1000" max-height="80vh" color="grey">
          <v-container fluid>
            <v-row dense >
              <v-col v-for="(n, i) in compare === false ? outOfStock : getProductbyType " :key="i" cols="12" sm="6" no-gutters>
                <v-card width="500" height="20vh">
                  <v-img>
                    <v-card-title v-text="n.name"> </v-card-title>
                    <v-card-subtitle> Preço: R${{ n.price }} </v-card-subtitle>
                    <v-card-text> quantidade disponivel: {{n.amount}}</v-card-text>
                  </v-img>

                  <v-card-actions>
                    <v-btn outlined rounded text v-if="n.amount >= 1" @click="comprar(n.Id)"> Comprar  </v-btn>
                    <v-btn outlined rounded text v-else > Indisponivel</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    <Footer />
    <bottomNavigation />
    </v-card>
  </div>
</template>


<script>
import systemBar from "../components/systemBar";
import navigation from "../components/navigation";
import Footer from "../components/Footer";
import bottomNavigation from "../components/bottomNavigation";

export default {
  name: "produtos",

  props: {
    itemId: Number,
    compare: Boolean,
  },

  methods: {
    comprar (id) {
      this.$store.commit('ReduceAmount', id)
    },
  },
  computed: {
    myProducts () {
      return this.$store.state.products
    },
    outOfStock () {
      return this.$store.state.outOfStock
    },
    amount() {
      return this.$store.getters.getLowAmount
    },
    getProductbyType() {
      return this.$store.getters.getProductbyType(this.itemId);
    }
  },
  components: {
    systemBar,
    Footer,
    navigation,
    bottomNavigation,
  },
};
</script>