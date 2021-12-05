<template>
<div>
  <systemBar> </systemBar>
  <center> <h2> PRODUTOS ESGOTADOS </h2></center>
  <produtos productType=4 />
</div>
</template>
<script>
import produtos from "../components/produtos";
import systemBar from '../components/systemBar.vue'

export default {
  name: "productType4",

  computed: {
      myProducts () {
        return this.$store.state.moreProducts
      }
    },
    components: {
      produtos,
      systemBar
    },
  created() {
    if(this.$store.state.created == false)
    {
      this.$store.dispatch("getProducts");
      this.$store.commit("setCreated");
    }
  }
};
</script>
