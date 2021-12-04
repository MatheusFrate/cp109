<template>
<div>
  <systemBar> </systemBar>
  <center> <h2> PRODUTOS ESGOTADOS </h2></center>
  <produtos/>
</div>
</template>
<script>
import produtos from "../components/produtos";
import systemBar from '../components/systemBar.vue'

export default {
  name: "productType4",

  computed: {
      myProducts () {
        return this.$store.state.outOfStock
      }
    },
    components: {
      produtos,
      systemBar
    },
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>
